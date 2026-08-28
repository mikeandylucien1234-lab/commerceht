import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function IntroPitch() {
  const t = useTranslations("home");

  return (
    <section className="bg-white px-6 pb-10 pt-16 text-center md:px-14">
      <p className="mx-auto mb-5 max-w-3xl text-xl font-semibold leading-relaxed text-navy">
        {t("pitchTitle")}
      </p>
      <p className="mx-auto mb-8 max-w-2xl text-lg font-medium leading-relaxed text-navy">
        {t("pitchSubtitle")}
      </p>
      <Button href="/servicios">{t("verServicios")}</Button>
    </section>
  );
}
