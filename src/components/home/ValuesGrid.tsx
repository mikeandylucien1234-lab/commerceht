import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { valuesList } from "@/lib/placeholder-data";

const VALUE_ICONS: Record<string, string> = {
  Colaboración: "/images/values/colaboracion.png",
  Crecimiento: "/images/values/crecimiento.png",
  Diversidad: "/images/values/diversidad.png",
  Innovación: "/images/values/innovacion.png",
  Confianza: "/images/values/confianza.png",
};

export function ValuesGrid() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="px-6 py-16 text-center md:px-14">
      <h2 className="mb-10 font-serif text-2xl font-bold text-navy md:text-3xl">
        {t("valores")}
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-11">
        {valuesList.map((value) => {
          const icon = VALUE_ICONS[value.es];
          return (
            <div key={value.es} className="flex flex-col items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky">
                {icon ? (
                  <div className="relative h-16 w-16">
                    <Image
                      src={icon}
                      alt={locale === "fr" ? value.fr : value.es}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-xl text-navy">●</span>
                )}
              </div>
              <span className="text-sm font-semibold text-navy">
                {locale === "fr" ? value.fr : value.es}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
