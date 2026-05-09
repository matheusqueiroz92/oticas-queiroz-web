export function AnimationCircle() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute top-0 right-0 h-28 w-28 animate-spin-slow text-brand-accent-500 md:h-36 md:w-36"
      aria-hidden="true"
    >
      <defs>
        <path id="hero-stamp" d="M 100 100 m -78 0 a 78 78 0 1 1 156 0 a 78 78 0 1 1 -156 0" />
      </defs>
      <text fontFamily="var(--font-display)" fontSize="12" letterSpacing="5" fill="currentColor">
        <textPath href="#hero-stamp">· ÓTICAS QUEIROZ · NINGUÉM OFERECE TANTO ·</textPath>
      </text>
    </svg>
  );
}
