import { Reveal } from '@/components/shared/Reveal';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  href: string;
  title: string;
  blurb: string;
  count: string;
  imageSrc: string;
  imageAlt: string;
  span: string;
}

const categories: Category[] = [
  {
    href: '/colecoes/oculos-de-grau',
    title: 'Óculos de grau',
    blurb: 'Acetato, metal e titânio com lentes sob receita.',
    count: '+120 modelos',
    imageSrc:
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Pessoa escolhendo óculos de grau em uma ótica.',
    span: 'md:row-span-2 md:col-span-1',
  },
  {
    href: '/colecoes/oculos-de-sol',
    title: 'Óculos de sol',
    blurb: 'Polarização, espelhamento e proteção UV total.',
    count: '+90 modelos',
    imageSrc:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Óculos de sol com armação moderna e lente escura.',
    span: 'md:col-span-2',
  },
  {
    href: '/colecoes/lentes',
    title: 'Lentes',
    blurb: 'Multifocal, antirreflexo e lente azul para tela.',
    count: '12 marcas',
    imageSrc:
      'https://images.unsplash.com/photo-1511920183353-3c18879b6f2f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close em lente oftálmica com reflexo suave.',
    span: '',
  },
  {
    href: '/colecoes/acessorios',
    title: 'Acessórios',
    blurb: 'Estojos, cordões e produtos de limpeza.',
    count: '+30 itens',
    imageSrc:
      'https://images.unsplash.com/photo-1583225214464-9296029427aa?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Acessórios para cuidado e armazenamento de óculos.',
    span: '',
  },
];

export function CategoryBento() {
  return (
    <section aria-labelledby="categories-title" className="bg-bg">
      <div className="container-editorial py-16 md:py-24">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-2xs text-fg-subtle uppercase tracking-[0.18em]">Categorias</p>
            <h2
              id="categories-title"
              className="text-balance font-display text-4xl text-brand-primary-900 leading-[1.05] tracking-tighter md:text-5xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              Tudo que você precisa para{' '}
              <em className="font-display text-brand-accent-500 italic">enxergar bem</em>.
            </h2>
            <p className="mt-4 text-pretty text-fg-muted md:text-lg">
              Catálogo completo entre armações, lentes e acessórios — selecionado para Itapetinga e
              região.
            </p>
          </div>
        </Reveal>

        <div className="grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.href} delay={i * 0.08} className={cat.span}>
              <Link
                href={cat.href}
                className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-lg p-6 transition md:p-8"
              >
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20"
                />
                <div className="relative z-10 flex items-start justify-between text-cream-100">
                  <p className="text-2xs uppercase tracking-[0.18em] opacity-80">{cat.count}</p>
                  <ArrowUpRight
                    className="group-hover:-translate-y-0.5 h-5 w-5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <div className="relative z-10 text-cream-100">
                  <h3
                    className="font-display text-2xl leading-tight tracking-tight md:text-3xl"
                    style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
                  >
                    {cat.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm opacity-90">{cat.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
