"use client";

import { useInView } from "@/hooks/useInView";

interface AnimatedSectionHeaderProps {
  tag: string;
  title: string;
  tagClassName?: string;
  titleClassName?: string;
  align?: "center" | "left";
}

export default function AnimatedSectionHeader({
  tag,
  title,
  tagClassName = "font-body text-sm font-light uppercase tracking-widest text-caffe-mocha",
  titleClassName = "mt-4 font-display text-4xl font-bold text-caffe-espresso sm:text-5xl",
  align = "center",
}: AnimatedSectionHeaderProps) {
  const { ref, inView } = useInView();

  return (
    <header className={align === "center" ? "text-center" : "text-left"}>
      <div
        ref={ref}
        className={
          inView ? "animate-fade-in-up" : "translate-y-5 opacity-0"
        }
      >
        <p className={tagClassName}>{tag}</p>
        <h2 className={titleClassName}>{title}</h2>
        <div
          className={`mt-6 h-px w-[60px] bg-caffe-gold ${
            align === "center" ? "mx-auto" : ""
          }`}
          aria-hidden
        />
      </div>
    </header>
  );
}
