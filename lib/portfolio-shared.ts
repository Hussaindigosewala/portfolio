export type MediaType = "image" | "video";

export const SOCIAL_SUBCATEGORIES = [
  "Corporate & HR",
  "Skincare & Beauty",
  "Education",
  "Festive Creatives",
] as const;

export type SocialSubcategory = (typeof SOCIAL_SUBCATEGORIES)[number];

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  subcategory: SocialSubcategory | null;
  mediaType: MediaType;
  mediaSrc: string | null;
  thumbnailSrc: string | null;
  isPlaceholder: boolean;
}

export interface PortfolioCategory {
  slug: string;
  title: string;
  blurb: string;
  subcategories: readonly SocialSubcategory[] | null;
  items: PortfolioItem[];
  featured: PortfolioItem[];
}

export function getAspectClass(slug: string): string {
  switch (slug) {
    case "landing-creatives":
      return "aspect-3/4";
    case "motion-design":
      return "aspect-16/9";
    case "social-media":
      return "aspect-square";
    default:
      return "aspect-4/3";
  }
}