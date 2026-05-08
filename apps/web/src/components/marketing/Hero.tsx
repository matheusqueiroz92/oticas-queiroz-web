import { ArrowUpRight, CalendarClock } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-bg pt-12 pb-16 md:pt-20 md:pb-24"
    >
      <div
        aria-hidden="true"
        className="-z-10 pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(var(--brand-primary-900) / 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
        }}
      />

      <div className="container-editorial">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative animate-fade-up">
            <div className="mb-6 flex w-fit items-center gap-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
              <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
              Coleção 2026 · Disponível
            </div>

            <h1
              id="hero-title"
              className="text-balance font-display text-[clamp(2.6rem,6vw,5.25rem)] text-brand-primary-900 leading-[0.96] tracking-tightest"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              Quem te enxerga{' '}
              <em
                className="font-display text-brand-accent-500 not-italic"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  fontStyle: 'italic',
                }}
              >
                vê estilo.
              </em>
            </h1>

            <p className="mt-6 max-w-md text-pretty text-base text-fg-muted leading-relaxed md:text-lg">
              Armações de alta qualidade, lentes de tecnologia de última geração e atendimento
              humano.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/colecoes"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-primary-700 px-6 py-3.5 font-medium text-cream-100 text-sm transition hover:bg-brand-primary-800 active:scale-[0.98]"
              >
                Explorar coleções
                <ArrowUpRight
                  className="group-hover:-translate-y-0.5 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/agendar-consulta"
                className="inline-flex items-center gap-2 rounded-full border border-brand-primary-700/15 bg-transparent px-6 py-3.5 font-medium text-brand-primary-700 text-sm transition hover:border-brand-primary-700/40 hover:bg-cream-200"
              >
                <CalendarClock className="h-4 w-4" aria-hidden="true" />
                Agendar consulta
              </Link>
            </div>

            {/* <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-border-strong border-t pt-6">
              <div>
                <dt className="text-2xs text-fg-subtle uppercase tracking-widest">Atendendo</dt>
                <dd className="mt-1 font-display text-2xl text-brand-primary-900">desde 2009</dd>
              </div>
              <div>
                <dt className="text-2xs text-fg-subtle uppercase tracking-widest">Avaliação</dt>
                <dd className="mt-1 font-display text-2xl text-brand-primary-900">
                  4.9
                  <span className="ml-0.5 text-fg-muted text-sm">/5</span>
                </dd>
              </div>
              <div>
                <dt className="text-2xs text-fg-subtle uppercase tracking-widest">Entrega</dt>
                <dd className="mt-1 font-display text-2xl text-brand-primary-900">24h</dd>
              </div>
            </dl> */}
          </div>

          <div className="relative aspect-square w-full max-w-[560px] animate-fade-in justify-self-center [animation-delay:200ms] lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgb(var(--cream-200)) 0%, rgb(var(--cream-300) / 0.4) 60%, transparent 80%)',
              }}
            />

            <svg
              viewBox="0 0 200 200"
              className="absolute top-0 right-0 h-28 w-28 animate-spin-slow text-brand-accent-500 md:h-36 md:w-36"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="hero-stamp"
                  d="M 100 100 m -78 0 a 78 78 0 1 1 156 0 a 78 78 0 1 1 -156 0"
                />
              </defs>
              <text
                fontFamily="var(--font-display)"
                fontSize="12"
                letterSpacing="5"
                fill="currentColor"
              >
                <textPath href="#hero-stamp">· ÓTICAS QUEIROZ · NINGUÉM OFERECE TANTO ·</textPath>
              </text>
            </svg>

            {/* <svg
              viewBox="0 0 600 600"
              className="absolute inset-0 h-full w-full drop-shadow-[0_24px_48px_rgb(6_31_84_/_0.18)]"
              role="img"
              aria-labelledby="hero-glasses-title hero-glasses-desc"
            >
              <title id="hero-glasses-title">Óculos da coleção 2026</title>
              <desc id="hero-glasses-desc">
                Composição com dois pares de óculos sobrepostos representando a coleção atual.
              </desc>

              <g transform="translate(300 320) rotate(-8)" opacity="0.92">
                <ellipse
                  cx="-90"
                  cy="0"
                  rx="105"
                  ry="92"
                  fill="rgb(var(--brand-accent-500))"
                  stroke="rgb(var(--brand-accent-700))"
                  strokeWidth="6"
                />
                <ellipse
                  cx="110"
                  cy="0"
                  rx="105"
                  ry="92"
                  fill="rgb(var(--brand-accent-500))"
                  stroke="rgb(var(--brand-accent-700))"
                  strokeWidth="6"
                />
                <path
                  d="M 15 -8 Q 10 -22 0 -22 Q -10 -22 -15 -8"
                  fill="none"
                  stroke="rgb(var(--brand-accent-700))"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <line
                  x1="-195"
                  y1="-12"
                  x2="-260"
                  y2="-30"
                  stroke="rgb(var(--brand-accent-700))"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <line
                  x1="215"
                  y1="-12"
                  x2="280"
                  y2="-30"
                  stroke="rgb(var(--brand-accent-700))"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </g>

              <g transform="translate(300 280)">
                <ellipse
                  cx="-90"
                  cy="0"
                  rx="100"
                  ry="86"
                  fill="rgb(var(--brand-primary-500) / 0.22)"
                  stroke="rgb(var(--brand-primary-900))"
                  strokeWidth="7"
                />
                <ellipse
                  cx="100"
                  cy="0"
                  rx="100"
                  ry="86"
                  fill="rgb(var(--brand-primary-500) / 0.22)"
                  stroke="rgb(var(--brand-primary-900))"
                  strokeWidth="7"
                />
                <ellipse cx="-90" cy="-22" rx="46" ry="20" fill="rgb(255 255 255 / 0.42)" />
                <ellipse cx="100" cy="-22" rx="46" ry="20" fill="rgb(255 255 255 / 0.42)" />
                <path
                  d="M 12 -10 Q 5 -28 0 -28 Q -5 -28 -12 -10"
                  fill="none"
                  stroke="rgb(var(--brand-primary-900))"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <line
                  x1="-190"
                  y1="-15"
                  x2="-260"
                  y2="-40"
                  stroke="rgb(var(--brand-primary-900))"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <line
                  x1="200"
                  y1="-15"
                  x2="270"
                  y2="-40"
                  stroke="rgb(var(--brand-primary-900))"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </g>
            </svg> */}

            {/* <div className="absolute right-2 bottom-4 hidden rotate-[3deg] rounded-lg bg-bg-elevated p-3 shadow-md md:block">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-brand-accent-500"
                    role="img"
                    aria-labelledby={`star-${i}`}
                  >
                    <title id={`star-${i}`}>Estrela</title>
                    <path d="M12 2l2.5 6.5L22 9l-5.5 5 1.5 7.5L12 18l-6 3.5L7.5 14 2 9l7.5-.5z" />
                  </svg>
                ))}
                <span className="ml-1 font-medium text-brand-primary-900 text-sm">4.9</span>
              </div>
              <p className="mt-1 text-fg-muted text-xs">+ de 250 avaliações</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
