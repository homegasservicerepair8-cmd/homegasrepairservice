import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroRotator from '@/components/HeroRotator';
import ServiceSlider from '@/components/ServiceSlider';
import BrandMarquee from '@/components/BrandMarquee';
import { Steps, Why, Reviews, Areas, Faq } from '@/components/Sections';
import { Reveal, Stagger, Item } from '@/components/Motion';
import { problems } from '@/lib/data';
const stats = [['30 min','Doorstep service'],['Rs.99','Home visit'],['25% off','When you book now'],['All brands','Stoves to cooking ranges']];
export default function Home() {
  return (<div className="home">
    <section className="dots relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-flame/25 blur-[100px]" />
      <HeroRotator />
      <div className="wrap relative grid grid-cols-2 gap-px pb-6 md:grid-cols-4">{stats.map(([a,b]) => <div key={a} className="border-t border-white/15 px-1 pt-3"><p className="font-display text-2xl font-extrabold text-ember">{a}</p><p className="text-sm text-white/65">{b}</p></div>)}</div>
    </section>

    <ServiceSlider />
    <BrandMarquee />

    <section className="sec !py-10"><Reveal className="wrap text-center">
      <h2 className="h2">Professional gas appliance care for a safe kitchen</h2><p className="lead">Pune’s doorstep team for stoves, hobs, cooktops and cooking ranges. Genuine parts, a clear quote, and most jobs finished on the first visit.</p>
      <Link href="/about/" className="mt-4 inline-flex items-center gap-2 font-bold text-flame transition hover:gap-3">About us <ArrowRight size={18} /></Link>
    </Reveal></section>

    <section className="sec"><Reveal className="wrap"><h2 className="h2">Common problems we fix</h2>
      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{problems.map(([t,d]) => <Item key={t}><div className="h-full rounded-2xl border border-ink/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-20px_rgba(18,24,32,.35)]"><h3 className="font-display text-lg font-bold">{t}</h3><p className="mt-1 text-ink/70">{d}</p></div></Item>)}</Stagger></Reveal></section>

    <Steps /><Why /><Areas /><Faq /><Reviews />
  </div>);
}
