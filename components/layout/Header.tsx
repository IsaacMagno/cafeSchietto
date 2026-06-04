"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre", ariaLabel: "Ir para a seção Sobre" },
  { label: "Cardápio", href: "#cardapio", ariaLabel: "Ir para o cardápio" },
  { label: "Eventos", href: "#eventos", ariaLabel: "Ir para a seção de eventos" },
  {
    label: "Localização",
    href: "#localizacao",
    ariaLabel: "Ir para localização e contato",
  },
] as const;

function NavLink({
  href,
  label,
  ariaLabel,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`group relative font-body text-sm font-light tracking-wide text-caffe-cream transition-colors hover:text-caffe-gold ${className}`}
    >
      {label}
      <span
        className="absolute -bottom-1 left-0 h-px w-0 bg-caffe-gold transition-all duration-300 ease-out group-hover:w-full"
        aria-hidden
      />
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled
          ? "bg-caffe-espresso shadow-lg shadow-caffe-dark/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
        <a
          href="#"
          className="group shrink-0"
          onClick={closeMenu}
          aria-label="Caffè Schiètto — voltar ao início"
        >
          <span className="font-display text-xl font-bold tracking-tight text-caffe-cream transition-colors group-hover:text-caffe-gold sm:text-2xl md:text-3xl">
            Caffè Schiètto
          </span>
          <span
            className="mt-1.5 block h-px w-10 bg-caffe-gold transition-all duration-300 group-hover:w-12"
            aria-hidden
          />
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex lg:gap-10"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              ariaLabel={link.ariaLabel}
            />
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-caffe-cream transition-colors hover:text-caffe-gold lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {menuOpen ? (
            <X size={26} strokeWidth={1.5} aria-hidden />
          ) : (
            <Menu size={26} strokeWidth={1.5} aria-hidden />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-6 border-t border-caffe-mocha/50 bg-caffe-espresso px-6 py-8"
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              ariaLabel={link.ariaLabel}
              onClick={closeMenu}
              className="text-lg"
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
