import { cn } from '@/lib/cn';
import type * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-xl border border-border-strong bg-bg-elevated px-3 py-2 text-sm transition-colors placeholder:text-fg-subtle focus-visible:border-brand-primary-700/40 focus-visible:ring-2 focus-visible:ring-amber-500/30 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
