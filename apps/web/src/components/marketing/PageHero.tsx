import Image from 'next/image';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  image: { src: string; alt: string };
}

/**
 * Hero reutilizável para páginas internas (Quem Somos, Equipe, Contato, etc).
 *
 * - Tipografia editorial Fraunces com palavra em itálico vermelho
 * - Foto à direita em proporção 4/5, com discreto ornamento radial atrás
 * - Sem SVGs ilustrativos — usa apenas foto real
 */
export function PageHero({ eyebrow, title, highlight, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-bg pt-12 pb-12 md:pt-20 md:pb-20">
      <div
        aria-hidden="true"
        className="-z-10 pointer-events-none absolute inset-0 opacity-[0.16]"
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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="animate-fade-up">
            {eyebrow ? (
              <p className="mb-6 flex items-center gap-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
                <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
                {eyebrow}
              </p>
            ) : null}
            <h1
              className="text-balance font-display text-[clamp(2.4rem,5vw,4.75rem)] text-brand-primary-900 leading-[0.98] tracking-tightest"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              {title}{' '}
              {highlight ? (
                <em
                  className="font-display text-brand-accent-500 not-italic"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                    fontStyle: 'italic',
                  }}
                >
                  {highlight}
                </em>
              ) : null}
            </h1>
            {description ? (
              <p className="mt-6 max-w-lg text-pretty text-base text-fg-muted leading-relaxed md:text-lg">
                {description}
              </p>
            ) : null}
          </div>

          <div className="relative aspect-[4/5] w-full max-w-[480px] animate-fade-in justify-self-center overflow-hidden rounded-xl bg-cream-200 shadow-md [animation-delay:200ms] lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
