"use client";

import { useEffect } from "react";

/** Rolagem por seções: uma rolada do mouse leva à próxima seção [data-snap].
 *  Seções mais altas que a viewport permitem rolagem livre nativa; o snap
 *  só acontece quando o usuário atinge o limite da seção.
 *  Ativo apenas em desktop (pointer fine); mobile usa rolagem nativa. */

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

      if (goingDown) {
        const remaining = bottom - viewBottom;
        if (remaining > 2) {
          // Seção ainda tem conteúdo abaixo: rolagem livre nativa.
          // Se a rolada passaria do limite, trava exatamente nele.
          if (e.deltaY >= remaining) {
            e.preventDefault();
            window.scrollTo({
              top: bottom - window.innerHeight,
              behavior: "instant" as ScrollBehavior,
            });
            // Pequena pausa para a inércia não disparar o snap sem querer
            lastEndAt = performance.now();
          }
          return;
        }
        e.preventDefault();
        if (idx < sections.length - 1) {
          animateTo(sections[idx + 1].offsetTop);
        }
      } else {
        const remaining = viewTop - top;
        if (remaining > 2) {
          if (-e.deltaY >= remaining) {
            e.preventDefault();
            window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
            lastEndAt = performance.now();
          }
          return;
        }
        e.preventDefault();
        if (idx > 0) {
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
