import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/types/content";
import type { DocumentResource } from "@/types/content";
import { PageHero } from "@/components/ui/PageHero";
import { getDocuments } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  return { title: `${tNav("documentos")} — CCH` };
}

export default async function DocumentosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const documents = await getDocuments(locale as Locale);

  return <DocumentosContent documents={documents} />;
}

function DocumentosContent({ documents }: { documents: DocumentResource[] }) {
  const t = useTranslations("documentos");
  const tNav = useTranslations("nav");

  return (
    <div>
      <PageHero kicker={tNav("informacion")} title={tNav("documentos")} />

      <section className="px-6 py-16 md:px-14">
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
          {t("intro")}
        </p>
        <div className="flex max-w-3xl flex-col gap-0.5">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={doc.fileUrl || "#"}
              target={doc.fileUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4.5 border-b border-navy/10 px-2 py-5"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] bg-mist text-navy">
                📄
              </div>
              <div className="flex-1">
                <div className="font-semibold text-navy">{doc.title}</div>
                <div className="mt-0.5 text-sm text-muted">
                  {doc.description}
                </div>
              </div>
              <span className="flex-none text-lg text-red">→</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
