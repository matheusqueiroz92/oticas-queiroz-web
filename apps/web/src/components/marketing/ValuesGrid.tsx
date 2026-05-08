import { Reveal } from '@/components/shared/Reveal';
import Image from 'next/image';

interface Value {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

interface ValuesGridProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  values: Value[];
}

export function ValuesGrid({ eyebrow, title, highlight, values }: ValuesGridProps) {
  return (
    <section aria-labelledby="values-title" className="bg-bg">
      <div className="container-editorial py-20 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            {eyebrow ? (
              <p className="mb-2 text-2xs text-fg-subtle uppercase tracking-[0.18em]">{eyebrow}</p>
            ) : null}
            <h2
              id="values-title"
              className="text-balance font-display text-4xl text-brand-primary-900 leading-[1.05] tracking-tighter md:text-5xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              {title}{' '}
              {highlight ? (
                <em className="font-display text-brand-accent-500 italic">{highlight}</em>
              ) : null}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-xs transition hover:shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
                  <Image
                    src={v.image.src}
                    alt={v.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3
                    className="font-display text-2xl text-brand-primary-900 leading-tight"
                    style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-fg-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
