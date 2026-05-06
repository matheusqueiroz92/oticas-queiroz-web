# ADR-0001 — Monorepo com Turborepo + pnpm

## Status

`Aceito` — 2026-05-05

## Contexto

O ecossistema web da Óticas Queiroz tem múltiplos artefatos (site Next.js, packages compartilhados de domínio e SDK do ERP, automações do n8n) que evoluem juntos. O ERP existente já está num monorepo separado (`oticas-queiroz-monorepo`).

Precisamos de uma estratégia de repositório que permita compartilhar código entre site e (futuramente) outros apps, sem republicar pacotes npm a cada mudança.

## Decisão

Adotar **monorepo separado** (`oticas-queiroz-web`) usando **Turborepo + pnpm workspaces**.

A integração com o ERP acontece via API HTTP, e o `@oticas/erp-sdk` é um package interno deste monorepo.

## Alternativas consideradas

- **Estender o monorepo do ERP.** Permitiria importar tipos diretamente, mas mistura escopos de manutenção e infla CI/CD do ERP. Escopo fica turvo.
- **Repositórios separados sem monorepo.** Site e SDK em repos diferentes exigiria publicar SDK toda vez que mudar — fricção alta para projeto solo.
- **Nx.** Mais features que Turborepo, porém com curva de aprendizado maior e poucos ganhos no nosso tamanho.

## Consequências

### Positivas

- Compartilhamento de tipos e SDK sem publicar npm.
- CI rápido com cache do Turborepo.
- Onboarding mais fácil — uma pasta, um `pnpm install`.

### Negativas / trade-offs

- Repo cresce conforme adicionamos apps; mitigado por scopes claros (`apps/`, `packages/`).
- Não é trivial mover um package para repo separado depois (mas é factível).

### Riscos

- pnpm workspace incompatibilidade com algumas libs antigas — improvável em 2026.

## Notas

- `pnpm-workspace.yaml` define `apps/*` e `packages/*`.
- `turbo.json` define o pipeline: lint → typecheck → test → build.
