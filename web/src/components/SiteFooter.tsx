import Link from "next/link";
import Image from "next/image";
import { footerCols } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="bg-bark px-6 pb-9 pt-16 text-cream/70 sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 border-b border-gold/15 pb-11 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/logo-kero-light.png"
              alt="Kero+ Pães Congelados"
              width={85}
              height={72}
              className="mb-4 h-[72px] w-auto"
            />
            <p className="max-w-[280px] text-[13.5px] leading-relaxed">
              Fabricando qualidade em cada lote. Pães congelados artesanais
              com a tradição que a sua mesa merece.
            </p>
            <div className="mt-6 flex flex-col gap-4 text-[12.5px] leading-relaxed sm:flex-row sm:gap-8 md:flex-col md:gap-4">
              <p className="not-italic">
                <span className="font-semibold uppercase tracking-[1px] text-gold">
                  Matriz
                </span>
                <br />
                R. Luxemburgo, 689 · Jardim Europa
                <br />
                Goiânia-GO · (62) 3990-3012
              </p>
              <p className="not-italic">
                <span className="font-semibold uppercase tracking-[1px] text-gold">
                  Filial
                </span>
                <br />
                Av. Tiradentes, 1621 · Centro
                <br />
                Rondonópolis-MT · (66) 99628-9616
              </p>
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h2 className="mb-[18px] text-[11px] font-bold uppercase tracking-[2px] text-gold">
                {col.title}
              </h2>
              <ul className="flex flex-col gap-[11px]">
                {col.links.map((ln) => (
                  <li key={ln.label}>
                    <Link
                      href={ln.href}
                      className="text-[13.5px] text-cream/70 transition-colors hover:text-gold"
                    >
                      {ln.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <span className="text-xs text-cream/60">
            © 2026 Kero+ Pães Congelados. Todos os direitos reservados.
          </span>
          <span className="text-xs font-semibold uppercase tracking-[2px] text-gold">
            Fabricando Qualidade
          </span>
        </div>
      </div>
    </footer>
  );
}
