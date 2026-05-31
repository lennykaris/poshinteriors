import React, { useEffect, useRef, useState } from 'react';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!isVisible) setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      animationId = requestAnimationFrame(animRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, .svc, .testi, .b-cell, .swatch, .hero-thumb, .hero-dot')) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, .svc, .testi, .b-cell, .swatch, .hero-thumb, .hero-dot')) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    
    animRing();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          width: isHovered ? '18px' : '18px', // Class styles transitions are handled by CSS, but we can override inline
          height: isHovered ? '18px' : '18px',
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.3s, background 0.3s, opacity 0.3s',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          opacity: isVisible ? 0.6 : 0,
          transition: 'transform 0.3s, width 0.3s, height 0.3s, opacity 0.3s',
        }}
      />
    </>
  );
};
