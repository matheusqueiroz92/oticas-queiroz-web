import { Reveal } from '@/components/shared/Reveal';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function CollectionShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="bg-brand-primary-700 text-cream-100">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-lg bg-brand-primary-800">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgb(var(--brand-primary-500) / 0.45) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgb(var(--brand-accent-500) / 0.32) 0%, transparent 55%)',
                }}
              />
              <svg
                viewBox="0 0 400 500"
                className="absolute inset-0 h-full w-full"
                role="img"
                aria-labelledby="showcase-title-svg"
              >
                <title id="showcase-title-svg">Óculos da edição limitada Itapetinga</title>
                <g transform="translate(200 280)">
                  <ellipse
                    cx="-72"
                    cy="0"
                    rx="88"
                    ry="74"
                    fill="rgb(var(--brand-accent-500))"
                    stroke="rgb(var(--brand-accent-700))"
                    strokeWidth="6"
                  />
                  <ellipse
                    cx="78"
                    cy="0"
                    rx="88"
                    ry="74"
                    fill="rgb(var(--brand-accent-500))"
                    stroke="rgb(var(--brand-accent-700))"
                    strokeWidth="6"
                  />
                  <ellipse cx="-72" cy="-18" rx="40" ry="16" fill="rgb(255 255 255 / 0.35)" />
                  <ellipse cx="78" cy="-18" rx="40" ry="16" fill="rgb(255 255 255 / 0.35)" />
                  <path
                    d="M 12 -8 Q 4 -22 0 -22 Q -4 -22 -12 -8"
                    stroke="rgb(var(--brand-accent-700))"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <line
                    x1="-160"
                    y1="-12"
                    x2="-220"
                    y2="-32"
                    stroke="rgb(var(--brand-accent-700))"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="166"
                    y1="-12"
                    x2="226"
                    y2="-32"
                    stroke="rgb(var(--brand-accent-700))"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
              <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between">
                <div>
                  <p className="text-2xs text-cream-100/80 uppercase tracking-[0.18em]">Edição</p>
                  <p className="mt-1 font-display text-2xl text-cream-100">Itapetinga 2026</p>
                </div>
                <span className="rounded-full border border-cream-100/30 bg-brand-primary-900/40 px-3 py-1 text-2xs text-cream-100 backdrop-blur-sm">
                  12 peças
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="mb-3 flex items-center gap-3 text-2xs text-brand-accent-200 uppercase tracking-[0.18em]">
              <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
              Edição limitada
            </p>
            <h2
              id="showcase-title"
              className="text-balance font-display text-4xl text-cream-100 leading-[1.02] tracking-tighter md:text-6xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              A coleção que{' '}
              <em className="font-display text-brand-accent-200 italic">veste a cidade</em>.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-cream-100/80 md:text-lg">
              Doze armações desenhadas em parceria com fabricantes brasileiros, em homenagem aos
              tons da nossa Itapetinga. Quantidade limitada, em loja e online.
            </p>
            <ul className="mt-8 space-y-3 text-cream-100/85 text-sm">
              {[
                'Acetato italiano em três tons exclusivos',
                'Hastes com gravação artesanal',
                'Lentes Crizal com 2 anos de garantia',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/colecoes/itapetinga-2026"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-accent-500 px-6 py-3.5 font-medium text-cream-50 text-sm transition hover:bg-brand-accent-600"
              >
                Ver edição
                <ArrowUpRight
                  className="group-hover:-translate-y-0.5 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/quem-somos"
                className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-6 py-3.5 font-medium text-cream-100 text-sm transition hover:bg-cream-100/10"
              >
                Como nasceu
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
