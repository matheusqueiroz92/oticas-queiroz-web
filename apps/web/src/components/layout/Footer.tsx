import { footerSections } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { formatPhone } from '@/lib/format';
import { Instagram, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LogoFooter from '../../../public/images/LOGO-OTICAS-QUEIROZ-VERMELHO-E-AZUL.png';
import { IconWhatsapp } from '../ui/icon-whatsapp';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border-strong border-t bg-cream-50">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Image src={LogoFooter} alt={siteConfig.name} width={150} height={150} />
            <p className="mt-3 max-w-xs text-pretty text-fg-muted text-sm">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Link
                href={siteConfig.social.instagram}
                aria-label="Instagram da Óticas Queiroz"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border-strong text-[#0A3185] transition hover:border-brand-primary-700 hover:bg-brand-primary-700 hover:text-cream-100"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href={siteConfig.social.whatsappLink}
                aria-label="WhatsApp da Óticas Queiroz"
                target="_blank"
                rel="noopener noreferrer"
                className="group grid h-10 w-10 place-items-center rounded-full border border-border-strong text-[#0A3185] transition hover:border-brand-primary-700 hover:bg-brand-primary-700"
              >
                <IconWhatsapp
                  fill="currentColor"
                  width={20}
                  height={20}
                  className="text-[#0A3185] transition-colors group-hover:text-cream-100"
                />
              </Link>
            </div>
          </div>

          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h2 className="text-2xs text-fg-subtle uppercase tracking-[0.18em]">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-fg-muted transition-colors hover:text-brand-primary-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-2xs text-fg-subtle uppercase tracking-[0.18em]">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-fg-muted">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent-500"
                  aria-hidden="true"
                />
                <address className="not-italic">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.number}
                  <br />
                  {siteConfig.contact.address.neighborhood} — {siteConfig.contact.address.city}/
                  {siteConfig.contact.address.state}
                </address>
              </li>
              <li>
                <a
                  href={`tel:+${siteConfig.contact.phone}`}
                  className="flex items-center gap-2.5 text-fg-muted transition hover:text-brand-primary-900"
                >
                  <Phone
                    className="h-4 w-4 flex-shrink-0 text-brand-accent-500"
                    aria-hidden="true"
                  />
                  {formatPhone(siteConfig.contact.phone)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-fg-muted transition hover:text-brand-primary-900"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-border border-t pt-6 text-fg-subtle text-xs sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name} · {siteConfig.legal.razaoSocial} · CNPJ{' '}
            {siteConfig.legal.cnpj}
          </p>
          <p>
            Desenvolvido por{' '}
            <Link
              href="https://www.matheusqueiroz.dev.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary-700 transition hover:text-brand-primary-900"
            >
              Matheus Queiroz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
