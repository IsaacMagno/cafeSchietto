import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";
import { SITE_NAV } from "@/lib/nav";
import { SOCIAL_LINKS } from "@/lib/social";

const PRIMARY_PHONE = "(19) 3893-7377";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer data-snap className="bg-caffe-dark">
      <div
        className="h-px bg-gradient-to-r from-transparent via-caffe-gold/60 to-transparent"
        aria-hidden
      />

      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center md:items-start">
              <Link
                href="#"
                className="font-display text-3xl italic text-caffe-cream transition-colors hover:text-caffe-gold"
                aria-label="Caffè Schiètto — voltar ao início"
              >
                Caffè Schiètto
              </Link>
              <span
                className="mt-2 block h-px w-10 bg-caffe-gold"
                aria-hidden
              />
              <p className="mt-4 font-body text-sm font-light text-caffe-latte">
                Cafeteria Gourmet | Pedreira, SP
              </p>
              <p className="mt-2 font-body text-sm text-caffe-mocha">
                Desde 2016 ♥
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-caffe-gold">
                Explore
              </h3>
              <nav
                className="mt-6 flex flex-col gap-3"
                aria-label="Navegação do rodapé"
              >
                {SITE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-body text-caffe-latte transition-colors duration-300 hover:text-caffe-gold"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-caffe-gold">
                Contato
              </h3>
              <address className="mt-6 space-y-2 font-body not-italic text-caffe-latte">
                <p>Rua Primo Frazato, 30</p>
                <p>Centro — Pedreira, SP</p>
              </address>
              <a
                href="tel:1938937377"
                className="mt-4 font-body font-bold text-caffe-latte transition-colors hover:text-caffe-gold"
                aria-label={`Ligar para ${PRIMARY_PHONE}`}
              >
                {PRIMARY_PHONE}
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-sm border border-[#25D366]/60 px-4 py-2 font-body text-sm text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                aria-label="Encomendar pelo WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Encomendar pelo WhatsApp
              </a>
              <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
                <a
                  href={SOCIAL_LINKS.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-caffe-latte/40 text-[#25D366] transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10"
                  aria-label="WhatsApp — fazer encomenda"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-caffe-latte/40 text-caffe-cream transition-colors hover:border-caffe-gold hover:text-caffe-gold"
                  aria-label={`Instagram ${SOCIAL_LINKS.instagram.handle}`}
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-caffe-latte/40 text-caffe-cream transition-colors hover:border-caffe-gold hover:text-caffe-gold"
                  aria-label={`Facebook ${SOCIAL_LINKS.facebook.handle}`}
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-caffe-mocha/40 pt-8">
            <p className="text-center font-body text-xs font-light tracking-wide text-caffe-latte/60">
              © {CURRENT_YEAR} Caffè Schiètto · Todos os direitos reservados ·
              Pedreira, SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
