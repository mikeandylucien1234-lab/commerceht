export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-01";

// Empty string when unset so the app (and static builds) can run without a
// Sanity project provisioned yet; lib/client.ts gates real fetches on this.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const supportedLocales = [
  { id: "es", title: "Español" },
  { id: "fr", title: "Français" },
];
