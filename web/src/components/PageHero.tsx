export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-crust px-6 py-14 text-cream sm:px-10 md:py-20">
      <div className="ph-stripe absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px]">
        <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-gold">
          <span className="h-px w-9 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.06] tracking-[-0.5px] text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-[560px] text-[17px] font-light leading-relaxed text-cream/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
