import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge de classes Tailwind com resolução de conflitos.
 * Use sempre que combinar classes condicionais, especialmente em
 * componentes que aceitam `className` por props.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
