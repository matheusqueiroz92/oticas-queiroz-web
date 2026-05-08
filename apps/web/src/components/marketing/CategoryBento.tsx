import { Reveal } from '@/components/shared/Reveal';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Category {
  href: string;
  title: string;
  blurb: string;
  count: string;
  className: string;
  textClass: string;
  icon: 'grau' | 'sol' | 'lente' | 'acessorio';
  span: string;
}

const categories: Category[] = [
  {
    href: '/colecoes/oculos-de-grau',
    title: 'Óculos de grau',
    blurb: 'Acetato, metal e titânio com lentes sob receita.',
    count: '+120 modelos',
    className: 'bg-brand-primary-700 hover:bg-brand-primary-800',
    textClass: 'text-cream-100',
    icon: 'grau',
    span: 'md:row-span-2 md:col-span-1',
  },
  {
    href: '/colecoes/oculos-de-sol',
    title: 'Óculos de sol',
    blurb: 'Polarização, espelhamento e proteção UV total.',
    count: '+90 modelos',
    className: 'bg-brand-accent-50 hover:bg-brand-accent-100/60',
    textClass: 'text-brand-accent-700',
    icon: 'sol',
    span: 'md:col-span-2',
  },
  {
    href: '/colecoes/lentes',
    title: 'Lentes',
    blurb: 'Multifocal, antirreflexo e lente azul para tela.',
    count: '12 marcas',
    className: 'bg-cream-200 hover:bg-cream-300',
    textClass: 'text-brand-primary-900',
    icon: 'lente',
    span: '',
  },
  {
    href: '/colecoes/acessorios',
    title: 'Acessórios',
    blurb: 'Estojos, cordões e produtos de limpeza.',
    count: '+30 itens',
    className: 'bg-brand-primary-50 hover:bg-brand-primary-100',
    textClass: 'text-brand-primary-700',
    icon: 'acessorio',
    span: '',
  },
];

function CategoryIcon({ icon, className }: { icon: Category['icon']; className?: string }) {
  const props = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 5 };
  if (icon === 'grau') {
    return (
      <svg viewBox="0 0 240 120" {...props} aria-hidden="true">
        <circle cx="60" cy="60" r="42" />
        <circle cx="180" cy="60" r="42" />
        <path d="M 102 56 Q 120 48 138 56" strokeLinecap="round" />
        <line x1="18" y1="56" x2="2" y2="50" strokeLinecap="round" />
        <line x1="222" y1="56" x2="238" y2="50" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === 'sol') {
    return (
      <svg viewBox="0 0 240 120" {...props} aria-hidden="true">
        <path d="M 18 50 Q 18 26 60 26 L 96 26 Q 108 26 108 38 L 102 90 Q 100 100 88 100 L 38 100 Q 22 100 20 88 Z" />
        <path d="M 222 50 Q 222 26 180 26 L 144 26 Q 132 26 132 38 L 138 90 Q 140 100 152 100 L 202 100 Q 218 100 220 88 Z" />
        <line x1="108" y1="46" x2="132" y2="46" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === 'lente') {
    return (
      <svg viewBox="0 0 240 120" {...props} aria-hidden="true">
        <ellipse cx="120" cy="60" rx="80" ry="42" />
        <ellipse cx="100" cy="42" rx="22" ry="10" strokeWidth="3" opacity="0.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 240 120" {...props} aria-hidden="true">
      <rect x="60" y="22" width="120" height="76" rx="8" />
      <line x1="60" y1="50" x2="180" y2="50" />
      <circle cx="120" cy="74" r="6" fill="currentColor" />
    </svg>
  );
}

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
                className={`group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-lg p-6 transition md:p-8 ${cat.className}`}
              >
                <div className={`relative z-10 flex items-start justify-between ${cat.textClass}`}>
                  <p className="text-2xs uppercase tracking-[0.18em] opacity-70">{cat.count}</p>
                  <ArrowUpRight
                    className="group-hover:-translate-y-0.5 h-5 w-5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <div className={`relative z-10 ${cat.textClass}`}>
                  <h3
                    className="font-display text-2xl leading-tight tracking-tight md:text-3xl"
                    style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
                  >
                    {cat.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm opacity-75">{cat.blurb}</p>
                </div>
                <CategoryIcon
                  icon={cat.icon}
                  className={`-bottom-2 -right-2 absolute h-32 w-auto opacity-15 transition-transform duration-700 group-hover:scale-105 ${cat.textClass} md:h-40`}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
