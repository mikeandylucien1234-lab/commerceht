import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { orgLinks } from "@/lib/placeholder-data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  return { title: `${tNav("links")} — CCH` };
}

export default function LinksPage() {
  const t = useTranslations("links");
  const tNav = useTranslations("nav");

  return (
    <div>
      <PageHero kicker={tNav("informacion")} title={tNav("links")} />

      <section className="px-6 pb-14 pt-16 md:px-14">
        <h2 className="mb-8 font-serif text-2xl font-bold text-navy md:text-3xl">
          {t("organizaciones")}
        </h2>
        <div className="grid max-w-5xl grid-cols-1 gap-x-10 gap-y-0.5 md:grid-cols-2">
          {orgLinks.map((link) => (
            <a
              key={link.es}
              href="#"
              className="flex items-center gap-3.5 border-b border-navy/10 px-1 py-4"
            >
              <span className="text-lg text-red">↗</span>
              <span className="text-[0.98rem] font-medium text-navy">
                {link.es}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-mist px-6 pb-24 pt-8 md:px-14">
        <div className="max-w-2xl rounded-2xl bg-white p-10 shadow-[0_4px_16px_rgba(11,45,92,0.08)]">
          <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
            {t("exportLabel")}
          </div>
          <h3 className="mb-3.5 font-serif text-xl font-bold text-navy">
            {t("exportTitle")}
          </h3>
          <p className="mb-5 leading-relaxed text-muted">{t("exportDesc")}</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm font-semibold text-red">
              {t("sitioEs")} ↗
            </a>
            <a href="#" className="text-sm font-semibold text-red">
              {t("sitioPt")} ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
