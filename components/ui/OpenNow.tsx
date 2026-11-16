"use client";

import { useEffect, useState } from "react";
import { addDays, isHoliday } from "@/lib/holidays";

type Day = { open: [number, number]; close: [number, number] };

// Mantenha em sincronia com Location.tsx e CafeJsonLd.tsx.
const WEEKDAY: Day = { open: [9, 0], close: [18, 0] };
// Sábado, domingo e feriados
const WEEKEND: Day = { open: [8, 30], close: [18, 0] };

const pad = (n: number) => String(n).padStart(2, "0");
const label = ([h, m]: [number, number]) =>
  m ? `${pad(h)}h${pad(m)}` : `${pad(h)}h`;
const minutes = ([h, m]: [number, number]) => h * 60 + m;

type BrazilNow = {
  year: number;
  month: number;
  day: number;
  /** 0 = domingo ... 6 = sábado */
  weekday: number;
  minutes: number;
};

/** Data e hora atuais no horário de Brasília. */
function nowInBrazil(): BrazilNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
      get("weekday"),
    ),
    minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")),
  };
}

function scheduleFor(
  year: number,
  month: number,
  day: number,
  weekday: number,
): Day {
  const weekend = weekday === 0 || weekday === 6;
  return weekend || isHoliday(year, month, day) ? WEEKEND : WEEKDAY;
}

type OpenState = { open: boolean; text: string };

function compute(): OpenState {
  const now = nowInBrazil();
  const today = scheduleFor(now.year, now.month, now.day, now.weekday);
  if (now.minutes >= minutes(today.open) && now.minutes < minutes(today.close)) {
    return { open: true, text: `Aberto agora · até ${label(today.close)}` };
  }
  if (now.minutes < minutes(today.open)) {
    return { open: false, text: `Abre hoje às ${label(today.open)}` };
  }
  const [year, month, day] = addDays(now.year, now.month, now.day, 1);
  const tomorrow = scheduleFor(year, month, day, (now.weekday + 1) % 7);
  return { open: false, text: `Abre amanhã às ${label(tomorrow.open)}` };
}

/**
 * Etiqueta "Aberto agora" calculada no horário de Brasília, reconhecendo os
 * feriados nacionais (veja lib/holidays.ts). Só aparece depois de o navegador
 * carregar (evita diferença entre servidor e cliente).
 */
export default function OpenNow({ className = "" }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const tick = () => setState(compute());
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 60_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  if (!state) return null;

  return (
    <p
      className={`inline-flex items-center gap-2 font-body text-xs tracking-wide ${className}`}
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${
          state.open ? "bg-[#25D366]" : "bg-caffe-gold"
        }`}
      />
      {state.text}
    </p>
  );
}
