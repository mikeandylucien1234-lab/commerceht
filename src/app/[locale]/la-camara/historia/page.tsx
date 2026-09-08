import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { historyMilestones } from "@/lib/placeholder-data";
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
  return { title: `${tNav("historia")} — CCH` };
}

export default function HistoriaPage() {
  const tr = useTranslations("historia");
  const tNav = useTranslations("nav");
  const currentLocale = useLocale() as Locale;

  return (
    <div>
      <PageHero kicker={tNav("quienesSomos")} title={tNav("historia")} />

      <section className="px-6 pb-6 pt-16 text-center md:px-14">
        <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-navy">
          {tr("intro")}
        </p>
      </section>

      <section className="px-6 pb-24 pt-14 md:px-14">
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
          <div className="absolute left-[16.6%] right-[16.6%] top-[26px] hidden h-[3px] bg-line sm:block" />
          {historyMilestones.map((m) => (
            <div key={m.year} className="relative z-10 px-6 text-center">
              <div className="mx-auto mb-6 h-[22px] w-[22px] rounded-full border-4 border-white bg-red shadow-[0_0_0_2px_#D62828]" />
              <div className="mb-3 font-serif text-3xl font-bold text-navy">{m.year}</div>
              <div className="mb-2.5 font-serif text-lg font-bold text-navy">{m.title}</div>
              <p className="text-sm leading-relaxed text-muted">
                {t(m.desc, currentLocale)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
