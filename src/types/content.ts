export type Locale = "es" | "fr";

export type LocaleString = { es: string; fr?: string };

export function t(value: LocaleString | undefined, locale: Locale): string {
  if (!value) return "";
  return value[locale] || value.es || "";
}

export type SanityImageLike = {
  asset?: { _ref?: string; url?: string };
} | null;

export type HeroSlide = {
  text: LocaleString;
  image?: SanityImageLike;
  placeholder: string;
};

export type SiteSettings = {
  logo?: SanityImageLike;
  heroSlides: HeroSlide[];
  yearsBanner: LocaleString;
  address: string;
  phone: string;
  email: string;
  membershipEmail: string;
  website: string;
  officeHours: LocaleString;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
  socialHandle: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image?: SanityImageLike;
  /** Static public/ path used when there's no Sanity image yet (real, non-CMS photos). */
  imageSrc?: string;
  placeholder: string;
  body?: unknown[];
  /** Plain-text paragraphs for placeholder-sourced articles (Sanity posts use `body` portable text instead). */
  paragraphs?: string[];
};

export type DocumentResource = {
  id: string;
  title: string;
  description: string;
  fileUrl?: string;
};

export type BoardSection = "presidencia" | "directores" | "gerencia";

export type BoardMember = {
  id: string;
  name: string;
  role: LocaleString;
  company?: string;
  section: BoardSection;
  photo?: SanityImageLike;
  placeholder: string;
};

export type PartnerTier = "estrategico" | "platinum" | "ccbc";

export type Partner = {
  id: string;
  name: string;
  tier: PartnerTier;
  logo?: SanityImageLike;
  website?: string;
};

export type Alliance = {
  id: string;
  name: string;
  description: LocaleString;
  benefits: LocaleString[];
  logo?: SanityImageLike;
  website?: string;
  featured: boolean;
};

export type CommitteeType = "departamento" | "comite";

export type Committee = {
  id: string;
  name: LocaleString;
  description: LocaleString;
  letter?: string;
  type: CommitteeType;
};

export type OrgLink = { es: string; fr?: string };
