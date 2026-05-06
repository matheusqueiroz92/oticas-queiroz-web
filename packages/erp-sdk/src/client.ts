import {
  CustomerNotFoundError,
  type DebtSummary,
  type Order,
  OrderNotFoundError,
  RateLimitError,
  cpfSchema,
  debtSummarySchema,
  orderSchema,
} from '@oticas/domain';
import ky, { HTTPError, type KyInstance } from 'ky';
import { z } from 'zod';

export interface ErpClientOptions {
  baseUrl: string;
  apiKey: string;
  /** Timeout em ms. Default 8000. */
  timeoutMs?: number;
}

const envelopeSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: schema,
  });

export class ErpClient {
  private readonly http: KyInstance;

  constructor(opts: ErpClientOptions) {
    this.http = ky.create({
      prefixUrl: opts.baseUrl,
      headers: { 'X-API-Key': opts.apiKey },
      timeout: opts.timeoutMs ?? 8000,
      retry: { limit: 2, methods: ['get'], statusCodes: [408, 502, 503, 504] },
    });
  }

  private async unwrap<T extends z.ZodTypeAny>(
    request: Promise<unknown>,
    schema: T,
  ): Promise<z.infer<T>> {
    try {
      const json = await request;
      return envelopeSchema(schema).parse(json).data;
    } catch (err) {
      if (err instanceof HTTPError) {
        if (err.response.status === 404) {
          throw err;
        }
        if (err.response.status === 429) {
          throw new RateLimitError();
        }
      }
      throw err;
    }
  }

  /** Status público de um pedido pela O.S. */
  async getOrderStatus(osNumber: string): Promise<Order> {
    try {
      return await this.unwrap(
        this.http.get(`api/public/orders/${encodeURIComponent(osNumber)}/status`).json(),
        orderSchema,
      );
    } catch (err) {
      if (err instanceof HTTPError && err.response.status === 404) {
        throw new OrderNotFoundError(osNumber);
      }
      throw err;
    }
  }

  /** Resumo de débitos de um CPF. */
  async lookupDebts(rawCpf: string): Promise<DebtSummary> {
    const cpf = cpfSchema.parse(rawCpf);
    try {
      return await this.unwrap(
        this.http.post('api/public/debts/lookup', { json: { cpf } }).json(),
        debtSummarySchema,
      );
    } catch (err) {
      if (err instanceof HTTPError && err.response.status === 404) {
        throw new CustomerNotFoundError();
      }
      throw err;
    }
  }
}

/**
 * Helper de fábrica — equivalente a `new ErpClient(opts)` mas com sintaxe
 * mais agradável em código que prefere funções a classes.
 */
export function createErpClient(opts: ErpClientOptions): ErpClient {
  return new ErpClient(opts);
}
