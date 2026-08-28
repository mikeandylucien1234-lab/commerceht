import { defineType, defineField } from "sanity";

export const page = defineType({
  name: "page",
  title: "Página estática",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kicker",
      title: "Texto superior (kicker)",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
