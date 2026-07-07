import type { Metadata } from "next";
import Link from "next/link";
import ProdutosHero from "@/components/ProdutosHero";
import CategoriaProdutos from "@/components/CategoriaProdutos";
import { categorias } from "@/lib/produtos-data";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Catálogo completo Kero+ 2026: pães, pães de queijo, doces e salgados congelados — frescor de fábrica, prontos para assar e fritar. Para padarias, varejo e food service.",
};

export default function ProdutosPage() {
  return (
    <>
      <ProdutosHero />

      {categorias.map((c, i) => (
        <CategoriaProdutos
          key={c.title}
          categoria={c}
          tinted={i % 2 === 1}
          priorityCount={i === 0 ? 4 : 0}
        />
      ))}

      {/* Closing commercial CTA — drives the B2B partnership goal */}
      <section className="relative overflow-hidden bg-crust px-6 py-16 text-cream sm:px-10 md:py-20">
        <div className="ph-stripe absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.1] text-balance">
            Quer revender ou servir os pães Kero+?
          </h2>
          <p className="max-w-[520px] text-[16px] leading-relaxed text-cream/85">
            Mais de 40 produtos congelados — pães, quitandas, doces e salgados —
            com escala e regularidade para varejo, padarias, food service e
            hotelaria. Fale com o nosso time comercial.
          </p>
          <Link
            href="/comercial"
            className="inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-cream"
          >
            Falar com o Comercial
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
