import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2.5rem', xl: '3rem' },
      screens: { '2xl': '1320px' },
    },
    extend: {
      colors: {
        brand: {
          primary: {
            50: 'rgb(var(--brand-primary-50) / <alpha-value>)',
            100: 'rgb(var(--brand-primary-100) / <alpha-value>)',
            200: 'rgb(var(--brand-primary-200) / <alpha-value>)',
            500: 'rgb(var(--brand-primary-500) / <alpha-value>)',
            600: 'rgb(var(--brand-primary-600) / <alpha-value>)',
            700: 'rgb(var(--brand-primary-700) / <alpha-value>)',
            800: 'rgb(var(--brand-primary-800) / <alpha-value>)',
            900: 'rgb(var(--brand-primary-900) / <alpha-value>)',
            950: 'rgb(var(--brand-primary-950) / <alpha-value>)',
          },
          accent: {
            50: 'rgb(var(--brand-accent-50) / <alpha-value>)',
            100: 'rgb(var(--brand-accent-100) / <alpha-value>)',
            200: 'rgb(var(--brand-accent-200) / <alpha-value>)',
            500: 'rgb(var(--brand-accent-500) / <alpha-value>)',
            600: 'rgb(var(--brand-accent-600) / <alpha-value>)',
            700: 'rgb(var(--brand-accent-700) / <alpha-value>)',
            900: 'rgb(var(--brand-accent-900) / <alpha-value>)',
          },
        },
        cream: {
          50: 'rgb(var(--cream-50) / <alpha-value>)',
          100: 'rgb(var(--cream-100) / <alpha-value>)',
          200: 'rgb(var(--cream-200) / <alpha-value>)',
          300: 'rgb(var(--cream-300) / <alpha-value>)',
        },
        navy: {
          700: 'rgb(var(--brand-primary-700) / <alpha-value>)',
          800: 'rgb(var(--brand-primary-800) / <alpha-value>)',
          900: 'rgb(var(--brand-primary-900) / <alpha-value>)',
          950: 'rgb(var(--brand-primary-950) / <alpha-value>)',
        },
        amber: {
          50: 'rgb(var(--amber-50) / <alpha-value>)',
          100: 'rgb(var(--amber-100) / <alpha-value>)',
          300: 'rgb(var(--amber-300) / <alpha-value>)',
          500: 'rgb(var(--amber-500) / <alpha-value>)',
          700: 'rgb(var(--amber-700) / <alpha-value>)',
        },
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-elevated': 'rgb(var(--color-bg-elevated) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        'fg-muted': 'rgb(var(--color-fg-muted) / <alpha-value>)',
        'fg-subtle': 'rgb(var(--color-fg-subtle) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms var(--ease-out) both',
        'fade-in': 'fade-in 500ms var(--ease-out) both',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
