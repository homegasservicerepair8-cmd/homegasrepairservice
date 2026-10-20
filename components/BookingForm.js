'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown, MapPin } from 'lucide-react';
import { areas, waLink } from '@/lib/data';

const ITEMS = ['Stove', 'Hob', 'Cooktop', 'Cooking Range', 'Other'];
const NEEDS = ['Installation', 'Uninstallation', 'Repair', 'Servicing', 'Annual Maintenance', 'Other'];

function useDismiss(ref, close) {
  useEffect(() => {
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) close(); };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('pointerdown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [ref, close]);
}

function SelectField({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const ref = useRef(null);
  useDismiss(ref, () => setOpen(false));

  const pick = (option) => { onChange(option); setOpen(false); };
  const onKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setHi((i) => Math.min(options.length - 1, open ? i + 1 : Math.max(0, options.indexOf(value))));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setOpen(true);
      setHi((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter' && open) {
      e.preventDefault();
      pick(options[hi]);
    } else if (e.key === 'Escape') setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <span className="lbl">{label}</span>
      <button
        type="button"
        className="field flex items-center justify-between gap-2 text-left"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => { setOpen((v) => !v); setHi(Math.max(0, options.indexOf(value))); }}
        onKeyDown={onKey}
      >
        <span className="truncate">{value}</span>
        <ChevronDown size={16} strokeWidth={2} className={`chev h-4 w-4 shrink-0 ${open ? 'rotate-180 text-flame' : ''}`} />
      </button>
      {open && (
        <ul role="listbox" className="menu absolute left-0 right-0 z-40 mt-2 max-h-64 overflow-auto">
          {options.map((option, i) => {
            const selected = value === option;
            return (
              <li key={option}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`menu-item items-center ${i === hi ? 'is-hi' : ''} ${selected ? 'is-on' : ''}`}
                  onMouseEnter={() => setHi(i)}
                  onClick={() => pick(option)}
                >
                  <span className="min-w-0 flex-1">{option}</span>
                  {selected && <Check size={16} className="shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function AreaField({ value, onChange, inputId }) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const ref = useRef(null);
  useDismiss(ref, () => setOpen(false));
  const q = value.trim().toLowerCase();
  const list = (q ? areas.filter((a) => a.toLowerCase().includes(q)) : areas).slice(0, 8);

  const pick = (area) => { onChange(area); setOpen(false); };
  const onKey = (e) => {
    if (!list.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setHi((i) => Math.min(list.length - 1, open ? i + 1 : 0)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); setHi((i) => Math.max(0, i - 1)); }
    else if (e.key === 'Enter' && open) { e.preventDefault(); pick(list[hi]); }
  };

  return (
    <div ref={ref} className="relative">
      <label className="lbl" htmlFor={inputId}>Locality</label>
      <div className="relative">
        <MapPin size={16} strokeWidth={2} className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/55" />
        <input
          id={inputId}
          className="field !pl-9 !pr-9"
          placeholder="Search Pune locality"
          value={value}
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          onChange={(e) => { onChange(e.target.value); setOpen(true); setHi(0); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
        />
        <button type="button" aria-label="Show localities" className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md" onClick={() => setOpen((v) => !v)}>
          <ChevronDown size={16} strokeWidth={2} className={`chev h-4 w-4 ${open ? 'rotate-180 text-flame' : ''}`} />
        </button>
      </div>
      {open && (
        <ul role="listbox" className="menu absolute left-0 right-0 z-40 mt-2 max-h-64 overflow-auto">
          {list.length ? list.map((area, i) => (
            <li key={area}>
              <button
                type="button"
                role="option"
                className={`menu-item items-center ${i === hi ? 'is-hi' : ''} ${value === area ? 'is-on' : ''}`}
                onMouseEnter={() => setHi(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(area)}
              >
                <span className="menu-ico !mt-0 h-7 w-7"><MapPin size={14} strokeWidth={2} className="h-3.5 w-3.5" /></span>
                <span className="min-w-0 flex-1">{area}</span>
                {value === area && <Check size={16} />}
              </button>
            </li>
          )) : (
            <li className="px-3 py-3 text-sm text-ink/60">We cover this locality too. Keep typing your area.</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default function BookingForm({ compact = false, item = 'Stove', need = 'Repair' }) {
  const uid = useId();
  const [d, setD] = useState({ name: '', phone: '', area: '', item, need });
  const set = (k) => (value) => setD((prev) => ({ ...prev, [k]: value }));
  const send = (e) => {
    e.preventDefault();
    const t = `Hello Urban Gas Stove Repairing, I need ${d.need} for my gas ${d.item}.\nName: ${d.name}\nPhone: ${d.phone}\nLocality: ${d.area}`;
    window.open(waLink(t), '_blank');
  };
  return (
    <form onSubmit={send} className={compact
      ? 'flex flex-col gap-2.5 rounded-2xl bg-white p-4 text-ink shadow-[0_18px_40px_-24px_rgba(0,0,0,.55)] [&_.field]:py-2 [&_.lbl]:mb-1 [&_.lbl]:text-xs [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0'
      : 'flex h-full flex-col gap-3.5 rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(18,24,32,.35)]'}>
      <div className={compact ? 'text-center' : ''}>
        <h3 className={`font-display font-bold ${compact ? 'text-lg' : 'text-2xl'}`}>Request a call back</h3>
        {!compact && <p className="mt-1 text-sm text-ink/60">Pick your appliance and we will call you back.</p>}
      </div>
      <div>
        <label className="lbl" htmlFor={`${uid}-name`}>Your name</label>
        <input id={`${uid}-name`} required className="field" placeholder="e.g. Rohit" value={d.name} onChange={(e) => set('name')(e.target.value)} />
      </div>
      <div>
        <label className="lbl" htmlFor={`${uid}-phone`}>Phone number</label>
        <input id={`${uid}-phone`} required type="tel" className="field" placeholder="10-digit mobile" value={d.phone} onChange={(e) => set('phone')(e.target.value)} />
      </div>
      <AreaField value={d.area} onChange={set('area')} inputId={`${uid}-area`} />
      <div className={compact ? 'grid grid-cols-1 gap-2.5' : 'grid grid-cols-1 gap-3 sm:grid-cols-2'}>
        <SelectField label="Appliance" value={d.item} onChange={set('item')} options={ITEMS} />
        <SelectField label="Service" value={d.need} onChange={set('need')} options={NEEDS} />
      </div>
      <button className={`btn-ember w-full ${compact ? '!py-2.5 text-sm' : 'mt-auto'}`}>Book on WhatsApp</button>
    </form>
  );
}
