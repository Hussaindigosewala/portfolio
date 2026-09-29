import fs from "node:fs";
import path from "node:path";
import {
  SOCIAL_SUBCATEGORIES,
  type MediaType,
  type PortfolioCategory,
  type PortfolioItem,
  type SocialSubcategory,
} from "@/lib/portfolio-shared";

const PORTFOLIO_ROOT = path.join(process.cwd(), "public", "assets", "portfolio");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);
const VIDEO_EXT = new Set([".mp4", ".webm"]);

const CATEGORY_META: Record<
  string,
  { title: string; blurb: string; hasTop: boolean; hasSubcategories: boolean }
> = {
  "social-media": {
    title: "Social Media Creatives",
    blurb: "Scroll-stopping posts, tailored per niche.",
    hasTop: true,
    hasSubcategories: true,
  },
  "landing-creatives": {
    title: "Landing Page Creatives",
    blurb: "Hero banners, sale campaigns, and print collateral.",
    hasTop: false,
    hasSubcategories: false,
  },
  "motion-design": {
    title: "Emailers & Header Animations",
    blurb: "Looping animations, promos, and campaign GIFs.",
    hasTop: false,
    hasSubcategories: false,
  },
  "nft-artworks": {
    title: "2D NFT Artworks",
    blurb: "Surreal 2D manipulations and collectible art.",
    hasTop: true,
    hasSubcategories: false,
  },
};

const CATEGORY_ORDER = ["social-media", "landing-creatives", "motion-design", "nft-artworks"];

function isHashy(slug: string): boolean {
  const core = slug.replace(/-/g, "");
  if (core.length >= 20 && /^[0-9a-f]+$/.test(core)) return true;
  if (/^\d+$/.test(core)) return true;
  return false;
}

function titleFromFilename(filename: string, fallback: string): string {
  const slug = filename.replace(/\.[^.]+$/, "");
  if (isHashy(slug)) return fallback;
  const words = slug.split("-").filter((w) => w && !/^[0-9a-f]{6,}$/.test(w));
  if (words.length === 0) return fallback;
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .slice(0, 60);
}

function listFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => {
      const ext = path.extname(name).toLowerCase();
      return IMAGE_EXT.has(ext) || VIDEO_EXT.has(ext);
    })
    .sort();
}

function buildItem(
  categorySlug: string,
  folderRel: string,
  filename: string,
  index: number,
  subcategory: SocialSubcategory | null,
): PortfolioItem {
  const ext = path.extname(filename).toLowerCase();
  const mediaType: MediaType = VIDEO_EXT.has(ext) ? "video" : "image";
  const src = `/assets/portfolio/${categorySlug}/${folderRel ? `${folderRel}/` : ""}${filename}`;
  const fallbackTitle = `${CATEGORY_META[categorySlug]?.title ?? categorySlug} ${String(index + 1).padStart(2, "0")}`;
  return {
    id: `${categorySlug}-${folderRel || "main"}-${index}`,
    title: titleFromFilename(filename, fallbackTitle),
    category: categorySlug,
    subcategory,
    mediaType,
    mediaSrc: src,
    thumbnailSrc: mediaType === "video" ? null : src,
    isPlaceholder: false,
  };
}

function scanCategory(slug: string): PortfolioCategory {
  const meta = CATEGORY_META[slug];
  const baseDir = path.join(PORTFOLIO_ROOT, slug);

  const displayFiles = listFiles(path.join(baseDir, "display"));
  const topFiles = meta.hasTop ? listFiles(path.join(baseDir, "top")) : [];
  const looseFiles = listFiles(baseDir);

  const featured = displayFiles.map((f, i) => buildItem(slug, "display", f, i, null));

  const orderedGalleryFiles: { folderRel: string; filename: string }[] = [
    ...topFiles.map((f) => ({ folderRel: "top", filename: f })),
    ...looseFiles.map((f) => ({ folderRel: "", filename: f })),
  ];

  const items = orderedGalleryFiles.map((entry, i) => {
    const subcategory = meta.hasSubcategories
      ? SOCIAL_SUBCATEGORIES[i % SOCIAL_SUBCATEGORIES.length]
      : null;
    return buildItem(slug, entry.folderRel, entry.filename, i, subcategory);
  });

  return {
    slug,
    title: meta.title,
    blurb: meta.blurb,
    subcategories: meta.hasSubcategories ? SOCIAL_SUBCATEGORIES : null,
    items,
    featured,
  };
}

export function getCategories(): PortfolioCategory[] {
  return CATEGORY_ORDER.map(scanCategory);
}

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  if (!CATEGORY_META[slug]) return undefined;
  return scanCategory(slug);
}

export function getCategorySlugs(): string[] {
  return CATEGORY_ORDER;
}