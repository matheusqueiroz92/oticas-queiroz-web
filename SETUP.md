# Setup — primeiros passos

Este guia leva o monorepo do zero até o site rodando localmente em `http://localhost:3000` e o repositório publicado no GitHub.

## 1. Pré-requisitos

```bash
# Node 20.10+ (use nvm)
nvm install      # lê .nvmrc
nvm use

# pnpm 9
corepack enable
corepack prepare pnpm@9.12.0 --activate
pnpm --version   # deve mostrar 9.12.0
```

## 2. Instalação local

```bash
# Na raiz do monorepo
pnpm install

# Configurar variáveis do app web
cp apps/web/.env.local.example apps/web/.env.local
# Edite apps/web/.env.local — gere AUTH_SECRET com:
openssl rand -base64 32

# Instalar Playwright browsers (só na primeira vez)
pnpm --filter @oticas/web exec playwright install --with-deps chromium
```

## 3. Rodando

```bash
# Site em modo dev (Turbopack)
pnpm dev:web
# → http://localhost:3000

# Em outro terminal: rodar testes em watch
pnpm test:watch

# Lint
pnpm lint

# Typecheck
pnpm typecheck
```

## 4. Criando o repositório no GitHub

Como a autenticação automática do GitHub nessa sessão falhou, o passo a passo abaixo é o mais rápido:

### Opção A — pelo navegador (mais simples)

1. Acesse <https://github.com/new>
2. **Repository name:** `oticas-queiroz-web`
3. **Description:** "Site institucional, portal do cliente e automações WhatsApp da Óticas Queiroz"
4. **Visibility:** Private
5. **NÃO marque** "Initialize with README/.gitignore/license" (já temos)
6. Crie o repo, copie a URL SSH ou HTTPS
7. No terminal, dentro da pasta do monorepo:

   ```bash
   git init
   git add .
   git commit -m "chore: bootstrap do monorepo Óticas Queiroz Web"
   git branch -M main
   git remote add origin git@github.com:matheusqueiroz92/oticas-queiroz-web.git
   git push -u origin main
   ```

### Opção B — via GitHub CLI (1 comando)

```bash
# Se ainda não tiver
brew install gh   # macOS
# ou: winget install --id GitHub.cli   # Windows

gh auth login
gh repo create matheusqueiroz92/oticas-queiroz-web --private --source=. --push --description "Site, portal e automações da Óticas Queiroz"
```

### Opção C — pelo MCP do Claude (depois da autenticação)

Rode no terminal do Claude:

```
/mcp
```

Escolha o servidor `plugin:engineering:github` e siga o fluxo OAuth no browser. Depois é só me pedir "criar o repo `oticas-queiroz-web`" que eu sigo daqui.

## 5. Configurando GitHub Actions

Após o `git push`, vá em **Settings → Secrets and variables → Actions** e adicione (opcional, só se quiser cache do Turbo Remote):

- `TURBO_TOKEN` — token gerado em <https://vercel.com/account/tokens>
- `TURBO_TEAM` — slug do seu time na Vercel

O CI já está configurado em `.github/workflows/ci.yml` e roda automaticamente em PRs e pushes para `main`.

## 6. Próximos passos (em ordem)

1. **Logo SVG real** — substituir o `Logo.tsx` placeholder em `packages/ui/src/Logo.tsx` pelo SVG vetorizado da identidade.
2. **shadcn/ui** — instalar componentes base:

   ```bash
   pnpm --filter @oticas/web dlx shadcn@latest init
   pnpm --filter @oticas/web dlx shadcn@latest add button input label form dialog dropdown-menu toast
   ```

3. **Endpoints públicos no ERP** — implementar no `oticas-queiroz-monorepo`:
   - `GET /api/public/orders/:os/status`
   - `POST /api/public/debts/lookup`
   - `GET /api/public/consultation-slots`
   - `POST /api/public/leads`

4. **Vercel deploy** — conectar repo na Vercel e configurar env vars.

5. **Verificação Meta Business** — começar processo de WhatsApp Business já (caminho crítico de 2-3 semanas).

## 7. Convenções

- **Branches:** `feat/*`, `fix/*`, `chore/*`. Nunca commit direto em `main`.
- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`).
- **PRs:** template em `.github/PULL_REQUEST_TEMPLATE.md` se preenche sozinho.
- **ADRs:** toda decisão arquitetural relevante vira ADR em `docs/adr/`. Use o `TEMPLATE.md`.

## 8. Comandos rápidos

```bash
pnpm dev:web              # Dev server
pnpm build                # Build de produção
pnpm lint                 # Biome
pnpm lint:fix             # Biome --write
pnpm typecheck            # tsc em todos os packages
pnpm test                 # Vitest
pnpm test:e2e             # Playwright
pnpm clean                # Limpa caches e node_modules

# n8n (na fase 5)
cd infra/n8n
cp .env.example .env       # Edite com seus secrets
docker compose up -d
```

## 9. Suporte

Documentação completa em `docs/`. Para arquitetura macro, veja `docs/arquitetura.md` (resumido) ou o documento original `oticas-queiroz-arquitetura.md`.
