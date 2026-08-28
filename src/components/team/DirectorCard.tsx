import { useLocale } from "next-intl";
import type { BoardMember, Locale } from "@/types/content";
import { t } from "@/types/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function DirectorCard({ member }: { member: BoardMember }) {
  const locale = useLocale() as Locale;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(11,45,92,0.08)]">
      <div className="relative h-[180px]">
        <ImagePlaceholder image={member.photo} label={member.placeholder} />
      </div>
      <div className="p-4.5">
        <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-red">
          {t(member.role, locale)}
        </div>
        <div className="mb-1 font-serif text-base font-bold text-navy">{member.name}</div>
        <div className="text-sm text-muted">{member.company}</div>
      </div>
    </div>
  );
}
