import Image from "next/image";
import Link from "next/link";
import PageHero, { SplitHeading } from "@/components/PageHero";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { Rich } from "@/i18n/rich";
import { pathFor } from "@/i18n/routes";

const para =
  "max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa [&_strong]:font-semibold [&_strong]:text-crust";

export default function AboutView({ lang }: { lang: Locale }) {
  const t = getDict(lang).about;

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={<SplitHeading title={t.hero.title} />}
        subtitle={t.hero.subtitle}
      />

      {/* Origem */}
      <section className="bg-cream px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-[72px]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
              <span className="h-px w-9 bg-tan" aria-hidden="true" />
              {t.origin.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.5px] text-balance text-crust">
              {t.origin.title.line1}
              <br />
              {t.origin.title.accent}
            </h2>
            <p className={`mt-7 ${para}`}>
              <Rich text={t.origin.p1} lang={lang} />
            </p>
            <p className={`mt-5 ${para}`}>
              <Rich text={t.origin.p2} lang={lang} />
            </p>
            <p className={`mt-5 ${para}`}>
              <Rich text={t.origin.p3} lang={lang} />
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel shadow-photo">
              <Image
                src="/assets/quem-somos/fabrica-producao.jpg"
                alt={t.origin.imgAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <figure className="absolute -bottom-7 -left-4 max-w-[240px] rounded-panel bg-crust px-7 py-6 text-gold shadow-quote sm:-left-7">
              <blockquote className="font-display text-[19px] italic leading-[1.4]">
                “{t.origin.quote}”
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* Números — sobre foto de fábrica */}
      <section className="relative overflow-hidden bg-crust px-6 py-20 text-cream sm:px-10 md:py-24">
        <Image
          src="/assets/quem-somos/fabrica-fachada.jpg"
          alt={t.numbers.imgAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-crust/90" aria-hidden="true" />
        <div className="ph-stripe absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="mx-auto mb-14 max-w-[620px] text-center">
            <p className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-gold">
              <span className="h-px w-7 bg-gold" aria-hidden="true" />
              {t.numbers.eyebrow}
              <span className="h-px w-7 bg-gold" aria-hidden="true" />
            </p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.12] text-balance">
              {t.numbers.title}
            </h2>
          </div>
          <dl className="grid grid-cols-2 gap-7 md:grid-cols-4">
            {t.numbers.stats.map((s) => (
              <div key={s.label} className="px-3 text-center">
                <dt className="font-display text-[clamp(40px,5vw,58px)] font-extrabold leading-none text-gold">
                  {s.num}
                </dt>
                <dd className="mx-auto mt-3 max-w-[200px] text-[14px] leading-[1.5] text-cream/85">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="bg-panel px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-14">
            <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
              <span className="h-px w-9 bg-tan" aria-hidden="true" />
              {t.timeline.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(30px,3.8vw,48px)] font-extrabold leading-[1.1] text-balance text-crust">
              {t.timeline.title}
            </h2>
          </div>
          <ol className="relative ml-2 border-l-2 border-tan/30">
            {t.timeline.items.map((m) => (
              <li key={m.year} className="relative pb-11 pl-10 last:pb-0">
                <span
                  className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-panel bg-gold shadow-[0_0_0_2px_rgb(162_126_90/0.3)]"
                  aria-hidden="true"
                />
                <div className="font-display text-[22px] font-extrabold leading-none text-tan">
                  {m.year}
                </div>
                <h3 className="mb-2 mt-1.5 font-display text-[21px] font-bold leading-tight text-crust">
                  {m.title}
                </h3>
                <p className="max-w-[720px] text-[15.5px] leading-[1.75] text-cocoa">
                  {m.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-cream px-6 pb-20 sm:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.values.map((v) => (
            <div
              key={v.title}
              className="rounded-card border border-tan/16 bg-white p-8"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-panel bg-gold font-display text-[22px] font-extrabold text-crust">
                {v.mark}
              </span>
              <h3 className="mb-2.5 font-display text-[21px] font-bold leading-tight text-crust">
                {v.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-cocoa">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-crust px-6 py-16 text-cream sm:px-10 md:py-20">
        <div className="ph-stripe absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.12] text-balance">
            {t.cta.title}
          </h2>
          <p className="max-w-[520px] text-[16.5px] leading-relaxed text-cream/85">
            {t.cta.body}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href={pathFor("products", lang)}
              className="inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-cream"
            >
              {t.cta.products}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={pathFor("commercial", lang)}
              className="inline-flex items-center gap-2.5 rounded-btn border border-gold/60 px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              {t.cta.commercial}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
