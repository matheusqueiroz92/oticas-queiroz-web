import { Reveal } from '@/components/shared/Reveal';
import { siteConfig } from '@/config/site';
import { ArrowRight, CalendarClock, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function ConsultationCTA() {
  return (
    <section aria-labelledby="cta-title" className="bg-bg">
      <div className="container-editorial py-20 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-brand-primary-700 text-cream-100">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 90% 10%, rgb(var(--brand-accent-500) / 0.22) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgb(var(--brand-primary-500) / 0.35) 0%, transparent 50%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgb(255 255 255 / 0.6) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <div>
                <p className="mb-3 flex items-center gap-3 text-2xs text-brand-accent-200 uppercase tracking-[0.18em]">
                  <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
                  Saúde visual
                </p>
                <h2
                  id="cta-title"
                  className="text-balance font-display text-4xl leading-[1.02] tracking-tighter md:text-5xl lg:text-6xl"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                >
                  Sua consulta com o Dr. Henrique{' '}
                  <em className="font-display text-brand-accent-200 italic">em poucos cliques</em>.
                </h2>
                <p className="mt-6 max-w-lg text-pretty text-cream-100/80 md:text-lg">
                  Atendimento de segunda a sábado, agendamento online em menos de 1 minuto. Examine,
                  escolha a armação e leve para casa no mesmo dia.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/agendar-consulta"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-accent-500 px-7 py-4 font-medium text-cream-50 text-sm transition hover:bg-brand-accent-600"
                  >
                    <CalendarClock className="h-4 w-4" aria-hidden="true" />
                    Agendar agora
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href={siteConfig.social.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-7 py-4 font-medium text-cream-100 text-sm transition hover:bg-cream-100/10"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Falar no WhatsApp
                  </Link>
                </div>
              </div>

              <ul className="grid gap-3 self-center">
                {[
                  {
                    icon: <CalendarClock className="h-5 w-5" aria-hidden="true" />,
                    title: 'Horários flexíveis',
                    blurb: 'Seg a sex 8h–18h · sáb 8h–13h',
                  },
                  {
                    icon: <MapPin className="h-5 w-5" aria-hidden="true" />,
                    title: 'Bem no centro',
                    blurb: 'Rua J. J. Seabra, 116 — Itapetinga',
                  },
                  {
                    icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
                    title: 'Atendimento humano',
                    blurb: 'Time que escuta, conhece e orienta',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 rounded-lg border border-cream-100/15 bg-cream-100/[0.04] p-4 backdrop-blur-sm"
                  >
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-brand-accent-500/20 text-brand-accent-200">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-medium text-cream-100 text-sm">{item.title}</p>
                      <p className="mt-0.5 text-cream-100/65 text-sm">{item.blurb}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
