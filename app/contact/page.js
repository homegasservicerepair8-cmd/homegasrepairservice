import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import BookingForm from '@/components/BookingForm';
import { PHONE, EMAIL, WA_DISPLAY, waLink } from '@/lib/data';
import { Reveal, Stagger, Item } from '@/components/Motion';
export const metadata = { title: 'Contact', description: 'Call or WhatsApp Urban Gas Stove Repairing for doorstep gas appliance repair in Pune.' };
export default function Contact() {
  return (<>
    <section className="dots bg-ink py-20 text-white"><Reveal className="wrap"><h1 className="h2">Contact us</h1><p className="mx-auto mt-4 max-w-xl text-center text-white/70">Need urgent service? Call now. Home visit Rs.99.</p></Reveal></section>
    <section className="sec">
      <Stagger className="wrap grid items-stretch gap-5 md:grid-cols-2 md:gap-8">
        <Item className="flex h-full flex-col gap-5">
          <a href={`tel:${PHONE}`} className="card flex flex-1 items-center gap-4">
            <Phone className="shrink-0 text-ember" />
            <span>
              <b className="block">Call</b>
              {PHONE}
              <span className="mt-1 block text-sm font-normal leading-relaxed text-ink/60">Same-day visits. Tell us the appliance and your area, and we will set a time that suits you.</span>
            </span>
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="card flex flex-1 items-center gap-4">
            <span className="shrink-0 text-[#25D366]"><WhatsAppIcon size={22} /></span>
            <span>
              <b className="block">WhatsApp</b>
              {WA_DISPLAY}
              <span className="mt-1 block text-sm font-normal leading-relaxed text-ink/60">Message the appliance and your area. We reply with a visit time.</span>
            </span>
          </a>
          <a href={`mailto:${EMAIL}`} className="card flex flex-1 items-center gap-4">
            <Mail className="shrink-0 text-ember" />
            <span>
              <b className="block">Email</b>
              {EMAIL}
              <span className="mt-1 block text-sm font-normal leading-relaxed text-ink/60">Send a photo of the stove or hob if you have one. We reply with the visit time.</span>
            </span>
          </a>
          <div className="card flex flex-1 items-center gap-4">
            <MapPin className="shrink-0 text-ember" />
            <span>
              <b className="block">Service area</b>
              Doorstep service all over Pune and PCMC
              <span className="mt-1 block text-sm font-normal leading-relaxed text-ink/60">Kothrud, Baner, Wakad, Hinjewadi, Kharadi, Hadapsar and the rest of the city.</span>
            </span>
          </div>
        </Item>
        <Item className="h-full"><BookingForm /></Item>
      </Stagger>
    </section>
  </>);
}
