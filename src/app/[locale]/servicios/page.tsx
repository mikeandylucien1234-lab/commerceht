import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { servicesList } from "@/lib/placeholder-data";
import { t } from "@/types/content";
import type { Locale } from "@/types/content";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  return { title: `${tNav("servicios")} — CCH` };
}

export default function ServiciosPage() {
  const tr = useTranslations("servicios");
  const tNav = useTranslations("nav");
  const currentLocale = useLocale() as Locale;

  return (
    <div>
      <PageHero kicker="Lo que hacemos" title={tNav("servicios")} />

      <section className="px-6 pb-6 pt-16 text-center md:px-14">
        <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-navy">
          {tr("intro")}
        </p>
      </section>

      <section className="px-6 pb-24 pt-10 md:px-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((s) => (
            <div key={s.title.es} className="rounded-2xl bg-mist p-8">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white">
                ✓
              </div>
              <div className="mb-2 font-serif text-lg font-bold text-navy">
                {t(s.title, currentLocale)}
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {t(s.desc, currentLocale)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy px-6 py-11 text-center md:px-14">
        <div className="font-serif text-lg font-bold text-white">
          {tr("banner")
            .split("•")
            .map((part, i, arr) => (
              <span key={i}>
                {part.trim()}
                {i < arr.length - 1 && <span className="text-red"> • </span>}
              </span>
            ))}
        </div>
      </section>
    </div>
  );
}
