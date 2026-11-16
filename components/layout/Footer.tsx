import Link from "next/link";
import CookiePreferencesButton from "@/components/analytics/CookiePreferencesButton";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";
import { MAPS_EMBED_URL, MAPS_URL } from "@/lib/maps";
import { SITE_NAV } from "@/lib/nav";
import {
  HOME_DECOR_URL,
  PHONES,
  PORTAL_URL,
  SOCIAL_LINKS,
} from "@/lib/social";

const CURRENT_YEAR = new Date().getFullYear();

const quietLink =
  "cursor-pointer transition-colors duration-300 hover:text-caffe-gold";

export default function Footer() {
  return (
    <footer className="bg-caffe-dark">
      <div
        className="h-px bg-gradient-to-r from-transparent via-caffe-gold/60 to-transparent"
        aria-hidden
      />

      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div>
            <div className="mb-5 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
              <h3 className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-caffe-gold">
                Como chegar
              </h3>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer font-body text-sm text-caffe-latte underline decoration-caffe-gold/50 underline-offset-4 transition-colors hover:text-caffe-gold"
                aria-label="Abrir localização no Google Maps"
              >
                Abrir no Google Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-xl ring-1 ring-caffe-mocha/40">
              <div className="relative aspect-[21/9] w-full min-h-[220px] sm:min-h-[280px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Caffè Schiètto no Google Maps"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center md:items-start">
              <Link
                href="/#"
                className="cursor-pointer font-display text-3xl italic text-caffe-cream transition-colors hover:text-caffe-gold"
                aria-label="Caffè Schiètto — voltar ao início"
              >
                Caffè Schiètto
              </Link>
              <span
                className="mt-2 block h-px w-10 bg-caffe-gold"
                aria-hidden
              />
              <p className="mt-4 font-body text-sm font-light text-caffe-latte">
                Cafeteria | Pedreira, SP
              </p>
              <p className="mt-2 font-body text-sm text-caffe-latte/70">
                Desde 2016
              </p>

              {/* Menção discreta à loja, que fica no mesmo endereço */}
              <div className="mt-8 border-t border-caffe-mocha/40 pt-5">
                <p className="font-body text-xs text-caffe-latte/60">
                  No mesmo endereço:
                </p>
                <a
                  href={HOME_DECOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-1 inline-block font-body text-sm font-light text-caffe-latte/80 ${quietLink}`}
                >
                  Schiètto Home Decor
                </a>
              </div>
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
                    className="cursor-pointer font-body text-caffe-latte transition-colors duration-300 hover:text-caffe-gold"
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
              <ul className="mt-4 space-y-1">
                {PHONES.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:+55${phone.replace(/\D/g, "")}`}
                      className="cursor-pointer font-body font-bold text-caffe-latte transition-colors hover:text-caffe-gold"
                      aria-label={`Ligar para ${phone}`}
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#25D366] px-5 py-2.5 font-body text-sm font-bold text-caffe-dark transition-colors hover:bg-[#1fb857]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
              <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
                <a
                  href={SOCIAL_LINKS.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-caffe-latte/40 text-caffe-cream transition-colors hover:border-caffe-gold hover:text-caffe-gold"
                  aria-label={`Instagram ${SOCIAL_LINKS.instagram.handle}`}
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-caffe-latte/40 text-caffe-cream transition-colors hover:border-caffe-gold hover:text-caffe-gold"
                  aria-label={`Facebook ${SOCIAL_LINKS.facebook.handle}`}
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-caffe-mocha/40 pt-8 text-center font-body text-xs font-light tracking-wide text-caffe-latte/60">
            <p>
              © {CURRENT_YEAR} Caffè Schiètto · Todos os direitos reservados ·
              Pedreira, SP
            </p>
            <p className="mt-2">
              <a href={PORTAL_URL} className={quietLink}>
                Conheça todos os espaços Schiètto
              </a>
            </p>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <Link href="/privacidade" className={quietLink}>
                Política de Privacidade
              </Link>
              <CookiePreferencesButton />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
