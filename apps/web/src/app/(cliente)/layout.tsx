import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function ClienteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg">
      <header className="border-border border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold font-display text-brand-primary-500 text-xl">
            {siteConfig.name}
          </Link>
          <nav className="text-sm">
            <Link href="/" className="text-fg/70 hover:text-brand-primary-500">
              Voltar ao site
            </Link>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
    </div>
  );
}
