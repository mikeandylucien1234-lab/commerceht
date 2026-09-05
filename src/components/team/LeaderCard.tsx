import { useLocale } from "next-intl";
import type { BoardMember, Locale } from "@/types/content";
import { t } from "@/types/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function LeaderCard({ member, size = "lg" }: { member: BoardMember; size?: "lg" | "sm" }) {
  const locale = useLocale() as Locale;
  const photoHeight = size === "lg" ? "h-[260px]" : "h-[180px]";

  return (
    <div className="overflow-hidden rounded-2xl bg-mist shadow-[0_4px_16px_rgba(11,45,92,0.08)]">
      <div className={`relative ${photoHeight}`}>
        <ImagePlaceholder
          image={member.photo}
          src={member.photoSrc}
          label={member.placeholder}
        />
      </div>
      <div className="p-5.5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-red">
          {t(member.role, locale)}
        </div>
        <div className="mb-1 font-serif text-lg font-bold text-navy">{member.name}</div>
        {member.company && <div className="text-sm text-muted">{member.company}</div>}
      </div>
    </div>
  );
}
