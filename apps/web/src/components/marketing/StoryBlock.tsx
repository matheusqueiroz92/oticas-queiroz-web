import { Reveal } from '@/components/shared/Reveal';
import Image from 'next/image';

interface StoryBlockProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  paragraphs: string[];
  image: { src: string; alt: string };
  imageSide?: 'left' | 'right';
  background?: 'cream' | 'navy';
}

export function StoryBlock({
  eyebrow,
  title,
  highlight,
  paragraphs,
  image,
  imageSide = 'right',
  background = 'cream',
}: StoryBlockProps) {
  const isNavy = background === 'navy';
  return (
    <section
      className={
        isNavy ? 'bg-brand-primary-700 text-cream-100' : 'bg-cream-50 text-brand-primary-900'
      }
    >
      <div className="container-editorial py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className={imageSide === 'left' ? 'order-1' : 'order-2 lg:order-1'}>
            {eyebrow ? (
              <p
                className={`mb-3 flex items-center gap-3 text-2xs uppercase tracking-[0.18em] ${
                  isNavy ? 'text-brand-accent-200' : 'text-brand-accent-500'
                }`}
              >
                <span
                  className={`h-px w-10 ${isNavy ? 'bg-brand-accent-500' : 'bg-brand-accent-500'}`}
                  aria-hidden="true"
                />
                {eyebrow}
              </p>
            ) : null}
            <h2
              className={`text-balance font-display text-4xl leading-[1.05] tracking-tighter md:text-5xl ${
                isNavy ? 'text-cream-100' : 'text-brand-primary-900'
              }`}
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              {title}{' '}
              {highlight ? (
                <em
                  className={`font-display italic ${
                    isNavy ? 'text-brand-accent-200' : 'text-brand-accent-500'
                  }`}
                >
                  {highlight}
                </em>
              ) : null}
            </h2>
            <div
              className={`mt-6 space-y-4 text-pretty md:text-lg ${
                isNavy ? 'text-cream-100/80' : 'text-fg-muted'
              }`}
            >
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className={imageSide === 'left' ? 'order-2 lg:order-2' : 'order-1 lg:order-2'}
          >
            <div
              className={`relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-xl shadow-md ${
                imageSide === 'left' ? 'lg:justify-self-start' : 'lg:justify-self-end'
              } ${isNavy ? 'bg-brand-primary-800' : 'bg-cream-200'}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
