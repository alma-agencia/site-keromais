"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    desktop: "/assets/banner1-paes.png",
    mobile: "/assets/banner1-paes-mobile.png",
    alt: "Pães e quitandas Kero+ — tradição e qualidade fabricada em cada lote",
  },
  {
    desktop: "/assets/banner2-salgados.png",
    mobile: "/assets/banner2-salgados-mobile.png",
    alt: "Salgados congelados Kero+ — coxinha, risole, pastel e empanados prontos para fritar",
  },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const count = SLIDES.length;

  const go = useCallback(
    (i: number) => setSlide(((i % count) + count) % count),
    [count],
  );

  // Auto-advance every 5.5s; reset when slide changes; off under reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % count), 5500);
    return () => clearInterval(t);
  }, [count, slide]);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[620px] overflow-hidden bg-ink text-cream md:min-h-[600px]"
    >
      {/* Art-directed crossfade carousel: portrait on mobile, landscape on desktop */}
      {SLIDES.map((s, i) => (
        <div
          key={s.desktop}
          aria-hidden={i !== slide}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-out"
          style={{ opacity: i === slide ? 1 : 0 }}
        >
          <Image
            src={s.mobile}
            alt={s.alt}
            fill
            sizes="100vw"
            className="object-cover md:hidden"
          />
          <Image
            src={s.desktop}
            alt=""
            fill
            sizes="100vw"
            className="hidden object-cover md:block"
          />
        </div>
      ))}

      {/* Darkening overlay for legibility */}
      <div className="absolute inset-0 z-[2] bg-linear-to-b from-ink/55 to-ink/35" />

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(slide - 1)}
        aria-label="Imagem anterior"
        className="absolute left-4 top-1/2 z-[4] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/50 bg-ink/30 text-xl leading-none text-cream backdrop-blur-[2px] transition-colors hover:border-gold hover:bg-gold hover:text-crust"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(slide + 1)}
        aria-label="Próxima imagem"
        className="absolute right-4 top-1/2 z-[4] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/50 bg-ink/30 text-xl leading-none text-cream backdrop-blur-[2px] transition-colors hover:border-gold hover:bg-gold hover:text-crust"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-[4] flex -translate-x-1/2 gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir para a imagem ${i + 1}`}
            aria-current={i === slide ? "true" : undefined}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`block h-2.5 rounded-full transition-all ${
                i === slide ? "w-7 bg-gold" : "w-2.5 bg-cream/45"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Copy */}
      <div className="relative z-[3] mx-auto flex min-h-[620px] max-w-[1280px] flex-col items-center justify-center px-7 py-14 text-center md:min-h-[600px] md:items-start md:px-14 md:py-24 md:text-left">
        <div className="max-w-[440px] md:max-w-[540px]">
          <h1
            className="font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.5px] md:text-[clamp(48px,5vw,76px)]"
            style={{
              textShadow:
                "0 2px 24px color-mix(in srgb, var(--color-ink) 45%, transparent)",
            }}
          >
            Tradição e Excelência
            <br />
            <span className="font-medium italic text-gold">na Sua Mesa</span>
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5 md:justify-start">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              Conheça os Produtos
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
