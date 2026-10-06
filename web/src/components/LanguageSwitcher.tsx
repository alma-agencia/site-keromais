"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LANG_STORAGE_KEY,
  htmlLang,
  localeNames,
  locales,
  type Locale,
} from "@/i18n/config";
import { pathFor, resolvePathname } from "@/i18n/routes";

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19" />
      <path d="M12 2.5c2.6 2.6 4 5.9 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-5.9-4-9.5s1.4-6.9 4-9.5z" />
    </svg>
  );
}

/**
 * Language menu (globe icon + current code). Each option is a plain link to the same page in
 * the other language; the click also remembers the choice so the auto-detection stops
 * overriding it. PT lives in a different root layout than EN/ES, so the change is a full load.
 */
export default function LanguageSwitcher({
  lang,
  label,
  menuLabel,
  align = "right",
}: {
  lang: Locale;
  label: string;
  menuLabel: string;
  align?: "left" | "right";
}) {
  const pathname = usePathname();
  const page = resolvePathname(pathname)?.page ?? "home";
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(e: React.MouseEvent<HTMLAnchorElement>, target: Locale, href: string) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, target);
    } catch {
      /* private mode: the link still works, the choice just isn't remembered */
    }
    const plainClick =
      e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
    if (!plainClick) return;
    e.preventDefault();
    window.location.assign(href + window.location.hash);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${label}: ${localeNames[lang]}`}
        className="inline-flex h-11 items-center gap-1.5 rounded-nav px-2.5 text-[12.5px] font-semibold uppercase tracking-[1.2px] text-crust transition-colors hover:bg-gold/15 lg:h-10"
      >
        <GlobeIcon />
        <span aria-hidden="true">{lang}</span>
      </button>

      {open && (
        <ul
          aria-label={menuLabel}
          className={`absolute top-full z-[60] mt-2 min-w-[168px] rounded-panel border border-tan/20 bg-cream p-1 shadow-card-hover ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {locales.map((target) => {
            const href = pathFor(page, target);
            const current = target === lang;
            return (
              <li key={target}>
                <a
                  href={href}
                  lang={htmlLang[target]}
                  hrefLang={htmlLang[target]}
                  aria-current={current ? "true" : undefined}
                  onClick={(e) => choose(e, target, href)}
                  className={`flex items-center justify-between gap-4 rounded-nav px-3.5 py-2.5 text-[13.5px] font-medium text-crust transition-colors hover:bg-gold/15 ${
                    current ? "bg-gold/20 font-semibold" : ""
                  }`}
                >
                  {localeNames[target]}
                  <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-tan">
                    {target}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
