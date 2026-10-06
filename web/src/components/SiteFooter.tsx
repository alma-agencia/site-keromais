import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { pathFor } from "@/i18n/routes";
import { getCategorias } from "@/lib/produtos-data";
import { contato, whatsappUrl } from "@/lib/site-data";

type FooterLink = { label: string; href: string };

export default function SiteFooter({ lang }: { lang: Locale }) {
  const t = getDict(lang).footer;

  const cols: { title: string; links: FooterLink[] }[] = [
    {
      title: t.cols.institutional,
      links: [
        { label: t.links.about, href: pathFor("about", lang) },
        { label: t.links.careers, href: pathFor("careers", lang) },
        { label: t.links.privacy, href: pathFor("privacy", lang) },
        { label: t.links.quality, href: pathFor("quality", lang) },
      ],
    },
    {
      title: t.cols.products,
      links: getCategorias(lang).map((c) => ({
        label: c.title,
        href: pathFor("products", lang, c.id),
      })),
    },
    {
      title: t.cols.service,
      links: [
        { label: t.links.commercialSac, href: pathFor("commercial", lang) },
        { label: t.links.contactUs, href: whatsappUrl(contato.whatsappComercial.phone) },
        { label: contato.telefoneFixo.display, href: contato.telefoneFixo.href },
        { label: contato.instagram.display, href: contato.instagram.href },
      ],
    },
  ];

  return (
    <footer className="bg-bark px-6 pb-9 pt-16 text-cream/70 sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 border-b border-gold/15 pb-11 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/logo-kero-light.png"
              alt={t.logoAlt}
              width={85}
              height={72}
              className="mb-4 h-[72px] w-auto"
            />
            <p className="max-w-[280px] text-[13.5px] leading-relaxed">{t.tagline}</p>
            <div className="mt-6 flex flex-col gap-4 text-[12.5px] leading-relaxed sm:flex-row sm:gap-8 md:flex-col md:gap-4">
              <p className="not-italic">
                <span className="font-semibold uppercase tracking-[1px] text-gold">
                  {t.hq}
                </span>
                <br />
                R. Luxemburgo, 689 · Jardim Europa
                <br />
                Goiânia-GO · (62) 3990-3012
              </p>
              <p className="not-italic">
                <span className="font-semibold uppercase tracking-[1px] text-gold">
                  {t.branch}
                </span>
                <br />
                Av. Tiradentes, 1621 · Centro
                <br />
                Rondonópolis-MT · (66) 99628-9616
              </p>
            </div>
          </div>

          {cols.map((col) => (
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
          <span className="text-xs text-cream/60">{t.rights}</span>
          <span className="text-xs font-semibold uppercase tracking-[2px] text-gold">
            {t.slogan}
          </span>
        </div>
      </div>
    </footer>
  );
}
