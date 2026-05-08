import { cn } from './cn';

export interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-7 text-base',
  md: 'h-9 text-xl',
  lg: 'h-12 text-2xl',
};

/**
 * Logo placeholder — substituir por SVG vetorizado da identidade real
 * quando os assets de marca estiverem prontos.
 */
export function Logo({ variant = 'default', size = 'md', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-bold font-display',
        variant === 'white' ? 'text-white' : 'text-brand-primary-500',
        sizes[size],
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'grid aspect-square place-items-center rounded-md font-bold',
          variant === 'white'
            ? 'bg-white text-brand-primary-700'
            : 'bg-brand-primary-500 text-white',
          sizes[size],
        )}
      >
        OQ
      </span>
      <span>Óticas Queiroz</span>
    </span>
  );
}
