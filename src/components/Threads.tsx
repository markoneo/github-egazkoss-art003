import { useEffect, useRef } from 'react';

interface ThreadsProps {
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

export default function Threads({
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = true,
}: ThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (enableMouseInteraction) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    const drawThreads = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const lines = 20;
      const spacing = canvas.height / lines;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + (i / lines) * 0.15})`;
        ctx.lineWidth = 1.5;

        const baseY = i * spacing;

        for (let x = 0; x <= canvas.width; x += 5) {
          const waveOffset =
            Math.sin((x * 0.01 + time + i * 0.5) * amplitude) * 30;

          let mouseInfluence = 0;
          if (enableMouseInteraction) {
            const dx = x - mouseRef.current.x;
            const dy = baseY - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            mouseInfluence = Math.max(0, (150 - dist) / 150) * 40 * distance;
          }

          const y = baseY + waveOffset + mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(drawThreads);
    };

    drawThreads();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (enableMouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [amplitude, distance, enableMouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.4 }}
    />
  );
}
