import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Há 10 anos a Kero+ fabrica pães congelados em Goiânia. Hoje são 30 toneladas por dia — mais de 300 mil pães — para padarias, varejo e food service em GO, DF e MT.",
};

// Marcos 2018–2024 são provisórios (a confirmar com o cliente); 2016 e 2026 são reais.
const marcos = [
  {
    year: "2016",
    title: "O começo de tudo",
    desc: "Em Goiânia, Anderson Santos e Reinaldo Moreira fundam a Kero Mais Pães Congelados, realizando o sonho de criar uma fábrica de pães congelados de qualidade.",
  },
  {
    year: "2018",
    title: "As primeiras parcerias",
    desc: "Padarias e redes da região passam a contar com os pães congelados Kero+ no dia a dia.",
  },
  {
    year: "2020",
    title: "Portfólio em expansão",
    desc: "Crescem as linhas de pães, pães de queijo, doces e salgados — mais opções para a vitrine do cliente.",
  },
  {
    year: "2022",
    title: "Chegada ao Mato Grosso",
    desc: "A filial em Rondonópolis (MT) aproxima a Kero+ de novos parceiros para além de Goiás.",
  },
  {
    year: "2024",
    title: "Escala industrial",
    desc: "Investimento em capacidade e logística de congelados acelera a produção rumo às 30 toneladas por dia.",
  },
  {
    year: "2025",
    title: "Chegada à Bahia e ao Maranhão",
    desc: "A Kero+ expande para a Bahia e chega a Balsas, no Maranhão — levando sabor goiano para novos mercados.",
  },
  {
    year: "2026",
    title: "Uma década de referência",
    desc: "10 anos, 30 toneladas e mais de 300 mil pães por dia — com a mesma obsessão pela qualidade do primeiro dia.",
  },
];

const stats = [
  { num: "10", label: "anos de história" },
  { num: "30 t", label: "produzidas por dia" },
  { num: "+300 mil", label: "pães por dia" },
  { num: "46", label: "produtos no catálogo" },
];

const valores = [
  {
    mark: "Q",
    title: "Qualidade inegociável",
    desc: "Cada unidade passa pelo mesmo rigor: grãos selecionados, fermentação respeitada e congelamento no ponto certo.",
  },
  {
    mark: "C",
    title: "Confiança de parceiro",
    desc: "Relações de longo prazo construídas com consistência, regularidade e entrega no prazo.",
  },
  {
    mark: "E",
    title: "Evolução constante",
    desc: "Investimento contínuo em técnica, capacidade e novas linhas para acompanhar a mesa do cliente.",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa História · 10 anos"
        title={
          <>
            Uma década fabricando
            <br />
            <span className="font-medium italic text-gold">
              qualidade e confiança
            </span>
          </>
        }
        subtitle="Do primeiro lote em Goiânia a 30 toneladas de pães por dia — conheça a evolução da Kero+."
      />

      {/* Origem */}
      <section className="bg-cream px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-[72px]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[3px] text-cocoa">
              <span className="h-px w-9 bg-tan" aria-hidden="true" />A nossa origem
            </p>
            <h2 className="font-display text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.5px] text-balance text-crust">
              Começou pequeno,
              <br />
              cresceu com propósito
            </h2>
            <p className="mt-7 max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa">
              Em 2016, Anderson Santos e Reinaldo Moreira fundaram a Kero Mais
              Pães Congelados em Goiânia, transformando em realidade o sonho de
              criar uma fábrica de pães congelados de qualidade. Começaram com
              uma linha de produção e poucos parceiros que acreditaram na proposta.
            </p>
            <p className="mt-5 max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa">
              Década adentro, o investimento em fermentação, congelamento no
              ponto certo e processos consistentes levou a Kero+ a produzir hoje{" "}
              <strong className="font-semibold text-crust">
                30 toneladas por dia — mais de 300 mil pães
              </strong>{" "}
              — para padarias, varejo, food service e hotelaria em Goiás, no
              entorno de Brasília e no Mato Grosso.
            </p>
            <p className="mt-5 max-w-[60ch] text-[16.5px] leading-[1.8] text-cocoa">
              A missão segue simples e inegociável:{" "}
              <strong className="font-semibold text-crust">
                confiabilidade e excelência em cada unidade
              </strong>
              .
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-panel shadow-photo">
              <Image
                src="/assets/quem-somos/fabrica-producao.jpg"
                alt="Equipe da Kero+ na produção, com bandejas de pães prontas para o congelamento"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <figure className="absolute -bottom-7 -left-4 max-w-[240px] rounded-panel bg-crust px-7 py-6 text-gold shadow-quote sm:-left-7">
              <blockquote className="font-display text-[19px] italic leading-[1.4]">
                “Dez anos depois, o mesmo cuidado em cada lote que congelamos.”
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* Números — sobre foto de fábrica */}
      <section className="relative overflow-hidden bg-crust px-6 py-20 text-cream sm:px-10 md:py-24">
        <Image
          src="/assets/quem-somos/fabrica-fachada.jpg"
          alt="Unidade de produção de pães congelados da Kero+"
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
              Conquistas em números
              <span className="h-px w-7 bg-gold" aria-hidden="true" />
            </p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.12] text-balance">
              Uma década que fala por si
            </h2>
          </div>
          <dl className="grid grid-cols-2 gap-7 md:grid-cols-4">
            {stats.map((s) => (
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
              <span className="h-px w-9 bg-tan" aria-hidden="true" />A nossa
              evolução
            </p>
            <h2 className="font-display text-[clamp(30px,3.8vw,48px)] font-extrabold leading-[1.1] text-balance text-crust">
              Dez anos, marco a marco
            </h2>
          </div>
          <ol className="relative ml-2 border-l-2 border-tan/30">
            {marcos.map((m) => (
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
          {valores.map((v) => (
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
            Faça parte da próxima década
          </h2>
          <p className="max-w-[520px] text-[16.5px] leading-relaxed text-cream/85">
            Seja parceiro comercial ou conheça as nossas linhas de pães
            congelados.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2.5 rounded-btn bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-cream"
            >
              Conheça os Produtos
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/comercial"
              className="inline-flex items-center gap-2.5 rounded-btn border border-gold/60 px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              Fale com o Comercial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
