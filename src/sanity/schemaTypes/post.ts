import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Noticia",
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
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          "CCBC",
          "Eventos",
          "Noticias",
          "Portada",
          "Portal Socios",
        ].map((c) => ({ title: c, value: c })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Fecha de publicación, nueva primero",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "mainImage" },
  },
});
