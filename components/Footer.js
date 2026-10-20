import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Logo from './Logo';
import { PHONE, EMAIL, svc, WA_DISPLAY, waLink } from '@/lib/data';

const LINKS = [['Home', '/'], ['About', '/about/'], ['Services', '/services/'], ['Contact', '/contact/'], ['Privacy Policy', '/privacy-policy/'], ['Disclaimer', '/disclaimer/'], ['Terms and Conditions', '/terms-and-conditions/']];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="wrap grid gap-x-10 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:py-16">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">Fast, reliable and affordable gas appliance repair across Pune and PCMC.</p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Quick links</h3>
          <ul className="mt-5 space-y-3 text-sm">{LINKS.map(([n, h]) => <li key={h}><Link href={h} className="hover:text-white">{n}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Our services</h3>
          <ul className="mt-5 space-y-3 text-sm">{svc.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`} className="hover:text-white">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Contact</h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0 text-ember" />Doorstep service all over Pune</li>
            <li><a className="flex gap-2.5 hover:text-white" href={`tel:${PHONE}`}><Phone size={16} className="mt-0.5 shrink-0 text-ember" />{PHONE}</a></li>
            <li><a className="flex gap-2.5 hover:text-white" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} />WhatsApp {WA_DISPLAY}</a></li>
            <li><a className="flex gap-2.5 break-all hover:text-white" href={`mailto:${EMAIL}`}><Mail size={16} className="mt-0.5 shrink-0 text-ember" />{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-5 text-center text-xs text-white/50">© 2026 Home Gas Repair. All rights reserved.</p>
      </div>
    </footer>
  );
}
