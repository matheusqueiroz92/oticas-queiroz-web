import { ContactForm } from '@/components/marketing/ContactForm';
import { ContactPageJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';
import { formatPhone } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';
import { Clock3, Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = buildMetadata({
  title: 'Contato',
  description:
    'Entre em contato com a Óticas Queiroz em Itapetinga-BA. Endereço, telefone, WhatsApp e formulário para dúvidas, reclamações e sugestões.',
  path: '/contato',
});

const hoursLabel: Record<string, string> = {
  'Mo-Fr': 'Segunda a sexta',
  Sa: 'Sábado',
  Su: 'Domingo',
};

export default function ContatoPage() {
  const fullAddress = `${siteConfig.contact.address.street}, ${siteConfig.contact.address.number} - ${siteConfig.contact.address.neighborhood}, ${siteConfig.contact.address.city}/${siteConfig.contact.address.state}`;
  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const phoneHref = `tel:+${siteConfig.contact.phone}`;
  const emailHref = `mailto:${siteConfig.contact.email}`;

  return (
    <>
      <ContactPageJsonLd />

      <section className="relative isolate overflow-hidden bg-bg pt-12 pb-12 md:pt-20 md:pb-20">
        <div
          aria-hidden="true"
          className="-z-10 pointer-events-none absolute inset-0 opacity-[0.16]"
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <aside className="space-y-4">
              <div className="animate-fade-up">
                <p className="mb-4 flex items-center gap-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
                  <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
                  Contato Oficial
                </p>
                <h1
                  className="text-balance font-display text-[clamp(2.4rem,4vw,3.75rem)] text-brand-primary-900 leading-[0.98] tracking-tightest"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                >
                  Fale
                  <em
                    className="font-display text-brand-accent-500 not-italic"
                    style={{
                      fontVariationSettings: '"opsz" 144, "SOFT" 100',
                      fontStyle: 'italic',
                    }}
                  >
                    Conosco
                  </em>
                </h1>
              </div>
              <article className="animate-fade-up rounded-2xl border border-border-strong bg-bg-elevated/80 p-5 shadow-sm">
                <h2 className="font-display text-2xl text-brand-primary-900">Onde estamos</h2>
                <ul className="mt-4 space-y-2 text-fg-muted text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent-500" />
                    <span>{fullAddress}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent-500" />
                    <a href={phoneHref} className="transition hover:text-brand-primary-800">
                      {formatPhone(siteConfig.contact.phone)}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent-500" />
                    <a href={emailHref} className="transition hover:text-brand-primary-800">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                </ul>
                <Link
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-primary-700/20 px-4 py-2 font-medium text-brand-primary-700 text-sm transition hover:border-brand-primary-700/40 hover:bg-cream-200"
                >
                  <MapPin className="h-4 w-4" />
                  Ver no Google Maps
                </Link>
              </article>

              <article className="animate-fade-up rounded-2xl border border-border-strong bg-bg-elevated/80 p-5 shadow-sm [animation-delay:120ms]">
                <h2 className="font-display text-2xl text-brand-primary-900">
                  Horário de atendimento
                </h2>
                <ul className="mt-4 space-y-2 text-fg-muted text-sm">
                  {siteConfig.contact.businessHours.map((item) => (
                    <li key={item.dayOfWeek} className="flex items-center gap-3">
                      <Clock3 className="h-4 w-4 text-brand-accent-500" />
                      <span>
                        {hoursLabel[item.dayOfWeek] ?? item.dayOfWeek}: {item.opens} - {item.closes}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="animate-fade-up rounded-2xl border border-brand-primary-700/20 bg-brand-primary-700 p-5 text-cream-100 shadow-md [animation-delay:220ms]">
                <h2 className="font-display text-2xl">Atendimento rápido no WhatsApp</h2>
                <p className="mt-3 text-cream-100/85 text-sm leading-relaxed">
                  Se precisar de retorno imediato, clique no botão abaixo para abrir nosso canal
                  direto no WhatsApp.
                </p>
                <Link
                  href={siteConfig.social.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-4 py-2 font-medium text-brand-primary-800 text-sm transition hover:bg-cream-200"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  Conversar agora
                </Link>
              </article>
            </aside>

            <div className="animate-fade-in [animation-delay:140ms]">
              <ContactForm whatsappLink={siteConfig.social.whatsappLink} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
