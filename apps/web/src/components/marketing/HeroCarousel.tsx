'use client';

import {
  type HeroLayout,
  SlideOverlay,
  SlideSplit,
  SlideStats,
  heroSlides,
} from '@/components/marketing/hero/hero-slides';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const AUTOPLAY_MS = 6500;

const slideComponents: Record<
  HeroLayout,
  typeof SlideSplit | typeof SlideOverlay | typeof SlideStats
> = {
  split: SlideSplit,
  overlay: SlideOverlay,
  stats: SlideStats,
};

export function HeroCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', watchDrag: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isOverlaySlide = heroSlides[selectedIndex]?.layout === 'overlay';

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const gridParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  useLayoutEffect(() => {
    for (const slide of heroSlides) {
      if (!slide.imageSrc) continue;
      const img = new window.Image();
      img.src = slide.imageSrc;
    }
  }, []);

  const canAutoplay = useMemo(
    () => !isPaused && !prefersReducedMotion,
    [isPaused, prefersReducedMotion],
  );

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
      ref={sectionRef}
      aria-labelledby="hero-title"
      className={`relative isolate overflow-hidden pt-8 pb-10 transition-colors duration-500 md:pt-12 md:pb-12 ${
        isOverlaySlide ? 'bg-brand-primary-900' : 'bg-bg'
      }`}
    >
      {!isOverlaySlide ? (
        prefersReducedMotion ? (
          <div
            aria-hidden="true"
            className="-z-10 pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgb(var(--brand-primary-900) / 0.42) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        ) : (
          <motion.div
            aria-hidden="true"
            className="-z-10 pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgb(var(--brand-primary-900) / 0.42) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              y: gridParallaxY,
            }}
          />
        )
      ) : null}

      <div
        className="relative w-full overflow-hidden"
        ref={emblaRef}
        onClick={togglePauseOnCarouselInteraction}
        onKeyDown={togglePauseOnCarouselInteraction}
        aria-roledescription="carrossel"
        aria-label="Destaques da Óticas Queiroz"
      >
        <div className="flex">
          {heroSlides.map((slide, index) => {
            const SlideComponent = slideComponents[slide.layout];
            return (
              <SlideComponent
                key={slide.id}
                slide={slide}
                slideIndex={index}
                isTitleActive={selectedIndex === index}
              />
            );
          })}
        </div>
      </div>

      <div className="container-editorial pointer-events-none relative">
        <button
          type="button"
          onClick={scrollPrev}
          className={`-translate-y-1/2 pointer-events-auto absolute top-[calc(50%-2rem)] left-0 z-10 hidden size-9 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 lg:left-1 lg:inline-flex ${
            isOverlaySlide
              ? 'border-cream-100/25 bg-brand-primary-900/80 text-cream-100 hover:bg-brand-primary-800 focus-visible:outline-cream-100'
              : 'border-border/60 bg-bg text-brand-primary-700 opacity-50 hover:opacity-90 focus-visible:outline-brand-primary-700'
          }`}
          aria-label="Slide anterior"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className={`-translate-y-1/2 pointer-events-auto absolute top-[calc(50%-2rem)] right-0 z-10 hidden size-9 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 lg:right-1 lg:inline-flex ${
            isOverlaySlide
              ? 'border-cream-100/25 bg-brand-primary-900/80 text-cream-100 hover:bg-brand-primary-800 focus-visible:outline-cream-100'
              : 'border-border/60 bg-bg text-brand-primary-700 opacity-50 hover:opacity-90 focus-visible:outline-brand-primary-700'
          }`}
          aria-label="Próximo slide"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="container-editorial relative mt-6 flex justify-center gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={selectedIndex === index}
            className={`h-2.5 rounded-full transition ${
              selectedIndex === index
                ? isOverlaySlide
                  ? 'w-8 bg-brand-accent-500'
                  : 'w-8 bg-brand-primary-700'
                : isOverlaySlide
                  ? 'w-2.5 bg-cream-100/35'
                  : 'w-2.5 bg-brand-primary-200'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
