import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns', 'motion'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.oticasqueiroz.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'oticasqueiroz.com.br',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Mantemos aqui os redirects das URLs antigas do WordPress.
      // Exemplo: { source: '/quem-somos.html', destination: '/quem-somos', permanent: true },
    ];
  },

  // Telemetria do Next desabilitada
  // (rode `npx next telemetry disable` no postinstall se preferir)
};

export default nextConfig;
