import { defineType, defineField } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Socio",
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
      name: "tier",
      title: "Nivel",
      type: "string",
      options: {
        list: [
          { title: "Socio estratégico", value: "estrategico" },
          { title: "Platinum", value: "platinum" },
          { title: "CCBC", value: "ccbc" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "website",
      title: "Sitio web",
      type: "url",
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
    select: { title: "name", subtitle: "tier", media: "logo" },
  },
});
