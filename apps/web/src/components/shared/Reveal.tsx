'use client';

import { type Variants, motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealAs = 'div' | 'section' | 'article' | 'header' | 'p' | 'span';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: RevealAs;
}

/**
 * Reveal — wrapper que faz fade + translate quando entra no viewport.
 *
 * Respeita `prefers-reduced-motion`: se o usuário pediu menos animação,
 * renderiza estático sem motion.
 */
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    if (as === 'section') return <section className={className}>{children}</section>;
    if (as === 'article') return <article className={className}>{children}</article>;
    if (as === 'header') return <header className={className}>{children}</header>;
    if (as === 'p') return <p className={className}>{children}</p>;
    if (as === 'span') return <span className={className}>{children}</span>;
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
    },
  };

  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
}
