"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioLightbox from "@/components/PortfolioLightbox";
import { getAspectClass, type PortfolioCategory, type PortfolioItem } from "@/lib/portfolio-shared";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

export default function PortfolioHighlights({ categories }: { categories: PortfolioCategory[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const rows = section.querySelectorAll("[data-portfolio-row]");
      rows.forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      data-section="portfolio"
      aria-labelledby="portfolio-heading"
      className="flex flex-col items-center gap-16 bg-bg px-6 py-28"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
          05 / Work
        </span>
        <h2 id="portfolio-heading" className="font-display text-3xl font-bold text-text sm:text-5xl">
          Portfolio Highlights
        </h2>
        <p className="max-w-xl font-body text-base text-muted">
          A cross-section of recent work. Open any category for the full set.
        </p>
      </div>

      <div className="flex w-full max-w-6xl flex-col gap-14">
        {categories.map((category) => {
          if (category.featured.length === 0) return null;
          return (
            <div key={category.slug} data-portfolio-row className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-balance font-accent text-xl font-bold uppercase tracking-tight text-text sm:text-2xl">
                  {category.title}
                </h3>
                <Link
                  href={`/portfolio/${category.slug}`}
                  className="group inline-flex shrink-0 items-center gap-2 font-body text-sm font-medium text-accent-soft transition-colors hover:text-accent"
                >
                  View All Designs
                  <span className="inline-block animate-pulse transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {category.featured.map((item) => (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    onSelect={setSelected}
                    aspectClass={category.slug === "motion-design" ? "aspect-16/9" : "aspect-4/5"}
                    alignTop={category.slug === "landing-creatives"}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <PortfolioLightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}