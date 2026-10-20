import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Steps, Faq, Cta } from '@/components/Sections';
import { Reveal, Stagger, Item } from '@/components/Motion';
import { svc } from '@/lib/data';
export const metadata = { title: 'Our Services', description: 'Gas stove, hob, cooktop, cooking range repair, copper gas pipeline installation and AMC in Pune.' };
export default function Services() {
  return (<>
    <section className="dots bg-ink py-20 text-white"><Reveal className="wrap"><h1 className="h2">Our professional gas appliance services</h1><p className="mx-auto mt-4 max-w-xl text-center text-white/70">Ignition issues, gas leaks and burner problems fixed by skilled technicians at your doorstep.</p></Reveal></section>
    <section className="sec"><Stagger className="wrap grid gap-6 md:grid-cols-2">{svc.map((s) => (
      <Item key={s.slug}><Link href={`/services/${s.slug}/`} className="card block h-full transition hover:-translate-y-1"><h2 className="text-left font-display text-2xl font-bold text-ink">{s.title}</h2><p className="mt-2 text-left text-ink/70">{s.intro}</p><span className="mt-4 inline-flex items-center gap-1 font-bold text-flame">View service <ArrowRight size={16} /></span></Link></Item>))}</Stagger></section>
    <Steps /><Faq /><Cta />
  </>);
}
