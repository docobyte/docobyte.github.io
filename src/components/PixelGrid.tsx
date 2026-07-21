import { useEffect, useRef, useState } from 'react';

interface PixelGridProps {
  /** Color used for the active cursor highlight. Defaults to brand green. */
  accent?: string;
  /** Dot size in px. */
  dotSize?: number;
  /** Spacing between dots in px. */
  spacing?: number;
  /** Radius around cursor that lights up dots. */
  radius?: number;
  /** Optional class for container sizing. */
  className?: string;
}

export default function PixelGrid({
  accent = '#10b981',
  dotSize = 2,
  spacing = 24,
  radius = 80,
  className = 'absolute top-0 left-0 -z-10',
}: PixelGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [accentColor, setAccentColor] = useState(accent);

  // Allow external code to change the accent via a custom event.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string | { color: string }>).detail;
      const color = typeof detail === 'string' ? detail : detail?.color;
      if (color) setAccentColor(color);
    };
    window.addEventListener('pixelgrid-accent', handler);
    return () => window.removeEventListener('pixelgrid-accent', handler);
  }, []);

  useEffect(() => {
    setAccentColor(accent);
  }, [accent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dots: { x: number; y: number; brightness: number }[] = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      const width = Math.max(document.documentElement.scrollWidth, window.innerWidth);
      const height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      dots.length = 0;
      sparks.length = 0;
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          dots.push({ x, y, brightness: 0 });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    interface Spark { x: number; y: number; brightness: number; }
    const sparks: Spark[] = [];

    const spawnSpark = () => {
      if (!dots.length) return;
      const idx = Math.floor(Math.random() * dots.length);
      const { x, y } = dots[idx];
      const b = 0.3 + Math.random() * 0.7;
      sparks.push({ x, y, brightness: b });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dist = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);

        if (dist < radius) {
          dot.brightness = Math.max(dot.brightness, 1 - dist / radius);
        } else {
          dot.brightness *= 0.96;
        }

        const alpha = 0.12 + dot.brightness * 0.88;
        ctx.fillStyle = hexToRgba(accentColor, alpha);
        ctx.fillRect(dot.x - dotSize / 2, dot.y - dotSize / 2, dotSize, dotSize);
      }

      // Occasional pop sparks (blitz style)
      if (sparks.length < 8 && Math.random() < 0.03) spawnSpark();

      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        const alpha = spark.brightness;
        const r = dotSize * (1 + spark.brightness * 3);

        // outer glow
        ctx.fillStyle = hexToRgba(accentColor, alpha * 0.25);
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, r * 3, 0, Math.PI * 2);
        ctx.fill();

        // core
        ctx.fillStyle = hexToRgba(accentColor, alpha);
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, r * 1.2, 0, Math.PI * 2);
        ctx.fill();

        spark.brightness -= 0.02;
        if (spark.brightness <= 0) sparks.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, dotSize, spacing, radius]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} pointer-events-none`}
      aria-hidden="true"
    />
  );
}

function hexToRgba(hex: string, alpha: number) {
  const sanitized = hex.replace('#', '');
  const bigint = parseInt(sanitized.length === 3 ? sanitized.split('').map(c => c + c).join('') : sanitized, 16);
  if (Number.isNaN(bigint)) return `rgba(16,185,129,${alpha})`;
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

/** Convenience helper to broadcast a new accent color to all PixelGrid instances. */
export function setPixelGridAccent(color: string) {
  window.dispatchEvent(new CustomEvent('pixelgrid-accent', { detail: color }));
}
