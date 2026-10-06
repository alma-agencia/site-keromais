"use client";

import { useState } from "react";
import { fmt } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { contato, whatsappUrl } from "@/lib/site-data";

const field =
  "w-full rounded-btn border border-tan/30 bg-cream px-3.5 py-3 font-body text-[14px] text-crust outline-none transition-[border-color,box-shadow] placeholder:text-cocoa/90 focus:border-tan focus:ring-2 focus:ring-gold/40";
const labelCls =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[1.5px] text-cocoa";

export default function ComercialForm({ t }: { t: Dict["commercial"]["form"] }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k) || "").toString().trim();
    const msg = [
      fmt(t.wa.title, { type: get("tipo") || t.wa.fallbackType }),
      get("nome") && `${t.wa.name}: ${get("nome")}`,
      get("empresa") && `${t.wa.company}: ${get("empresa")}`,
      get("email") && `${t.wa.email}: ${get("email")}`,
      get("telefone") && `${t.wa.phone}: ${get("telefone")}`,
      get("mensagem") && `\n${get("mensagem")}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = whatsappUrl(contato.whatsappComercial.phone, msg);
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
          <span className={labelCls}>{t.name}</span>
          <input name="nome" required placeholder={t.namePh} className={field} />
        </label>
        <label className="sm:col-span-2">
          <span className={labelCls}>{t.company}</span>
          <input
            name="empresa"
            placeholder={t.companyPh}
            className={field}
          />
        </label>
        <label>
          <span className={labelCls}>{t.email}</span>
          <input
            name="email"
            type="email"
            placeholder={t.emailPh}
            className={field}
          />
        </label>
        <label>
          <span className={labelCls}>{t.phone}</span>
          <input
            name="telefone"
            type="tel"
            placeholder={t.phonePh}
            className={field}
          />
        </label>

        <fieldset className="sm:col-span-2">
          <legend className={labelCls}>{t.typeLegend}</legend>
          <div className="flex flex-wrap gap-2.5">
            {t.types.map((type, i) => (
              <label
                key={type}
                className="cursor-pointer rounded-full border border-tan/35 px-[18px] py-2 text-[12.5px] font-semibold text-crust transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tan"
              >
                <input
                  type="radio"
                  name="tipo"
                  value={type}
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="sm:col-span-2">
          <span className={labelCls}>{t.message}</span>
          <textarea
            name="mensagem"
            required
            rows={4}
            placeholder={t.messagePh}
            className={`${field} resize-y`}
          />
        </label>

        <button
          type="submit"
          className="rounded-btn bg-gold px-6 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-crust transition-colors hover:bg-crust hover:text-cream sm:col-span-2"
        >
          {t.submit}
        </button>
      </div>

      <p
        className="mt-5 border-t border-tan/20 pt-4 text-[12px] leading-relaxed text-cocoa"
        aria-live="polite"
      >
        {sent ? t.noteSent : t.noteIdle}
      </p>
    </form>
  );
}
