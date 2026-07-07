"use client";

import { useState } from "react";
import { contato } from "@/lib/site-data";

const TIPOS = ["Parceria comercial", "Já sou cliente", "SAC / Feedback"];

const field =
  "w-full rounded-btn border border-tan/30 bg-cream px-3.5 py-3 font-body text-[14px] text-crust outline-none transition-[border-color,box-shadow] placeholder:text-cocoa/90 focus:border-tan focus:ring-2 focus:ring-gold/40";
const labelCls =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[1.5px] text-cocoa";

export default function ComercialForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k) || "").toString().trim();
    const msg = [
      `*Contato pelo site — ${get("tipo") || "Comercial"}*`,
      get("nome") && `Nome: ${get("nome")}`,
      get("empresa") && `Empresa: ${get("empresa")}`,
      get("email") && `E-mail: ${get("email")}`,
      get("telefone") && `Telefone: ${get("telefone")}`,
      get("mensagem") && `\n${get("mensagem")}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${contato.whatsappComercial.phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-tan/20 bg-white p-6 shadow-photo sm:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className={labelCls}>Nome completo</span>
          <input name="nome" required placeholder="Seu nome" className={field} />
        </label>
        <label className="sm:col-span-2">
          <span className={labelCls}>Empresa / Padaria</span>
          <input
            name="empresa"
            placeholder="Nome do seu negócio"
            className={field}
          />
        </label>
        <label>
          <span className={labelCls}>E-mail</span>
          <input
            name="email"
            type="email"
            placeholder="voce@email.com"
            className={field}
          />
        </label>
        <label>
          <span className={labelCls}>Telefone / WhatsApp</span>
          <input
            name="telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            className={field}
          />
        </label>

        <fieldset className="sm:col-span-2">
          <legend className={labelCls}>Tipo de contato</legend>
          <div className="flex flex-wrap gap-2.5">
            {TIPOS.map((t, i) => (
              <label
                key={t}
                className="cursor-pointer rounded-full border border-tan/35 px-[18px] py-2 text-[12.5px] font-semibold text-crust transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tan"
              >
                <input
                  type="radio"
                  name="tipo"
                  value={t}
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                {t}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="sm:col-span-2">
          <span className={labelCls}>Mensagem</span>
          <textarea
            name="mensagem"
            required
            rows={4}
            placeholder="Conte o que você precisa…"
            className={`${field} resize-y`}
          />
        </label>

        <button
          type="submit"
          className="rounded-btn bg-gold px-6 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream sm:col-span-2"
        >
          Enviar pelo WhatsApp
        </button>
      </div>

      <p
        className="mt-5 border-t border-tan/20 pt-4 text-[12px] leading-relaxed text-cocoa"
        aria-live="polite"
      >
        {sent
          ? "Abrimos o WhatsApp com a sua mensagem preenchida — é só tocar em enviar."
          : "Ao enviar, abrimos o WhatsApp do nosso comercial com os seus dados já preenchidos. Usamos suas informações apenas para retornar o contato."}
      </p>
    </form>
  );
}
