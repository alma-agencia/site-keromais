import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";
import { contato } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aviso de Privacidade",
  description:
    "Como a Kero+ Pães Congelados coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD.",
};

const whatsappHref = `https://wa.me/${contato.whatsappComercial.phone}`;

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Aviso de Privacidade"
        subtitle="Como a Kero+ coleta, usa e protege os seus dados pessoais. Última atualização: junho de 2026."
      />

      <section className="bg-cream px-6 py-16 sm:px-10 md:py-20">
        <Prose>
          <p>
            Este Aviso de Privacidade descreve como a{" "}
            <strong>Kero Mais Pães Congelados</strong> ("Kero+", "nós") trata os
            dados pessoais de quem entra em contato conosco ou utiliza este site,
            em conformidade com a Lei Geral de Proteção de Dados (Lei nº
            13.709/2018 — LGPD).
          </p>

          <h2>1. Quem é o controlador</h2>
          <p>
            A Kero Mais Pães Congelados, com matriz na R. Luxemburgo, 689,
            Jardim Europa, Goiânia-GO, é a controladora dos dados pessoais
            tratados por meio dos nossos canais de atendimento e deste site.
          </p>

          <h2>2. Quais dados coletamos</h2>
          <ul>
            <li>
              <strong>Dados que você nos fornece:</strong> nome, empresa, e-mail,
              telefone/WhatsApp e o conteúdo das mensagens enviadas pelos
              formulários ou pelo WhatsApp (atendimento comercial, SAC e
              candidaturas a vagas).
            </li>
            <li>
              <strong>Dados de navegação:</strong> informações técnicas básicas
              geradas ao acessar o site, como tipo de dispositivo e páginas
              visitadas, quando aplicável.
            </li>
          </ul>
          <p>
            Não coletamos dados pessoais sensíveis nem dados de crianças e
            adolescentes de forma intencional.
          </p>

          <h2>3. Para que usamos os seus dados</h2>
          <ul>
            <li>Responder aos seus contatos e solicitações;</li>
            <li>
              Conduzir e manter o relacionamento comercial com parceiros
              (varejo, padarias, food service e hotelaria);
            </li>
            <li>Avaliar candidaturas a vagas de trabalho;</li>
            <li>Melhorar os nossos produtos, o atendimento e este site;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            Tratamos dados com base no seu consentimento, na execução de contrato
            ou de procedimentos preliminares, no cumprimento de obrigação legal e
            no legítimo interesse, conforme o caso, sempre nos limites da LGPD.
          </p>

          <h2>5. Compartilhamento</h2>
          <p>
            A Kero+ <strong>não vende</strong> os seus dados pessoais. Eles podem
            ser compartilhados apenas com prestadores de serviço que nos apoiam
            (por exemplo, hospedagem e comunicação), sempre sob obrigações de
            confidencialidade, ou quando exigido por lei ou autoridade
            competente.
          </p>

          <h2>6. Por quanto tempo guardamos</h2>
          <p>
            Mantemos os dados pelo tempo necessário às finalidades acima ou para
            cumprir obrigações legais. Depois disso, eles são eliminados ou
            anonimizados.
          </p>

          <h2>7. Os seus direitos</h2>
          <p>
            Nos termos da LGPD, você pode solicitar a qualquer momento:
            confirmação e acesso aos seus dados; correção de dados incompletos ou
            desatualizados; anonimização, bloqueio ou eliminação; portabilidade;
            informação sobre o compartilhamento; e a revogação do consentimento.
          </p>

          <h2>8. Como exercer os seus direitos</h2>
          <p>
            Para exercer os seus direitos ou tirar dúvidas sobre privacidade,
            fale com a gente pelos nossos canais de atendimento:{" "}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp (62) 99958-7865
            </a>
            , telefone (62) 3990-3012 ou Instagram @keromaispaescongelados.
          </p>

          <h2>9. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais razoáveis para proteger
            os seus dados contra acessos não autorizados, perda ou uso indevido.
          </p>

          <h2>10. Alterações deste aviso</h2>
          <p>
            Este Aviso pode ser atualizado a qualquer momento. A versão vigente
            estará sempre disponível nesta página, com a data da última
            atualização.
          </p>
        </Prose>
      </section>
    </>
  );
}
