import { useTranslations, useLocale } from "next-intl";
import type { Locale } from "@/types/content";
import { t as tLocale } from "@/types/content";
import { impactItems } from "@/lib/placeholder-data";
import type { SiteSettings } from "@/types/content";

export function ImpactStats({ settings }: { settings: SiteSettings }) {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  return (
    <section>
      <div className="bg-red px-6 py-5 text-center md:px-14">
        <div className="font-serif text-2xl font-bold text-white">
          {tLocale(settings.yearsBanner, locale)}
        </div>
      </div>
      <div className="px-6 py-16 md:px-14">
        <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
          {t("experienceLabel")}
        </div>
        <h2 className="mb-9 max-w-3xl font-serif text-2xl font-bold leading-tight text-navy md:text-3xl">
          {t("experienceTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
          {impactItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-sky text-sm text-navy">
                ✓
              </span>
              <span className="text-base font-medium text-ink">
                {locale === "fr" ? item.fr : item.es}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
