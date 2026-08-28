import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configuración del sitio",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "heroSlides",
      title: "Slides del hero (Inicio)",
      type: "array",
      of: [
        {
          type: "object",
          name: "heroSlide",
          fields: [
            defineField({ name: "text", title: "Texto", type: "localeString" }),
            defineField({ name: "image", title: "Imagen", type: "image" }),
          ],
        },
      ],
    }),
    defineField({
      name: "yearsBanner",
      title: 'Banner de años (ej: "3 años conectando oportunidades")',
      type: "localeString",
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Teléfono",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email de contacto",
      type: "string",
    }),
    defineField({
      name: "membershipEmail",
      title: "Email de socios",
      type: "string",
    }),
    defineField({
      name: "officeHours",
      title: "Horario de atención",
      type: "localeString",
    }),
    defineField({
      name: "socialLinks",
      title: "Redes sociales",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "tiktok", title: "TikTok", type: "url" }),
      ],
    }),
    defineField({
      name: "socialHandle",
      title: 'Handle redes (ej: "@camara_cch")',
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Configuración del sitio" }),
  },
});
