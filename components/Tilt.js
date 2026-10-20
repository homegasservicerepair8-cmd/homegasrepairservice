'use client';
import { useRef } from 'react';
export default function Tilt({ children, className = '' }) {
  const r = useRef(null);
  const move = (e) => {
    const b = r.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
    r.current.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(0)`;
  };
  return (
    <div ref={r} onMouseMove={move} onMouseLeave={() => (r.current.style.transform = '')} className={`p3d transition-transform duration-200 ease-out ${className}`}>
      {children}
    </div>
  );
}
