import { useTranslations } from "next-intl";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Partner } from "@/types/content";

function Row({ partners, direction }: { partners: Partner[]; direction: "left" | "right" }) {
  const doubled = [...partners, ...partners];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-12 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className="relative flex h-[90px] w-[160px] flex-none items-center justify-center rounded-[10px] bg-mist p-4"
          >
            <ImagePlaceholder
              image={p.logo}
              src={p.logoSrc}
              label={p.name}
              fit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersMarquee({
  rowA,
  rowB,
}: {
  rowA: Partner[];
  rowB: Partner[];
}) {
  const t = useTranslations("home");

  return (
    <section className="overflow-hidden py-16">
      <h2 className="mb-10 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
        {t("nuestrosSocios")}
      </h2>
      <div className="flex flex-col gap-7">
        <h3 className="text-center text-lg font-semibold text-navy">
          {t("sociosEstrategicos")}
        </h3>
        <Row partners={rowA} direction="left" />
        <h3 className="mt-2 text-center text-lg font-semibold text-navy">
          {t("sociosLabel")}
        </h3>
        <Row partners={rowB} direction="right" />
      </div>
    </section>
  );
}
