'use client';

import { type Variants, motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealAs = 'div' | 'section' | 'article' | 'header' | 'p' | 'span';
type RevealVariant = 'fade' | 'line' | 'stagger-children';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: RevealAs;
  variant?: RevealVariant;
}

const EASE = [0.16, 1, 0.3, 1] as const;

function StaticWrapper({
  as,
  className,
  children,
}: {
  as: RevealAs;
  className?: string;
  children: ReactNode;
}) {
  if (as === 'section') return <section className={className}>{children}</section>;
  if (as === 'article') return <article className={className}>{children}</article>;
  if (as === 'header') return <header className={className}>{children}</header>;
  if (as === 'p') return <p className={className}>{children}</p>;
  if (as === 'span') return <span className={className}>{children}</span>;
  return <div className={className}>{children}</div>;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
  variant = 'fade',
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <StaticWrapper as={as} className={className}>
        {children}
      </StaticWrapper>
    );
  }

  if (variant === 'line') {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: { opacity: 0, y: y * 0.5 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: EASE, delay },
          },
        }}
        className={className}
      >
        <motion.span
          aria-hidden="true"
          className="mb-4 block h-px w-10 origin-left bg-brand-accent-500"
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.55, ease: EASE, delay },
            },
          }}
        />
        {children}
      </motion.div>
    );
  }

  if (variant === 'stagger-children') {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: delay },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
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

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
