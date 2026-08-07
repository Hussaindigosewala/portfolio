// -----------------------------------------------------------------------------
// Portfolio data — single source of truth for highlights + category pages.
// Real client assets, generated from the organized asset manifest.
// -----------------------------------------------------------------------------

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
}

const NFT_ARTWORKS_ITEMS: PortfolioItem[] = [
  { id: "nft-artworks-01", title: "60 Min", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/60-min.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/60-min.jpg", isPlaceholder: false },
  { id: "nft-artworks-02", title: "Adventure Of Star Sailor The Return", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/adventure-of-star-sailor-the-return.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/adventure-of-star-sailor-the-return.jpg", isPlaceholder: false },
  { id: "nft-artworks-03", title: "Adventure Of Star Sailors Alone", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/adventure-of-star-sailors-alone.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/adventure-of-star-sailors-alone.jpg", isPlaceholder: false },
  { id: "nft-artworks-04", title: "Am I Safe", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/am-i-safe.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/am-i-safe.jpg", isPlaceholder: false },
  { id: "nft-artworks-05", title: "Burning Rose", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/burning-rose.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/burning-rose.jpg", isPlaceholder: false },
  { id: "nft-artworks-06", title: "Chained 2", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/chained-2.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/chained-2.jpg", isPlaceholder: false },
  { id: "nft-artworks-07", title: "Fddfsdfs", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/fddfsdfs.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/fddfsdfs.jpg", isPlaceholder: false },
  { id: "nft-artworks-08", title: "Fish Descovery", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/fish-descovery.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/fish-descovery.jpg", isPlaceholder: false },
  { id: "nft-artworks-09", title: "Giant Wolf", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/giant-wolf.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/giant-wolf.jpg", isPlaceholder: false },
  { id: "nft-artworks-11", title: "New Moon Sailor Nft Jpgfdsf", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/new-moon-sailor-nft-jpgfdsf.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/new-moon-sailor-nft-jpgfdsf.jpg", isPlaceholder: false },
  { id: "nft-artworks-12", title: "One Step Closer Adventure Of The Star Sailor", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/one-step-closer-adventure-of-the-star-sailor.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/one-step-closer-adventure-of-the-star-sailor.jpg", isPlaceholder: false },
  { id: "nft-artworks-14", title: "The Discovery", category: "nft-artworks", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/nft-artworks/the-discovery.jpg", thumbnailSrc: "/assets/portfolio/nft-artworks/the-discovery.jpg", isPlaceholder: false },
  { id: "nft-artworks-15", title: "Video Sha3", category: "nft-artworks", subcategory: null, mediaType: "video", mediaSrc: "/assets/portfolio/nft-artworks/video-sha3-b4fe8be9a61c1a6f5122681b1ae3e99ad2edbba6a0ae5238de19655c478846ab.mp4", thumbnailSrc: null, isPlaceholder: false },
];

const MOTION_DESIGN_ITEMS: PortfolioItem[] = [
  { id: "motion-design-01", title: "10th Dec Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/10th-dec-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/10th-dec-em-02.gif", isPlaceholder: false },
  { id: "motion-design-02", title: "10th Emailer 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/10th-emailer-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/10th-emailer-02.gif", isPlaceholder: false },
  { id: "motion-design-03", title: "10th Oct Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/10th-oct-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/10th-oct-em-02.gif", isPlaceholder: false },
  { id: "motion-design-04", title: "11th July Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/11th-july-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/11th-july-em-02.gif", isPlaceholder: false },
  { id: "motion-design-05", title: "12th Dec Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/12th-dec-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/12th-dec-em-02.gif", isPlaceholder: false },
  { id: "motion-design-06", title: "12th Oct Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/12th-oct-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/12th-oct-em-01.gif", isPlaceholder: false },
  { id: "motion-design-07", title: "13th Feb Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/13th-feb-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/13th-feb-em-02.gif", isPlaceholder: false },
  { id: "motion-design-08", title: "14th Dec Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/14th-dec-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/14th-dec-em-02.gif", isPlaceholder: false },
  { id: "motion-design-09", title: "14th Sep Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/14th-sep-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/14th-sep-em-02.gif", isPlaceholder: false },
  { id: "motion-design-10", title: "15th Oct Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/15th-oct-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/15th-oct-em-02.gif", isPlaceholder: false },
  { id: "motion-design-11", title: "16th Aug Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/16th-aug-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/16th-aug-em-01.gif", isPlaceholder: false },
  { id: "motion-design-12", title: "16th March Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/16th-march-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/16th-march-em-01.gif", isPlaceholder: false },
  { id: "motion-design-13", title: "16th Sep Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/16th-sep-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/16th-sep-em-02.gif", isPlaceholder: false },
  { id: "motion-design-14", title: "17th Nov Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/17th-nov-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/17th-nov-em-01.gif", isPlaceholder: false },
  { id: "motion-design-15", title: "17th Oct Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/17th-oct-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/17th-oct-em-02.gif", isPlaceholder: false },
  { id: "motion-design-16", title: "18th Aug Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/18th-aug-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/18th-aug-em-01.gif", isPlaceholder: false },
  { id: "motion-design-17", title: "18th Dec Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/18th-dec-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/18th-dec-em-01.gif", isPlaceholder: false },
  { id: "motion-design-18", title: "19th Dec Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/19th-dec-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/19th-dec-em-01.gif", isPlaceholder: false },
  { id: "motion-design-19", title: "19th Nov Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/19th-nov-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/19th-nov-em-01.gif", isPlaceholder: false },
  { id: "motion-design-20", title: "19th Oct Em 03", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/19th-oct-em-03.gif", thumbnailSrc: "/assets/portfolio/motion-design/19th-oct-em-03.gif", isPlaceholder: false },
  { id: "motion-design-21", title: "1st Sep Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/1st-sep-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/1st-sep-em-02.gif", isPlaceholder: false },
  { id: "motion-design-22", title: "20th June Emailer 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/20th-june-emailer-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/20th-june-emailer-02.gif", isPlaceholder: false },
  { id: "motion-design-23", title: "21st Dec Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/21st-dec-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/21st-dec-em-01.gif", isPlaceholder: false },
  { id: "motion-design-24", title: "21st Oct Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/21st-oct-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/21st-oct-em-02.gif", isPlaceholder: false },
  { id: "motion-design-25", title: "21st Sep Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/21st-sep-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/21st-sep-em-02.gif", isPlaceholder: false },
  { id: "motion-design-26", title: "22nd Nov Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/22nd-nov-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/22nd-nov-em-02.gif", isPlaceholder: false },
  { id: "motion-design-27", title: "22rd March Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/22rd-march-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/22rd-march-em-02.gif", isPlaceholder: false },
  { id: "motion-design-28", title: "24th Feb Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/24th-feb-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/24th-feb-em-02.gif", isPlaceholder: false },
  { id: "motion-design-29", title: "24th Oct Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/24th-oct-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/24th-oct-em-02.gif", isPlaceholder: false },
  { id: "motion-design-30", title: "25th Aug Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/25th-aug-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/25th-aug-em-02.gif", isPlaceholder: false },
  { id: "motion-design-31", title: "25th Nov Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/25th-nov-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/25th-nov-em-01.gif", isPlaceholder: false },
  { id: "motion-design-32", title: "26th Dec Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/26th-dec-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/26th-dec-em-02.gif", isPlaceholder: false },
  { id: "motion-design-33", title: "27th July Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/27th-july-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/27th-july-em-02.gif", isPlaceholder: false },
  { id: "motion-design-34", title: "27th June Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/27th-june-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/27th-june-em-02.gif", isPlaceholder: false },
  { id: "motion-design-35", title: "28th Dec Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/28th-dec-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/28th-dec-em-01.gif", isPlaceholder: false },
  { id: "motion-design-36", title: "28th Nov Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/28th-nov-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/28th-nov-em-02.gif", isPlaceholder: false },
  { id: "motion-design-37", title: "28th Oct Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/28th-oct-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/28th-oct-em-01.gif", isPlaceholder: false },
  { id: "motion-design-38", title: "28th Sep Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/28th-sep-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/28th-sep-em-02.gif", isPlaceholder: false },
  { id: "motion-design-39", title: "29th Feb Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/29th-feb-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/29th-feb-em-01.gif", isPlaceholder: false },
  { id: "motion-design-40", title: "2nd Nov Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/2nd-nov-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/2nd-nov-em-02.gif", isPlaceholder: false },
  { id: "motion-design-41", title: "30th Aug Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/30th-aug-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/30th-aug-em-01.gif", isPlaceholder: false },
  { id: "motion-design-42", title: "3rd Sep Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/3rd-sep-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/3rd-sep-em-02.gif", isPlaceholder: false },
  { id: "motion-design-43", title: "4th April Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/4th-april-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/4th-april-em-02.gif", isPlaceholder: false },
  { id: "motion-design-44", title: "4th Dec Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/4th-dec-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/4th-dec-em-01.gif", isPlaceholder: false },
  { id: "motion-design-45", title: "4th July Em Op3 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/4th-july-em-op3-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/4th-july-em-op3-02.gif", isPlaceholder: false },
  { id: "motion-design-46", title: "5th Sep Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/5th-sep-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/5th-sep-em-01.gif", isPlaceholder: false },
  { id: "motion-design-47", title: "6th April Emailer 1 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/6th-april-emailer-1-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/6th-april-emailer-1-02.gif", isPlaceholder: false },
  { id: "motion-design-48", title: "6th Dec Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/6th-dec-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/6th-dec-em-02.gif", isPlaceholder: false },
  { id: "motion-design-49", title: "6th Jan Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/6th-jan-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/6th-jan-em-01.gif", isPlaceholder: false },
  { id: "motion-design-50", title: "6th Oct Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/6th-oct-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/6th-oct-em-02.gif", isPlaceholder: false },
  { id: "motion-design-51", title: "7th March Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/7th-march-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/7th-march-em-02.gif", isPlaceholder: false },
  { id: "motion-design-52", title: "7th Sep Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/7th-sep-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/7th-sep-em-02.gif", isPlaceholder: false },
  { id: "motion-design-53", title: "8th Dec Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/8th-dec-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/8th-dec-em-02.gif", isPlaceholder: false },
  { id: "motion-design-54", title: "9th Nov Em 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/9th-nov-em-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/9th-nov-em-02.gif", isPlaceholder: false },
  { id: "motion-design-55", title: "C Kt Husain Kt Husain 2024 Emailer 1st Feb Em 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/c-kt-husain-kt-husain-2024-emailer-1st-feb-em-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/c-kt-husain-kt-husain-2024-emailer-1st-feb-em-01.gif", isPlaceholder: false },
  { id: "motion-design-56", title: "Em Jan 13 2023 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/em-jan-13-2023-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/em-jan-13-2023-02.gif", isPlaceholder: false },
  { id: "motion-design-57", title: "Em Jun 17 Sat 2 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/em-jun-17-sat-2-01.gif", thumbnailSrc: "/assets/portfolio/motion-design/em-jun-17-sat-2-01.gif", isPlaceholder: false },
  { id: "motion-design-58", title: "Em 17th March 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/em-17th-march-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/em-17th-march-02.gif", isPlaceholder: false },
  { id: "motion-design-59", title: "Em 2nd Aug 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/em-2nd-aug-02.gif", thumbnailSrc: "/assets/portfolio/motion-design/em-2nd-aug-02.gif", isPlaceholder: false },
  { id: "motion-design-60", title: "Ezgif Com Optimize 5 1", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/ezgif-com-optimize-5-1.gif", thumbnailSrc: "/assets/portfolio/motion-design/ezgif-com-optimize-5-1.gif", isPlaceholder: false },
  { id: "motion-design-61", title: "Ezgif Com Optimize 5", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/ezgif-com-optimize-5.gif", thumbnailSrc: "/assets/portfolio/motion-design/ezgif-com-optimize-5.gif", isPlaceholder: false },
  { id: "motion-design-62", title: "Final Gif 10th Feb", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/final-gif-10th-feb.gif", thumbnailSrc: "/assets/portfolio/motion-design/final-gif-10th-feb.gif", isPlaceholder: false },
  { id: "motion-design-63", title: "New Year Sale", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/new-year-sale.png", thumbnailSrc: "/assets/portfolio/motion-design/new-year-sale.png", isPlaceholder: false },
  { id: "motion-design-64", title: "1st Sep Em", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/1st-sep-em.gif", thumbnailSrc: "/assets/portfolio/motion-design/1st-sep-em.gif", isPlaceholder: false },
  { id: "motion-design-65", title: "1th May Em", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/1th-may-em.gif", thumbnailSrc: "/assets/portfolio/motion-design/1th-may-em.gif", isPlaceholder: false },
  { id: "motion-design-66", title: "4th Nov", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/4th-nov.gif", thumbnailSrc: "/assets/portfolio/motion-design/4th-nov.gif", isPlaceholder: false },
  { id: "motion-design-67", title: "Artboard 1", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/artboard-1-copy.gif", thumbnailSrc: "/assets/portfolio/motion-design/artboard-1-copy.gif", isPlaceholder: false },
  { id: "motion-design-68", title: "Cjnsjc", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/cjnsjc.gif", thumbnailSrc: "/assets/portfolio/motion-design/cjnsjc.gif", isPlaceholder: false },
  { id: "motion-design-69", title: "V1 Emailer For Colleges 29 10 22 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/v1-emailer-for-colleges-29-10-22-01.jpg", thumbnailSrc: "/assets/portfolio/motion-design/v1-emailer-for-colleges-29-10-22-01.jpg", isPlaceholder: false },
  { id: "motion-design-70", title: "V1 Emailer For Colleges 29 10 22 02", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/v1-emailer-for-colleges-29-10-22-02.jpg", thumbnailSrc: "/assets/portfolio/motion-design/v1-emailer-for-colleges-29-10-22-02.jpg", isPlaceholder: false },
  { id: "motion-design-71", title: "V2 Poster 11 10 22 0001", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/v2-poster-11-10-22-pages-to-jpg-0001-ce8a752a4e9d452f9f62fbf73ee0c80b.jpg", thumbnailSrc: "/assets/portfolio/motion-design/v2-poster-11-10-22-pages-to-jpg-0001-ce8a752a4e9d452f9f62fbf73ee0c80b.jpg", isPlaceholder: false },
  { id: "motion-design-72", title: "V3 Whatsapp 07 11 22 01", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/v3-whatsapp-07-11-22-01.jpg", thumbnailSrc: "/assets/portfolio/motion-design/v3-whatsapp-07-11-22-01.jpg", isPlaceholder: false },
  { id: "motion-design-73", title: "V4 Kpit Nova Whatsapp Message 7 10 22", category: "motion-design", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/motion-design/v4-kpit-nova-whatsapp-message-7-10-22.jpg", thumbnailSrc: "/assets/portfolio/motion-design/v4-kpit-nova-whatsapp-message-7-10-22.jpg", isPlaceholder: false },
];

const LANDING_CREATIVES_ITEMS: PortfolioItem[] = [
  { id: "landing-creatives-01", title: "13trh June", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/13trh-june.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/13trh-june.jpg", isPlaceholder: false },
  { id: "landing-creatives-02", title: "14th April", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/14th-april.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/14th-april.jpg", isPlaceholder: false },
  { id: "landing-creatives-03", title: "14th Dec 1", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/14th-dec-1.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/14th-dec-1.jpg", isPlaceholder: false },
  { id: "landing-creatives-04", title: "14th Dec", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/14th-dec.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/14th-dec.jpg", isPlaceholder: false },
  { id: "landing-creatives-05", title: "16th May", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/16th-may.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/16th-may.jpg", isPlaceholder: false },
  { id: "landing-creatives-06", title: "17th Feb", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/17th-feb.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/17th-feb.jpg", isPlaceholder: false },
  { id: "landing-creatives-07", title: "24th April", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/24th-april.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/24th-april.jpg", isPlaceholder: false },
  { id: "landing-creatives-08", title: "25th Aug", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/25th-aug.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/25th-aug.jpg", isPlaceholder: false },
  { id: "landing-creatives-09", title: "27th Jan Bau", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/27th-jan-bau.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/27th-jan-bau.jpg", isPlaceholder: false },
  { id: "landing-creatives-10", title: "28th June", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/28th-june.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/28th-june.jpg", isPlaceholder: false },
  { id: "landing-creatives-11", title: "28th May 1", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/28th-may-1.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/28th-may-1.jpg", isPlaceholder: false },
  { id: "landing-creatives-12", title: "28ty March", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/28ty-march.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/28ty-march.jpg", isPlaceholder: false },
  { id: "landing-creatives-13", title: "29th Feb", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/29th-feb.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/29th-feb.jpg", isPlaceholder: false },
  { id: "landing-creatives-14", title: "29th Nov", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/29th-nov.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/29th-nov.jpg", isPlaceholder: false },
  { id: "landing-creatives-15", title: "Big Beauty Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/big-beauty-sale.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/big-beauty-sale.jpg", isPlaceholder: false },
  { id: "landing-creatives-16", title: "Blockbuster", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/blockbuster.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/blockbuster.jpg", isPlaceholder: false },
  { id: "landing-creatives-17", title: "Christmas Sale 2023", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/christmas-sale-2023.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/christmas-sale-2023.jpg", isPlaceholder: false },
  { id: "landing-creatives-18", title: "Diwali", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/diwali.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/diwali.jpg", isPlaceholder: false },
  { id: "landing-creatives-19", title: "Festive Sale 1", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/festive-sale-1.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/festive-sale-1.jpg", isPlaceholder: false },
  { id: "landing-creatives-20", title: "Festive Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/festive-sale.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/festive-sale.jpg", isPlaceholder: false },
  { id: "landing-creatives-21", title: "Ganesh Visarjan", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/ganesh-visarjan.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/ganesh-visarjan.jpg", isPlaceholder: false },
  { id: "landing-creatives-22", title: "Holiday Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/holiday-sale.png", thumbnailSrc: "/assets/portfolio/landing-creatives/holiday-sale.png", isPlaceholder: false },
  { id: "landing-creatives-23", title: "I Heart Beauty Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/i-heart-beauty-sale.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/i-heart-beauty-sale.jpg", isPlaceholder: false },
  { id: "landing-creatives-24", title: "Ihb Feb 2024", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/ihb-feb-2024.png", thumbnailSrc: "/assets/portfolio/landing-creatives/ihb-feb-2024.png", isPlaceholder: false },
  { id: "landing-creatives-25", title: "Ihb May 2024 1", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/ihb-may-2024-1.png", thumbnailSrc: "/assets/portfolio/landing-creatives/ihb-may-2024-1.png", isPlaceholder: false },
  { id: "landing-creatives-26", title: "Ihb May 2024 2", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/ihb-may-2024-2.png", thumbnailSrc: "/assets/portfolio/landing-creatives/ihb-may-2024-2.png", isPlaceholder: false },
  { id: "landing-creatives-27", title: "Ihb May 2024", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/ihb-may-2024.png", thumbnailSrc: "/assets/portfolio/landing-creatives/ihb-may-2024.png", isPlaceholder: false },
  { id: "landing-creatives-28", title: "Independence Day", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/independence-day.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/independence-day.jpg", isPlaceholder: false },
  { id: "landing-creatives-29", title: "Janmashtami", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/janmashtami.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/janmashtami.jpg", isPlaceholder: false },
  { id: "landing-creatives-30", title: "Jazzy July Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/jazzy-july-sale.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/jazzy-july-sale.jpg", isPlaceholder: false },
  { id: "landing-creatives-31", title: "March 13th", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/march-13th.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/march-13th.jpg", isPlaceholder: false },
  { id: "landing-creatives-32", title: "Monsoon Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/monsoon-sale.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/monsoon-sale.jpg", isPlaceholder: false },
  { id: "landing-creatives-33", title: "Pujo Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/pujo-sale.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/pujo-sale.jpg", isPlaceholder: false },
  { id: "landing-creatives-34", title: "Rakhi Sale", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/rakhi-sale.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/rakhi-sale.jpg", isPlaceholder: false },
  { id: "landing-creatives-35", title: "Shadi Sale Op 1", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/shadi-sale-op-1.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/shadi-sale-op-1.jpg", isPlaceholder: false },
  { id: "landing-creatives-36", title: "Shadi Sale Op 2", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/shadi-sale-op-2.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/shadi-sale-op-2.jpg", isPlaceholder: false },
  { id: "landing-creatives-37", title: "Winter Sale 2023", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/winter-sale-2023.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/winter-sale-2023.jpg", isPlaceholder: false },
  { id: "landing-creatives-38", title: "Womens Day", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/womens-day.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/womens-day.jpg", isPlaceholder: false },
  { id: "landing-creatives-39", title: "V6 Anz Tri Fold Print C2c 15 11 2022 Page 0001", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/v6-anz-tri-fold-print-c2c-15-11-2022-page-0001.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/v6-anz-tri-fold-print-c2c-15-11-2022-page-0001.jpg", isPlaceholder: false },
  { id: "landing-creatives-40", title: "V6 Anz Tri Fold Print C2c 15 11 2022 Page 0002", category: "landing-creatives", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/landing-creatives/v6-anz-tri-fold-print-c2c-15-11-2022-page-0002.jpg", thumbnailSrc: "/assets/portfolio/landing-creatives/v6-anz-tri-fold-print-c2c-15-11-2022-page-0002.jpg", isPlaceholder: false },
];

const SOCIAL_MEDIA_ITEMS: PortfolioItem[] = [
  { id: "social-media-01", title: "Social Media 01", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/1139de81ff54b843a4f82a0e19f20eb4.jpg", thumbnailSrc: "/assets/portfolio/social-media/1139de81ff54b843a4f82a0e19f20eb4.jpg", isPlaceholder: false },
  { id: "social-media-02", title: "1200x628", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/1200x628-6849184114b34c8ab134457bf700fb49.png", thumbnailSrc: "/assets/portfolio/social-media/1200x628-6849184114b34c8ab134457bf700fb49.png", isPlaceholder: false },
  { id: "social-media-03", title: "1200x628", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/1200x628.png", thumbnailSrc: "/assets/portfolio/social-media/1200x628.png", isPlaceholder: false },
  { id: "social-media-04", title: "1920x1080", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/1920x1080-copy.jpg", thumbnailSrc: "/assets/portfolio/social-media/1920x1080-copy.jpg", isPlaceholder: false },
  { id: "social-media-05", title: "1920x1080", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/1920x1080-173fa8831eea4964ac7d835636793a53.png", thumbnailSrc: "/assets/portfolio/social-media/1920x1080-173fa8831eea4964ac7d835636793a53.png", isPlaceholder: false },
  { id: "social-media-06", title: "1920x1080", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/1920x1080.png", thumbnailSrc: "/assets/portfolio/social-media/1920x1080.png", isPlaceholder: false },
  { id: "social-media-07", title: "20443", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/20443-converted.jpg", thumbnailSrc: "/assets/portfolio/social-media/20443-converted.jpg", isPlaceholder: false },
  { id: "social-media-08", title: "Social Media 08", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/20817643.jpg", thumbnailSrc: "/assets/portfolio/social-media/20817643.jpg", isPlaceholder: false },
  { id: "social-media-09", title: "Social Media 09", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/33333333.jpg", thumbnailSrc: "/assets/portfolio/social-media/33333333.jpg", isPlaceholder: false },
  { id: "social-media-10", title: "Social Media 10", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/499c42db74682e4eeb036a995d6e47f9.jpg", thumbnailSrc: "/assets/portfolio/social-media/499c42db74682e4eeb036a995d6e47f9.jpg", isPlaceholder: false },
  { id: "social-media-11", title: "Social Media 11", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/4c1ed977ff545dff882bf0be50c9dc2a.jpg", thumbnailSrc: "/assets/portfolio/social-media/4c1ed977ff545dff882bf0be50c9dc2a.jpg", isPlaceholder: false },
  { id: "social-media-12", title: "Social Media 12", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/5bcc0e19fcb40198288bc3aae91b41ff.jpg", thumbnailSrc: "/assets/portfolio/social-media/5bcc0e19fcb40198288bc3aae91b41ff.jpg", isPlaceholder: false },
  { id: "social-media-13", title: "Social Media 13", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/676913868be032701782e83412210c24.jpg", thumbnailSrc: "/assets/portfolio/social-media/676913868be032701782e83412210c24.jpg", isPlaceholder: false },
  { id: "social-media-14", title: "Social Media 14", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/765c3eae5263571174389aa3866ea206.jpg", thumbnailSrc: "/assets/portfolio/social-media/765c3eae5263571174389aa3866ea206.jpg", isPlaceholder: false },
  { id: "social-media-15", title: "Social Media 15", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/a25b5d73040bdfb5285d1002114ce561.jpg", thumbnailSrc: "/assets/portfolio/social-media/a25b5d73040bdfb5285d1002114ce561.jpg", isPlaceholder: false },
  { id: "social-media-16", title: "Aaj Ka Gyaan", category: "social-media", subcategory: "Education", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/aaj-ka-gyaan.jpg", thumbnailSrc: "/assets/portfolio/social-media/aaj-ka-gyaan.jpg", isPlaceholder: false },
  { id: "social-media-17", title: "Artboard 1 2", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/artboard-1-copy-2.jpg", thumbnailSrc: "/assets/portfolio/social-media/artboard-1-copy-2.jpg", isPlaceholder: false },
  { id: "social-media-18", title: "Artboard 1 3", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/artboard-1-copy-3.jpg", thumbnailSrc: "/assets/portfolio/social-media/artboard-1-copy-3.jpg", isPlaceholder: false },
  { id: "social-media-19", title: "Artboard 1 4", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/artboard-1-copy-4.jpg", thumbnailSrc: "/assets/portfolio/social-media/artboard-1-copy-4.jpg", isPlaceholder: false },
  { id: "social-media-20", title: "Artboard 1 5", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/artboard-1-copy-5.jpg", thumbnailSrc: "/assets/portfolio/social-media/artboard-1-copy-5.jpg", isPlaceholder: false },
  { id: "social-media-21", title: "Artboard 1", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/artboard-1-copy.jpg", thumbnailSrc: "/assets/portfolio/social-media/artboard-1-copy.jpg", isPlaceholder: false },
  { id: "social-media-22", title: "Artboard 1", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/artboard-1.jpg", thumbnailSrc: "/assets/portfolio/social-media/artboard-1.jpg", isPlaceholder: false },
  { id: "social-media-23", title: "Banner 1", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/banner-1.jpg", thumbnailSrc: "/assets/portfolio/social-media/banner-1.jpg", isPlaceholder: false },
  { id: "social-media-24", title: "Banner 2", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/banner-2.jpg", thumbnailSrc: "/assets/portfolio/social-media/banner-2.jpg", isPlaceholder: false },
  { id: "social-media-25", title: "Banner 3", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/banner-3.jpg", thumbnailSrc: "/assets/portfolio/social-media/banner-3.jpg", isPlaceholder: false },
  { id: "social-media-26", title: "Banner 4", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/banner-4.jpg", thumbnailSrc: "/assets/portfolio/social-media/banner-4.jpg", isPlaceholder: false },
  { id: "social-media-27", title: "Banner 5", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/banner-5.jpg", thumbnailSrc: "/assets/portfolio/social-media/banner-5.jpg", isPlaceholder: false },
  { id: "social-media-28", title: "Banner2", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/banner2.jpg", thumbnailSrc: "/assets/portfolio/social-media/banner2.jpg", isPlaceholder: false },
  { id: "social-media-29", title: "Chatgpt Image Apr 26 2026 04 00 35 Pm", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/chatgpt-image-apr-26-2026-04-00-35-pm.png", thumbnailSrc: "/assets/portfolio/social-media/chatgpt-image-apr-26-2026-04-00-35-pm.png", isPlaceholder: false },
  { id: "social-media-30", title: "Chatgpt Image Apr 26 2026 04 03 17 Pm", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/chatgpt-image-apr-26-2026-04-03-17-pm.png", thumbnailSrc: "/assets/portfolio/social-media/chatgpt-image-apr-26-2026-04-03-17-pm.png", isPlaceholder: false },
  { id: "social-media-31", title: "Chatgpt Image Apr 26 2026 04 09 50 Pm", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/chatgpt-image-apr-26-2026-04-09-50-pm.png", thumbnailSrc: "/assets/portfolio/social-media/chatgpt-image-apr-26-2026-04-09-50-pm.png", isPlaceholder: false },
  { id: "social-media-32", title: "Chatgpt Image Apr 27 2026 01 27 52 Pm", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/chatgpt-image-apr-27-2026-01-27-52-pm.png", thumbnailSrc: "/assets/portfolio/social-media/chatgpt-image-apr-27-2026-01-27-52-pm.png", isPlaceholder: false },
  { id: "social-media-33", title: "Chatgpt Image Apr 27 2026 01 28 57 Pm", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/chatgpt-image-apr-27-2026-01-28-57-pm.png", thumbnailSrc: "/assets/portfolio/social-media/chatgpt-image-apr-27-2026-01-28-57-pm.png", isPlaceholder: false },
  { id: "social-media-34", title: "Chatgpt Image Apr 27 2026 01 34 28 Pm", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/chatgpt-image-apr-27-2026-01-34-28-pm.png", thumbnailSrc: "/assets/portfolio/social-media/chatgpt-image-apr-27-2026-01-34-28-pm.png", isPlaceholder: false },
  { id: "social-media-35", title: "Ganpati Social Media Creative", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/ganpati-social-media-creative.jpg", thumbnailSrc: "/assets/portfolio/social-media/ganpati-social-media-creative.jpg", isPlaceholder: false },
  { id: "social-media-36", title: "Happy Dhanteras Lakshmi Blesses", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/happy-dhanteras-lakshmi-blesses.jpg", thumbnailSrc: "/assets/portfolio/social-media/happy-dhanteras-lakshmi-blesses.jpg", isPlaceholder: false },
  { id: "social-media-37", title: "Happy Diwali Greeting With Diya Text Space 1017 15848", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/happy-diwali-greeting-with-diya-text-space-1017-15848.jpg", thumbnailSrc: "/assets/portfolio/social-media/happy-diwali-greeting-with-diya-text-space-1017-15848.jpg", isPlaceholder: false },
  { id: "social-media-38", title: "Kom Clock", category: "social-media", subcategory: "Education", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/kom-clock.jpg", thumbnailSrc: "/assets/portfolio/social-media/kom-clock.jpg", isPlaceholder: false },
  { id: "social-media-39", title: "Kom Teachers Day", category: "social-media", subcategory: "Education", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/kom-teachers-day.jpg", thumbnailSrc: "/assets/portfolio/social-media/kom-teachers-day.jpg", isPlaceholder: false },
  { id: "social-media-40", title: "Nm Creation", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/nm-creation.jpg", thumbnailSrc: "/assets/portfolio/social-media/nm-creation.jpg", isPlaceholder: false },
  { id: "social-media-41", title: "Nm4", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/nm4.jpg", thumbnailSrc: "/assets/portfolio/social-media/nm4.jpg", isPlaceholder: false },
  { id: "social-media-42", title: "Nm6", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/nm6-937b8e2d988848f6966b59f077177f19.jpg", thumbnailSrc: "/assets/portfolio/social-media/nm6-937b8e2d988848f6966b59f077177f19.jpg", isPlaceholder: false },
  { id: "social-media-43", title: "Nm6", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/nm6.jpg", thumbnailSrc: "/assets/portfolio/social-media/nm6.jpg", isPlaceholder: false },
  { id: "social-media-44", title: "Social Media Janmashtami Creative", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/social-media-janmashtami-creative.jpg", thumbnailSrc: "/assets/portfolio/social-media/social-media-janmashtami-creative.jpg", isPlaceholder: false },
  { id: "social-media-45", title: "Social Media Post", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/social-media-post.jpg", thumbnailSrc: "/assets/portfolio/social-media/social-media-post.jpg", isPlaceholder: false },
  { id: "social-media-46", title: "Teachers Day Social Media Creative", category: "social-media", subcategory: "Education", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/teachers-day-social-media-creative.jpg", thumbnailSrc: "/assets/portfolio/social-media/teachers-day-social-media-creative.jpg", isPlaceholder: false },
  { id: "social-media-47", title: "V1 Anz Bsc 14 09 22 33 33", category: "social-media", subcategory: "Corporate & HR", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-anz-bsc-14-09-22-33-33.jpg", thumbnailSrc: "/assets/portfolio/social-media/v1-anz-bsc-14-09-22-33-33.jpg", isPlaceholder: false },
  { id: "social-media-48", title: "V1 Dec Aloe Gel 18 11 2022", category: "social-media", subcategory: "Skincare & Beauty", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-dec-aloe-gel-18-11-2022.jpg", thumbnailSrc: "/assets/portfolio/social-media/v1-dec-aloe-gel-18-11-2022.jpg", isPlaceholder: false },
  { id: "social-media-49", title: "V1 Dec Face Sheet Mask 18 11 2022", category: "social-media", subcategory: "Skincare & Beauty", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-dec-face-sheet-mask-18-11-2022.jpg", thumbnailSrc: "/assets/portfolio/social-media/v1-dec-face-sheet-mask-18-11-2022.jpg", isPlaceholder: false },
  { id: "social-media-50", title: "V1 Engineers Day 12 09 2022 02", category: "social-media", subcategory: "Corporate & HR", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-engineers-day-12-09-2022-02.jpg", thumbnailSrc: "/assets/portfolio/social-media/v1-engineers-day-12-09-2022-02.jpg", isPlaceholder: false },
  { id: "social-media-51", title: "V1 Get The Pulse 10 11 22", category: "social-media", subcategory: "Corporate & HR", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-get-the-pulse-10-11-22.png", thumbnailSrc: "/assets/portfolio/social-media/v1-get-the-pulse-10-11-22.png", isPlaceholder: false },
  { id: "social-media-52", title: "V1 Intrernal Yammer Be Bigger Option 2", category: "social-media", subcategory: "Corporate & HR", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-intrernal-yammer-be-bigger-option-2.jpg", thumbnailSrc: "/assets/portfolio/social-media/v1-intrernal-yammer-be-bigger-option-2.jpg", isPlaceholder: false },
  { id: "social-media-53", title: "V1 Intrernal Yammer Big On Opportunities", category: "social-media", subcategory: "Corporate & HR", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-intrernal-yammer-big-on-opportunities.jpg", thumbnailSrc: "/assets/portfolio/social-media/v1-intrernal-yammer-big-on-opportunities.jpg", isPlaceholder: false },
  { id: "social-media-54", title: "V1 Rlt Post 24 11 22", category: "social-media", subcategory: "Skincare & Beauty", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-rlt-post-24-11-22-f7f511c6cba54da98828c7245520405d.png", thumbnailSrc: "/assets/portfolio/social-media/v1-rlt-post-24-11-22-f7f511c6cba54da98828c7245520405d.png", isPlaceholder: false },
  { id: "social-media-55", title: "V1 Rlt Post 24 11 22", category: "social-media", subcategory: "Skincare & Beauty", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-rlt-post-24-11-22.png", thumbnailSrc: "/assets/portfolio/social-media/v1-rlt-post-24-11-22.png", isPlaceholder: false },
  { id: "social-media-56", title: "V1 Rlt Post 02 24 11 22", category: "social-media", subcategory: "Skincare & Beauty", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v1-rlt-post-02-24-11-22.png", thumbnailSrc: "/assets/portfolio/social-media/v1-rlt-post-02-24-11-22.png", isPlaceholder: false },
  { id: "social-media-57", title: "V2 Poster 11 10 22 0001", category: "social-media", subcategory: "Skincare & Beauty", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v2-poster-11-10-22-pages-to-jpg-0001.jpg", thumbnailSrc: "/assets/portfolio/social-media/v2-poster-11-10-22-pages-to-jpg-0001.jpg", isPlaceholder: false },
  { id: "social-media-58", title: "V2 Recruiters Linkedin Post 09 11 2022 A World Of Opportunit", category: "social-media", subcategory: "Corporate & HR", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v2-recruiters-linkedin-post-09-11-2022-a-world-of-opportunities.jpg", thumbnailSrc: "/assets/portfolio/social-media/v2-recruiters-linkedin-post-09-11-2022-a-world-of-opportunities.jpg", isPlaceholder: false },
  { id: "social-media-59", title: "V2 Recruiters Linkedin Post 09 11 2022 Shift The Scales", category: "social-media", subcategory: "Corporate & HR", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/v2-recruiters-linkedin-post-09-11-2022-shift-the-scales.jpg", thumbnailSrc: "/assets/portfolio/social-media/v2-recruiters-linkedin-post-09-11-2022-shift-the-scales.jpg", isPlaceholder: false },
  { id: "social-media-60", title: "Variety Kom", category: "social-media", subcategory: "Education", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/variety-kom.jpg", thumbnailSrc: "/assets/portfolio/social-media/variety-kom.jpg", isPlaceholder: false },
  { id: "social-media-61", title: "Website Banner", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/website-banner.jpg", thumbnailSrc: "/assets/portfolio/social-media/website-banner.jpg", isPlaceholder: false },
  { id: "social-media-62", title: "Whatsapp Image 2021 07 20 At 5 06 19 Pm 2", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/whatsapp-image-2021-07-20-at-5-06-19-pm-2.jpeg", thumbnailSrc: "/assets/portfolio/social-media/whatsapp-image-2021-07-20-at-5-06-19-pm-2.jpeg", isPlaceholder: false },
  { id: "social-media-63", title: "Whatsapp Image 2025 01 26 At 12 29 30 Am 2", category: "social-media", subcategory: null, mediaType: "image", mediaSrc: "/assets/portfolio/social-media/whatsapp-image-2025-01-26-at-12-29-30-am-2.jpeg", thumbnailSrc: "/assets/portfolio/social-media/whatsapp-image-2025-01-26-at-12-29-30-am-2.jpeg", isPlaceholder: false },
  { id: "social-media-64", title: "Whipped Soap", category: "social-media", subcategory: "Skincare & Beauty", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/whipped-soap.jpg", thumbnailSrc: "/assets/portfolio/social-media/whipped-soap.jpg", isPlaceholder: false },
  { id: "social-media-65", title: "Yellow Baloon Rakhi Post", category: "social-media", subcategory: "Festive Creatives", mediaType: "image", mediaSrc: "/assets/portfolio/social-media/yellow-baloon-rakhi-post.jpg", thumbnailSrc: "/assets/portfolio/social-media/yellow-baloon-rakhi-post.jpg", isPlaceholder: false },
];

export const CATEGORIES: PortfolioCategory[] = [
  {
    slug: "landing-creatives",
    title: "Landing / Campaign Creatives",
    blurb: "Hero banners, sale campaigns, and print collateral.",
    subcategories: null,
    items: LANDING_CREATIVES_ITEMS,
  },
  {
    slug: "motion-design",
    title: "Motion Design",
    blurb: "Looping animations, promos, and campaign GIFs.",
    subcategories: null,
    items: MOTION_DESIGN_ITEMS,
  },
  {
    slug: "social-media",
    title: "Social Media Creatives",
    blurb: "Scroll-stopping posts, tailored per niche.",
    subcategories: SOCIAL_SUBCATEGORIES,
    items: SOCIAL_MEDIA_ITEMS,
  },
  {
    slug: "nft-artworks",
    title: "2D NFT Artworks",
    blurb: "Surreal 2D manipulations and collectible art.",
    subcategories: null,
    items: NFT_ARTWORKS_ITEMS,
  },
];

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getCategorySlugs(): string[] {
  return CATEGORIES.map((category) => category.slug);
}

export interface Highlight {
  item: PortfolioItem;
  categorySlug: string;
  categoryTitle: string;
}

function pickHighlight(slug: string, itemId: string): Highlight {
  const category = getCategoryBySlug(slug);
  if (!category) throw new Error(`Unknown portfolio category: ${slug}`);
  const item = category.items.find((i) => i.id === itemId);
  if (!item) throw new Error(`No item with id ${itemId} in category ${slug}`);
  return { item, categorySlug: category.slug, categoryTitle: category.title };
}

/** A deliberate mix across categories for the homepage highlights grid. */
export const HIGHLIGHTS: Highlight[] = [
  pickHighlight("landing-creatives", "landing-creatives-15"),
  pickHighlight("motion-design", "motion-design-63"),
  pickHighlight("social-media", "social-media-35"),
  pickHighlight("nft-artworks", "nft-artworks-05"),
];

/** Three hand-picked items per category for the homepage row previews. */
export const FEATURED_IDS: Record<string, string[]> = {
  "landing-creatives": ["landing-creatives-15", "landing-creatives-23", "landing-creatives-18"],
  "motion-design": ["motion-design-63", "motion-design-62", "motion-design-22"],
  "social-media": ["social-media-35", "social-media-36", "social-media-39"],
  "nft-artworks": ["nft-artworks-05", "nft-artworks-09", "nft-artworks-14"],
};

export function getFeaturedItems(slug: string): PortfolioItem[] {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  const ids = FEATURED_IDS[slug] ?? [];
  return ids
    .map((id) => category.items.find((i) => i.id === id))
    .filter((i): i is PortfolioItem => Boolean(i));
}