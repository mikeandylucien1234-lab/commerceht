"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function MembershipForm({ email }: { email: string }) {
  const t = useTranslations("contacto");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    subject || "Solicitud de membresía"
  )}&body=${encodeURIComponent(`${message}\n\n${name} — ${from}`)}`;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={t("nombre")}
          className="rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
        />
        <input
          required
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          type="email"
          placeholder={t("email")}
          className="rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
        />
      </div>
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        type="text"
        placeholder={t("asunto")}
        className="rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
      />
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        placeholder={t("mensajePlaceholder")}
        className="resize-none rounded-lg border-[1.5px] border-line px-4 py-3.5 text-sm outline-none focus:border-navy"
      />
      <button
        type="submit"
        className="self-start rounded-full border-2 border-red bg-red px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red/90"
      >
        {t("enviar")} →
      </button>
    </form>
  );
}
