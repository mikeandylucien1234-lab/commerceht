import { defineType, defineField } from "sanity";

export const committee = defineType({
  name: "committee",
  title: "Comité / Departamento",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "localeText",
    }),
    defineField({
      name: "letter",
      title: "Letra / inicial",
      type: "string",
      description: 'Usada en la página "La Cámara" (ej: "L" para Logística)',
    }),
    defineField({
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Departamento (Inicio)", value: "departamento" },
          { title: "Comité (La Cámara)", value: "comite" },
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
    select: { title: "name.es", subtitle: "type" },
  },
});
