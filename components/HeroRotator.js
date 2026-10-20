'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { PHONE, WA_DISPLAY, svc, waLink } from '@/lib/data';
import WhatsAppIcon from './WhatsAppIcon';

const photos = [
  '/gallery/gas-stove-repair.jpg',
  '/gallery/gas-hob-repair.jpg',
  '/gallery/gas-cooktop-repair.jpg',
  '/gallery/cooking-range-repair.jpg',
  '/gallery/copper-gas-pipeline.jpg',
  '/gallery/annual-maintenance.jpg',
];

const slides = [
  {
    kicker: 'Pune and PCMC · Same-day doorstep service',
    title: 'Your burner back to a steady blue flame in 30 minutes.',
    text: 'Gas stove, hob, cooktop and cooking range repair. Home visit Rs.99, 25% off when you book now.',
    image: photos[0],
    caption: 'Stove, hob and cooktop repair',
  },
  ...svc.map((s, idx) => ({
    kicker: `${String(idx + 1).padStart(2, '0')} / 06 · ${s.title}`,
    title: s.title,
    text: s.short,
    image: photos[idx],
    caption: s.title,
  })),
];

const wa = waLink();
const ease = [0.22, 1, 0.36, 1];

export default function HeroRotator() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [h, setH] = useState(0);
  const reduce = useReducedMotion();
  const nodes = useRef([]);
  const n = slides.length;
  const slide = slides[i];

  useLayoutEffect(() => {
    const measure = () => {
      const next = Math.max(0, ...nodes.current.filter(Boolean).map((el) => el.offsetHeight));
      if (next) setH((prev) => (prev === next ? prev : next));
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setI((v) => (v + 1) % n), 3000);
    return () => clearTimeout(t);
  }, [i, paused, n]);

  useEffect(() => {
    const onHide = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onHide);
    return () => document.removeEventListener('visibilitychange', onHide);
  }, []);

  return (
    <div className="wrap relative grid items-center gap-6 py-8 md:grid-cols-2 md:gap-10 md:py-10">
      <div className="order-2 md:order-1">
        <div className="overflow-hidden" style={{ height: h || '17rem' }}>
          <motion.div animate={{ y: h ? -i * h : 0 }} transition={{ duration: reduce ? 0 : 0.55, ease }}>
            {slides.map((s, idx) => {
              const Title = idx === 0 ? 'h1' : 'p';
              return (
                <div key={s.title} style={{ height: h || undefined }} aria-hidden={idx !== i}>
                  <div className="pb-1" ref={(el) => { nodes.current[idx] = el; }}>
                    <p className="mb-3 inline-block max-w-full rounded-full border border-white/20 px-3 py-1 text-sm leading-snug text-white/80">{s.kicker}</p>
                    <Title className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">{s.title}</Title>
                    <p className="mt-4 max-w-lg text-base text-white/75 sm:text-lg">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="mt-4 h-1 w-full max-w-xs overflow-hidden rounded-full bg-white/15">
          <span key={`${i}-${paused}`} className="slide-bar block h-full origin-left bg-ember" style={{ animationPlayState: paused || reduce ? 'paused' : 'running' }} />
        </div>
        <div className="stack-btns mt-5 gap-3 sm:flex sm:flex-wrap">
          <a href={`tel:${PHONE}`} className="btn-ember"><Phone size={18} />Call {PHONE}</a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon />WhatsApp {WA_DISPLAY}</a>
          <a href="#contact" className="btn-ghost">Request a call back</a>
        </div>
        <div
          className="mt-4 flex gap-1.5"
          role="tablist"
          aria-label="Hero slides"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { if (!document.hidden) setPaused(false); }}
        >
          {slides.map((s, idx) => (
            <button key={s.title} type="button" role="tab" aria-selected={idx === i} aria-label={s.title} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${idx === i ? 'w-6 bg-ember' : 'w-2 bg-white/40'}`} />
          ))}
        </div>
      </div>
      <div className="relative order-1 h-[240px] overflow-hidden rounded-3xl shadow-[0_24px_40px_-24px_rgba(0,0,0,.7)] sm:h-[320px] md:order-2 md:h-[360px]">
        {slides.map((s, idx) => (
          <img
            key={s.image + s.title}
            src={s.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-ember">At your door</p>
          <p className="mt-1 font-display text-2xl font-extrabold leading-tight">{slide.caption}</p>
        </div>
      </div>
    </div>
  );
}
