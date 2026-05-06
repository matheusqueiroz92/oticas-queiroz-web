# ADR-0002 — Next.js 16 (App Router) como framework do site

## Status

`Aceito` — 2026-05-05

## Contexto

O site da Óticas Queiroz precisa servir três usos com requisitos diferentes:

1. **Site institucional / vitrine** — alto SEO, performance crítica em mobile, conteúdo estático/semi-dinâmico.
2. **Portal do cliente autenticado** — interatividade, dados do ERP, baixa latência.
3. **Landing pages de campanhas** — alto throughput, tracking de conversão, edição rápida.

Precisamos de um framework que cubra os três sem fragmentar o stack.

## Decisão

Usar **Next.js 16 com App Router**.

- **Server Components por padrão** — minimiza JS no cliente.
- **Route Groups** (`(marketing)`, `(cliente)`, `(campanhas)`) — layouts isolados sem afetar URL.
- **Server Actions** — formulários sem boilerplate de API.
- **Streaming + Suspense** — UX melhor em consultas ao ERP.
- **next/image, next/font** — otimização nativa.
- **Metadata API** — SEO programático tipado.

## Alternativas consideradas

- **React + Vite (SPA)** — leve em dev, mas SEO precário. Descartado pelo objetivo de vitrine pública.
- **Astro** — excelente para sites estáticos, mas hidratação parcial complica o portal autenticado.
- **Remix** — bom DX, mas comunidade menor, menos plugins/recipes para nosso caso.

## Consequências

### Positivas

- SEO de primeira sem trabalho extra.
- Vercel deploy nativo.
- Suporte oficial para React 19, fonts, imagens.

### Negativas / trade-offs

- Lock-in moderado em Vercel (mitigável: builds podem rodar em containers).
- App Router ainda evolui — APIs podem mudar.

### Riscos

- Aprendizado de Server Components pode confundir contribuidores acostumados a SPA.
