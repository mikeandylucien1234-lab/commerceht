import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Partner } from "@/types/content";

export function LogoGrid({
  partners,
  columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  height = "h-[120px]",
}: {
  partners: Partner[];
  columns?: string;
  height?: string;
}) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {partners.map((p) => (
        <a
          key={p.id}
          href={p.website || "#"}
          className={`relative block rounded-xl bg-mist p-4 shadow-[0_4px_16px_rgba(11,45,92,0.08)] ${height}`}
        >
          <ImagePlaceholder image={p.logo} label={p.name} />
        </a>
      ))}
    </div>
  );
}
