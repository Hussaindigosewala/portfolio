"use client";

import { useEffect } from "react";
import type { PortfolioItem } from "@/lib/portfolio-shared";

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioLightbox({ item, onClose }: PortfolioLightboxProps) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="absolute inset-0 bg-bg/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/80 text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <div className="relative z-10 flex max-h-full max-w-4xl flex-col items-center gap-4">
        {item.mediaType === "video" ? (
          <video
            src={item.mediaSrc ?? undefined}
            poster={item.thumbnailSrc ?? undefined}
            controls
            autoPlay
            loop
            playsInline
            className="max-h-[80vh] max-w-full rounded-lg border border-line object-contain"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.mediaSrc ?? ""}
            alt={item.title}
            className="max-h-[80vh] max-w-full rounded-lg border border-line object-contain"
          />
        )}
      </div>
    </div>
  );
}