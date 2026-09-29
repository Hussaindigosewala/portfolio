"use client";

import type { MediaType, PortfolioItem } from "@/lib/portfolio-shared";

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
  aspectClass?: string;
  alignTop?: boolean;
}

export default function PortfolioCard({
  item,
  onSelect,
  aspectClass = "aspect-4/3",
  alignTop = false,
}: PortfolioCardProps) {
  const hasMedia = !item.isPlaceholder && item.mediaSrc !== null;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-label={`View ${item.title}`}
      className={`group relative block w-full ${aspectClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg`}
      style={{ perspective: "1200px" }}
    >
      <div
        className="portfolio-flip-inner relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl border border-line bg-surface"
          style={{ backfaceVisibility: "hidden" }}
        >
          {hasMedia ? (
            item.mediaType === "video" ? (
              <video
                src={item.mediaSrc ?? undefined}
                poster={item.thumbnailSrc ?? undefined}
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                className={`absolute inset-0 h-full w-full object-cover ${alignTop ? "object-top" : "object-center"}`}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.thumbnailSrc ?? item.mediaSrc ?? ""}
                alt=""
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover ${alignTop ? "object-top" : "object-center"}`}
              />
            )
          ) : (
            <PlaceholderVisual mediaType={item.mediaType} />
          )}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl border border-accent/40 bg-surface"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {hasMedia && (
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 blur-sm"
              style={{
                backgroundImage: `url(${item.thumbnailSrc ?? item.mediaSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
          <div className="absolute inset-0 bg-bg/70" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-accent" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
            </svg>
            <span className="font-body text-sm font-medium text-text">Click to view</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function PlaceholderVisual({ mediaType }: { mediaType: MediaType }) {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--line) 0, var(--line) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
        {mediaType === "video" ? (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
          </svg>
        ) : (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9" r="1.6" />
            <path d="m4 17 5-5 4 4 3-2 4 3" />
          </svg>
        )}
        <span className="font-body text-[10px] uppercase tracking-[0.25em]">Media pending</span>
      </div>
    </div>
  );
}