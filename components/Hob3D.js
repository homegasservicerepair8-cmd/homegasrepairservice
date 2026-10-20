'use client';
import { useRef } from 'react';
const B = [[8,8,40],[52,8,40],[8,52,40],[52,52,40]];
export default function Hob3D() {
  const r = useRef(null);
  const move = (e) => {
    const b = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
    r.current.style.transform = `rotateX(${58 - y * 16}deg) rotateZ(${-30 + x * 22}deg)`;
  };
  const reset = () => (r.current.style.transform = 'rotateX(58deg) rotateZ(-30deg)');
  return (
    <div className="scene flex h-[220px] items-center justify-center sm:h-[280px]" onMouseMove={move} onMouseLeave={reset} aria-label="3D gas hob with burning flames" role="img">
      <div ref={r} className="hob3d relative h-[170px] w-[170px] sm:h-[210px] sm:w-[210px]" style={{ transform: 'rotateX(58deg) rotateZ(-30deg)' }}>
        {[0,4,8,12,16,20].map((z) => (
          <div key={z} className="absolute inset-0 rounded-2xl bg-[#232c37]" style={{ transform: `translateZ(${z}px)`, boxShadow: z === 0 ? '0 60px 60px rgba(0,0,0,.55)' : 'none' }} />
        ))}
        <div className="p3d absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#2e3a48] to-[#161c24]" style={{ transform: 'translateZ(22px)' }}>
          {B.map(([l,t,s], i) => (
            <div key={i} className="p3d absolute" style={{ left: l + '%', top: t + '%', width: s + '%', height: s + '%' }}>
              <div className="absolute inset-0 rounded-full border-[5px] border-brass/80 bg-[#10151b]" style={{ transform: 'translateZ(2px)' }} />
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-b from-brass to-[#7d6322]" style={{ transform: 'translateZ(8px)' }} />
              {Array.from({ length: 14 }).map((_, k) => (
                <span key={k} className="fl absolute left-1/2 top-1/2 h-3 w-1.5 -ml-[3px] -mt-1.5 rounded-full bg-gradient-to-t from-flame to-white" style={{ transform: `rotate(${k * 360 / 14}deg) translateY(-38px) translateZ(6px)`, animationDelay: (k % 5) * .09 + 's' }} />
              ))}
              <div className="gl absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(47,140,255,.55),transparent_65%)]" style={{ transform: 'translateZ(14px)' }} />
              <div className="absolute inset-[8%] rounded-full" style={{ transform: 'translateZ(18px)', background: 'repeating-linear-gradient(90deg,transparent 0 46%,#aeb7c2 46% 54%,transparent 54% 100%),repeating-linear-gradient(0deg,transparent 0 46%,#aeb7c2 46% 54%,transparent 54% 100%)', opacity: .55 }} />
            </div>
          ))}
          {[26,66].map((y) => <span key={y} className="absolute h-4 w-4 rounded-full bg-brass" style={{ left: '46%', top: y + '%', transform: 'translateZ(6px)' }} />)}
        </div>
      </div>
    </div>
  );
}
