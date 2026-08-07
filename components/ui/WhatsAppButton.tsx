import { SOCIAL_LINKS } from "@/lib/social";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

export default function WhatsAppButton() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer encomenda pelo WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-caffe-dark/30 transition-all duration-500 ease-premium hover:scale-110 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/30 sm:bottom-8 sm:left-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
