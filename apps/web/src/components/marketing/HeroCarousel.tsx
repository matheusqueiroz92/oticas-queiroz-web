'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, CalendarClock } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';

interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const slides: HeroSlide[] = [
  {
    id: 'colecao',
    eyebrow: 'Coleção 2026 · Disponível',
    title: 'Quem te enxerga',
    accent: 'vê estilo.',
    description: 'Armações de alta qualidade, lentes de última geração e atendimento humano.',
    imageSrc:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Óculos modernos sobre superfície neutra.',
  },
  {
    id: 'consultoria',
    eyebrow: 'Atendimento personalizado',
    title: 'Consultoria que',
    accent: 'combina com você.',
    description: 'A equipe ajuda na escolha da armação ideal para rosto, rotina e estilo.',
    imageSrc:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Pessoa experimentando armação de óculos em loja.',
  },
  {
    id: 'lentes',
    eyebrow: 'Tecnologia em lentes',
    title: 'Conforto visual',
    accent: 'o dia inteiro.',
    description: 'Tratamentos antirreflexo e proteção para telas para uma visão mais confortável.',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close em óculos com reflexo suave nas lentes.',
  },
];

const AUTOPLAY_MS = 6500;

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  /** Garante decode das fotos antes da troca de slide (evita “flash” de fundo). */
  useLayoutEffect(() => {
    for (const slide of slides) {
      const img = new window.Image();
      img.src = slide.imageSrc;
    }
  }, []);

  const canAutoplay = useMemo(() => !isPaused && !reducedMotion, [isPaused, reducedMotion]);

  useEffect(() => {
    if (!emblaApi || !canAutoplay) return;
    const interval = window.setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, AUTOPLAY_MS);
    return () => window.clearInterval(interval);
  }, [emblaApi, canAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const togglePauseOnCarouselInteraction = useCallback(
    (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button')) return;
      if ('key' in event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
      }
      setIsPaused((prev) => !prev);
    },
    [],
  );

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-x-hidden bg-bg pt-10 pb-14 md:pt-16 md:pb-20"
    >
      <div className="container-editorial relative">
        <button
          type="button"
          onClick={scrollPrev}
          className="-translate-y-1/2 absolute top-1/2 left-0 z-10 hidden size-9 items-center justify-center rounded-full border border-border/60 bg-bg text-brand-primary-700 opacity-50 shadow-sm transition hover:opacity-90 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-brand-primary-700 focus-visible:outline-offset-2 lg:left-1 lg:inline-flex"
          aria-label="Slide anterior"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="-translate-y-1/2 absolute top-1/2 right-0 z-10 hidden size-9 items-center justify-center rounded-full border border-border/60 bg-bg text-brand-primary-700 opacity-50 shadow-sm transition hover:opacity-90 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-brand-primary-700 focus-visible:outline-offset-2 lg:right-1 lg:inline-flex"
          aria-label="Próximo slide"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>

        <div
          className="relative overflow-hidden bg-bg"
          ref={emblaRef}
          onClick={togglePauseOnCarouselInteraction}
          onKeyDown={togglePauseOnCarouselInteraction}
          aria-roledescription="carrossel"
          aria-label="Destaques da Óticas Queiroz"
        >
          <div className="flex">
            {slides.map((slide, index) => (
              <article
                key={slide.id}
                className="flex min-h-[28rem] w-full min-w-0 shrink-0 grow-0 basis-full flex-col bg-bg lg:min-h-[38rem]"
              >
                <div className="grid min-h-0 w-full flex-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14 lg:ps-14">
                  <div className="order-1 min-w-0">
                    <p className="mb-5 flex w-fit items-center gap-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
                      <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
                      {slide.eyebrow}
                    </p>
                    <h1
                      id={selectedIndex === index ? 'hero-title' : undefined}
                      className="text-balance font-display text-[clamp(2rem,9vw,4.8rem)] text-brand-primary-900 leading-[0.96] tracking-tightest"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                    >
                      {slide.title}{' '}
                      <em className="font-display text-brand-accent-500 italic">{slide.accent}</em>
                    </h1>
                    <p className="mt-5 max-w-md text-pretty text-base text-fg-muted leading-relaxed md:text-lg">
                      {slide.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href="/colecoes"
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-primary-700 px-6 py-3 font-medium text-cream-100 text-sm transition hover:bg-brand-primary-800 active:scale-[0.98]"
                      >
                        Explorar coleções
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <Link
                        href="/agendar-consulta"
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-primary-700/20 px-6 py-3 font-medium text-brand-primary-700 text-sm transition hover:border-brand-primary-700/40 hover:bg-cream-200"
                      >
                        <CalendarClock className="h-4 w-4" aria-hidden="true" />
                        Agendar consulta
                      </Link>
                    </div>
                  </div>

                  <div className="order-2 flex w-full justify-center self-stretch lg:justify-end">
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] shrink-0 overflow-hidden rounded-xl bg-bg ring-1 ring-border/70 md:max-w-[420px] lg:mx-0 lg:max-w-[440px]">
                      <img
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        width={880}
                        height={1100}
                        loading="eager"
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : 'low'}
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
            ))}
          </div>
          {/* Cobre vazamento de subpixel do slide vizinho (linha fina nas bordas). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-1 bg-bg"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-1 bg-bg"
          />
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={selectedIndex === index}
              className={`h-2.5 rounded-full transition ${
                selectedIndex === index ? 'w-8 bg-brand-primary-700' : 'w-2.5 bg-brand-primary-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
