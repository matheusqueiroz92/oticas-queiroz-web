import { siteConfig } from '@/config/site';

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
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        role="img"
        aria-labelledby="wa-title"
      >
        <title id="wa-title">WhatsApp</title>
        <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.12 1.6 5.92L0 24l6.43-1.69a11.84 11.84 0 005.61 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.42zM12.05 21.6h-.01a9.74 9.74 0 01-4.97-1.36l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.78 9.78 0 01-1.51-5.21c0-5.4 4.4-9.79 9.8-9.79a9.74 9.74 0 016.94 2.87 9.71 9.71 0 012.86 6.93c0 5.4-4.4 9.86-9.73 9.86z" />
      </svg>
    </a>
  );
}
