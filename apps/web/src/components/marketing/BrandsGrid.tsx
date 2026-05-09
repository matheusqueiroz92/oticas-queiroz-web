import { Reveal } from '@/components/shared/Reveal';

const brands = [
  'Ray-Ban',
  'Oakley',
  'Vogue',
  'Ana Hickmann',
  'Mormaii',
  'Tommy Hilfiger',
  'Arnette',
  'Carolina Herrera',
  'Chilli Beans',
  'Police',
];

export function BrandsGrid() {
  return (
    <section aria-labelledby="brands-title" className="border-border border-y bg-bg">
      <div className="container-editorial py-12 md:py-16">
        <Reveal>
          <div className="mb-7 flex items-end justify-between gap-4 md:mb-8">
            <div>
              <p className="mb-2 text-2xs text-fg-subtle uppercase tracking-[0.18em]">Marcas</p>
              <h2
                id="brands-title"
                className="font-display text-3xl text-brand-primary-900 leading-tight tracking-tighter md:text-4xl"
                style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
              >
                Marcas que você já{' '}
                <em className="font-display text-brand-accent-500 italic">confia</em>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="-mx-5 sm:-mx-6 overflow-x-auto px-5 sm:px-6 lg:hidden">
          <div className="flex min-w-max snap-x snap-mandatory gap-3 pb-1">
            {brands.map((brand, i) => (
              <Reveal key={brand} delay={i * 0.04}>
                <div className="flex h-20 min-w-[150px] snap-start items-center justify-center rounded-lg border border-border bg-bg-elevated px-5 shadow-xs">
                  <span className="text-center font-medium text-brand-primary-700 text-sm uppercase tracking-wide">
                    {brand}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="hidden grid-cols-4 gap-4 md:grid lg:grid-cols-5 xl:grid-cols-6">
          {brands.map((brand, i) => (
            <Reveal key={brand} delay={i * 0.03}>
              <div className="flex h-20 items-center justify-center rounded-lg border border-border bg-bg-elevated px-4 transition hover:border-border-strong">
                <span className="text-center font-medium text-brand-primary-700 text-sm uppercase tracking-wide">
                  {brand}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
