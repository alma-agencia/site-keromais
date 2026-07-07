import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";
import { contato } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Qualidade",
  description:
    "O compromisso da Kero+ Pães Congelados com a qualidade, a padronização e a segurança dos alimentos em cada lote.",
};

const whatsappHref = `https://wa.me/${contato.whatsappComercial.phone}`;

export default function QualidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Política de Qualidade"
        subtitle="O compromisso da Kero+ com a qualidade e a segurança dos alimentos, do grão ao congelamento."
      />

      <section className="bg-cream px-6 py-16 sm:px-10 md:py-20">
        <Prose>
          <p>
            Há mais de 10 anos a <strong>Kero Mais Pães Congelados</strong>{" "}
            fabrica pães e quitandas congelados com um princípio inegociável:{" "}
            <strong>confiabilidade e excelência em cada unidade</strong>. Esta
            Política de Qualidade orienta o trabalho de toda a nossa equipe, da
            seleção da matéria-prima à entrega ao parceiro.
          </p>

          <h2>O nosso compromisso</h2>
          <p>
            Entregar produtos seguros, padronizados e saborosos, que ajudem
            padarias, varejo, food service e hotelaria a oferecer qualidade ao
            consumidor final — com a praticidade do congelado.
          </p>

          <h2>Como colocamos isso em prática</h2>
          <ul>
            <li>
              <strong>Matéria-prima selecionada:</strong> escolhemos os
              ingredientes com cuidado e trabalhamos com fornecedores de
              confiança.
            </li>
            <li>
              <strong>Processo controlado:</strong> respeitamos os tempos de
              fermentação e o congelamento no ponto certo, preservando sabor,
              aroma e textura.
            </li>
            <li>
              <strong>Boas Práticas de Fabricação:</strong> seguimos as boas
              práticas e a legislação sanitária aplicável à produção de
              alimentos.
            </li>
            <li>
              <strong>Padronização:</strong> buscamos a mesma qualidade em cada
              lote, escala após escala.
            </li>
            <li>
              <strong>Higiene e segurança:</strong> mantemos rotinas de higiene,
              limpeza e controle em toda a fábrica.
            </li>
          </ul>

          <h2>Melhoria contínua</h2>
          <p>
            Investimos de forma constante em técnica, capacidade e processos para
            evoluir junto com as necessidades dos nossos parceiros e do mercado.
          </p>

          <h2>Compromisso com o parceiro</h2>
          <p>
            Qualidade, para a Kero+, também é relacionamento: consistência,
            regularidade e entrega no prazo. É assim que construímos parcerias de
            longo prazo.
          </p>

          <p>
            Dúvidas ou sugestões sobre a nossa qualidade? Fale com o nosso time
            pelo{" "}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp (62) 99958-7865
            </a>{" "}
            ou pelo nosso <a href="/comercial">canal de atendimento</a>.
          </p>
        </Prose>
      </section>
    </>
  );
}
