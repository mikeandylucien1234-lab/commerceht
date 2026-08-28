import { useTranslations, useLocale } from "next-intl";
import { valuesList } from "@/lib/placeholder-data";

export function ValuesGrid() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="px-6 py-16 text-center md:px-14">
      <h2 className="mb-10 font-serif text-2xl font-bold text-navy md:text-3xl">
        {t("valores")}
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-11">
        {valuesList.map((value) => (
          <div key={value.es} className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky text-xl text-navy">
              ●
            </div>
            <span className="text-sm font-semibold text-navy">
              {locale === "fr" ? value.fr : value.es}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
