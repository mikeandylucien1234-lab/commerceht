import { defineType, defineField } from "sanity";

export const boardMember = defineType({
  name: "boardMember",
  title: "Miembro del Directorio",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Cargo",
      type: "localeString",
      description:
        'Ej: "Presidente", "Vicepresidenta", "Director", "Gerente General"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Empresa",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "section",
      title: "Sección",
      type: "string",
      options: {
        list: [
          { title: "Presidencia", value: "presidencia" },
          { title: "Directores", value: "directores" },
          { title: "Gerencia", value: "gerencia" },
        ],
      },
      validation: (Rule) => Rule.required(),
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
    select: {
      title: "name",
      subtitle: "role.es",
      media: "photo",
    },
  },
});
