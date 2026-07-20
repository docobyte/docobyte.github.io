export default function MatrixBackground() {
  const canvasRef = useCanvasMatrix();
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-20"
      aria-hidden="true"
    />
  );
}

import { useEffect, useRef } from 'react';

function useCanvasMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const fontSize = 14;
    const chars = '01';
    let columns: number[] = [];
    let animationId = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const colCount = Math.ceil(width / fontSize);
      columns = Array.from({ length: colCount }, () => Math.random() * (height / fontSize));
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#10b981';
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;
        ctx.fillText(char, x, y);
        if (y > height && Math.random() > 0.975) {
          columns[i] = 0;
        } else {
          columns[i] += 1;
        }
      }
      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return canvasRef;
}
