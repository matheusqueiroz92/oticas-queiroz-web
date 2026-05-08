import { mainNav, utilityNav } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LogoHeader from '../../../public/images/LOGO-OTICAS-QUEIROZ-AZUL.png';

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-border/60 border-b bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/65',
        className,
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <Image src={LogoHeader} alt={siteConfig.name} width={150} height={150} priority />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 font-medium text-[#0A3185]/80 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-1 transition-colors after:block after:h-px after:scale-x-0 after:bg-[#0A3185] after:transition-transform after:content-[''] hover:text-[#0A3185] hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          {utilityNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="hidden rounded-full px-4 py-2 font-medium text-[#0A3185]/80 text-sm transition hover:bg-cream-200 hover:text-[#0A3185] lg:inline-block"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Buscar"
            className="grid h-10 w-10 place-items-center rounded-full text-[#0A3185]/80 transition hover:bg-cream-200 hover:text-[#0A3185]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
