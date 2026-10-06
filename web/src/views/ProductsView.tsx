import Link from "next/link";
import CategoriaProdutos from "@/components/CategoriaProdutos";
import PageHero from "@/components/PageHero";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pathFor } from "@/i18n/routes";
import { getCategorias } from "@/lib/produtos-data";

export default function ProductsView({ lang }: { lang: Locale }) {
  const t = getDict(lang).products;
  const categorias = getCategorias(lang);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      {categorias.map((c, i) => (
        <CategoriaProdutos
          key={c.id}
          categoria={c}
          t={t.popup}
          tinted={i % 2 === 1}
          priorityCount={i === 0 ? 4 : 0}
        />
      ))}

      {/* Closing commercial CTA — drives the B2B partnership goal */}
      <section className="relative overflow-hidden bg-crust px-6 py-16 text-cream sm:px-10 md:py-20">
        <div className="ph-stripe absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.1] text-balance">
            {t.cta.title}
          </h2>
          <p className="max-w-[520px] text-[16px] leading-relaxed text-cream/85">
            {t.cta.body}
          </p>
          <Link
            href={pathFor("commercial", lang)}
            className="inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-cream"
          >
            {t.cta.button}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
