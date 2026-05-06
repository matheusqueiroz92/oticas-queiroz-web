/**
 * `@oticas/erp-sdk` — cliente HTTP tipado para a API pública do ERP da Óticas Queiroz.
 *
 * Por que existir um SDK e não chamar fetch direto?
 *
 * - Validamos toda resposta com Zod, então tipos batem com a realidade do servidor.
 * - Mapeamos erros HTTP para erros tipados do domínio (`OrderNotFoundError` etc).
 * - Uma única instância é configurada com baseUrl + apiKey; consumers não precisam saber.
 */

export { ErpClient, createErpClient } from './client';
export type { ErpClientOptions } from './client';
