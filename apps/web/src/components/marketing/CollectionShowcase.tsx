import { Reveal } from '@/components/shared/Reveal';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const pieces = [
  {
    id: 'terracota',
    name: 'Tons de Itapetinga',
    detail: 'Acetato italiano · Tom terracota',
    imageSrc:
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Armação em acetato tom terracota da edição Itapetinga.',
  },
  {
    id: 'grafite',
    name: 'Grafite do entardecer',
    detail: 'Hastes com gravação artesanal',
    imageSrc:
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Óculos em tom grafite da coleção limitada.',
  },
  {
    id: 'creme',
    name: 'Creme da serra',
    detail: 'Lentes Crizal · 2 anos de garantia',
    imageSrc:
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Armação creme com detalhe metálico.',
  },
  {
    id: 'noite',
    name: 'Azul da noite',
    detail: 'Edição de 12 peças',
    imageSrc:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Armação azul profundo em destaque.',
  },
] as const;

const benefits = [
  'Acetato italiano em três tons exclusivos',
  'Hastes com gravação artesanal',
  'Lentes Crizal com 2 anos de garantia',
] as const;

export function CollectionShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="bg-brand-primary-700 text-cream-100">
      <div className="container-editorial py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal variant="line" className="max-w-xl">
            <p className="mb-3 text-2xs text-brand-accent-200 uppercase tracking-[0.18em]">
              Edição limitada
            </p>
            <h2
              id="showcase-title"
              className="text-balance font-display text-4xl leading-[1.02] tracking-tighter md:text-5xl lg:text-6xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              Itapetinga <em className="font-display text-brand-accent-200 italic">2026</em>
            </h2>
            <p className="mt-4 max-w-md text-pretty text-cream-100/80 md:text-lg">
              Doze armações em homenagem aos tons da nossa cidade. Quantidade limitada, em loja.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-wrap gap-3 lg:shrink-0">
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
          </Reveal>
        </div>

        <div className="-mx-5 sm:-mx-6 overflow-x-auto px-5 pb-2 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex min-w-max snap-x snap-mandatory gap-4 lg:grid lg:min-w-0 lg:grid-cols-4 lg:gap-5">
            {pieces.map((piece, i) => (
              <Reveal
                key={piece.id}
                delay={i * 0.05}
                className="w-[min(72vw,260px)] snap-start lg:w-auto"
              >
                <article className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-primary-800 ring-1 ring-cream-100/10">
                  <Image
                    src={piece.imageSrc}
                    alt={piece.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 72vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                  />
                  <div className="absolute right-0 bottom-0 left-0 p-4">
                    <p className="font-display text-cream-100 text-lg leading-tight">
                      {piece.name}
                    </p>
                    <p className="mt-1 text-cream-100/75 text-xs">{piece.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10 border-cream-100/15 border-t pt-8">
          <ul className="flex flex-col gap-3 text-cream-100/85 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-500"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
