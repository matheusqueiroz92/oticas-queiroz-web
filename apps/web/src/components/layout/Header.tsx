import { mainNav, utilityNav } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import Link from 'next/link';

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-border/60 border-b bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60',
        className,
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold font-display text-brand-primary-500 text-xl"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-md bg-brand-primary-500 text-white"
          >
            OQ
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-6 font-medium text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-fg/80 transition-colors hover:text-brand-primary-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {utilityNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-fg/80 text-sm transition-colors hover:text-brand-primary-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
