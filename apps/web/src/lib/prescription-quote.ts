import { siteConfig } from '@/config/site';

const PRESCRIPTION_WHATSAPP_MESSAGE =
  'Olá! Gostaria de enviar minha receita e solicitar um orçamento online.';

/** Link WhatsApp com mensagem pré-preenchida para orçamento com receita. */
export function getPrescriptionQuoteWhatsAppLink(): string {
  const base = siteConfig.social.whatsappLink;
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}text=${encodeURIComponent(PRESCRIPTION_WHATSAPP_MESSAGE)}`;
}
