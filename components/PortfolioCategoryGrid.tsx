"use client";

import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioLightbox from "@/components/PortfolioLightbox";
import SocialFilterGrid from "@/components/SocialFilterGrid";
import { getAspectClass, type PortfolioCategory, type PortfolioItem } from "@/lib/portfolio-shared";

export default function PortfolioCategoryGrid({ category }: { category: PortfolioCategory }) {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <>
      {category.subcategories ? (
        <SocialFilterGrid
          items={category.items}
          subcategories={category.subcategories}
          onSelect={setSelected}
        />
      ) : (
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {category.items.map((item) => (
            <li key={item.id}>
              <PortfolioCard item={item} onSelect={setSelected} aspectClass={getAspectClass(category.slug)} />
            </li>
          ))}
        </ul>
      )}

      <PortfolioLightbox item={selected} onClose={() => setSelected(null)} />
    </>
  );
}