"use client";

import { useInView } from "@/hooks/useInView";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Atraso em ms — útil para efeito cascata em grades. */
  delay?: number;
}

export default function AnimatedReveal({
  children,
  className = "",
  delay = 0,
}: AnimatedRevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className} transition-all duration-1000 ease-premium ${
        inView
          ? "translate-y-0 opacity-100 blur-none"
          : "translate-y-6 opacity-0 blur-[3px]"
      }`}
    >
      {children}
    </div>
  );
}
