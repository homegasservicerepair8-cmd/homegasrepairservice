'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PHONE, WA_DISPLAY, svc, waLink } from '@/lib/data';
import WhatsAppIcon from './WhatsAppIcon';
import Logo from './Logo';

const LINKS = [['Home', '/'], ['About', '/about/'], ['Services', '/services/'], ['Contact', '/contact/']];

const onPath = (path, href) => {
  if (href === '/') return path === '/';
  const base = href.replace(/\/$/, '');
  return path === href || path === base || path.startsWith(`${base}/`);
};

export default function Header() {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobileSvc, setMobileSvc] = useState(false);
  const [hi, setHi] = useState(-1);
  const wrap = useRef(null);
  const pin = useRef(false);
  const timer = useRef(null);

  const show = () => { clearTimeout(timer.current); setDrop(true); };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => { if (!pin.current) setDrop(false); }, 180);
  };
  const toggleMenu = () => {
    const next = !(drop && pin.current);
    pin.current = next;
    setDrop(next);
  };
  const closeMenu = () => { pin.current = false; setDrop(false); };

  useEffect(() => {
    const onDoc = (e) => { if (!wrap.current?.contains(e.target)) closeMenu(); };
    const onKey = (e) => {
      if (e.key === 'Escape') { closeMenu(); setOpen(false); }
    };
    document.addEventListener('pointerdown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDoc);
      document.removeEventListener('keydown', onKey);
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => { setOpen(false); setMobileSvc(false); closeMenu(); }, [path]);

  const closeAll = () => { setOpen(false); setMobileSvc(false); closeMenu(); };

  return (
    <header className="site-head sticky top-0 z-50 border-b border-ink/10 bg-steel/90 backdrop-blur-md">
      <div className="wrap grid grid-cols-[auto_1fr_auto] items-center gap-3 py-2.5 sm:gap-5">
        <Link href="/" className="flex min-w-0 items-center justify-self-start" aria-label="Home Gas Repair Services">
          <Logo />
        </Link>
        <nav className="hidden items-center justify-center gap-1 justify-self-center lg:flex xl:gap-2" aria-label="Main">
          {LINKS.map(([name, href]) => name === 'Services' ? (
            <div key={name} ref={wrap} className="relative" onMouseEnter={show} onMouseLeave={hide}>
              <div className="flex items-center">
                <Link href={href} className={`nav-link ${onPath(path, href) ? 'is-on' : ''}`}>Services</Link>
                <button
                  type="button"
                  className="rounded-md p-1 text-ink hover:text-flame"
                  aria-label="Open services menu"
                  aria-expanded={drop}
                  aria-haspopup="true"
                  onClick={toggleMenu}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') { e.preventDefault(); setDrop(true); setHi(0); }
                    if (e.key === 'ArrowUp') { e.preventDefault(); setDrop(true); setHi(svc.length - 1); }
                  }}
                >
                  <ChevronDown size={16} className={`chev ${drop ? 'rotate-180 text-flame' : ''}`} />
                </button>
              </div>
              <AnimatePresence>
              {drop && (
                <motion.div className="absolute left-0 top-full z-50 pt-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}>
                  <div className="svc-drop" role="menu" style={{ animation: 'none' }}>
                    {svc.map((s, i) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}/`}
                        role="menuitem"
                        className={hi === i ? 'is-hi' : ''}
                        onMouseEnter={() => setHi(i)}
                        onClick={closeAll}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          ) : (
            <Link key={name} href={href} className={`nav-link ${onPath(path, href) ? 'is-on' : ''}`}>{name}</Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-2 justify-self-end">
          <a href="#contact" className="nav-cta hidden md:inline-flex">Request a call</a>
          <a href={`tel:${PHONE}`} className="btn-ink !px-4 !py-2 text-sm"><Phone size={16} /><span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">Call</span></a>
          <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
      {open && (
        <motion.nav className="mnav wrap lg:hidden" aria-label="Mobile" style={{ animation: 'none' }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}>
          <Link href="/" onClick={closeAll}>Home</Link>
          <Link href="/about/" onClick={closeAll}>About</Link>
          <button type="button" className="mrow" aria-expanded={mobileSvc} onClick={() => setMobileSvc((v) => !v)}>
            Services
            <ChevronDown size={18} className={`chev ${mobileSvc ? 'rotate-180 text-flame' : ''}`} />
          </button>
          {mobileSvc && (
            <div className="svc-drop svc-drop-mobile">
              {svc.map((s) => <Link key={s.slug} href={`/services/${s.slug}/`} onClick={closeAll}>{s.title}</Link>)}
            </div>
          )}
          <Link href="/contact/" onClick={closeAll}>Contact</Link>
          <a href="#contact" onClick={closeAll}>Request a call</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={closeAll} className="!justify-start gap-2"><WhatsAppIcon size={18} />WhatsApp {WA_DISPLAY}</a>
        </motion.nav>
      )}
      </AnimatePresence>
    </header>
  );
}
