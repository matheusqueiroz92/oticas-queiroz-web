import { Reveal } from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  id: string;
  label: string;
  title: string;
  href: string;
  bg: string;
  fg: string;
  border: string;
  shape: 'round' | 'cat-eye' | 'aviator' | 'rect';
  badge?: string;
}

const features: Feature[] = [
  {
    id: 'classic',
    label: 'Clássico',
    title: 'Round acetato',
    href: '/colecoes/round-acetato',
    bg: 'bg-cream-200',
    fg: 'text-brand-primary-900',
    border: 'border-cream-300',
    shape: 'round',
  },
  {
    id: 'editorial',
    label: 'Editorial',
    title: 'Cat-eye marfim',
    href: '/colecoes/cat-eye-marfim',
    bg: 'bg-brand-accent-50',
    fg: 'text-brand-accent-700',
    border: 'border-brand-accent-100/70',
    shape: 'cat-eye',
    badge: 'Novo',
  },
  {
    id: 'aviator',
    label: 'Solar',
    title: 'Aviator espelhado',
    href: '/colecoes/aviator',
    bg: 'bg-brand-primary-700',
    fg: 'text-cream-100',
    border: 'border-brand-primary-800',
    shape: 'aviator',
  },
  {
    id: 'minimal',
    label: 'Minimalista',
    title: 'Retangular metal',
    href: '/colecoes/retangular',
    bg: 'bg-brand-primary-50',
    fg: 'text-brand-primary-700',
    border: 'border-brand-primary-100',
    shape: 'rect',
  },
];

function GlassesShape({ shape, className }: { shape: Feature['shape']; className?: string }) {
  if (shape === 'cat-eye') {
    return (
      <svg viewBox="0 0 200 80" className={className} aria-hidden="true">
        <path
          d="M 18 36 Q 14 22 36 18 Q 70 12 80 30 Q 90 38 86 50 Q 80 64 60 62 Q 24 60 18 36 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M 114 36 Q 124 12 158 18 Q 180 22 182 36 Q 176 60 140 62 Q 110 64 114 50 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <line x1="86" y1="32" x2="114" y2="32" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }
  if (shape === 'aviator') {
    return (
      <svg viewBox="0 0 200 80" className={className} aria-hidden="true">
        <path
          d="M 18 30 L 78 30 Q 84 30 82 38 L 70 62 Q 68 66 60 66 L 30 66 Q 22 66 20 60 L 16 38 Q 14 30 18 30 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M 118 30 L 178 30 Q 184 30 182 38 L 178 60 Q 176 66 168 66 L 138 66 Q 130 66 128 62 L 116 38 Q 114 30 118 30 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <line x1="82" y1="34" x2="118" y2="34" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }
  if (shape === 'rect') {
    return (
      <svg viewBox="0 0 200 80" className={className} aria-hidden="true">
        <rect
          x="18"
          y="22"
          width="68"
          height="36"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <rect
          x="114"
          y="22"
          width="68"
          height="36"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <line x1="86" y1="40" x2="114" y2="40" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden="true">
      <circle cx="50" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="150" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="4" />
      <path
        d="M 78 38 Q 100 32 122 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FeaturedStrip() {
  return (
    <section aria-labelledby="featured-title" className="border-border-strong border-y bg-cream-50">
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
                className={`group relative block aspect-[4/5] overflow-hidden rounded-lg border ${f.bg} ${f.border} transition hover:shadow-md`}
              >
                {f.badge && (
                  <span className="absolute top-3 right-3 z-10 rounded-full bg-brand-accent-500 px-2 py-0.5 font-medium text-2xs text-cream-50 uppercase tracking-widest">
                    {f.badge}
                  </span>
                )}
                <div className={`absolute inset-0 flex items-center justify-center ${f.fg}`}>
                  <GlassesShape
                    shape={f.shape}
                    className="w-3/4 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <p className={`text-2xs uppercase tracking-widest ${f.fg} opacity-70`}>
                    {f.label}
                  </p>
                  <p className={`mt-1 font-display text-lg ${f.fg}`}>{f.title}</p>
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
