import { defineType, defineField } from "sanity";
import { supportedLocales } from "../../env";

export const localeText = defineType({
  name: "localeText",
  title: "Texto largo (ES/FR)",
  type: "object",
  fieldsets: [{ name: "translations", title: "Traducciones" }],
  fields: supportedLocales.map((locale) =>
    defineField({
      name: locale.id,
      title: locale.title,
      type: "text",
      rows: 4,
      fieldset: locale.id === "es" ? undefined : "translations",
      validation: (Rule) => (locale.id === "es" ? Rule.required() : Rule),
    })
  ),
});
