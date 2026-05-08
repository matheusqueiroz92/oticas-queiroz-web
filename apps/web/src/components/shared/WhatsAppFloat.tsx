import { siteConfig } from '@/config/site';
import { IconWhatsapp } from '../ui/icon-whatsapp';

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.social.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Óticas Queiroz no WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <span className="sr-only">WhatsApp</span>
      <IconWhatsapp fill="currentColor" width={28} height={28} />
    </a>
  );
}
