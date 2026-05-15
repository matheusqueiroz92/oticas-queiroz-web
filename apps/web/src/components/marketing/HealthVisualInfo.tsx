import { Reveal } from '@/components/shared/Reveal';
import { siteConfig } from '@/config/site';
import { formatPhone } from '@/lib/format';
import { getConsultationWhatsAppLink, healthVisualCopy } from '@/lib/health-visual';
import { AlertCircle, Building2, Eye, MessageCircle, Phone, Stethoscope } from 'lucide-react';
import Link from 'next/link';

const hoursLabel: Record<string, string> = {
  'Mo-Fr': 'Segunda a sexta',
  Sa: 'Sábado',
};

const opticServices = [
  'Exame de refração para óculos (medição do grau)',
  'Ajuste e escolha de armação com a equipe',
  'Orientação sobre lentes e tratamentos',
] as const;

const partnerServices = [
  'Consulta com oftalmologista parceiro',
  'Avaliação clínica ocular quando indicado',
  'Encaminhamento e retorno conforme orientação médica',
] as const;

export function HealthVisualInfo() {
  const whatsappHref = getConsultationWhatsAppLink();
  const phoneHref = `tel:+${siteConfig.contact.phone}`;

  return (
    <>
      <section className="border-border border-b bg-cream-50 py-12 md:py-16">
        <div className="container-editorial">
          <Reveal>
            <div
              role="note"
              className="flex gap-3 rounded-lg border border-brand-primary-200 bg-bg-elevated p-4 text-sm md:p-5"
            >
              <AlertCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent-500"
                aria-hidden="true"
              />
              <p className="text-pretty text-fg-muted leading-relaxed">
                <strong className="font-medium text-brand-primary-900">Importante:</strong>{' '}
                {healthVisualCopy.disclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-editorial">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <Reveal>
              <article className="flex h-full flex-col rounded-xl border border-border bg-bg-elevated p-6 md:p-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary-50 text-brand-primary-700">
                  <Eye className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl text-brand-primary-900 tracking-tight md:text-3xl">
                  Na Óticas Queiroz
                </h2>
                <p className="mt-3 text-pretty text-fg-muted text-sm leading-relaxed md:text-base">
                  Serviços oftálmicos para escolha e confecção dos seus óculos, com atendimento
                  humano no centro de Itapetinga.
                </p>
                <ul className="mt-6 space-y-3 text-fg-muted text-sm">
                  {opticServices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="flex h-full flex-col rounded-xl border border-brand-primary-700/20 bg-brand-primary-700 p-6 text-cream-100 md:p-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary-800 text-brand-accent-200">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl tracking-tight md:text-3xl">
                  Com {healthVisualCopy.partnerName}
                </h2>
                <p className="mt-3 text-pretty text-cream-100/85 text-sm leading-relaxed md:text-base">
                  Parceria com consultório oftalmológico vizinho. A consulta médica é realizada no
                  consultório parceiro — nossa equipe ajuda você a solicitar o horário.
                </p>
                <ul className="mt-6 space-y-3 text-cream-100/90 text-sm">
                  {partnerServices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 flex items-start gap-2 text-cream-100/75 text-xs">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Consultório parceiro na mesma região do centro — endereço confirmado pela equipe
                  no agendamento.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-border border-t bg-cream-50 py-16 md:py-20">
        <div className="container-editorial">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
                Como solicitar
              </p>
              <h2
                className="text-balance font-display text-3xl text-brand-primary-900 leading-tight tracking-tighter md:text-4xl"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Fale com a <em className="text-brand-accent-500 italic">nossa equipe</em>
              </h2>
              <p className="mt-4 text-pretty text-fg-muted md:text-lg">
                Segunda a sábado, confirmamos disponibilidade com o consultório parceiro e
                retornamos por WhatsApp ou telefone.
              </p>
              <ul className="mt-6 space-y-1 text-fg-muted text-sm">
                {siteConfig.contact.businessHours.map((h) => (
                  <li key={h.dayOfWeek}>
                    {hoursLabel[h.dayOfWeek] ?? h.dayOfWeek}: {h.opens} às {h.closes}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-accent-500 px-7 py-3.5 font-medium text-cream-50 text-sm transition hover:bg-brand-accent-600"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Solicitar horário no WhatsApp
                </Link>
                <Link
                  href={phoneHref}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-primary-700/25 bg-bg px-7 py-3.5 font-medium text-brand-primary-700 text-sm transition hover:bg-cream-200"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Ligar: {formatPhone(siteConfig.contact.phone)}
                </Link>
              </div>
              <p className="mt-6 text-fg-subtle text-xs">
                Também atendemos presencialmente na loja —{' '}
                <Link
                  href="/contato"
                  className="text-brand-primary-700 underline-offset-2 hover:underline"
                >
                  ver endereço e contato
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
