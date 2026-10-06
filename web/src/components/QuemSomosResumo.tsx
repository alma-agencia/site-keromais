import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { Rich } from "@/i18n/rich";

export default function QuemSomosResumo({
  lang,
  t,
}: {
  lang: Locale;
  t: Dict["aboutSummary"];
}) {
  return (
    <section id="quem-somos" className="bg-panel px-6 py-20 sm:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 md:grid-cols-2 md:gap-[72px]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
            <span className="h-px w-9 bg-tan" aria-hidden="true" />
            {t.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,50px)] font-extrabold leading-[1.1] tracking-[-0.5px] text-balance text-crust">
            {t.title.line1}
            <br />
            {t.title.accent}
          </h2>
          <p className="mt-7 max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa">
            <Rich text={t.p1} lang={lang} />
          </p>
          <p className="mt-5 max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa [&_strong]:font-semibold [&_strong]:text-crust">
            <Rich text={t.p2} lang={lang} />
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-photo">
          <Image
            src="/assets/producao-pacote.jpg"
            alt={t.imgAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
