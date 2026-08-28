import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/types/content";
import {
  getSiteSettings,
  getPosts,
  getPartners,
  getCommittees,
} from "@/sanity/lib/fetchers";
import { socialPosts } from "@/lib/placeholder-data";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { IntroPitch } from "@/components/home/IntroPitch";
import { NewsGrid } from "@/components/home/NewsGrid";
import { ImpactStats } from "@/components/home/ImpactStats";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { SocialCarousel } from "@/components/home/SocialCarousel";
import { DepartmentsGrid } from "@/components/home/DepartmentsGrid";
import { ValuesGrid } from "@/components/home/ValuesGrid";

export const dynamic = "force-dynamic";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [settings, posts, partners, committees] = await Promise.all([
    getSiteSettings(),
    getPosts(locale as Locale),
    getPartners(),
    getCommittees(),
  ]);

  const departments = committees.filter((c) => c.type === "departamento");
  const half = Math.ceil(partners.length / 2);
  const rowA = partners.slice(0, half);
  const rowB = partners.slice(half);

  return (
    <div>
      <HeroCarousel slides={settings.heroSlides} locale={locale as Locale} />
      <IntroPitch />
      <NewsGrid posts={posts} />
      <ImpactStats settings={settings} />
      <PartnersMarquee rowA={rowA} rowB={rowB} />
      <SocialCarousel posts={socialPosts} handle={settings.socialHandle} />
      <DepartmentsGrid departments={departments} />
      <ValuesGrid />
    </div>
  );
}
