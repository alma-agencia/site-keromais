"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fmt } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import type { Categoria, ProdutoItem } from "@/lib/produtos-data";
import { contato, whatsappUrl } from "@/lib/site-data";

export default function CategoriaProdutos({
  categoria,
  t,
  tinted = false,
  priorityCount = 0,
}: {
  categoria: Categoria;
  t: Dict["products"]["popup"];
  tinted?: boolean;
  priorityCount?: number;
}) {
  const [selected, setSelected] = useState<ProdutoItem | null>(null);

  // Close on Escape
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  // Lock body scroll while popup is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  function waLink(produto: ProdutoItem) {
    return whatsappUrl(
      contato.whatsappComercial.phone,
      fmt(t.message, { name: produto.name }),
    );
  }

  return (
    <>
      <section
        id={categoria.id}
        className={`px-6 py-16 sm:px-10 md:py-20 ${tinted ? "bg-panel" : "bg-cream"}`}
      >
        <div className="mx-auto max-w-[1280px]">
          {/* Category header */}
          <div className="mb-3 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h2 className="font-display text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.1] text-balance text-crust">
              {categoria.title}
            </h2>
            <span className="h-px flex-1 bg-tan/30" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[2px] text-cocoa">
              {categoria.tag}
            </span>
          </div>
          <p className="mb-10 max-w-[62ch] text-[15.5px] leading-relaxed text-cocoa">
            {categoria.intro}
          </p>

          {/* Product grid */}
          <ul className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
            {categoria.produtos.map((p, i) => (
              <li key={p.img}>
                <button
                  type="button"
                  className="group w-full text-left"
                  onClick={() => setSelected(p)}
                  aria-label={fmt(t.detailsAria, { name: p.name })}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-tan/15 bg-panel transition-colors duration-300 group-hover:border-gold">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                      priority={i < priorityCount}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-3 min-h-[2.6em] font-display text-[17px] font-bold leading-snug text-pretty text-crust">
                    {p.name}
                  </h3>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popup */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={fmt(t.dialogAria, { name: selected.name })}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-crust/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-card bg-white p-8 shadow-photo"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label={t.close}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-panel hover:text-crust"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-cocoa">
              {selected.name}
            </p>
            <h3 className="font-display text-[22px] font-extrabold leading-[1.2] text-crust">
              {t.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-cocoa">
              {t.body}
            </p>

            <a
              href={waLink(selected)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              {t.cta}
              <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-3 w-full rounded-btn border border-tan/30 py-3 text-[12.5px] font-semibold text-cocoa transition-colors hover:border-tan hover:text-crust"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
