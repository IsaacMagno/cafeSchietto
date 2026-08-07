"use client";

import { useEffect } from "react";

/** Rolagem por seções: uma rolada do mouse leva à próxima seção [data-snap].
 *  Seções mais altas que a viewport rolam internamente antes de avançar.
 *  Ativo apenas em desktop (pointer fine); mobile usa scroll-snap nativo via CSS. */

const DURATION_MS = 950;
const COOLDOWN_MS = 400;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function SectionSnapScroll() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-snap]")
    );
    if (sections.length < 2) return;

    let animating = false;
    let lastEndAt = 0;
    let raf = 0;

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const animateTo = (rawTarget: number) => {
      const target = Math.max(0, Math.min(rawTarget, maxScroll()));
      const start = window.scrollY;
      const dist = target - start;
      if (Math.abs(dist) < 2) return;

      animating = true;
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / DURATION_MS);
        window.scrollTo({
          top: start + dist * easeInOutCubic(p),
          behavior: "instant" as ScrollBehavior,
        });
        if (p < 1) {
          raf = requestAnimationFrame(step);
        } else {
          animating = false;
          lastEndAt = performance.now();
        }
      };
      raf = requestAnimationFrame(step);
    };

    const currentIndex = () => {
      const y = window.scrollY + 8;
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= y) idx = i;
      }
      return idx;
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;

      // Ignora inércia do trackpad durante/logo após a animação
      if (animating || performance.now() - lastEndAt < COOLDOWN_MS) {
        e.preventDefault();
        return;
      }

      const goingDown = e.deltaY > 0;
      const idx = currentIndex();
      const section = sections[idx];
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const viewTop = window.scrollY;
      const viewBottom = viewTop + window.innerHeight;

      e.preventDefault();

      if (goingDown) {
        if (bottom - viewBottom > 32) {
          // Ainda há conteúdo da seção abaixo — rola dentro dela
          animateTo(
            Math.min(bottom - window.innerHeight, viewTop + window.innerHeight * 0.85)
          );
        } else if (idx < sections.length - 1) {
          animateTo(sections[idx + 1].offsetTop);
        }
      } else {
        if (viewTop - top > 32) {
          animateTo(Math.max(top, viewTop - window.innerHeight * 0.85));
        } else if (idx > 0) {
          const prev = sections[idx - 1];
          // Entra pela parte final da seção anterior (caso ela seja mais alta que a tela)
          animateTo(
            Math.max(prev.offsetTop, prev.offsetTop + prev.offsetHeight - window.innerHeight)
          );
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
