"use client";

import { useInView } from "@/hooks/useInView";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedReveal({
  children,
  className = "",
}: AnimatedRevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`${className} ${
        inView ? "animate-fade-in-up" : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
