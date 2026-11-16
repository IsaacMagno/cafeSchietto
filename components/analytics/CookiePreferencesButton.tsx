"use client";

import { OPEN_COOKIE_PREFERENCES_EVENT } from "@/lib/cookies";

/** Reabre o aviso de cookies para a pessoa mudar a escolha. */
export default function CookiePreferencesButton({
  className = "cursor-pointer transition-colors duration-300 hover:text-caffe-gold",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))
      }
    >
      Preferências de cookies
    </button>
  );
}
