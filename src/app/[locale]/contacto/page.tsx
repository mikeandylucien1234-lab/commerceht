import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";
import { getSiteSettings } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  return { title: `${tNav("contacto")} — CCH` };
}

export default async function ContactoPage() {
  const settings = await getSiteSettings();

  return <ContactoContent email={settings.email} address={settings.address} phone={settings.phone} />;
}

function ContactoContent({
  email,
  address,
  phone,
}: {
  email: string;
  address: string;
  phone: string;
}) {
  const t = useTranslations("contacto");

  const benefits = [t("b1"), t("b2"), t("b3"), t("b4"), t("b5"), t("b6")];

  return (
    <div>
      <section className="relative flex h-[240px] items-center overflow-hidden bg-gradient-to-br from-navy to-navy-dark">
        <div
          className="absolute right-0 top-0 h-full w-[38%] bg-red opacity-90"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10 px-6 md:px-14">
          <div className="mb-3.5 text-xs font-semibold uppercase tracking-widest text-red">
            {t("hablemos")}
          </div>
          <h1 className="mb-2.5 font-serif text-3xl font-bold text-white md:text-4xl">
            {t("contactanos")}
          </h1>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-14 px-6 py-16 md:px-14 lg:grid-cols-[1.2fr_1fr]">
        <div className="lg:border-r lg:border-navy/10 lg:pr-16">
          <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
            {t("escribenos")}
          </div>
          <h2 className="mb-4.5 font-serif text-2xl font-bold text-navy md:text-3xl">
            {t("enviaMensaje")}
          </h2>
          <p className="mb-5 max-w-lg leading-relaxed text-muted">
            {t("intro")}
          </p>
          <div className="mb-7 flex flex-col gap-2.5">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-navy">✓</span>
                <span className="text-[0.92rem] text-ink">{b}</span>
              </div>
            ))}
          </div>
          <ContactForm email={email} />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
              {t("coordenadas")}
            </div>
            <h3 className="mb-5.5 font-serif text-xl font-bold text-navy">
              {t("visitanos")}
            </h3>
            <div className="flex flex-col gap-4.5">
              <InfoRow label={t("direccion")} value={address} />
              <InfoRow label={t("telefono")} value={phone} />
              <InfoRow label={t("email")} value={email} />
              <InfoRow label={t("horario")} value={t("horarioValor")} />
            </div>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-navy">
              {t("siguenos")}
            </div>
            <div className="flex gap-2.5">
              <a href="#" aria-label="Facebook" className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-sky">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-sky">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-sky">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-navy">
              {t("ubicacion")}
            </div>
            <div
              className="relative h-[200px] overflow-hidden rounded-xl"
              style={{
                background: "linear-gradient(115deg, #EAF2FB 0%, #9FC3EA 100%)",
              }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <svg width="30" height="38" viewBox="0 0 24 30">
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 18 12 18s12-9.6 12-18C24 5.4 18.6 0 12 0z"
                    fill="#D62828"
                  />
                  <circle cx="12" cy="12" r="5" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-sky text-navy">
        ●
      </div>
      <div>
        <div className="text-sm font-semibold text-navy">{label}</div>
        <div className="text-[0.92rem] leading-relaxed text-muted">{value}</div>
      </div>
    </div>
  );
}
