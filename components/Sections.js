import Link from 'next/link';
import { Phone, Award, Clock, IndianRupee, Layers, ShieldCheck, Wrench, Star, Plus } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Tilt from './Tilt';
import { Reveal, Stagger, Item } from './Motion';
import BookingForm from './BookingForm';
import { PHONE, steps, why, reviews, faqs, areas, WA_DISPLAY, waLink } from '@/lib/data';
const WI = [Award, Clock, IndianRupee, Layers, ShieldCheck, Wrench];
export const Steps = () => (
  <section className="sec"><Reveal className="wrap"><h2 className="h2">How it works</h2><p className="lead">Four simple steps from your call to a working kitchen.</p>
    <Stagger className="mt-12 grid gap-6 md:grid-cols-4">{steps.map(([t,d],i) => (
      <Item key={t}><Tilt className="h-full rounded-3xl bg-ink p-6 text-white shadow-[0_12px_0_#000]"><span className="font-display text-5xl font-extrabold text-flame" style={{transform:'translateZ(30px)',display:'block'}}>{i+1}</span><h3 className="mt-3 font-display text-xl font-bold">{t}</h3><p className="mt-2 text-white/70">{d}</p></Tilt></Item>))}</Stagger></Reveal></section>);
export const Why = () => (
  <section className="dots sec bg-ink text-white"><Reveal className="wrap"><h2 className="h2">Why Pune kitchens choose us</h2>
    <Stagger className="mt-12 grid gap-6 md:grid-cols-3">{why.map(([t,d],i) => { const I = WI[i]; return (
      <Item key={t} className="rounded-3xl border border-white/10 bg-white/5 p-6"><I className="text-ember" /><h3 className="mt-4 font-display text-xl font-bold">{t}</h3><p className="mt-2 text-white/70">{d}</p></Item>); })}</Stagger></Reveal></section>);
export const Reviews = () => (
  <section className="sec"><Reveal className="wrap"><h2 className="h2">What customers say</h2>
    <Stagger className="mt-12 grid gap-6 md:grid-cols-3">{reviews.map(([n,t]) => (
      <Item key={n}><Tilt className="card"><div className="flex text-ember">{[0,1,2,3,4].map((s) => <Star key={s} size={18} fill="currentColor" />)}</div><p className="mt-4 text-lg leading-relaxed">{t}</p><p className="mt-5 font-bold">{n}</p></Tilt></Item>))}</Stagger></Reveal></section>);
export const Areas = () => (
  <section className="sec bg-white"><Reveal className="wrap"><h2 className="h2">We serve all of Pune and PCMC</h2><p className="lead">Doorstep service in these localities and many more.</p>
    <div className="mt-10 flex flex-wrap justify-center gap-3">{areas.map((a) => <span key={a} className="rounded-full bg-steel px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-white">{a}</span>)}</div></Reveal></section>);
export const Faq = () => (
  <section id="contact" className="sec">
    <Reveal className="wrap grid items-stretch gap-8 lg:grid-cols-2">
      <div className="h-full"><BookingForm /></div>
      <div className="flex h-full flex-col">
        <h2 className="h2">Questions people ask</h2>
        <p className="lead">Still unsure? Call us on {PHONE}.</p>
        <div className="mt-6 flex flex-1 flex-col justify-between gap-3">{faqs.map(([q,a]) => (
          <details key={q} className="card !p-0"><summary className="flex items-center justify-between gap-4 p-5 font-display text-lg font-bold">{q}<Plus className="plus shrink-0 text-ember transition" /></summary><p className="px-5 pb-5 text-ink/75">{a}</p></details>))}</div>
      </div>
    </Reveal>
  </section>);
export const Cta = () => (
  <section className="sec"><Reveal className="wrap"><div className="dots rounded-[2rem] bg-ink p-10 text-center text-white shadow-[0_16px_0_#000] md:p-16"><h2 className="h2">Fast, trusted and affordable. Call today.</h2><p className="mx-auto mt-4 max-w-xl text-white/70">Home visit Rs.99. Book now and get 25% off.</p><div className="stack-btns mt-8 items-center justify-center gap-3 sm:flex sm:flex-row"><a href={`tel:${PHONE}`} className="btn-ember"><Phone size={18} />Call {PHONE}</a><a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon />WhatsApp {WA_DISPLAY}</a></div></div></Reveal></section>);
