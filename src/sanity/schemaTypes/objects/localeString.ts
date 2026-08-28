import { defineType, defineField } from "sanity";
import { supportedLocales } from "../../env";

export const localeString = defineType({
  name: "localeString",
  title: "Texto (ES/FR)",
  type: "object",
  fieldsets: [{ name: "translations", title: "Traducciones" }],
  fields: supportedLocales.map((locale) =>
    defineField({
      name: locale.id,
      title: locale.title,
      type: "string",
      fieldset: locale.id === "es" ? undefined : "translations",
      validation: (Rule) => (locale.id === "es" ? Rule.required() : Rule),
    })
  ),
});
