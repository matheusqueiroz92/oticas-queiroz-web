import { describe, expect, it } from 'vitest';
import { formatCPF, formatCurrency, formatOS, formatPhone } from './format';

describe('formatCurrency', () => {
  it('formata centavos como BRL', () => {
    expect(formatCurrency(12345)).toMatch(/R\$\s?123,45/);
  });
});

describe('formatCPF', () => {
  it('formata 11 dígitos com pontos e hífen', () => {
    expect(formatCPF('12345678900')).toBe('123.456.789-00');
  });
  it('lida com entrada parcial', () => {
    expect(formatCPF('123')).toBe('123');
  });
});

describe('formatOS', () => {
  it('aplica padding e prefixo', () => {
    expect(formatOS(17)).toBe('#000017');
    expect(formatOS('300017')).toBe('#300017');
  });
});

describe('formatPhone', () => {
  it('formata número BR com código do país', () => {
    expect(formatPhone('5577988018192')).toBe('(77) 98801-8192');
  });
  it('formata número BR sem código do país', () => {
    expect(formatPhone('77988018192')).toBe('(77) 98801-8192');
  });
});
