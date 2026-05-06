/**
 * `@oticas/domain` — entidades e value objects do domínio Óticas Queiroz.
 *
 * Mantemos aqui apenas tipos e regras puras, sem dependência de framework.
 * O ERP, o site e o n8n consomem este pacote para garantir uma linguagem
 * ubíqua compartilhada.
 */

export * from './order';
export * from './customer';
export * from './debt';
export * from './consultation';
export * from './prescription';
export * from './errors';
