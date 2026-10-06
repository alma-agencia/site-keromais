"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { fmt, htmlLang, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { pathFor } from "@/i18n/routes";
import { contato, whatsappUrl, type LocalizedCity } from "@/lib/site-data";

type City = LocalizedCity;

export default function MapaAtuacao({
  lang,
  t,
  cities,
}: {
  lang: Locale;
  t: Dict["map"];
  cities: LocalizedCity[];
}) {
  const sortedCities = useMemo(
    () => [...cities].sort((a, b) => a.name.localeCompare(b.name, htmlLang[lang])),
    [cities, lang],
  );
  const mapEl = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<City | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedCities;
    return sortedCities.filter((c) => c.name.toLowerCase().includes(q));
  }, [query, sortedCities]);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  function waLink(city: City) {
    return whatsappUrl(
      contato.whatsappComercial.phone,
      fmt(t.popup.message, { city: city.name }),
    );
  }

  useEffect(() => {
    const el = mapEl.current;
    if (!el) return;
    let map: import("leaflet").Map | null = null;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      const node = el as HTMLDivElement & { _kpInit?: boolean };
      if (cancelled || node._kpInit) return;
      node._kpInit = true;

      map = L.map(el, { scrollWheelZoom: false, attributionControl: true });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap",
      }).addTo(map);

      const gold = L.divIcon({
        className: "",
        html: '<div style="width:18px;height:18px;border-radius:50%;background:var(--color-gold);border:3px solid var(--color-crust);box-shadow:0 0 0 4px color-mix(in srgb, var(--color-gold) 30%, transparent);cursor:pointer"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });
      const hq = L.divIcon({
        className: "",
        html: '<div style="width:24px;height:24px;border-radius:50%;background:var(--color-crust);border:3px solid var(--color-gold);box-shadow:0 0 0 5px color-mix(in srgb, var(--color-crust) 30%, transparent);display:flex;align-items:center;justify-content:center;color:var(--color-gold);font:700 12px Georgia,serif;cursor:pointer">K</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const bounds: [number, number][] = [];
      cities.forEach((c) => {
        const m = L.marker([c.lat, c.lng], { icon: c.hq ? hq : gold }).addTo(
          map!,
        );
        m.on("click", () => setSelected(c));
        bounds.push([c.lat, c.lng]);
      });
      if (bounds.length > 1) map.fitBounds(bounds, { padding: [40, 40] });
      else if (bounds.length === 1) map.setView(bounds[0], 11);

      setTimeout(() => map?.invalidateSize(), 200);
    })();

    return () => {
      cancelled = true;
      if (map) {
        map.remove();
        map = null;
      }
      const node = el as HTMLDivElement & { _kpInit?: boolean };
      node._kpInit = false;
    };
    // The map is built once; city data and labels never change for a given page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section
        id="mapa"
        className="relative overflow-hidden bg-crust px-6 py-20 text-cream sm:px-10 md:py-24"
      >
        <div className="ph-stripe absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <p className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-gold">
              <span className="h-px w-7 bg-gold" aria-hidden="true" />
              {t.eyebrow}
              <span className="h-px w-7 bg-gold" aria-hidden="true" />
            </p>
            <h2 className="font-display text-[clamp(30px,3.8vw,48px)] font-extrabold leading-[1.1] text-balance">
              {t.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
              {t.intro}
            </p>
          </div>

          <div className="mx-auto max-w-[860px]">
            <div className="flex flex-col rounded-card border border-gold/20 bg-cream/[0.06] p-5 sm:p-7">
              <p className="mb-[18px] text-[11px] font-bold uppercase tracking-[2px] text-gold">
                {t.searchTitle}
              </p>

              {/* Search */}
              <div className="relative mb-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cream/50"
                >
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11.5 11.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchAria}
                  className="w-full rounded-btn border border-gold/25 bg-cream/[0.08] py-3.5 pl-11 pr-4 text-[14px] text-cream placeholder:text-cream/45 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              {/* Results list */}
              <ul className="mb-5 max-h-56 overflow-y-auto rounded-panel border border-gold/15 bg-crust/40">
                {filtered.length === 0 ? (
                  <li className="flex flex-col items-center gap-3 px-5 py-7 text-center">
                    <p className="text-[13.5px] leading-relaxed text-cream/70">
                      {t.notFound}
                    </p>
                    <a
                      href={whatsappUrl(
                        contato.whatsappComercial.phone,
                        fmt(t.askMessage, { city: query.trim() || t.askFallbackCity }),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-btn bg-gold px-5 py-2.5 text-[12px] font-bold uppercase tracking-[1.2px] text-crust transition-colors hover:bg-cream"
                    >
                      {t.askWhatsapp}
                    </a>
                  </li>
                ) : (
                  filtered.map((c) => (
                    <li key={c.name} className="border-b border-gold/10 last:border-0">
                      <button
                        type="button"
                        onClick={() => setSelected(c)}
                        className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left transition-colors hover:bg-gold/10"
                      >
                        <span className="text-[14px] font-medium text-cream">
                          {c.name}
                          {c.hq && (
                            <span className="ml-2 text-[10px] font-bold uppercase tracking-[1px] text-gold">
                              {t.hqBadge}
                            </span>
                          )}
                        </span>
                        {c.sub && (
                          <span className="shrink-0 text-[11px] text-cream/50">{c.sub}</span>
                        )}
                      </button>
                    </li>
                  ))
                )}
              </ul>

              <div
                ref={mapEl}
                className="relative z-0 min-h-[380px] flex-1 overflow-hidden rounded-panel"
                role="img"
                aria-label={t.mapAria}
              />
              <div className="mt-5 flex flex-col gap-3.5 sm:flex-row">
                <Link
                  href={pathFor("commercial", lang)}
                  className="flex-1 rounded-btn bg-gold px-5 py-3.5 text-center text-[12.5px] font-bold uppercase tracking-[1.2px] text-crust transition-colors hover:bg-cream"
                >
                  {t.ctaPartner}
                </Link>
                <Link
                  href={pathFor("commercial", lang)}
                  className="flex-1 rounded-btn border border-gold/45 px-5 py-3.5 text-center text-[12.5px] font-bold uppercase tracking-[1.2px] text-gold transition-colors hover:border-gold hover:bg-gold/10"
                >
                  {t.ctaWhere}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City popup — suggest WhatsApp contact */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={fmt(t.popup.dialogAria, { city: selected.name })}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-crust/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-card bg-white p-8 shadow-photo"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label={t.popup.close}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-panel hover:text-crust"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-cocoa">
              {selected.sub}
            </p>
            <h3 className="font-display text-[22px] font-extrabold leading-[1.2] text-crust">
              {fmt(t.popup.title, { city: selected.name })}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-cocoa">
              {t.popup.body}
            </p>

            <a
              href={waLink(selected)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              {t.popup.cta}
              <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-3 w-full rounded-btn border border-tan/30 py-3 text-[12.5px] font-semibold text-cocoa transition-colors hover:border-tan hover:text-crust"
            >
              {t.popup.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
