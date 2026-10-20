import { legal } from '@/lib/data';
import { Reveal } from '@/components/Motion';
export const generateStaticParams = () => Object.keys(legal).map((legal) => ({ legal }));
export const generateMetadata = ({ params }) => ({ title: legal[params.legal].t });
export default function Legal({ params }) {
  const l = legal[params.legal];
  return (<><section className="dots bg-ink py-16 text-white"><Reveal className="wrap"><h1 className="h2">{l.t}</h1></Reveal></section>
    <section className="sec"><Reveal className="wrap max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">{l.p.map((x) => <p key={x}>{x}</p>)}</Reveal></section></>);
}
