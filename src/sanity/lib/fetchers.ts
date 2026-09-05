import type { Locale } from "@/types/content";
import type {
  Alliance,
  BoardMember,
  Committee,
  DocumentResource,
  Partner,
  Post,
  SiteSettings,
} from "@/types/content";
import * as placeholder from "@/lib/placeholder-data";
import { sanityFetch } from "./client";
import {
  alliancesQuery,
  boardMembersQuery,
  committeesQuery,
  documentsQuery,
  partnersQuery,
  postBySlugQuery,
  postsQuery,
  siteSettingsQuery,
} from "./queries";

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await sanityFetch<SiteSettings>(
    siteSettingsQuery,
    {},
    ["siteSettings"]
  );
  return data ?? placeholder.siteSettings;
}

export async function getPosts(locale: Locale): Promise<Post[]> {
  const data = await sanityFetch<Post[]>(postsQuery, { locale }, ["post"]);
  return data && data.length > 0 ? data : placeholder.posts;
}

export async function getPostBySlug(
  locale: Locale,
  slug: string
): Promise<Post | null> {
  const data = await sanityFetch<Post>(
    postBySlugQuery,
    { locale, slug },
    ["post"]
  );
  if (data) return data;
  return placeholder.posts.find((p) => p.slug === slug) ?? null;
}

export async function getDocuments(locale: Locale): Promise<DocumentResource[]> {
  const data = await sanityFetch<DocumentResource[]>(
    documentsQuery,
    { locale },
    ["documentResource"]
  );
  return data && data.length > 0 ? data : placeholder.documents;
}

export async function getBoardMembers(): Promise<BoardMember[]> {
  const data = await sanityFetch<BoardMember[]>(
    boardMembersQuery,
    {},
    ["boardMember"]
  );
  return data && data.length > 0 ? data : placeholder.boardMembers;
}

export async function getPartners(): Promise<Partner[]> {
  const data = await sanityFetch<Partner[]>(partnersQuery, {}, ["partner"]);
  return data && data.length > 0
    ? data
    : [
        ...placeholder.strategicPartners,
        ...placeholder.platinumPartners,
        ...placeholder.ccbcPartners,
      ];
}

export async function getAlliances(): Promise<Alliance[]> {
  const data = await sanityFetch<Alliance[]>(alliancesQuery, {}, ["alliance"]);
  return data && data.length > 0 ? data : placeholder.alliances;
}

export async function getCommittees(): Promise<Committee[]> {
  const data = await sanityFetch<Committee[]>(
    committeesQuery,
    {},
    ["committee"]
  );
  return data && data.length > 0
    ? data
    : [...placeholder.departments, ...placeholder.committees];
}
