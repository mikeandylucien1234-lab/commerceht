import { useTranslations } from "next-intl";
import type { BoardMember } from "@/types/content";
import { PageHero } from "@/components/ui/PageHero";
import { LeaderCard } from "@/components/team/LeaderCard";
import { DirectorCard } from "@/components/team/DirectorCard";
import { getBoardMembers } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function EquipoPage() {
  const members = await getBoardMembers();
  return <EquipoContent members={members} />;
}

function EquipoContent({ members }: { members: BoardMember[] }) {
  const t = useTranslations("equipo");
  const tNav = useTranslations("nav");

  const presidencia = members.filter((m) => m.section === "presidencia");
  const directores = members.filter((m) => m.section === "directores");
  const gerencia = members.filter((m) => m.section === "gerencia");

  return (
    <div>
      <PageHero kicker={tNav("quienesSomos")} title={tNav("equipo")} />

      <section className="px-6 pb-14 pt-16 md:px-14">
        <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
          {t("liderazgo")}
        </div>
        <h2 className="mb-9 font-serif text-2xl font-bold text-navy md:text-3xl">
          {t("presidencia")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:max-w-[712px]">
          {presidencia.map((m) => (
            <LeaderCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      <section className="bg-mist px-6 pb-14 pt-8 md:px-14">
        <h2 className="mb-8 font-serif text-2xl font-bold text-navy">
          {t("directores")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directores.map((m) => (
            <DirectorCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-14 md:px-14">
        <h2 className="mb-8 font-serif text-2xl font-bold text-navy">
          {t("gerencia")}
        </h2>
        <div className="max-w-[340px]">
          {gerencia.map((m) => (
            <LeaderCard key={m.id} member={m} />
          ))}
        </div>
      </section>
    </div>
  );
}
