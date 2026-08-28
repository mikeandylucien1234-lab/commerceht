import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import type { Post } from "@/types/content";

export function NewsGrid({ posts }: { posts: Post[] }) {
  const t = useTranslations("home");

  return (
    <section className="px-6 pb-16 pt-6 md:px-14">
      <h2 className="mb-11 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
        {t("novedades")}
      </h2>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 6).map((post) => (
          <div key={post.id}>
            <div className="relative h-[210px] overflow-hidden rounded-2xl border-[3px] border-red shadow-[0_0_0_6px_rgba(214,40,40,0.12)]">
              <ImagePlaceholder image={post.image} label={post.placeholder} />
            </div>
            <div className="mt-4 font-serif text-lg font-bold leading-snug text-navy">
              {post.title}
            </div>
            <div className="mt-1 text-sm text-muted">
              {post.date}{" "}
              /{" "}
              <Link href="/noticias" className="font-semibold text-red">
                {t("verMas")}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/noticias" className="tracking-wider">
          {t("verTodo")}
        </Button>
      </div>
    </section>
  );
}
