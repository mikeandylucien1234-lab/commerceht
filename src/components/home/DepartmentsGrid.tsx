import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import type { Committee, Locale } from "@/types/content";
import { t as tLocale } from "@/types/content";

const NUMBER_ICONS: Record<number, string> = {
  1: "/images/departments/num-01.png",
  2: "/images/departments/num-02.png",
  3: "/images/departments/num-03.png",
};

export function DepartmentsGrid({ departments }: { departments: Committee[] }) {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  return (
    <section className="bg-white px-6 py-16 md:px-14">
      <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
        {t("organizacionLabel")}
      </div>
      <h2 className="mb-9 font-serif text-2xl font-bold text-navy md:text-3xl">
        {t("departamentos")}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {departments.map((dep, i) => {
          const icon = NUMBER_ICONS[i + 1];
          return (
            <div
              key={dep.id}
              className="flex min-h-[220px] flex-col rounded-xl bg-mist p-6"
            >
              {icon ? (
                <Image
                  src={icon}
                  alt={`${i + 1}`}
                  width={500}
                  height={330}
                  className="h-14 w-auto"
                />
              ) : (
                <div className="font-serif text-3xl font-bold text-red/50">
                  {String(i + 1).padStart(2, "0")}
                </div>
              )}
              <div className="mb-2.5 mt-3.5 font-serif text-base font-bold leading-snug text-navy">
                {tLocale(dep.name, locale)}
              </div>
              <div className="text-sm leading-relaxed text-muted">
                {tLocale(dep.description, locale)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
