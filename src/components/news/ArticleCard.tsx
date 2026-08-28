import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Post } from "@/types/content";

export function ArticleCard({ post }: { post: Post }) {
  const t = useTranslations("noticias");

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(11,45,92,0.08)]">
      <div className="relative h-[170px]">
        <ImagePlaceholder image={post.image} label={post.placeholder} />
      </div>
      <div className="p-5">
        <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wide text-red">
          {post.category}
        </div>
        <div className="mb-2 font-serif text-base font-bold leading-snug text-navy">
          {post.title}
        </div>
        <div className="mb-2.5 text-xs text-muted">{post.date}</div>
        <p className="mb-3.5 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <Link href={`/noticias/${post.slug}`} className="text-sm font-semibold text-red">
          {t("leerMas")} →
        </Link>
      </div>
    </div>
  );
}
