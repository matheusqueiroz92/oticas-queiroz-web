'use client';

import { mainNav, utilityNav } from '@/config/nav';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function HeaderMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-[#0A3185]/80 transition hover:bg-cream-200 hover:text-[#0A3185] lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-brand-primary-900/40 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col border-border border-l bg-bg shadow-lg data-[state=open]:animate-fade-in">
          <div className="flex items-center justify-between border-border border-b px-5 py-4">
            <Dialog.Title className="font-medium text-[#0A3185] text-sm">Menu</Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full text-[#0A3185]/80 transition hover:bg-cream-200"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Principal" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium text-[#0A3185] text-base transition hover:bg-cream-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-border border-t pt-6">
              <p className="mb-3 px-3 text-2xs text-fg-subtle uppercase tracking-[0.18em]">
                Acesso rápido
              </p>
              <ul className="space-y-1">
                {utilityNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="block rounded-lg px-3 py-3 font-medium text-[#0A3185]/90 text-sm transition hover:bg-cream-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
