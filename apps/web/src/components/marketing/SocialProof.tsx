import { Reveal, RevealItem } from '@/components/shared/Reveal';
import { siteConfig } from '@/config/site';

interface Testimonial {
  name: string;
  initials: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Marlene Carvalho',
    initials: 'MC',
    role: 'Cliente desde 2018',
    quote:
      'Atendimento que conhece pelo nome. O Henrique e a equipe sempre acertam na escolha — meu terceiro óculos com eles e nunca decepcionou.',
  },
  {
    name: 'Joana Almeida',
    initials: 'JA',
    role: 'Itapetinga, BA',
    quote:
      'Pedi pelo WhatsApp e em três dias tava com o óculos novo. Lente multifocal sem ajuste nenhum, encaixou perfeito de primeira.',
  },
  {
    name: 'Jamille Souza',
    initials: 'JS',
    role: 'Cliente desde 2021',
    quote:
      'Adoro que sempre tem coleção nova, e o melhor: parcelam direto sem complicação. Minha família inteira faz óculos lá.',
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="Cinco estrelas">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 fill-brand-accent-500"
          aria-hidden="true"
        >
          <path d="M12 2l2.5 6.5L22 9l-5.5 5 1.5 7.5L12 18l-6 3.5L7.5 14 2 9l7.5-.5z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section aria-labelledby="proof-title" className="bg-cream-50">
      <div className="container-editorial py-20 md:py-28">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <p className="mb-2 text-2xs text-fg-subtle uppercase tracking-[0.18em]">
                Quem usou, voltou
              </p>
              <h2
                id="proof-title"
                className="text-balance font-display text-4xl text-brand-primary-900 leading-[1.05] tracking-tighter md:text-5xl"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Quase mil <em className="font-display text-brand-accent-500 italic">olhos</em> nos
                escolheram.
              </h2>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.contact.address.street}, ${siteConfig.contact.address.number}, ${siteConfig.contact.address.city}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-bg-elevated px-5 py-4 shadow-xs transition hover:border-border-strong sm:gap-6 sm:px-6"
            >
              <div>
                <p className="font-display text-3xl text-brand-primary-900 leading-none">4.9</p>
                <StarRow />
              </div>
              <div className="border-border-strong border-l pl-4 sm:pl-6">
                <p className="text-2xs text-fg-subtle uppercase tracking-widest">Google reviews</p>
                <p className="mt-1 font-medium text-brand-primary-900 text-sm">+ 250 avaliações</p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal variant="stagger-children">
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {testimonials.map((t) => (
              <RevealItem key={t.name}>
                <article className="flex h-full flex-col gap-5 rounded-lg border border-border bg-bg-elevated p-6 transition hover:border-border-strong">
                  <StarRow />
                  <p className="font-display text-brand-primary-900 text-lg leading-snug md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3 border-border border-t pt-5">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-accent-50 font-medium text-brand-accent-700 text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-medium text-brand-primary-900 text-sm">{t.name}</p>
                      <p className="text-fg-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
