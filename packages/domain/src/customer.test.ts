import { describe, expect, it } from 'vitest';
import { isValidCPF } from './customer';

describe('isValidCPF', () => {
  it('aceita CPF válido', () => {
    expect(isValidCPF('11144477735')).toBe(true);
    expect(isValidCPF('111.444.777-35')).toBe(true);
  });

  it('rejeita CPF com todos os dígitos iguais', () => {
    expect(isValidCPF('11111111111')).toBe(false);
  });

  it('rejeita CPF com dígito verificador errado', () => {
    expect(isValidCPF('11144477734')).toBe(false);
  });

  it('rejeita strings com tamanho diferente de 11 dígitos', () => {
    expect(isValidCPF('123')).toBe(false);
    expect(isValidCPF('111444777350')).toBe(false);
  });
});
