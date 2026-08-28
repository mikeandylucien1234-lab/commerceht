import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Alliance, Partner } from "@/types/content";
import { PageHero } from "@/components/ui/PageHero";
import { LogoGrid } from "@/components/partners/LogoGrid";
import { AllianceBlock } from "@/components/partners/AllianceBlock";
import { getAlliances, getPartners } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  return { title: `${tNav("alianzas")} — CCH` };
}

export default async function AlianzasPage() {
  const [alliances, partners] = await Promise.all([
    getAlliances(),
    getPartners(),
  ]);

  return <AlianzasContent alliances={alliances} partners={partners} />;
}

function AlianzasContent({
  alliances,
  partners,
}: {
  alliances: Alliance[];
  partners: Partner[];
}) {
  const tNav = useTranslations("nav");
  const strategic = partners.filter((p) => p.tier === "estrategico");
  const featured = alliances.filter((a) => a.featured);

  return (
    <div>
      <PageHero kicker={tNav("socios")} title={tNav("alianzas")} />

      <section className="px-6 py-14 md:px-14">
        <LogoGrid
          partners={strategic.slice(0, 10)}
          columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          height="h-[88px]"
        />
      </section>

      <div className="flex flex-col gap-14 pb-24">
        {featured.map((alliance, i) => (
          <section
            key={alliance.id}
            className={`px-6 py-14 md:px-14 ${i % 2 === 0 ? "bg-mist" : "bg-white"}`}
          >
            <AllianceBlock alliance={alliance} />
          </section>
        ))}
      </div>
    </div>
  );
}
