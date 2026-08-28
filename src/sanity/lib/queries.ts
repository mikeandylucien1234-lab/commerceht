import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  logo,
  heroSlides[]{ text, image },
  yearsBanner,
  address,
  phone,
  email,
  membershipEmail,
  officeHours,
  socialLinks,
  socialHandle
}`;

export const postsQuery = groq`*[_type == "post" && language == $locale] | order(publishedAt desc){
  _id, title, "slug": slug.current, category, excerpt, mainImage, publishedAt
}`;

export const postBySlugQuery = groq`*[_type == "post" && language == $locale && slug.current == $slug][0]{
  _id, title, category, excerpt, mainImage, body, publishedAt
}`;

export const documentsQuery = groq`*[_type == "documentResource" && language == $locale] | order(order asc){
  _id, title, description, "fileUrl": file.asset->url, order
}`;

export const boardMembersQuery = groq`*[_type == "boardMember"] | order(order asc){
  _id, name, role, company, photo, section, order
}`;

export const partnersQuery = groq`*[_type == "partner"] | order(order asc){
  _id, name, logo, tier, website, order
}`;

export const alliancesQuery = groq`*[_type == "alliance"] | order(order asc){
  _id, name, logo, description, benefits, website, featured, order
}`;

export const committeesQuery = groq`*[_type == "committee"] | order(order asc){
  _id, name, description, letter, type, order
}`;

export const pageBySlugQuery = groq`*[_type == "page" && language == $locale && slug.current == $slug][0]{
  _id, title, kicker, body
}`;
