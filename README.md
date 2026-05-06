# Óticas Queiroz — Web

Monorepo do ecossistema web da Óticas Queiroz: site institucional, vitrine virtual, portal do cliente, landing pages e automações WhatsApp.

> Este monorepo é **separado** do ERP (`oticas-queiroz-monorepo`). A integração entre os dois projetos acontece via API pública do ERP, consumida por meio do package interno `@oticas/erp-sdk`.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript 5.6
- **Estilo:** TailwindCSS 4 + shadcn/ui + tailwind-variants
- **Conteúdo:** MDX (blog, coleções, landing pages)
- **Validação:** Zod
- **Forms:** React Hook Form
- **Data fetching:** TanStack Query (cliente) + fetch nativo (servidor)
- **Testes:** Vitest + Testing Library + Playwright
- **Qualidade:** Biome + Lefthook + Commitlint
- **Monorepo:** Turborepo + pnpm workspaces

## Estrutura

```
oticas-queiroz-web/
├── apps/
│   └── web/                    # Site Next.js (público + portal cliente + landings)
├── packages/
│   ├── domain/                 # Entidades, value objects, tipos puros TS
│   ├── erp-sdk/                # Cliente HTTP tipado para o ERP
│   ├── ui/                     # Componentes compartilhados de marca
│   ├── config-ts/              # tsconfigs base
│   ├── config-tailwind/        # Preset Tailwind compartilhado
│   └── config-biome/           # biome.json compartilhado (futuro)
├── automation/
│   └── n8n-workflows/          # JSONs versionados dos workflows
├── infra/
│   ├── caddy/                  # Caddyfile do reverse proxy do n8n
│   └── n8n/                    # docker-compose do n8n
└── docs/
    ├── adr/                    # Architectural Decision Records
    └── runbooks/               # Procedimentos operacionais
```

## Pré-requisitos

- **Node.js >= 20.10** (use `nvm use` para usar a versão do `.nvmrc`)
- **pnpm >= 9.0** (`corepack enable` ou `npm i -g pnpm`)

## Setup inicial

```bash
# Clonar
git clone https://github.com/matheusqueiroz92/oticas-queiroz-web.git
cd oticas-queiroz-web

# Instalar dependências (todos os workspaces)
pnpm install

# Configurar variáveis do app web
cp apps/web/.env.local.example apps/web/.env.local
# Edite apps/web/.env.local com seus valores

# Iniciar desenvolvimento
pnpm dev:web
```

O app vai abrir em <http://localhost:3000>.

## Comandos úteis

```bash
pnpm dev                # Roda todos os apps em modo dev
pnpm dev:web            # Roda só o apps/web
pnpm build              # Build de produção em todos os apps
pnpm lint               # Biome check
pnpm lint:fix           # Biome check --write
pnpm typecheck          # TypeScript em todos os pacotes
pnpm test               # Vitest em todos os pacotes
pnpm test:e2e           # Playwright (apps/web)
pnpm clean              # Limpa node_modules, .next, .turbo
```

## Convenções de commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona página de coleções
fix(orders): corrige formatação do número da O.S.
chore(deps): atualiza next para 16.1
docs(adr): adiciona ADR-0011 sobre cache
```

Tipos aceitos: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `perf`, `build`, `ci`, `revert`.

## Documentação

- [Arquitetura geral](./docs/arquitetura.md)
- [ADRs](./docs/adr/)
- [Runbooks](./docs/runbooks/)

## Licença

Privado. Todos os direitos reservados — Óticas Queiroz.
