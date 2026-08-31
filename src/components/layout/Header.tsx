"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_LINK_CLASS =
  "cursor-pointer text-[0.92rem] font-semibold text-ink hover:text-navy transition-colors";

function isActive(pathname: string, prefixes: string[]) {
  return prefixes.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [quienesOpen, setQuienesOpen] = useState(false);
  const [sociosOpen, setSociosOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const quienesActive = isActive(pathname, [
    "/la-camara",
    "/la-camara/historia",
    "/la-camara/equipo",
  ]);
  const sociosActive = isActive(pathname, ["/socios", "/socios/alianzas"]);
  const infoActive = isActive(pathname, ["/documentos", "/links"]);

  return (
    <header className="sticky top-0 z-50 flex h-[84px] items-center justify-between border-b border-navy/10 bg-white px-6 md:px-14">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/cch-logo.png"
          alt="CCH"
          height={44}
          width={107}
          className="h-11 w-auto"
          priority
        />
      </Link>

      <nav className="hidden items-center gap-9 lg:flex">
        <Link
          href="/"
          className={NAV_LINK_CLASS}
          style={{ color: pathname === "/" ? "#D62828" : undefined }}
        >
          {t("inicio")}
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setQuienesOpen(true)}
          onMouseLeave={() => setQuienesOpen(false)}
        >
          <button
            className={`flex items-center gap-1 ${NAV_LINK_CLASS}`}
            style={{ color: quienesActive ? "#D62828" : undefined }}
          >
            {t("quienesSomos")} <span className="text-[0.7em]">▾</span>
          </button>
          {quienesOpen && (
            <div className="absolute left-[-16px] top-7 flex min-w-[200px] flex-col gap-1 rounded-lg border border-navy/10 bg-white p-2 shadow-lg">
              <Link href="/la-camara" className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-mist">
                {t("lacamara")}
              </Link>
              <Link href="/la-camara/historia" className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-mist">
                {t("historia")}
              </Link>
              <Link href="/la-camara/equipo" className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-mist">
                {t("equipo")}
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/servicios"
          className={NAV_LINK_CLASS}
          style={{ color: pathname.startsWith("/servicios") ? "#D62828" : undefined }}
        >
          {t("servicios")}
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setSociosOpen(true)}
          onMouseLeave={() => setSociosOpen(false)}
        >
          <button
            className={`flex items-center gap-1 ${NAV_LINK_CLASS}`}
            style={{ color: sociosActive ? "#D62828" : undefined }}
          >
            {t("socios")} <span className="text-[0.7em]">▾</span>
          </button>
          {sociosOpen && (
            <div className="absolute left-[-16px] top-7 flex min-w-[190px] flex-col gap-1 rounded-lg border border-navy/10 bg-white p-2 shadow-lg">
              <Link href="/socios" className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-mist">
                {t("nuestrosSocios")}
              </Link>
              <Link href="/socios/alianzas" className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-mist">
                {t("alianzas")}
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/noticias"
          className={NAV_LINK_CLASS}
          style={{ color: pathname.startsWith("/noticias") ? "#D62828" : undefined }}
        >
          {t("noticias")}
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setInfoOpen(true)}
          onMouseLeave={() => setInfoOpen(false)}
        >
          <button
            className={`flex items-center gap-1 ${NAV_LINK_CLASS}`}
            style={{ color: infoActive ? "#D62828" : undefined }}
          >
            {t("informacion")} <span className="text-[0.7em]">▾</span>
          </button>
          {infoOpen && (
            <div className="absolute left-[-16px] top-7 flex min-w-[180px] flex-col gap-1 rounded-lg border border-navy/10 bg-white p-2 shadow-lg">
              <Link href="/documentos" className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-mist">
                {t("documentos")}
              </Link>
              <Link href="/links" className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-mist">
                {t("links")}
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/contacto"
          className={NAV_LINK_CLASS}
          style={{ color: pathname.startsWith("/contacto") ? "#D62828" : undefined }}
        >
          {t("contacto")}
        </Link>
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <LocaleSwitcher />
        <a href="#" aria-label="Facebook" className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-sky">
          <FacebookIcon />
        </a>
        <a href="#" aria-label="Instagram" className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-sky">
          <InstagramIcon />
        </a>
        <a href="#" aria-label="LinkedIn" className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-sky">
          <LinkedInIcon />
        </a>
      </div>

      <button
        className="flex h-9 w-9 items-center justify-center lg:hidden"
        aria-label="Menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className="text-2xl text-navy">{mobileOpen ? "✕" : "☰"}</span>
      </button>

      {mobileOpen && (
        <div className="absolute left-0 top-[84px] flex w-full flex-col gap-1 border-b border-navy/10 bg-white p-4 shadow-lg lg:hidden">
          <Link href="/" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("inicio")}</Link>
          <Link href="/la-camara" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("lacamara")}</Link>
          <Link href="/la-camara/historia" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("historia")}</Link>
          <Link href="/la-camara/equipo" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("equipo")}</Link>
          <Link href="/servicios" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("servicios")}</Link>
          <Link href="/socios" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("nuestrosSocios")}</Link>
          <Link href="/socios/alianzas" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("alianzas")}</Link>
          <Link href="/noticias" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("noticias")}</Link>
          <Link href="/documentos" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("documentos")}</Link>
          <Link href="/links" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("links")}</Link>
          <Link href="/contacto" className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist" onClick={() => setMobileOpen(false)}>{t("contacto")}</Link>
          <div className="px-3 pt-2">
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
