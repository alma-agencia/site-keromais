import Image from "next/image";
import PageHero from "@/components/PageHero";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { contato, whatsappUrl } from "@/lib/site-data";

export default function CareersView({ lang }: { lang: Locale }) {
  const t = getDict(lang).careers;
  const applyHref = whatsappUrl(contato.whatsappRH.phone, t.message);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      <section className="bg-cream px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div className="relative aspect-[3/2] overflow-hidden rounded-card shadow-photo">
            <Image
              src="/assets/trabalhe/equipe-kero.jpg"
              alt={t.imgAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
              <span className="h-px w-9 bg-tan" aria-hidden="true" />
              {t.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.15] text-balance text-crust">
              {t.title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-cocoa">{t.body}</p>
            <a
              href={applyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              {t.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
