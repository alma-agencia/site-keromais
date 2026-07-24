"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { cities } from "@/lib/site-data";

export default function MapaAtuacao() {
  const mapEl = useRef<HTMLDivElement>(null);

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
        html: '<div style="width:18px;height:18px;border-radius:50%;background:var(--color-gold);border:3px solid var(--color-crust);box-shadow:0 0 0 4px color-mix(in srgb, var(--color-gold) 30%, transparent)"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
      });
      const hq = L.divIcon({
        className: "",
        html: '<div style="width:24px;height:24px;border-radius:50%;background:var(--color-crust);border:3px solid var(--color-gold);box-shadow:0 0 0 5px color-mix(in srgb, var(--color-crust) 30%, transparent);display:flex;align-items:center;justify-content:center;color:var(--color-gold);font:700 12px Georgia,serif">K</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12],
      });

      const bounds: [number, number][] = [];
      cities.forEach((c) => {
        const m = L.marker([c.lat, c.lng], { icon: c.hq ? hq : gold }).addTo(
          map!,
        );
        m.bindPopup(`<b>${c.name}</b>${c.sub ? "<br>" + c.sub : ""}`, {
          className: "kp-pop",
        });
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
  }, []);

  return (
    <section
      id="mapa"
      className="relative overflow-hidden bg-crust px-6 py-20 text-cream sm:px-10 md:py-24"
    >
      <div className="ph-stripe absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <p className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-gold">
            <span className="h-px w-7 bg-gold" aria-hidden="true" />
            Onde estamos · Atendimento
            <span className="h-px w-7 bg-gold" aria-hidden="true" />
          </p>
          <h2 className="font-display text-[clamp(30px,3.8vw,48px)] font-extrabold leading-[1.1] text-balance">
            O Kero+ está perto de você
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
            Matriz em Goiânia (GO) e filial em Rondonópolis (MT). Rotas de
            entrega ativas em mais de 50 cidades de Goiás, no entorno de
            Brasília (DF) e no oeste da Bahia.
          </p>
        </div>

        <div className="mx-auto max-w-[860px]">
          <div className="flex flex-col rounded-card border border-gold/20 bg-cream/[0.06] p-5 sm:p-7">
            <p className="mb-[18px] text-[11px] font-bold uppercase tracking-[2px] text-gold">
              Nossas unidades e regiões atendidas
            </p>
            <div
              ref={mapEl}
              className="relative z-0 min-h-[380px] flex-1 overflow-hidden rounded-panel"
              role="img"
              aria-label="Mapa do Centro-Oeste com a matriz da Kero+ em Goiânia, a filial em Rondonópolis (MT) e as regiões atendidas em Goiás e no Distrito Federal"
            />
            <div className="mt-5 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/comercial"
                className="flex-1 rounded-btn bg-gold px-5 py-3.5 text-center text-[12.5px] font-bold uppercase tracking-[1.2px] text-crust transition-colors hover:bg-cream"
              >
                Seja um parceiro comercial
              </Link>
              <Link
                href="/comercial"
                className="flex-1 rounded-btn border border-gold/45 px-5 py-3.5 text-center text-[12.5px] font-bold uppercase tracking-[1.2px] text-gold transition-colors hover:border-gold hover:bg-gold/10"
              >
                Onde comprar (SAC)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
