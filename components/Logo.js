export default function Logo({ light = false, large = false }) {
  const box = large ? 'h-16 w-16' : 'h-11 w-11 sm:h-12 sm:w-12';
  const title = large ? 'text-2xl' : 'text-[1.05rem] sm:text-[1.15rem]';
  const sub = large ? 'mt-1.5 text-xs tracking-[0.2em]' : 'mt-1 text-[0.65rem] tracking-[0.16em] sm:text-[0.7rem]';
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className={`${box} shrink-0`} aria-hidden="true">
        <path fill="#2f8cff" d="M8 34.5 32 16l24 18.5V52a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V34.5Z" />
        <path fill="#1d6fe0" d="M28 14h8v12h-8z" />
        <path fill="#121820" d="M27 40h10v16H27z" />
        <path fill="#ff7a1a" d="M32 2c0 0-11 12.5-11 20.2C21 29.2 25.8 34 32 34s11-4.8 11-11.8C43 14.5 32 2 32 2Z" />
        <path fill="#ffe08a" d="M32 12.5c0 0-5.2 7-5.2 11.2 0 3.6 2.3 6 5.2 6s5.2-2.4 5.2-6c0-4.2-5.2-11.2-5.2-11.2Z" />
      </svg>
      <span className="min-w-0 leading-none">
        <span className={`block font-display font-extrabold leading-none tracking-tight ${title} ${light ? 'text-white' : 'text-ink'}`}>Home Gas</span>
        <span className={`block font-display font-bold uppercase text-ember ${sub}`}>Repair services</span>
      </span>
    </span>
  );
}
