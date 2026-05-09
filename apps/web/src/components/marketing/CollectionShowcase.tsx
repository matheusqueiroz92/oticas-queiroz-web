import { Reveal } from '@/components/shared/Reveal';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CollectionShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="bg-brand-primary-700 text-cream-100">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-lg bg-brand-primary-800">
              <Image
                src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1200&q=80"
                alt="Óculos da edição limitada Itapetinga 2026 em destaque."
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5"
              />
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
