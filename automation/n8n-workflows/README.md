# n8n Workflows — versionados

Este diretório contém os JSONs exportados dos workflows do n8n da Óticas Queiroz.

## Workflows planejados (Fase 5 do roadmap)

| Arquivo | Função |
|---------|--------|
| `wa-router.json` | Webhook receiver. Despacha para sub-workflow conforme estado da sessão. |
| `wa-menu.json` | Envia lista interativa com as 4 opções (status, débitos, orçamento, consulta). |
| `wa-order-status.json` | Recebe O.S., consulta ERP, retorna status formatado. |
| `wa-debts.json` | Recebe CPF, valida, consulta ERP, retorna parcelas em aberto. |
| `wa-budget-request.json` | Captura receita, salva como lead, notifica vendedores. |
| `wa-consultation.json` | Lista slots disponíveis, agenda no ERP. |
| `wa-fallback.json` | Não-entendi após 3 tentativas → handoff humano. |
| `wa-handoff.json` | Silencia bot por 24h em conversas onde humano assumiu. |

## Como exportar / importar

```bash
# Exportar todos os workflows ativos (rodar dentro do container n8n)
docker compose exec n8n n8n export:workflow --all --pretty --output=/tmp/workflows
docker cp $(docker compose ps -q n8n):/tmp/workflows ./

# Importar de volta após alteração local
docker compose exec n8n n8n import:workflow --separate --input=/tmp/workflows
```

## Convenções

- **Nomeação:** `wa-{escopo}.json` para workflows do WhatsApp.
- **Variáveis sensíveis** ficam em **Credentials** do n8n, nunca embutidas no JSON.
- **Versionar é mandatório:** toda mudança de workflow vira commit.
