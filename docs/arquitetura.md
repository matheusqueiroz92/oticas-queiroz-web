# Arquitetura — visão geral

> Este documento é um resumo. A versão completa do plano (com diagramas, roadmap em fases, tokens de design e ADRs iniciais) está em `oticas-queiroz-arquitetura.md` na raiz dos outputs.

## Componentes

- **apps/web** — Next.js 16 (App Router), site público + portal cliente + landings + BFF (route handlers).
- **packages/domain** — Tipos puros do domínio (Order, Customer, Debt) com Zod.
- **packages/erp-sdk** — Cliente HTTP tipado para a API pública do ERP.
- **packages/ui** — Componentes compartilhados de marca.
- **automation/n8n-workflows** — Workflows do chatbot WhatsApp versionados.
- **infra/n8n** — Docker Compose do n8n + Postgres + Redis + Caddy.

## Fluxos de dados

```
Visitante  →  Vercel (Next)  →  ERP API (X-API-Key)
Cliente WA →  Cloud API  →  n8n  →  Redis (sessão)
                                 →  ERP API (X-API-Key)
```

## Princípios

- Server Components por padrão.
- Validação Zod na borda (formulários, responses do ERP).
- Erros tipados de domínio mapeados para HTTP.
- Cache no edge com tag invalidation.
- Auth passwordless via WhatsApp OTP (futuro).

## Próximos documentos

- `runbooks/deploy.md` — passo a passo de deploy.
- `runbooks/incident.md` — playbook de incidentes.
- `adr/0003+` — decisões futuras.
