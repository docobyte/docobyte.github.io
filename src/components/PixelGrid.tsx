import { useEffect, useRef } from 'react';

export default function PixelGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dots: { x: number; y: number; brightness: number }[] = [];
    const spacing = 16;
    const dotSize = 2;
    const mouse = { x: -100, y: -100 };

    const resize = () => {
      // Fix size to match container to prevent blurring
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || 300;
      canvas.height = rect?.height || 150;

      dots.length = 0;
      for (let x = 8; x < canvas.width; x += spacing) {
        for (let y = 8; y < canvas.height; y += spacing) {
          dots.push({ x, y, brightness: 0 });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -100;
      mouse.y = -100;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dist = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);

        if (dist < 60) {
          dot.brightness = Math.max(dot.brightness, 1 - dist / 60);
        } else {
          dot.brightness *= 0.94; // Decay
        }

        // Base opacity is 0.15, peaks at 1.0 when brightness is high
        ctx.fillStyle = `rgba(16, 185, 129, ${0.15 + dot.brightness * 0.85})`;
        ctx.fillRect(dot.x - dotSize / 2, dot.y - dotSize / 2, dotSize, dotSize);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block border border-zinc-800 bg-zinc-950/40 rounded-md cursor-crosshair"
      aria-hidden="true"
    />
  );
}