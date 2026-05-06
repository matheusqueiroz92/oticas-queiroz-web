import type { Config } from 'tailwindcss';

/**
 * Preset Tailwind compartilhado pelo monorepo.
 * `apps/web/tailwind.config.ts` extende este preset via `presets: [oticasPreset]`.
 *
 * Mantemos aqui apenas os tokens; o `content` deve ser definido localmente
 * em cada app/package consumidor para preservar tree-shaking.
 */
export const oticasPreset: Partial<Config> = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            50: 'rgb(var(--brand-primary-50) / <alpha-value>)',
            100: 'rgb(var(--brand-primary-100) / <alpha-value>)',
            500: 'rgb(var(--brand-primary-500) / <alpha-value>)',
            600: 'rgb(var(--brand-primary-600) / <alpha-value>)',
            700: 'rgb(var(--brand-primary-700) / <alpha-value>)',
            900: 'rgb(var(--brand-primary-900) / <alpha-value>)',
          },
          accent: {
            500: 'rgb(var(--brand-accent-500) / <alpha-value>)',
            600: 'rgb(var(--brand-accent-600) / <alpha-value>)',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
    },
  },
};

export default oticasPreset;
