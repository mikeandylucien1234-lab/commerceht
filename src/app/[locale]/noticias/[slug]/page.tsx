import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { useTranslations } from "next-intl";
import type { Locale, Post } from "@/types/content";
import { Link } from "@/i18n/navigation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getPostBySlug } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(locale as Locale, slug);
  if (!post) notFound();

  return <ArticleContent post={post} />;
}

function ArticleContent({ post }: { post: Post }) {
  const t = useTranslations("common");

  return (
    <article>
      <div className="relative h-[280px] md:h-[380px]">
        <ImagePlaceholder image={post.image} label={post.placeholder} />
        <div className="absolute inset-0 bg-navy/35" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-10 md:px-14">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80">
            {post.category} · {post.date}
          </div>
          <h1 className="max-w-3xl font-serif text-2xl font-bold leading-tight text-white md:text-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-14 md:px-0">
        <Link href="/noticias" className="mb-8 inline-block text-sm font-semibold text-red">
          ← {t("backToNews")}
        </Link>
        {post.excerpt && (
          <p className="mb-8 text-lg font-medium leading-relaxed text-navy">
            {post.excerpt}
          </p>
        )}
        {post.body ? (
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_ul]:list-disc [&_ul]:pl-5">
            <PortableText value={post.body as never} />
          </div>
        ) : null}
      </div>
    </article>
  );
}
