/**
 * Erros tipados do domínio. O BFF e o frontend mapeiam estes erros
 * para mensagens amigáveis ao usuário e códigos HTTP apropriados.
 */

export class DomainError extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
    this.name = 'DomainError';
  }
}

export class OrderNotFoundError extends DomainError {
  constructor(osNumber: string) {
    super(`Pedido ${osNumber} não encontrado`, 'ORDER_NOT_FOUND');
  }
}

export class InvalidCPFError extends DomainError {
  constructor() {
    super('CPF inválido', 'INVALID_CPF');
  }
}

export class CustomerNotFoundError extends DomainError {
  constructor() {
    super('Cliente não encontrado', 'CUSTOMER_NOT_FOUND');
  }
}

export class RateLimitError extends DomainError {
  constructor() {
    super('Muitas tentativas. Aguarde alguns minutos.', 'RATE_LIMIT');
  }
}
