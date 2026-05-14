import { Reveal } from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Feature {
  id: string;
  label: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

const features: Feature[] = [
  {
    id: 'classic',
    label: 'Clássico',
    title: 'Round acetato',
    href: '/colecoes/round-acetato',
    imageSrc:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Armação redonda em acetato sobre fundo claro.',
  },
  {
    id: 'editorial',
    label: 'Editorial',
    title: 'Cat-eye marfim',
    href: '/colecoes/cat-eye-marfim',
    imageSrc:
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Óculos cat-eye em tom marfim para looks editoriais.',
    badge: 'Novo',
  },
  {
    id: 'aviator',
    label: 'Solar',
    title: 'Aviator espelhado',
    href: '/colecoes/aviator',
    imageSrc:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Óculos aviador com lentes espelhadas.',
  },
  {
    id: 'minimal',
    label: 'Minimalista',
    title: 'Retangular metal',
    href: '/colecoes/retangular',
    imageSrc:
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Armação retangular metálica com acabamento minimalista.',
  },
];

export function FeaturedStrip() {
  return (
    <section aria-labelledby="featured-title" className="border-border-strong border-y bg-bg">
      <div className="container-editorial py-10 md:py-14">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-2xs text-fg-subtle uppercase tracking-[0.18em]">
                Em destaque
              </p>
              <h2
                id="featured-title"
                className="font-display text-3xl text-brand-primary-900 leading-tight tracking-tighter md:text-4xl"
                style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
              >
                Modelos{' '}
                <em className="font-display text-brand-accent-500 italic">recém-chegados</em>
              </h2>
            </div>
            <Link
              href="/colecoes"
              className="hidden items-center gap-1.5 text-fg-muted text-sm transition hover:text-brand-primary-900 md:inline-flex"
            >
              Ver todos
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {features.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.06}>
              <Link
                href={f.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg border border-border bg-brand-primary-50 transition hover:shadow-md"
              >
                {f.badge && (
                  <span className="absolute top-3 right-3 z-10 rounded-full bg-brand-accent-500 px-2 py-0.5 font-medium text-2xs text-cream-50 uppercase tracking-widest">
                    {f.badge}
                  </span>
                )}
                <Image
                  src={f.imageSrc}
                  alt={f.imageAlt}
                  fill
                  sizes="(min-width: 768px) 24vw, 44vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/35 to-transparent"
                />
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <p className="text-2xs text-cream-100/90 uppercase tracking-widest">{f.label}</p>
                  <p className="mt-1 font-display text-cream-100 text-lg">{f.title}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/colecoes"
          className="mt-6 inline-flex items-center gap-1.5 text-fg-muted text-sm transition hover:text-brand-primary-900 md:hidden"
        >
          Ver todos
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
