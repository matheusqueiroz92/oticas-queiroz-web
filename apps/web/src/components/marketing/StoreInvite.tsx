import { Reveal } from '@/components/shared/Reveal';
import { siteConfig } from '@/config/site';
import { formatPhone } from '@/lib/format';
import { ArrowRight, Clock, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface StoreInviteProps {
  image: { src: string; alt: string };
}

export function StoreInvite({ image }: StoreInviteProps) {
  return (
    <section aria-labelledby="visit-title" className="bg-bg">
      <div className="container-editorial py-20 md:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-cream-200 shadow-md lg:aspect-[5/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 flex items-center gap-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
                <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
                No coração de Itapetinga
              </p>
              <h2
                id="visit-title"
                className="text-balance font-display text-4xl text-brand-primary-900 leading-[1.05] tracking-tighter md:text-5xl"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Venha nos <em className="font-display text-brand-accent-500 italic">visitar</em>.
              </h2>
              <p className="mt-6 max-w-lg text-pretty text-fg-muted md:text-lg">
                Estamos na rua J. J. Seabra, no centro. Tomamos um café, fazemos seu exame e você
                escolhe a armação com calma — sem pressa, sem fila.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-start gap-3 text-fg">
                  <MapPin
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent-500"
                    aria-hidden="true"
                  />
                  <address className="not-italic leading-relaxed">
                    <span className="block font-medium text-brand-primary-900">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.number}
                    </span>
                    <span className="text-fg-muted">
                      {siteConfig.contact.address.neighborhood} · {siteConfig.contact.address.city}/
                      {siteConfig.contact.address.state}
                    </span>
                  </address>
                </li>
                <li className="flex items-start gap-3 text-fg">
                  <Clock
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent-500"
                    aria-hidden="true"
                  />
                  <div className="leading-relaxed">
                    <span className="block font-medium text-brand-primary-900">
                      Segunda a sexta · 8h às 18h
                    </span>
                    <span className="text-fg-muted">Sábado · 8h às 13h</span>
                  </div>
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={siteConfig.social.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-primary-700 px-6 py-3.5 font-medium text-cream-100 text-sm transition hover:bg-brand-primary-800 active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Falar no WhatsApp
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={`tel:+${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-primary-700/15 px-6 py-3.5 font-medium text-brand-primary-700 text-sm transition hover:border-brand-primary-700/40 hover:bg-cream-200"
                >
                  Ligar · {formatPhone(siteConfig.contact.phone)}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
