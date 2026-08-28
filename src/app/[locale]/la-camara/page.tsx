import { useTranslations } from "next-intl";
import type { Committee } from "@/types/content";
import { PageHero } from "@/components/ui/PageHero";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CommitteeLetterGrid } from "@/components/committees/CommitteeLetterGrid";
import { getCommittees } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function LaCamaraPage() {
  const committees = (await getCommittees()).filter((c) => c.type === "comite");

  return <LaCamaraContent committees={committees} />;
}

function LaCamaraContent({ committees }: { committees: Committee[] }) {
  const t = useTranslations("lacamara");
  const tNav = useTranslations("nav");
  const tHome = useTranslations("home");

  return (
    <div>
      <PageHero kicker={tNav("quienesSomos")} title={tNav("lacamara")} />

      <section className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-14">
          <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
            {t("kicker")}
          </div>
          <h2 className="mb-4.5 font-serif text-2xl font-bold leading-tight text-navy md:text-3xl">
            {t("title")}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted">{t("p1")}</p>
          <p className="text-base leading-relaxed text-muted">{t("p2")}</p>
        </div>
        <div className="relative h-[300px] lg:h-auto">
          <ImagePlaceholder label="Photo — presentación institucional" />
        </div>
      </section>

      <section className="bg-mist px-6 pb-20 pt-16 md:px-14">
        <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
          {tHome("organizacionLabel")}
        </div>
        <h2 className="mb-4.5 font-serif text-2xl font-bold text-navy md:text-3xl">
          {t("comitesTitle")}
        </h2>
        <p className="mb-9 max-w-2xl text-base leading-relaxed text-muted">
          {t("comitesDesc")}
        </p>
        <CommitteeLetterGrid committees={committees} />
      </section>
    </div>
  );
}
