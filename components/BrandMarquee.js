const logos = [
  ['Häfele', 'HÄFELE', '#1a1a1a', '0.2em', '0.95rem', 700],
  ['Elica', 'elica', '#5c6b73', '-0.04em', '1.7rem', 500, true],
  ['Jyoti', 'Jyoti', '#d0121a', '-0.04em', '1.7rem', 700, true],
  ['Oxygen', 'Oxygen', '#3d8f4a', '-0.03em', '1.35rem', 600, true],
  ['Ujala', 'Ujala', '#1d4ed8', '-0.04em', '1.65rem', 700],
  ['Bajaj', 'BAJAJ', '#0057a8', '0.16em', '1.2rem', 800],
  ['Kaff', 'KAFF', '#0b1f5b', '0.18em', '1.35rem', 800],
  ['Surya', 'SURYA STAR', '#1a3d8f', '0.08em', '0.95rem', 800],
  ['Kutchina', 'KUTCHINA', '#1d4e89', '0.08em', '1rem', 800],
  ['Prestige', 'Prestige', '#e10600', '-0.03em', '1.55rem', 700, true],
  ['Sunflame', 'Sunflame', '#e23b1b', '-0.04em', '1.25rem', 800],
  ['Faber', 'FABER', '#1c1c1c', '0.22em', '1rem', 700],
  ['Suraksha', 'Suraksha', '#0b7a3b', '-0.03em', '1.2rem', 800],
  ['Pigeon', 'Pigeon', '#d0121a', '-0.03em', '1.55rem', 700, true],
  ['Gilma', 'Gilma', '#1a1a1a', '-0.04em', '1.55rem', 800],
  ['LG', 'LG', '#a50034', '-0.06em', '1.85rem', 800],
  ['Sunshine', 'SUNSHINE', '#e23b1b', '0.08em', '0.95rem', 800],
  ['Apex', 'APEX', '#5b2d8e', '0.18em', '1.35rem', 800],
  ['Glen', 'GLEN', '#e10600', '0.14em', '1.35rem', 800],
  ['Bosch', 'BOSCH', '#111111', '0.2em', '1.15rem', 700],
  ['Whirlpool', 'Whirlpool', '#0a4d8c', '-0.04em', '1.15rem', 700],
  ['Hindware', 'Hindware', '#c8102e', '-0.03em', '1.2rem', 800],
  ['IFB', 'IFB', '#e10600', '0.12em', '1.65rem', 800],
];

function Logo({ item, copy }) {
  const [, label, color, track, size, weight, italic] = item;
  return (
    <div className={`logo-card ${copy ? 'logo-dup' : ''}`} aria-hidden={copy || undefined}>
      <span
        className="logo-name"
        style={{
          color,
          letterSpacing: track,
          fontSize: size,
          fontWeight: weight,
          fontStyle: italic ? 'italic' : 'normal',
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Row({ items, reverse }) {
  return (
    <div className="logo-row">
      <div className={`logo-track ${reverse ? 'is-rev' : ''}`}>
        {items.map((item) => <Logo key={item[0]} item={item} />)}
        {items.map((item) => <Logo key={`${item[0]}-2`} item={item} copy />)}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  const mid = Math.ceil(logos.length / 2);
  return (
    <section className="overflow-hidden bg-white py-10 md:py-12" aria-label="Brands we serve">
      <h2 className="h2">We serve all major brands</h2>
      <p className="lead">Stoves, hobs, cooktops and cooking ranges from these brands.</p>
      <div className="logo-fade mt-8 space-y-4">
        <Row items={logos.slice(0, mid)} />
        <Row items={logos.slice(mid)} reverse />
      </div>
    </section>
  );
}
