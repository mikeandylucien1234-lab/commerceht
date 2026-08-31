import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteSettings } from "@/sanity/lib/fetchers";
import type { SiteSettings } from "@/types/content";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export async function Footer() {
  const settings = await getSiteSettings();
  return <FooterContent settings={settings} />;
}

function FooterContent({ settings }: { settings: SiteSettings }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-navy px-6 pb-8 pt-16 md:px-14">
      <div className="grid grid-cols-1 gap-8 border-b border-white/12 pb-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <span className="mb-3.5 inline-flex items-center rounded-lg bg-white px-4 py-2.5">
            <Image
              src="/images/cch-logo.png"
              alt="CCH"
              height={30}
              width={73}
              className="h-[30px] w-auto"
            />
          </span>
          <p className="max-w-[260px] text-sm leading-relaxed text-accent-light">
            {t("tagline")}
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-red">
            {t("lacamara")}
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-line">
            <Link href="/la-camara">{nav("lacamara")}</Link>
            <Link href="/la-camara/historia">{nav("historia")}</Link>
            <Link href="/la-camara/equipo">{nav("equipo")}</Link>
          </div>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-red">
            {t("socios")}
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-line">
            <Link href="/socios">{nav("nuestrosSocios")}</Link>
            <Link href="/socios/alianzas">{nav("alianzas")}</Link>
          </div>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-red">
            {t("informacion")}
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-line">
            <Link href="/documentos">{nav("documentos")}</Link>
            <Link href="/links">{nav("links")}</Link>
          </div>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-red">
            {t("contacto")}
          </div>
          <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-line">
            <span>{settings.address}</span>
            <span>{settings.phone}</span>
            <span>{settings.email}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
        <div className="text-xs text-accent-light/70">
          © {new Date().getFullYear()} {t("rights")}
        </div>
        <div className="flex gap-2.5">
          <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8">
            <FacebookIcon size={15} color="#fff" />
          </a>
          <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8">
            <InstagramIcon size={15} color="#fff" />
          </a>
          <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8">
            <LinkedInIcon size={15} color="#fff" />
          </a>
        </div>
      </div>
    </footer>
  );
}
