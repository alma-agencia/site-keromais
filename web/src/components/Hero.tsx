"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fmt, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { pathFor } from "@/i18n/routes";

type Slide = {
  key: keyof Dict["hero"]["slides"];
  /**
   * "photo": a picture that is cropped to fill the hero, with the site headline + CTA over it.
   * "poster": finished artwork with its own text (e.g. an event banner) — shown whole, never
   * cropped, and without the site headline / dark overlay competing with it.
   */
  kind: "photo" | "poster";
  desktop: string;
  mobile: string;
  /** How long the slide stays before auto-advancing. */
  ms: number;
};

// First slide is the main one. To add a banner, add an entry here and its alt text to the dictionaries.
const SLIDES: Slide[] = [
  {
    key: "expoind",
    kind: "poster",
    desktop: "/assets/expoind-2026.jpg",
    mobile: "/assets/expoind-2026-mobile.jpg",
    ms: 8000,
  },
  {
    key: "paes",
    kind: "photo",
    desktop: "/assets/banner1-paes.jpg",
    mobile: "/assets/banner1-paes-mobile.jpg",
    ms: 5500,
  },
  {
    key: "salgados",
    kind: "photo",
    desktop: "/assets/banner2-salgados.jpg",
    mobile: "/assets/banner2-salgados-mobile.jpg",
    ms: 5500,
  },
];

export default function Hero({ lang, t }: { lang: Locale; t: Dict["hero"] }) {
  const [slide, setSlide] = useState(0);
  const count = SLIDES.length;
  const poster = SLIDES[slide].kind === "poster";

  const go = useCallback(
    (i: number) => setSlide(((i % count) + count) % count),
    [count],
  );

  // Warm the cache with the variant this device actually shows, so a crossfade never lands on a
  // slide whose (lazy) image hasn't arrived yet.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)").matches;
    SLIDES.forEach((s) => {
      new window.Image().src = wide ? s.desktop : s.mobile;
    });
  }, []);

  // Auto-advance (per-slide dwell time); restarts when the slide changes; off under reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setSlide((s) => (s + 1) % count),
      SLIDES[slide].ms,
    );
    return () => clearTimeout(timer);
  }, [count, slide]);

  // Light artwork needs dark controls, and its text runs close to the edges: below xl the arrows
  // sit in the bottom strip (beside the dots) instead of over the artwork. Photos keep them centered.
  const arrow = `absolute z-[4] flex h-11 w-11 items-center justify-center rounded-full border text-xl leading-none backdrop-blur-[2px] transition-colors hover:border-gold hover:bg-gold hover:text-crust ${
    poster
      ? "bottom-3.5 border-crust/35 bg-white/75 text-crust xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2"
      : "top-1/2 -translate-y-1/2 border-cream/50 bg-ink/30 text-cream"
  }`;

  return (
    <section
      id="hero"
      className="relative isolate min-h-[var(--hero-h)] overflow-hidden bg-ink text-cream [--hero-h:620px] md:[--hero-h:max(600px,min(41.67vw,calc(100vh_-_136px)))]"
    >
      {/* Art-directed crossfade carousel: portrait on mobile, landscape on desktop */}
      {SLIDES.map((s, i) => {
        const fit = s.kind === "poster" ? "object-contain" : "object-cover";
        return (
          <div
            key={s.key}
            aria-hidden={i !== slide}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-out"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            {s.kind === "poster" && (
              <>
                {/* Blurred copy fills any letterbox space so the artwork never sits on flat bars */}
                <Image
                  src={s.mobile}
                  alt=""
                  fill
                  sizes="100vw"
                  className="scale-125 object-cover blur-2xl md:hidden"
                />
                <Image
                  src={s.desktop}
                  alt=""
                  fill
                  sizes="100vw"
                  className="hidden scale-125 object-cover blur-2xl md:block"
                />
              </>
            )}
            <Image
              src={s.mobile}
              alt={t.slides[s.key].alt}
              fill
              sizes="100vw"
              className={`${fit} md:hidden`}
            />
            <Image
              src={s.desktop}
              alt=""
              fill
              sizes="100vw"
              className={`hidden ${fit} md:block`}
            />
          </div>
        );
      })}

      {/* Darkening overlay for legibility (photos only) */}
      <div
        className={`pointer-events-none absolute inset-0 z-[2] bg-linear-to-b from-ink/55 to-ink/35 transition-opacity duration-[900ms] ${
          poster ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(slide - 1)}
        aria-label={t.prev}
        className={`${arrow} left-4`}
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(slide + 1)}
        aria-label={t.next}
        className={`${arrow} right-4`}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-[4] flex -translate-x-1/2 gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => go(i)}
            aria-label={fmt(t.goTo, { n: i + 1 })}
            aria-current={i === slide ? "true" : undefined}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`block h-2.5 rounded-full transition-all ${
                i === slide
                  ? `w-7 ${poster ? "bg-crust" : "bg-gold"}`
                  : `w-2.5 ${poster ? "bg-crust/35" : "bg-cream/45"}`
              }`}
            />
          </button>
        ))}
      </div>

      {/* Copy — fades out over poster slides (the heading stays in the page for screen readers) */}
      <div
        className={`relative z-[3] mx-auto flex min-h-[var(--hero-h)] max-w-[1280px] flex-col items-center justify-center px-7 py-14 text-center transition-opacity duration-[900ms] md:items-start md:px-14 md:py-24 md:text-left ${
          poster ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-[440px] md:max-w-[540px]">
          <h1
            className="font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.5px] md:text-[clamp(48px,5vw,76px)]"
            style={{
              textShadow:
                "0 2px 24px color-mix(in srgb, var(--color-ink) 45%, transparent)",
            }}
          >
            {t.title.line1}
            <br />
            <span className="font-medium italic text-gold">{t.title.accent}</span>
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5 md:justify-start">
            <Link
              href={pathFor("products", lang)}
              tabIndex={poster ? -1 : undefined}
              className="inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              {t.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
