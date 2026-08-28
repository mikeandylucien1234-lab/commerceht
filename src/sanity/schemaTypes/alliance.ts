import { defineType, defineField } from "sanity";

export const alliance = defineType({
  name: "alliance",
  title: "Alianza",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "localeText",
    }),
    defineField({
      name: "benefits",
      title: "Beneficios del convenio",
      type: "array",
      of: [{ type: "localeString" }],
    }),
    defineField({
      name: "website",
      title: "Sitio web",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Mostrar en detalle (bloque grande)",
      type: "boolean",
      initialValue: false,
      description:
        "Las alianzas destacadas se muestran con descripción y beneficios; el resto solo aparece en la grilla de logos.",
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
