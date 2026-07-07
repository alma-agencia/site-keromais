"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import LinhaCard from "./LinhaCard";
import type { Linha } from "@/lib/site-data";

const AUTOPLAY_MS = 4500;

export default function LinhasSlider({ linhas }: { linhas: Linha[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const activeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [active, setActive] = useState(0);

  const reduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const goTo = useCallback((i: number) => {
    const sc = ref.current;
    if (!sc) return;
    const n = sc.children.length;
    if (!n) return;
    const idx = ((i % n) + n) % n;
    const el = sc.children[idx] as HTMLElement;
    sc.scrollTo({ left: el.offsetLeft, behavior: reduced() ? "auto" : "smooth" });
  }, []);

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (reduced()) return;
    timerRef.current = setInterval(() => goTo(activeRef.current + 1), AUTOPLAY_MS);
  }, [goTo]);

  // Keep the active index in sync with manual swipes.
  useEffect(() => {
    const sc = ref.current;
    if (!sc) return;
    let raf = 0;
    const onScroll = () => {
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
    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      sc.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAuto]);

  const nav = (dir: number) => {
    goTo(activeRef.current + dir);
    startAuto();
  };

  return (
    <div className="md:hidden">
      <ul
        ref={ref}
        onPointerDown={startAuto}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {linhas.map((l) => (
          <li key={l.title} className="w-[80%] shrink-0 snap-start sm:w-[44%]">
            <LinhaCard linha={l} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => nav(-1)}
          aria-label="Linha anterior"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-tan/30 text-xl leading-none text-crust transition-colors hover:border-gold hover:bg-gold/15"
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
                className={`block h-2 rounded-full transition-all ${
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-tan/30 text-xl leading-none text-crust transition-colors hover:border-gold hover:bg-gold/15"
        >
          ›
        </button>
      </div>
    </div>
  );
}
