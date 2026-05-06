import { footerSections } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { formatPhone } from '@/lib/format';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t bg-bg">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-bold font-display text-2xl text-brand-primary-500">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-muted text-sm">{siteConfig.tagline}</p>
          </div>

          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h2 className="font-display font-semibold text-base">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-fg/70 transition-colors hover:text-brand-primary-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-display font-semibold text-base">Contato</h2>
            <address className="mt-3 space-y-1 text-fg/70 text-sm not-italic">
              <p>
                {siteConfig.contact.address.street}, {siteConfig.contact.address.number}
              </p>
              <p>
                {siteConfig.contact.address.neighborhood} — {siteConfig.contact.address.city}/
                {siteConfig.contact.address.state}
              </p>
              <p>
                <a
                  href={`tel:+${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-brand-primary-500"
                >
                  {formatPhone(siteConfig.contact.phone)}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-brand-primary-500"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-border border-t pt-6 text-center text-muted text-xs">
          © {year} {siteConfig.name} — {siteConfig.legal.razaoSocial} — CNPJ:{' '}
          {siteConfig.legal.cnpj}
        </div>
      </div>
    </footer>
  );
}
