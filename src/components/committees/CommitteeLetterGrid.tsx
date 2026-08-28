import { useLocale } from "next-intl";
import type { Committee, Locale } from "@/types/content";
import { t } from "@/types/content";

export function CommitteeLetterGrid({ committees }: { committees: Committee[] }) {
  const locale = useLocale() as Locale;

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
      {committees.map((c) => (
        <div
          key={c.id}
          className="rounded-2xl bg-white p-8 text-center shadow-[0_4px_16px_rgba(11,45,92,0.08)]"
        >
          <div className="mx-auto mb-4.5 flex h-14 w-14 items-center justify-center rounded-full bg-navy font-serif text-xl font-bold text-white">
            {c.letter}
          </div>
          <div className="font-serif text-base font-bold text-navy">
            {t(c.name, locale)}
          </div>
        </div>
      ))}
    </div>
  );
}
