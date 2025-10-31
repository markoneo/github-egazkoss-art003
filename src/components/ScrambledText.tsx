import { useEffect, useRef, useState } from 'react';

interface ScrambledTextProps {
  children: string;
  className?: string;
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
}

export default function ScrambledText({
  children,
  className = '',
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
}: ScrambledTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const originalText = children;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            scrambleText(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  const scrambleText = (element: HTMLElement) => {
    const text = originalText;
    const chars = scrambleChars.split('');
    const textArray = text.split('');
    let frame = 0;
    const totalFrames = duration * 60;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;

      const scrambled = textArray
        .map((char, index) => {
          if (char === ' ') return ' ';

          const charProgress = (index / textArray.length) * (1 - speed) + progress * speed;

          if (charProgress >= 1) {
            return char;
          }

          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          return Math.random() < charProgress ? char : randomChar;
        })
        .join('');

      element.textContent = scrambled;

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = text;
      }
    };

    animate();
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ fontFamily: 'monospace' }}
    >
      {originalText}
    </div>
  );
}
