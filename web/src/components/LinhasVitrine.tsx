"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { linhas } from "@/lib/site-data";
import LinhaCard from "./LinhaCard";

const AUTOPLAY_MS = 4500;
const SCROLL_PER_STEP = 200; // px of page scroll to advance one card

export default function LinhasVitrine() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastPageY = useRef(0);
  const scrollAccum = useRef(0);
  const [active, setActive] = useState(0);
  const n = linhas.length;

  const goTo = useCallback(
    (i: number) => {
      const sc = carouselRef.current;
      if (!sc) return;
      const idx = ((i % n) + n) % n;
      const el = sc.children[idx] as HTMLElement;
      sc.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
      activeRef.current = idx;
      setActive(idx);
    },
    [n],
  );

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    timerRef.current = setInterval(
      () => goTo(activeRef.current + 1),
      AUTOPLAY_MS,
    );
  }, [goTo]);

  useEffect(() => {
    startAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAuto]);

  // Sync active dot as carousel scrolls natively (touch swipe)
  useEffect(() => {
    const sc = carouselRef.current;
    if (!sc) return;
    let raf = 0;
    const onCarouselScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const items = Array.from(sc.children) as HTMLElement[];
        const center = sc.scrollLeft + sc.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        items.forEach((el, i) => {
          const c = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(c - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        if (best !== activeRef.current) {
          activeRef.current = best;
          setActive(best);
        }
      });
    };
    sc.addEventListener("scroll", onCarouselScroll, { passive: true });
    return () => {
      sc.removeEventListener("scroll", onCarouselScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll-linked: page scroll advances the carousel while section is visible
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lastPageY.current = window.scrollY;

    const onPageScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.75 &&
        rect.bottom > window.innerHeight * 0.25;

      if (inView) {
        const delta = window.scrollY - lastPageY.current;
        scrollAccum.current += delta;

        if (scrollAccum.current >= SCROLL_PER_STEP) {
          scrollAccum.current = 0;
          goTo(activeRef.current + 1);
          if (timerRef.current) clearInterval(timerRef.current);
          setTimeout(startAuto, 2500);
        } else if (scrollAccum.current <= -SCROLL_PER_STEP) {
          scrollAccum.current = 0;
          goTo(activeRef.current - 1);
          if (timerRef.current) clearInterval(timerRef.current);
          setTimeout(startAuto, 2500);
        }
      }

      lastPageY.current = window.scrollY;
    };

    window.addEventListener("scroll", onPageScroll, { passive: true });
    return () => window.removeEventListener("scroll", onPageScroll);
  }, [goTo, startAuto]);

  const nav = (dir: number) => {
    goTo(activeRef.current + dir);
    startAuto();
  };

  return (
    <section ref={sectionRef} id="linhas" className="bg-cream px-6 py-20 sm:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
              <span className="h-px w-9 bg-tan" aria-hidden="true" />
              Nossas Linhas
            </p>
            <h2 className="font-display text-[clamp(30px,3.8vw,48px)] font-extrabold leading-[1.1] text-balance text-crust">
              Uma vitrine de sabores
            </h2>
            <p className="mt-3.5 max-w-[520px] text-[16.5px] leading-relaxed text-cocoa">
              Seis linhas para a vitrine da sua padaria — pães, queijos, doces,
              quintadas e salgados, todos congelados.
            </p>
          </div>
          <Link
            href="/produtos"
            className="shrink-0 rounded-btn bg-gold px-7 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream"
          >
            Ver catálogo completo →
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <ul
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {linhas.map((l) => (
              <li
                key={l.title}
                className="w-[80%] shrink-0 snap-start sm:w-[44%] lg:w-[30%]"
              >
                <LinhaCard linha={l} />
              </li>
            ))}
          </ul>

          {/* Desktop side arrows */}
          <button
            type="button"
            onClick={() => nav(-1)}
            aria-label="Linha anterior"
            className="absolute -left-5 top-[40%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-tan/30 bg-cream/90 text-xl leading-none text-crust shadow-card-hover backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/15 lg:flex"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => nav(1)}
            aria-label="Próxima linha"
            className="absolute -right-5 top-[40%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-tan/30 bg-cream/90 text-xl leading-none text-crust shadow-card-hover backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/15 lg:flex"
          >
            ›
          </button>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => nav(-1)}
            aria-label="Linha anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-tan/30 text-xl leading-none text-crust transition-colors hover:border-gold hover:bg-gold/15 lg:hidden"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {linhas.map((l, i) => (
              <button
                key={l.title}
                type="button"
                onClick={() => {
                  goTo(i);
                  startAuto();
                }}
                aria-label={`Ir para ${l.title}`}
                aria-current={i === active ? "true" : undefined}
                className="flex h-6 items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-crust" : "w-2 bg-tan/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => nav(1)}
            aria-label="Próxima linha"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-tan/30 text-xl leading-none text-crust transition-colors hover:border-gold hover:bg-gold/15 lg:hidden"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
