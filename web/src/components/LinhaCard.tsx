import Image from "next/image";
import Link from "next/link";
import type { Linha } from "@/lib/site-data";

export default function LinhaCard({ linha }: { linha: Linha }) {
  return (
    <Link
      href={linha.href}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-tan/16 bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:border-gold hover:shadow-card-hover"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-ink">
        <Image
          src={linha.img}
          alt={linha.alt}
          fill
          sizes="(max-width: 639px) 80vw, (max-width: 1023px) 44vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col px-7 pb-8 pt-7">
        <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-cocoa">
          {linha.tag}
        </p>
        <h3 className="mb-3 font-display text-2xl font-bold leading-[1.15] text-crust">
          {linha.title}
        </h3>
        <p className="mb-[18px] text-[14.5px] leading-relaxed text-cocoa">
          {linha.desc}
        </p>
        <span className="mt-auto inline-block self-start border-b-2 border-gold pb-1 text-xs font-bold uppercase tracking-[1px] text-crust">
          Explorar a linha →
        </span>
      </div>
    </Link>
  );
}
