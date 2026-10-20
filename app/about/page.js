import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { Steps, Why, Cta, Reviews } from '@/components/Sections';
import { Reveal, Stagger, Item } from '@/components/Motion';
import BrandMarquee from '@/components/BrandMarquee';
import { PHONE, svc, WA_DISPLAY, waLink } from '@/lib/data';

const photos = [
  '/gallery/gas-stove-repair.jpg',
  '/gallery/gas-hob-repair.jpg',
  '/gallery/gas-cooktop-repair.jpg',
  '/gallery/cooking-range-repair.jpg',
  '/gallery/copper-gas-pipeline.jpg',
  '/gallery/annual-maintenance.jpg',
];
const facts = [
  ['30 min', 'Doorstep arrival in most localities'],
  ['Rs.99', 'Home visit, quoted before repair'],
  ['1 visit', 'Most jobs finished the same day'],
  ['Pune & PCMC', 'From Kothrud to Hinjewadi'],
];

export const metadata = { title: 'About Us', description: 'Urban Gas Stove Repairing is Pune’s doorstep team for gas stove, hob, cooktop and cooking range repair.' };

export default function About() {
  return (<>
    <section className="dots bg-ink py-14 text-white md:py-20">
      <Reveal className="wrap grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ember">About us</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">The doorstep team for a working kitchen.</h1>
          <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">We repair gas stoves, hobs, cooktops and cooking ranges at your home across Pune and PCMC. Genuine parts, a clear quote, and most jobs done on the first visit.</p>
          <div className="stack-btns mt-6 gap-3 sm:flex sm:flex-wrap">
            <a href={`tel:${PHONE}`} className="btn-ember"><Phone size={18} />Call {PHONE}</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon />WhatsApp {WA_DISPLAY}</a>
          </div>
        </div>
        <img src="/gallery/gas-hob-repair.jpg" alt="A gas hob being repaired at a home in Pune" className="h-64 w-full rounded-3xl object-cover shadow-[0_24px_40px_-24px_rgba(0,0,0,.7)] sm:h-80 md:h-[420px]" />
      </Reveal>
    </section>

    <section className="sec">
      <Reveal className="wrap">
        <h2 className="h2">How a visit works</h2>
        <p className="lead">You call or message us. A technician arrives with the tools for stoves, built-in hobs, cooktops and ranges, including auto-ignition and manual models.</p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left text-base leading-relaxed text-ink/80 sm:text-lg">
          <p>Low flame, a hob that will not spark, a blocked burner or an oven that will not heat: we check it at your kitchen and tell you the cost before any repair starts.</p>
          <p>We cover Kothrud, Baner, Aundh, Wakad, PCMC, Hadapsar, Viman Nagar, Kharadi, Hinjewadi, Magarpatta and the rest of the city.</p>
        </div>
      </Reveal>
      <Stagger className="wrap mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {facts.map(([n, d]) => (
          <Item key={n}><div className="card h-full !p-5 text-center"><p className="font-display text-2xl font-extrabold text-ember sm:text-3xl">{n}</p><p className="mt-1 text-sm text-ink/70">{d}</p></div></Item>
        ))}
      </Stagger>
    </section>

    <section className="sec !pt-0">
      <Reveal className="wrap"><h2 className="h2">What we repair</h2><p className="lead">Six services, all at your door.</p></Reveal>
      <Stagger className="wrap mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {svc.map((s, i) => (
          <Item key={s.slug}>
            <Link href={`/services/${s.slug}/`} className="card block h-full overflow-hidden !p-0">
              <img src={photos[i]} alt="" className="h-36 w-full object-cover" />
              <span className="block p-5">
                <span className="font-display text-lg font-bold text-ink">{s.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink/70">{s.short}</span>
                <span className="mt-3 inline-flex items-center gap-1 font-bold text-flame">View service <ArrowRight size={16} /></span>
              </span>
            </Link>
          </Item>
        ))}
      </Stagger>
    </section>

    <Why /><BrandMarquee /><Steps /><Reviews /><Cta />
  </>);
}
