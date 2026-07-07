import Image from "next/image";

export default function QuemSomosResumo() {
  return (
    <section id="quem-somos" className="bg-panel px-6 py-20 sm:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 md:grid-cols-2 md:gap-[72px]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
            <span className="h-px w-9 bg-tan" aria-hidden="true" />
            Quem Somos
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,50px)] font-extrabold leading-[1.1] tracking-[-0.5px] text-balance text-crust">
            Qualidade fabricada,
            <br />
            lote a lote
          </h2>
          <p className="mt-7 max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa">
            Em 2016, Anderson Santos e Reinaldo Moreira fundaram a Kero Mais
            Pães Congelados em Goiânia. O amor pela panificação e a vontade de
            levar sabor e praticidade à mesa movem a nossa fábrica todos os dias.
          </p>
          <p className="mt-5 max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa">
            Hoje produzimos{" "}
            <strong className="font-semibold text-crust">
              mais de 300 mil pães todos os dias
            </strong>{" "}
            — com seis linhas de produtos que atendem padarias e food service em
            Goiás, no entorno de Brasília, em Mato Grosso, na Bahia e no
            Maranhão.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-photo">
          <Image
            src="/assets/producao-pacote.jpg"
            alt="Colaboradora da Kero+ na fábrica segurando um pacote de pão de queijo congelado"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
