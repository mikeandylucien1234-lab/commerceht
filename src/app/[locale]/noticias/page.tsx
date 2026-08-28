import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Locale, Post } from "@/types/content";
import { PageHero } from "@/components/ui/PageHero";
import { NewsList } from "@/components/news/NewsList";
import { getPosts } from "@/sanity/lib/fetchers";
import { newsCategories } from "@/lib/placeholder-data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  return { title: `${tNav("noticias")} — CCH` };
}

export default async function NoticiasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await getPosts(locale as Locale);

  return <NoticiasContent posts={posts} />;
}

function NoticiasContent({ posts }: { posts: Post[] }) {
  const t = useTranslations("noticias");
  const tNav = useTranslations("nav");

  const categories = Array.from(
    new Set([newsCategories[0], ...posts.map((p) => p.category)])
  );

  return (
    <div>
      <PageHero title={tNav("noticias")} compact />

      <section className="px-6 pb-24 pt-12 md:px-14">
        <h2 className="mb-6 font-serif text-xl font-bold text-navy">
          {t("ultimas")}
        </h2>
        <NewsList posts={posts} categories={categories} />
      </section>
    </div>
  );
}
