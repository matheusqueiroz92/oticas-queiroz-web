import { siteConfig } from '@/config/site';

const WHATSAPP_CONSULTATION_MESSAGE =
  'Olá! Gostaria de solicitar um horário para consulta oftalmológica com o oftalmologista parceiro (Oftalmedic). Poderiam me orientar sobre disponibilidade?';

/** Link WhatsApp com mensagem pré-preenchida para solicitar horário (confirmação manual pela equipe). */
export function getConsultationWhatsAppLink(): string {
  const base = siteConfig.social.whatsappLink;
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}text=${encodeURIComponent(WHATSAPP_CONSULTATION_MESSAGE)}`;
}

export const healthVisualCopy = {
  partnerName: 'Oftalmedic',
  disclaimer:
    'O agendamento é feito pela nossa equipe por telefone ou WhatsApp. Não é teleconsulta nem confirmação automática de horário pelo site.',
} as const;
