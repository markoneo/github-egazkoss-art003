import { useEffect, useRef } from 'react';

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: 'forward' | 'reverse';
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

export default function Plasma({
  color = '#ff6b35',
  speed = 0.6,
  direction = 'forward',
  scale = 1.1,
  opacity = 0.8,
  mouseInteractive = true,
}: PlasmaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 255, g: 107, b: 53 };
    };

    const rgb = hexToRgb(color);

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      time += speed * (direction === 'forward' ? 0.01 : -0.01);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const nx = (x / width - 0.5) * scale;
          const ny = (y / height - 0.5) * scale;

          const mouseDist = mouseInteractive
            ? Math.sqrt(
                Math.pow(x / width - mouseX, 2) +
                  Math.pow(y / height - mouseY, 2)
              )
            : 0;

          const value =
            Math.sin(nx * 10 + time) +
            Math.sin(ny * 10 + time) +
            Math.sin((nx + ny) * 10 + time) +
            Math.sin(Math.sqrt(nx * nx + ny * ny) * 10 + time) +
            (mouseInteractive ? Math.sin(mouseDist * 20 - time * 2) : 0);

          const normalized = (value + 5) / 10;

          const index = (y * width + x) * 4;
          data[index] = rgb.r * normalized;
          data[index + 1] = rgb.g * normalized;
          data[index + 2] = rgb.b * normalized;
          data[index + 3] = 255 * opacity;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
}
