import { Reveal } from '@/components/shared/Reveal';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import type { ReactNode } from 'react';

const policyLinks = [
  { href: '/politica-de-privacidade', label: 'Política de Privacidade' },
  { href: '/politica-de-cookies', label: 'Política de Cookies' },
  { href: '/termos-de-uso', label: 'Termos de Uso' },
  { href: '/lgpd', label: 'LGPD' },
] as const;

interface LegalDocumentShellProps {
  /** Rota atual — usada para omitir o link correspondente na lista relacionada */
  canonicalPath: (typeof policyLinks)[number]['href'];
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  lastUpdatedLabel: string;
  /** Hero com menos altura e tipografia um pouco menor (ex.: Termos de Uso). */
  compactHero?: boolean;
  /** Id único do título para acessibilidade (evita colisão se o padrão for reutilizado). */
  headingId?: string;
  children: ReactNode;
}

export function LegalDocumentShell({
  canonicalPath,
  eyebrow = 'Documentos',
  title,
  highlight,
  description,
  lastUpdatedLabel,
  compactHero = false,
  headingId = 'legal-doc-title',
  children,
}: LegalDocumentShellProps) {
  const otherPolicies = policyLinks.filter((item) => item.href !== canonicalPath);

  return (
    <>
      <header
        className={cn(
          'relative isolate overflow-hidden bg-bg',
          compactHero ? 'pt-10 pb-7 md:pt-11 md:pb-9' : 'pt-12 pb-10 md:pt-14 md:pb-12',
        )}
        aria-labelledby={headingId}
      >
        <div
          aria-hidden="true"
          className="-z-10 pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(var(--brand-primary-900) / 0.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 75% 55% at 50% 20%, black 35%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 55% at 50% 20%, black 35%, transparent 100%)',
          }}
        />

        <div className="container-editorial">
          <div className="mx-auto max-w-3xl animate-fade-up">
            {eyebrow ? (
              <p
                className={cn(
                  'flex items-center gap-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]',
                  compactHero ? 'mb-4' : 'mb-5',
                )}
              >
                <span className="h-px w-10 bg-brand-accent-500" aria-hidden="true" />
                {eyebrow}
              </p>
            ) : null}
            <h1
              id={headingId}
              className={cn(
                'text-balance font-display text-brand-primary-900 leading-[1.05] tracking-tightest',
                compactHero
                  ? 'text-[clamp(1.75rem,3.8vw,2.75rem)]'
                  : 'text-[clamp(2rem,4.5vw,3.25rem)]',
              )}
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              {title}{' '}
              {highlight ? (
                <em
                  className="font-display text-brand-accent-500 not-italic"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                    fontStyle: 'italic',
                  }}
                >
                  {highlight}
                </em>
              ) : null}
            </h1>
            <p
              className={cn(
                'max-w-2xl text-pretty text-fg-muted leading-relaxed',
                compactHero ? 'mt-4 text-sm md:text-base' : 'mt-5 text-base md:text-lg',
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </header>

      <section className="border-border-strong border-t bg-cream-50 py-10 md:py-10">
        <div className="container-editorial">
          <Reveal as="article" className="mx-auto max-w-3xl">
            <p className="border-border-strong border-b pb-8 text-fg-subtle text-sm">
              Documento aplicável aos serviços digitais de{' '}
              <strong className="text-fg">{siteConfig.name}</strong> (
              <span className="whitespace-nowrap">{siteConfig.legal.razaoSocial}</span>
              {' · '}
              CNPJ {siteConfig.legal.cnpj}), veiculados em{' '}
              <a
                href={siteConfig.url}
                className="text-brand-primary-700 underline-offset-4 hover:underline"
              >
                {siteConfig.url.replace(/^https?:\/\//, '')}
              </a>
              .
            </p>
            <p className="pt-8 text-fg-muted text-sm">
              <strong className="text-fg">Última atualização:</strong> {lastUpdatedLabel}
            </p>
            <div className="prose-legal">{children}</div>
            <nav
              aria-label="Outras políticas e documentos"
              className="mt-14 rounded-2xl border border-border-strong bg-bg p-6 shadow-sm md:p-8"
            >
              <p className="font-display text-brand-primary-900 text-lg">Continue lendo também</p>
              <ul className="mt-4 space-y-2 text-sm">
                {otherPolicies.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-brand-primary-700 transition hover:text-brand-primary-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contato"
                    className="text-brand-primary-700 transition hover:text-brand-primary-900"
                  >
                    Contato e canal de ouvidoria
                  </Link>
                </li>
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>
    </>
  );
}
