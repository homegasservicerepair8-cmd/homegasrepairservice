import './globals.css';
import { Bricolage_Grotesque, Figtree } from 'next/font/google';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PHONE, EMAIL, SITE, WA_DISPLAY, waLink } from '@/lib/data';
const d = Bricolage_Grotesque({ subsets: ['latin'], variable: '--f-display' });
const b = Figtree({ subsets: ['latin'], variable: '--f-body' });
export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'Gas Stove, Hob, Cooktop & Cooking Range Repair in Pune | Urban Gas Stove Repairing', template: '%s | Urban Gas Stove Repairing' },
  description: 'Fast, reliable and affordable gas stove, hob, cooktop and cooking range repair across Pune and PCMC. Doorstep service in 30 minutes, home visit Rs.99.',
  openGraph: { type: 'website', siteName: 'Urban Gas Stove Repairing', locale: 'en_IN' }
};
const ld = { '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness', name: 'Urban Gas Stove Repairing', url: SITE, telephone: '+91' + PHONE, email: EMAIL, areaServed: ['Pune', 'Pimpri-Chinchwad'], address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' }, description: 'Gas stove, hob, cooktop and cooking range repair and service in Pune.' };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${d.variable} ${b.variable}`}><body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:p-3">Skip to content</a>
      <div className="bg-ember px-4 py-2 text-center text-sm font-semibold leading-snug text-white">Doorstep service Rs.99 · <a className="underline" href={waLink()}>WhatsApp {WA_DISPLAY}</a> · <a className="underline" href={`tel:${PHONE}`}>Call {PHONE}</a></div>
      <Header /><main id="main">{children}</main><Footer />
      <div className="fab-dock fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-5 sm:right-5">
        <a aria-label={`WhatsApp ${WA_DISPLAY}`} href={waLink()} target="_blank" rel="noopener noreferrer" className="fab flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_0_#128C4a] sm:h-14 sm:w-14"><WhatsAppIcon size={26} /></a>
        <a aria-label="Call" href={`tel:${PHONE}`} className="fab flex h-12 w-12 items-center justify-center rounded-full bg-ember text-white shadow-[0_6px_0_#b9540a] sm:h-14 sm:w-14"><Phone /></a>
      </div>
    </body></html>
  );
}
