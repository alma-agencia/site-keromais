import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComercialForm from "@/components/ComercialForm";
import { contato } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Comercial",
  description:
    "Fale com o time comercial da Kero+ Pães Congelados: parcerias, pedidos e atendimento por WhatsApp, telefone ou formulário. Matriz em Goiânia e filial em Rondonópolis.",
};

const svg = "h-[18px] w-[18px]";
const icons: Record<string, React.ReactNode> = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={svg} aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={svg} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={svg} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={svg} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

type Channel = { icon: string; label: string; value: string; href?: string };

const channels: Channel[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp comercial",
    value: contato.whatsappComercial.display,
    href: `https://wa.me/${contato.whatsappComercial.phone}`,
  },
  {
    icon: "phone",
    label: "Telefone",
    value: contato.telefoneFixo.display,
    href: contato.telefoneFixo.href,
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: contato.instagram.display,
    href: contato.instagram.href,
  },
  { icon: "clock", label: "Horário", value: contato.horario },
];

function ChannelCard({ c }: { c: Channel }) {
  const inner = (
    <>
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-panel bg-gold text-crust">
        {icons[c.icon]}
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-[1.5px] text-cocoa">
          {c.label}
        </span>
        <span className="mt-0.5 block text-[14px] font-medium text-crust">
          {c.value}
        </span>
      </span>
    </>
  );
  const base =
    "flex items-center gap-3.5 rounded-panel border border-tan/16 bg-white p-4";
  return c.href ? (
    <a
      href={c.href}
      target={c.href.startsWith("http") ? "_blank" : undefined}
      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} transition-colors hover:border-gold`}
    >
      {inner}
    </a>
  ) : (
    <div className={base}>{inner}</div>
  );
}

export default function ComercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento Comercial"
        title="Fale com a gente"
        subtitle="Parcerias comerciais, pedidos e suporte — por WhatsApp, telefone ou pelo formulário."
      />

      <section className="bg-cream px-6 py-16 sm:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1080px] gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <h2 className="font-display text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.15] text-balance text-crust">
              Pronto para uma parceria de sucesso?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-cocoa">
              Vamos juntos. Fale com o nosso time comercial pelos canais abaixo
              ou preencha o formulário — retornamos o seu contato o quanto antes.
            </p>
            <div className="mt-7 flex flex-col gap-3.5">
              {channels.map((c) => (
                <ChannelCard key={c.label} c={c} />
              ))}
            </div>
          </div>

          <ComercialForm />
        </div>
      </section>
    </>
  );
}
