"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function ContactForm({ email }: { email: string }) {
  const t = useTranslations("contacto");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    subject || "Contacto desde el sitio web"
  )}&body=${encodeURIComponent(`${message}\n\n${name} — ${from}`)}`;

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy">{t("nombre")}</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy">{t("email")}</label>
          <input
            required
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            type="email"
            className="rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-navy">{t("asunto")}</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder={t("asuntoPlaceholder")}
          className="rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-navy">{t("mensaje")}</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder={t("mensajePlaceholder")}
          className="resize-none rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
        />
      </div>
      <button
        type="submit"
        className="mt-1.5 self-start rounded-full border-2 border-red bg-red px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-red/90"
      >
        {t("enviar")} →
      </button>
    </form>
  );
}
