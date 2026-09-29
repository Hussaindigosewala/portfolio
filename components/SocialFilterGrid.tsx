"use client";

import { useEffect, useRef, useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import type { PortfolioItem, SocialSubcategory } from "@/lib/portfolio-shared";

type Filter = "All" | SocialSubcategory;

interface SocialFilterGridProps {
  items: PortfolioItem[];
  subcategories: readonly SocialSubcategory[];
  onSelect: (item: PortfolioItem) => void;
}

export default function SocialFilterGrid({ items, subcategories, onSelect }: SocialFilterGridProps) {
  const [active, setActive] = useState<Filter>("All");
  const [display, setDisplay] = useState<Filter>("All");
  const [fading, setFading] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  function select(next: Filter) {
    if (next === active) return;
    setActive(next);
    setFading(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setDisplay(next);
      setFading(false);
    }, 200);
  }

  const filters: Filter[] = ["All", ...subcategories];
  const visible = items.filter(
    (item) => display === "All" || item.subcategory === display,
  );

  return (
    <div>
      <div role="group" aria-label="Filter by niche" className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => select(filter)}
              className={`rounded-full border px-4 py-2 font-body text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                isActive
                  ? "border-accent bg-accent/15 text-text"
                  : "border-line text-muted hover:border-accent/40 hover:text-text"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <ul
        className={`grid grid-cols-2 gap-5 transition-opacity duration-200 sm:grid-cols-3 lg:grid-cols-4 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        {visible.map((item) => (
          <li key={item.id}>
            <PortfolioCard item={item} onSelect={onSelect} aspectClass="aspect-square" />
          </li>
        ))}
      </ul>
    </div>
  );
}