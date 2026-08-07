"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Character from "@/components/Character";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

const DESIGN_TOOLS = [
  "Photoshop",
  "Illustrator",
  "CorelDRAW",
  "InDesign",
  "Filmora",
  "Premiere Pro",
  "Rocketium",
  "Spatial Metaverse",
];

const AI_TOOLS = ["Adobe Firefly", "ChatGPT", "Google Gemini", "Freepik"];

function ToolGroup({ label, tools }: { label: string; tools: readonly string[] }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-accent-soft">
        {label}
      </h3>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {tools.map((tool) => (
          <li key={tool} data-chip className="min-h-[68px]">
            <PlaceholderBadge name={tool} glow />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Software() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridsRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;
    // Reduced motion: skip entrance animation — chips visible by default.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Animation created directly inside a context scoped to the section root;
    // ctx.revert() cleanly kills the ScrollTrigger before React unmounts on
    // route navigation.
    const ctx = gsap.context(() => {
      const grids = gridsRef.current;
      if (!grids) return;

      const chips = grids.querySelectorAll("[data-chip]");
      gsap.from(chips, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="software"
      data-section="software"
      aria-labelledby="software-heading"
      className="flex min-h-svh scroll-mt-24 flex-col items-center justify-center gap-12 bg-bg px-6 py-28"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
          04 / Software
        </span>
        <h2
          id="software-heading"
          className="font-display text-3xl font-bold text-text sm:text-5xl"
        >
          Software &amp; AI Tools
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Character on the LEFT — the "desk" pose: at the desk, working with the
            tools. Frameless: see the note in Hero.tsx. This is the pose that
            sets the shared 3/2 aspect — its desk is wider than the figure in
            the other three, and 3/2 is what keeps the whole table in frame. */}
        <div className="order-1 flex justify-center md:justify-start">
          <div className="w-full max-w-[360px] sm:max-w-[440px] md:max-w-[540px]">
            <Character pose="desk" fit="cover" className="aspect-[3/2] w-full" />
          </div>
        </div>

        {/* Tool groups on the RIGHT */}
        <div ref={gridsRef} className="order-2 flex flex-col gap-10">
          <ToolGroup label="Design & Editing" tools={DESIGN_TOOLS} />
          <ToolGroup label="AI Tools" tools={AI_TOOLS} />
        </div>
      </div>
    </section>
  );
}
