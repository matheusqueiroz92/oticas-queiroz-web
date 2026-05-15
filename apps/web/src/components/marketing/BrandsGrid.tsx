import { Reveal } from '@/components/shared/Reveal';
import { cn } from '@/lib/cn';

/**
 * Tamanho dos logos no grid — edite aqui:
 * - `LOGO_FRAME`: altura/largura máx. da área útil (a imagem encaixa com `object-contain`).
 * - Cartão completo: altura `h-20` no `BrandTile` (primeiro div).
 */
const LOGO_FRAME = 'flex h-[4.75rem] w-full min-w-0 max-w-[11rem] items-center justify-center';
const LOGO_IMG = 'block h-full w-auto max-w-full object-contain';

const brands = [
  {
    id: 'ray-ban',
    name: 'Ray-Ban',
    imageSrc: '/brands/logo-ray-ban.png',
    imageClassName: 'max-h-18',
  },
  { id: 'oakley', name: 'Oakley', imageSrc: '/brands/logo-oakley.png', imageClassName: 'max-h-8' },
  { id: 'vogue', name: 'Vogue', imageSrc: '/brands/logo-vogue.png', imageClassName: 'max-h-8' },
  {
    id: 'ana-hickmann',
    name: 'Ana Hickmann',
    imageSrc: '/brands/logo-ana-hickmann.png',
    imageClassName: 'max-h-8',
  },
  {
    id: 'mormaii',
    name: 'Mormaii',
    imageSrc: '/brands/logo-mormaii.png',
    imageClassName: 'max-h-10',
  },
  { id: 'carmin', name: 'Carmin', imageSrc: '/brands/logo-carmin.png', imageClassName: 'max-h-10' },
  { id: 'keyper', name: 'Keyper', imageSrc: '/brands/logo-keyper.png', imageClassName: 'max-h-12' },
  {
    id: 'ello',
    name: 'Ello',
    imageSrc: '/brands/logo-ello.webp',
    imageClassName: 'max-h-16',
  },
  {
    id: 'keeper-brasil',
    name: 'Keeper Brasil',
    imageSrc: '/brands/logo-keeper-brasil.png',
    imageClassName: 'max-h-10',
  },
  { id: 'raggi', name: 'Raggi', imageSrc: '/brands/logo-raggi.png', imageClassName: 'max-h-14' },
  {
    id: 'x-treme',
    name: 'X-Treme',
    imageSrc: '/brands/logo-x-treme.png',
    imageClassName: 'max-h-12',
  },
  { id: 'solk', name: 'Solk', imageSrc: '/brands/logo-solk.webp', imageClassName: 'max-h-12' },
] as const;

type BrandTileProps = Pick<(typeof brands)[number], 'name' | 'imageSrc' | 'imageClassName'>;

function BrandTile({ name, imageSrc, imageClassName }: BrandTileProps) {
  return (
    <div className="flex h-20 items-center justify-center rounded-lg border border-border bg-bg-elevated px-4 font-display text-brand-primary-800 transition hover:scale-[1.02] hover:border-border-strong">
      <div className={LOGO_FRAME}>
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          decoding="async"
          className={cn(LOGO_IMG, imageClassName)}
        />
      </div>
    </div>
  );
}

export function BrandsGrid() {
  return (
    <section aria-labelledby="brands-title" className="border-border border-y bg-bg">
      <div className="container-editorial py-12 md:py-16">
        <Reveal variant="line">
          <div className="mb-7 flex items-end justify-between gap-4 md:mb-8">
            <div>
              <p className="mb-2 text-2xs text-fg-subtle uppercase tracking-[0.18em]">Marcas</p>
              <h2
                id="brands-title"
                className="font-display text-3xl text-brand-primary-900 leading-tight tracking-tighter md:text-4xl"
                style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
              >
                Trabalhamos com as melhores{' '}
                <em className="font-display text-brand-accent-500 italic">marcas</em>
                <br /> que você já{' '}
                <em className="font-display text-brand-accent-500 italic">confia</em>.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="-mx-5 sm:-mx-6 overflow-x-auto px-5 sm:px-6 lg:hidden">
          <div className="flex min-w-max snap-x snap-mandatory gap-3 pb-1">
            {brands.map(({ id, name, imageSrc, imageClassName }, i) => (
              <Reveal key={id} delay={i * 0.04}>
                <div className="min-w-[150px] snap-start">
                  <BrandTile imageSrc={imageSrc} name={name} imageClassName={imageClassName} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="hidden grid-cols-4 gap-4 md:grid lg:grid-cols-5 xl:grid-cols-6">
          {brands.map(({ id, name, imageSrc, imageClassName }, i) => (
            <Reveal key={id} delay={i * 0.03}>
              <BrandTile imageSrc={imageSrc} name={name} imageClassName={imageClassName} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
