'use client';

import { getPrescriptionQuoteWhatsAppLink } from '@/lib/prescription-quote';
import { MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';

const DEFAULT_MESSAGE = 'Envie sua receita para nosso WhatsApp e solicite um orçamento online';

export function SectionDivider({ message = DEFAULT_MESSAGE }: { message?: string }) {
  const whatsappHref = getPrescriptionQuoteWhatsAppLink();
  const prefersReduced = useReducedMotion();

  const inner = (
    <div className="container-editorial">
      <div className="flex flex-col items-center gap-5 rounded-xl border border-brand-primary-600/40 bg-brand-primary-800/80 px-6 py-6 text-center shadow-sm backdrop-blur-sm sm:flex-row sm:justify-between sm:gap-8 sm:px-8 sm:py-7 sm:text-left md:rounded-2xl">
        <div className="max-w-2xl">
          <p className="text-2xs text-brand-accent-200 uppercase tracking-[0.16em]">
            Orçamento rápido
          </p>
          <p className="mt-2 text-pretty font-display text-cream-100 text-xl leading-snug tracking-tight sm:text-2xl">
            {message}
          </p>
        </div>
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-accent-500 px-6 py-3.5 font-medium text-cream-50 text-sm transition hover:bg-brand-accent-600"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Enviar receita no WhatsApp
        </Link>
      </div>
    </div>
  );

  if (prefersReduced) {
    return (
      <section
        aria-label="Orçamento por WhatsApp"
        className="bg-brand-primary-700 px-5 py-8 sm:px-6"
      >
        {inner}
      </section>
    );
  }

  return (
    <section aria-label="Orçamento por WhatsApp" className="bg-brand-primary-700 px-5 py-8 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {inner}
      </motion.div>
    </section>
  );
}
