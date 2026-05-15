import { getConsultationWhatsAppLink } from '@/lib/health-visual';
import { ArrowRight, Eye, type LucideIcon, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

export type HeroLayout = 'split' | 'overlay' | 'stats';

export type HeroCtaVariant = 'primary' | 'secondary';

export interface HeroCta {
  label: string;
  href: string;
  variant?: HeroCtaVariant;
  icon?: LucideIcon;
  external?: boolean;
}

export interface HeroStat {
  label: string;
  value: string;
  suffix?: string;
}

export interface HeroSlideData {
  id: string;
  layout: HeroLayout;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctas: HeroCta[];
  stats?: HeroStat[];
}

export interface SlideRenderProps {
  slide: HeroSlideData;
  slideIndex: number;
  isTitleActive: boolean;
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 'colecao',
    layout: 'split',
    eyebrow: 'Coleção 2026 · Disponível',
    title: 'Quem te enxerga',
    accent: 'vê estilo.',
    description: 'Armações de alta qualidade, lentes de última geração e atendimento humano.',
    imageSrc:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Óculos modernos sobre superfície neutra.',
    ctas: [
      {
        label: 'Explorar coleções',
        href: '/colecoes',
        variant: 'primary',
        icon: ArrowRight,
      },
      {
        label: 'Saúde visual',
        href: '/saude-visual',
        variant: 'secondary',
        icon: Eye,
      },
    ],
  },
  {
    id: 'consultoria',
    layout: 'overlay',
    eyebrow: 'Atendimento personalizado',
    title: 'Consultoria que',
    accent: 'combina com você.',
    description: 'A equipe ajuda na escolha da armação ideal para rosto, rotina e estilo.',
    imageSrc:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Pessoa experimentando armação de óculos em loja.',
    ctas: [
      {
        label: 'Ver coleções',
        href: '/colecoes',
        variant: 'primary',
        icon: ArrowRight,
      },
      {
        label: 'Solicitar horário',
        href: getConsultationWhatsAppLink(),
        variant: 'secondary',
        icon: MessageCircle,
        external: true,
      },
    ],
  },
  {
    id: 'confianca',
    layout: 'stats',
    eyebrow: 'Confiança local',
    title: 'Quase mil olhos',
    accent: 'nos escolheram.',
    description:
      'Desde 2009 em Itapetinga, com avaliação consistente e atendimento que fideliza gerações.',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Detalhe de óculos com reflexo suave nas lentes.',
    stats: [
      { label: 'Atendendo', value: '2009' },
      { label: 'Avaliação', value: '4.9', suffix: '/5' },
      { label: 'Google reviews', value: '+250' },
    ],
    ctas: [
      {
        label: 'Saúde visual',
        href: '/saude-visual',
        variant: 'primary',
        icon: Eye,
      },
      {
        label: 'Explorar coleções',
        href: '/colecoes',
        variant: 'secondary',
        icon: Sparkles,
      },
    ],
  },
];

function SlideEyebrow({ children }: { children: string }) {
  return (
    <p className="mx-auto mb-4 flex w-fit items-center gap-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em] sm:mb-5 lg:mx-0">
      <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
      {children}
    </p>
  );
}

function SlideHeading({ slide, isTitleActive }: Pick<SlideRenderProps, 'slide' | 'isTitleActive'>) {
  return (
    <h1
      id={isTitleActive ? 'hero-title' : undefined}
      className="text-balance font-display text-[clamp(1.75rem,6.5vw+0.6rem,4.8rem)] text-brand-primary-900 leading-[0.98] tracking-tightest sm:leading-[0.96]"
      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
    >
      {slide.title} <em className="font-display text-brand-accent-500 italic">{slide.accent}</em>
    </h1>
  );
}

function SlideDescription({ children }: { children: string }) {
  return (
    <p className="mx-auto mt-4 max-w-md text-pretty text-base text-fg-muted leading-relaxed sm:mt-5 md:text-lg lg:mx-0">
      {children}
    </p>
  );
}

export function HeroCtaButtons({
  ctas,
  tone = 'default',
}: {
  ctas: HeroCta[];
  tone?: 'default' | 'overlay';
}) {
  const isOverlay = tone === 'overlay';

  return (
    <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
      {ctas.map((cta) => {
        const Icon = cta.icon;
        const isPrimary = cta.variant !== 'secondary';

        const primaryClass = isOverlay
          ? 'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-accent-500 px-6 py-3 font-medium text-cream-50 text-sm transition hover:bg-brand-accent-600 active:scale-[0.98] sm:w-auto'
          : 'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-primary-700 px-6 py-3 font-medium text-cream-100 text-sm transition hover:bg-brand-primary-800 active:scale-[0.98] sm:w-auto sm:justify-center';

        const secondaryClass = isOverlay
          ? 'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-cream-100/35 px-6 py-3 font-medium text-cream-100 text-sm transition hover:bg-cream-100/10 sm:w-auto'
          : 'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-brand-primary-700/20 px-6 py-3 font-medium text-brand-primary-700 text-sm transition hover:border-brand-primary-700/40 hover:bg-cream-200 sm:w-auto sm:justify-center';

        return (
          <Link
            key={cta.href + cta.label}
            href={cta.href}
            {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={isPrimary ? primaryClass : secondaryClass}
          >
            {Icon && cta.variant === 'secondary' ? (
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            ) : null}
            {cta.label}
            {Icon && isPrimary ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
          </Link>
        );
      })}
    </div>
  );
}

function SlideImage({
  slide,
  slideIndex,
  className,
}: {
  slide: HeroSlideData;
  slideIndex: number;
  className?: string;
}) {
  return (
    <img
      src={slide.imageSrc}
      alt={slide.imageAlt}
      width={880}
      height={1100}
      loading="eager"
      decoding="async"
      fetchPriority={slideIndex === 0 ? 'high' : 'low'}
      className={className}
    />
  );
}

export function SlideSplit({ slide, slideIndex, isTitleActive }: SlideRenderProps) {
  return (
    <article className="flex w-full min-w-0 shrink-0 grow-0 basis-full flex-col bg-bg">
      <div className="container-editorial grid w-full items-center gap-6 py-1 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:py-0">
        <div className="order-1 mx-auto min-w-0 max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <SlideEyebrow>{slide.eyebrow}</SlideEyebrow>
          <SlideHeading slide={slide} isTitleActive={isTitleActive} />
          <SlideDescription>{slide.description}</SlideDescription>
          <HeroCtaButtons ctas={slide.ctas} />
        </div>

        <div className="order-2 flex w-full justify-center self-stretch lg:justify-end">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[min(100%,280px)] shrink-0 overflow-hidden rounded-xl bg-bg ring-1 ring-border/70 sm:max-w-[300px] md:max-w-[340px] lg:mx-0 lg:max-w-[360px]">
            <SlideImage
              slide={slide}
              slideIndex={slideIndex}
              className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[30%] min-h-24 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function SlideOverlay({ slide, slideIndex, isTitleActive }: SlideRenderProps) {
  return (
    <article className="relative flex min-h-[22rem] w-full min-w-0 shrink-0 grow-0 basis-full flex-col overflow-hidden bg-brand-primary-900 sm:min-h-[26rem] lg:min-h-[30rem]">
      <SlideImage
        slide={slide}
        slideIndex={slideIndex}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-primary-900/90 via-brand-primary-900/55 to-brand-primary-900/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-primary-900/75 via-transparent to-brand-primary-900/15"
      />

      <div className="container-editorial relative z-[1] flex flex-1 flex-col justify-center py-8 md:py-10">
        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="mx-auto mb-4 flex w-fit items-center gap-3 text-2xs text-brand-accent-200 uppercase tracking-[0.18em] sm:mb-5 lg:mx-0">
            <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
            {slide.eyebrow}
          </p>
          <h1
            id={isTitleActive ? 'hero-title' : undefined}
            className="text-balance font-display text-[clamp(1.75rem,6.5vw+0.6rem,4.5rem)] text-cream-100 leading-[0.98] tracking-tightest sm:leading-[0.96]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
          >
            {slide.title}{' '}
            <em className="font-display text-brand-accent-200 italic">{slide.accent}</em>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base text-cream-100/85 leading-relaxed sm:mt-5 md:text-lg lg:mx-0">
            {slide.description}
          </p>
          <HeroCtaButtons ctas={slide.ctas} tone="overlay" />
        </div>
      </div>
    </article>
  );
}

export function SlideStats({ slide, slideIndex, isTitleActive }: SlideRenderProps) {
  return (
    <article className="flex w-full min-w-0 shrink-0 grow-0 basis-full flex-col bg-bg">
      <div className="container-editorial grid w-full items-center gap-6 py-1 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:py-0">
        <div className="order-1 mx-auto min-w-0 max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <SlideEyebrow>{slide.eyebrow}</SlideEyebrow>
          <SlideHeading slide={slide} isTitleActive={isTitleActive} />
          <SlideDescription>{slide.description}</SlideDescription>

          {slide.stats ? (
            <dl className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4 border-border-strong border-t pt-6 sm:gap-6 lg:mx-0">
              {slide.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xs text-fg-subtle uppercase tracking-widest">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-brand-primary-900 sm:text-3xl">
                    {stat.value}
                    {stat.suffix ? (
                      <span className="ml-0.5 text-fg-muted text-sm">{stat.suffix}</span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <HeroCtaButtons ctas={slide.ctas} />
        </div>

        <div className="order-2 flex w-full justify-center self-stretch lg:justify-end">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[min(100%,280px)] shrink-0 overflow-hidden rounded-xl bg-bg ring-1 ring-border/70 sm:max-w-[300px] md:max-w-[340px] lg:mx-0 lg:max-w-[360px]">
            <SlideImage
              slide={slide}
              slideIndex={slideIndex}
              className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[30%] min-h-24 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
