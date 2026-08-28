import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const isSanityConfigured = Boolean(projectId && dataset);

const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    })
  : null;

/**
 * Fetches from Sanity when configured, otherwise returns null so callers
 * can fall back to static placeholder content (no Sanity project exists yet).
 */
export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  tags: string[] = []
): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { tags },
    });
  } catch (error) {
    console.error("Sanity fetch failed", error);
    return null;
  }
}
