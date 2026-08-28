import type { StructureResolver } from "sanity/structure";

const SINGLETON_TYPES = new Set(["siteSettings"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Configuración del sitio")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("post").title("Noticias"),
      S.documentTypeListItem("documentResource").title("Documentos"),
      S.documentTypeListItem("page").title("Páginas estáticas"),
      S.divider(),
      S.documentTypeListItem("boardMember").title("Directorio"),
      S.documentTypeListItem("partner").title("Socios"),
      S.documentTypeListItem("alliance").title("Alianzas"),
      S.documentTypeListItem("committee").title("Comités / Departamentos"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "siteSettings",
            "post",
            "documentResource",
            "page",
            "boardMember",
            "partner",
            "alliance",
            "committee",
          ].includes(item.getId() as string)
      ),
    ]);

export { SINGLETON_TYPES };
