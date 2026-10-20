import Link from 'next/link';
import { Check, Phone } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { Steps, Why, Faq } from '@/components/Sections';
import { svc, PHONE } from '@/lib/data';
import { Reveal } from '@/components/Motion';

const photos = {
  'gas-stove-repair-and-service': ['/gallery/gas-stove-repair.jpg', 'Gas stove repair at your door in Pune', 'Stove', 'Repair'],
  'gas-hob-repair-and-service': ['/gallery/gas-hob-repair.jpg', 'Built-in gas hob repair in a Pune kitchen', 'Hob', 'Repair'],
  'gas-cooktop-repair-and-service': ['/gallery/gas-cooktop-repair.jpg', 'Gas cooktop repair and service', 'Cooktop', 'Repair'],
  'gas-cooking-range-repair-and-service': ['/gallery/cooking-range-repair.jpg', 'Cooking range repair at home', 'Cooking Range', 'Repair'],
  'copper-gas-pipeline-installation': ['/gallery/copper-gas-pipeline.jpg', 'Copper gas pipeline installation', 'Other', 'Installation'],
  'annual-maintenance-contract': ['/gallery/annual-maintenance.jpg', 'Annual maintenance for a gas appliance', 'Stove', 'Annual Maintenance'],
};
export function generateStaticParams() {
  return svc.map((s) => ({ slug: s.slug }));
}
export const generateMetadata = ({ params }) => { const s = svc.find((x) => x.slug === params.slug); return { title: `${s.title} in Pune`, description: s.intro }; };
export default function Service({ params }) {
  const s = svc.find((x) => x.slug === params.slug);
  const [photo, alt, item, need] = photos[s.slug];
  return (<>
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={photo} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/65 md:bg-gradient-to-r md:from-ink/80 md:via-ink/55 md:to-ink/40" />
      <div className="svc-hero wrap relative py-8 md:py-12">
        <div className="svc-hero-copy">
          <p className="text-sm text-white/75"><Link href="/services/" className="underline decoration-white/30 underline-offset-4 hover:text-white">Services</Link> <span className="px-1 text-white/40">/</span> {s.title}</p>
          <p className="mt-4 text-sm font-semibold text-white">Doorstep repair across Pune and PCMC</p>
          <span className="mx-auto mt-3 block h-px w-14 bg-white/80 md:mx-0" />
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{s.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">{s.intro}</p>
          <a href={`tel:${PHONE}`} className="btn-ember mt-5 !px-5 !py-2.5 text-sm"><Phone size={16} />{PHONE}</a>
        </div>
        <div className="svc-hero-form">
          <BookingForm compact item={item} need={need} />
        </div>
      </div>
    </section>
    <section className="sec"><Reveal className="wrap grid gap-12 md:grid-cols-2"><div><h2 className="h2">What we cover</h2><ul className="mt-8 space-y-3">{s.issues.map((i) => <li key={i} className="flex gap-3 text-lg"><Check className="mt-1 shrink-0 text-flame" size={20} />{i}</li>)}</ul></div>
      <div className="space-y-6"><div className="card"><h3 className="font-display text-xl font-bold">Other services</h3><ul className="mt-3 space-y-2">{svc.filter((x) => x.slug !== s.slug).map((x) => <li key={x.slug}><Link className="font-semibold text-flame" href={`/services/${x.slug}/`}>{x.title}</Link></li>)}</ul></div></div></Reveal></section>
    <Steps /><Why /><Faq />
  </>);
}
