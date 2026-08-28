import { useTranslations } from "next-intl";
import type { Partner, SiteSettings } from "@/types/content";
import { PageHero } from "@/components/ui/PageHero";
import { LogoGrid } from "@/components/partners/LogoGrid";
import { MembershipForm } from "@/components/forms/MembershipForm";
import { getPartners, getSiteSettings } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function SociosPage() {
  const [partners, settings] = await Promise.all([
    getPartners(),
    getSiteSettings(),
  ]);

  return <SociosContent partners={partners} settings={settings} />;
}

function SociosContent({
  partners,
  settings,
}: {
  partners: Partner[];
  settings: SiteSettings;
}) {
  const t = useTranslations("socios");
  const tNav = useTranslations("nav");

  const platinum = partners.filter((p) => p.tier === "platinum");
  const ccbc = partners.filter((p) => p.tier === "ccbc");

  return (
    <div>
      <PageHero kicker={tNav("socios")} title={tNav("nuestrosSocios")} />

      <section className="px-6 py-16 md:px-14">
        <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
          {t("nivelPremium")}
        </div>
        <h2 className="mb-8 font-serif text-2xl font-bold text-navy md:text-3xl">
          {t("platinum")}
        </h2>
        <LogoGrid partners={platinum} />
      </section>

      <section className="bg-mist px-6 pb-18 pt-4 md:px-14">
        <h2 className="mb-8 font-serif text-2xl font-bold text-navy">
          {t("ccbc")}
        </h2>
        <LogoGrid
          partners={ccbc}
          columns="grid-cols-3 sm:grid-cols-5 lg:grid-cols-9"
          height="h-[78px]"
        />
      </section>

      <section className="px-6 py-16 md:px-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-red">
              {t("uneteLabel")}
            </div>
            <h2 className="mb-4.5 font-serif text-2xl font-bold text-navy md:text-3xl">
              {t("uneteTitle")}
            </h2>
            <p className="leading-relaxed text-muted">
              {t("uneteDesc", {
                email: settings.membershipEmail,
              })
                .split(settings.membershipEmail)
                .map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <a
                        href={`mailto:${settings.membershipEmail}`}
                        className="font-semibold text-red"
                      >
                        {settings.membershipEmail}
                      </a>
                    )}
                  </span>
                ))}
            </p>
          </div>
          <MembershipForm email={settings.membershipEmail} />
        </div>
      </section>
    </div>
  );
}
