import Link from 'next/link';
import { svc } from '@/lib/data';
import { Reveal, Stagger, Item } from './Motion';

const photos = [
  '/gallery/gas-stove-repair.jpg',
  '/gallery/gas-hob-repair.jpg',
  '/gallery/gas-cooktop-repair.jpg',
  '/gallery/cooking-range-repair.jpg',
  '/gallery/copper-gas-pipeline.jpg',
  '/gallery/annual-maintenance.jpg',
];

export default function ServiceSlider() {
  return (
    <section className="bg-white py-8 md:py-10" aria-label="Our services">
      <div className="wrap">
        <Reveal><h2 className="h2">Our services</h2></Reveal>
        <Stagger className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {svc.map((s, idx) => (
            <Item key={s.slug}><Link href={`/services/${s.slug}/`} className="group relative block h-64 overflow-hidden rounded-3xl shadow-[0_18px_36px_-22px_rgba(18,24,32,.55)] transition duration-500 hover:-translate-y-1 sm:h-72">
              <img src={photos[idx]} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <h3 className="font-display text-xl font-extrabold leading-tight text-white">{s.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-white/85">{s.short}</p>
              </div>
            </Link></Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
