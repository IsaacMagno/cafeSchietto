"use client";

import { useEffect, useRef } from "react";
import { finePointer, motionAllowed } from "@/lib/motion";

/**
 * Profundidade do topo: a foto anda mais devagar que a página e acompanha o
 * mouse. Não desenha nada; só escreve variáveis CSS na <section> onde está
 * (usadas por .hero-scroll, .hero-mouse e .hero-content no globals.css).
 */
export default function HeroParallax() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.parentElement;
    if (!section || !motionAllowed()) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      // Aba em segundo plano pode informar altura 0: nesse caso não mexe em nada.
      const viewport = window.innerHeight;
      if (!viewport) return;
      const y = Math.min(window.scrollY, viewport);
      section.style.setProperty("--sy", y.toFixed(1));
      section.style.setProperty("--hp", (y / viewport).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty(
        "--mx",
        ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3),
      );
      section.style.setProperty(
        "--my",
        ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3),
      );
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const mouse = finePointer();
    if (mouse) section.addEventListener("pointermove", onMove);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      if (mouse) section.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <span ref={ref} hidden />;
}
