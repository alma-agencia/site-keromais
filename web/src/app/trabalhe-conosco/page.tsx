import type { Metadata } from "next";
import Image from "next/image";
import { contato } from "@/lib/site-data";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Faça parte do time Kero+ Pães Congelados — fábrica, administrativo e vendas, em Goiânia (GO) e Rondonópolis (MT). Envie o seu currículo pelo WhatsApp.",
};

const candidaturaHref = `https://wa.me/${contato.whatsappComercial.phone}?text=${encodeURIComponent(
  "Olá! Tenho interesse em fazer parte da equipe Kero+. Gostaria de enviar o meu currículo.",
)}`;

export default function TrabalheConoscoPage() {
  return (
    <>
      <PageHero
        eyebrow="Trabalhe Conosco"
        title="Faça parte do nosso time"
        subtitle="Há 10 anos a Kero+ cresce com gente boa — na fábrica, no administrativo e no comercial."
      />

      <section className="bg-cream px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div className="relative aspect-[3/2] overflow-hidden rounded-card shadow-photo">
            <Image
              src="/assets/trabalhe/equipe-kero.jpg"
              alt="Equipe Kero+ — pessoas da fábrica, do administrativo e do comercial"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
              <span className="h-px w-9 bg-tan" aria-hidden="true" />
              Vem com a gente
            </p>
            <h2 className="font-display text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.15] text-balance text-crust">
              Gente boa que faz a qualidade acontecer
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-cocoa">
              Da produção na fábrica ao administrativo e ao time de vendas, é o
              nosso pessoal que assina a qualidade Kero+ todos os dias. Tem
              vontade de crescer com a gente, em Goiânia (GO) ou Rondonópolis
              (MT)? Manda o seu currículo.
            </p>
            <a
              href={candidaturaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              Enviar currículo pelo WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
