import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import type { Alliance, Locale } from "@/types/content";
import { t } from "@/types/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function AllianceBlock({ alliance }: { alliance: Alliance }) {
  const locale = useLocale() as Locale;
  const tr = useTranslations("alianzas");

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 sm:grid-cols-[200px_1fr]">
      <div className="relative h-[120px] rounded-xl bg-mist p-4.5 shadow-[0_4px_16px_rgba(11,45,92,0.08)]">
        <ImagePlaceholder image={alliance.logo} label={alliance.name} />
      </div>
      <div>
        <h2 className="mb-3 font-serif text-2xl font-bold text-navy">
          {alliance.name}
        </h2>
        <p className="mb-6 leading-relaxed text-muted">
          {t(alliance.description, locale)}
        </p>
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-red">
          {tr("beneficioLabel")}
        </div>
        <div className="flex flex-col gap-2.5">
          {alliance.benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center text-navy">
                ✓
              </span>
              <span className="text-[0.94rem] leading-relaxed text-ink">
                {t(b, locale)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
