'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, CalendarClock, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
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

  const canAutoplay = useMemo(() => !isPaused && !reducedMotion, [isPaused, reducedMotion]);

  useEffect(() => {
    if (!emblaApi || !canAutoplay) return;
    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
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

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-bg pt-10 pb-14 md:pt-16 md:pb-20"
    >
      <div
        aria-hidden="true"
        className="-z-10 pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(var(--brand-primary-900) / 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
        }}
      />

      <div className="container-editorial">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          aria-roledescription="carrossel"
          aria-label="Destaques da Óticas Queiroz"
        >
          <div className="flex">
            {slides.map((slide, index) => (
              <article key={slide.id} className="w-full min-w-0 shrink-0 grow-0 basis-full">
                <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
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

                  <div className="order-2 w-full self-stretch justify-self-center lg:justify-self-end">
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-xl bg-brand-primary-50 shadow-[0_20px_50px_rgb(6_31_84_/_0.12)] md:max-w-[420px] lg:mx-0">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 35vw, (min-width: 768px) 45vw, 90vw"
                        className="z-0 object-cover"
                        priority={selectedIndex === index}
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-black/45 to-transparent"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated text-brand-primary-700 transition hover:border-border-strong hover:bg-cream-200"
              aria-label="Slide anterior"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated text-brand-primary-700 transition hover:border-border-strong hover:bg-cream-200"
              aria-label="Próximo slide"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-2 font-medium text-brand-primary-700 text-xs uppercase tracking-wider transition hover:border-border-strong hover:bg-cream-200"
              aria-label={isPaused ? 'Iniciar autoplay' : 'Pausar autoplay'}
            >
              {isPaused || reducedMotion ? (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  Iniciar
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  Pausar
                </>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
                aria-current={selectedIndex === index}
                className={`h-2.5 rounded-full transition ${
                  selectedIndex === index
                    ? 'w-8 bg-brand-primary-700'
                    : 'w-2.5 bg-brand-primary-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
