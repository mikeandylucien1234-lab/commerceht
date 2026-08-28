"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";

import { apiVersion, dataset, projectId, supportedLocales } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure, SINGLETON_TYPES } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  name: "cch-studio",
  title: "CCH — Cámara Chileno-Haitiana",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: supportedLocales,
      schemaTypes: ["post", "documentResource", "page"],
    }),
  ],
  document: {
    actions: (input, context) =>
      SINGLETON_TYPES.has(context.schemaType)
        ? input.filter(
            ({ action }) => action && !["duplicate", "delete"].includes(action)
          )
        : input,
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((item) => !SINGLETON_TYPES.has(item.templateId));
      }
      return prev;
    },
  },
});
