"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Character from "@/components/Character";
import { optimizedImageUrl } from "@/lib/optimized-image";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";


interface ToolNode {
  name: string;
  caption: string;
  x: number;
  y: number;
  icon?: string;
}

const VIEW_W = 700;
const VIEW_H = 560;

// Compact scattered layout, boustrophedon path order so lines cross naturally.
const NODES: ToolNode[] = [
  { name: "Photoshop", caption: "Where every composite starts", x: 90, y: 90, icon: "/assets/tools/photoshop.png" },
  { name: "Illustrator", caption: "Clean vectors, every time", x: 290, y: 65, icon: "/assets/tools/illustrator.png" },
  { name: "CorelDRAW", caption: "Fast layout work, old habit", x: 490, y: 105, icon: "/assets/tools/coreldraw.png" },
  { name: "InDesign", caption: "Multi-page print collateral", x: 645, y: 75, icon: "/assets/tools/indesign.png" },
  { name: "Filmora", caption: "Quick-turnaround video edits", x: 645, y: 275, icon: "/assets/tools/filmora.png" },
  { name: "Premiere Pro", caption: "Heavier motion & color grading", x: 490, y: 305, icon: "/assets/tools/premiere-pro.png" },
  { name: "Rocketium", caption: "Bulk creative automation", x: 290, y: 245, icon: "/assets/tools/rocketium.png" },
  { name: "Adobe Firefly", caption: "Generative fills, fast iteration", x: 90, y: 465, icon: "/assets/tools/adobe-firefly.png" },
  { name: "ChatGPT", caption: "Concepting & copy, first drafts", x: 290, y: 435, icon: "/assets/tools/chatgpt.png" },
  { name: "Google Gemini", caption: "Research & visual reference", x: 490, y: 475, icon: "/assets/tools/google-gemini.png" },
  { name: "Freepik", caption: "Reference assets, moodboarding", x: 645, y: 475, icon: "/assets/tools/freepik.png" },
];

function buildSmoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  const d: string[] = [`M ${points[0].x} ${points[0].y}`];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d.push(`C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`);
  }
  return d.join(" ");
}

const PATH_D = buildSmoothPath(NODES.map(({ x, y }) => ({ x, y })));

export default function ToolsArsenal() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = reducedMotion ? "0" : `${totalLength}`;

    if (reducedMotion) {
      nodeRefs.current.forEach((el) => el?.classList.add("is-lit"));
      return;
    }

    const SAMPLES = 600;
    const samplePoints: { x: number; y: number }[] = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const pt = path.getPointAtLength((i / SAMPLES) * totalLength);
      samplePoints.push({ x: pt.x, y: pt.y });
    }
    const thresholds = NODES.map((node) => {
      let closestIdx = 0;
      let closestDist = Infinity;
      samplePoints.forEach((pt, i) => {
        const dist = (pt.x - node.x) ** 2 + (pt.y - node.y) ** 2;
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      return closestIdx / SAMPLES;
    });

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=2000",
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          path.style.strokeDashoffset = `${totalLength * (1 - self.progress)}`;
          thresholds.forEach((t, i) => {
            const el = nodeRefs.current[i];
            if (!el) return;
            if (self.progress >= t) el.classList.add("is-lit");
            else el.classList.remove("is-lit");
          });
        },
      });
      return () => trigger.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="arsenal"
      data-section="arsenal"
      aria-labelledby="arsenal-heading"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-bg px-6 py-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
          04 / Arsenal
        </span>
        <h2 id="arsenal-heading" className="font-accent text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl">
          Tools Arsenal
        </h2>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="relative w-full" style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}>
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <path d={PATH_D} fill="none" stroke="var(--line)" strokeWidth="2" opacity="0.7" />
            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.85"
              style={{ filter: "drop-shadow(0 0 4px var(--accent))" }}
            />
          </svg>

          {NODES.map((node, i) => (
            <div
              key={node.name}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              className="tool-node absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
              style={{ left: `${(node.x / VIEW_W) * 100}%`, top: `${(node.y / VIEW_H) * 100}%` }}
            >
              <div className="tool-node-dot flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                {node.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={optimizedImageUrl(node.icon, 200)}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="font-body text-xs font-semibold text-muted">
                    {node.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                )}
              </div>
              <div className="mt-1 flex max-w-28 flex-col items-center gap-1.5">
                <span className="font-body text-sm font-semibold text-text">{node.name}</span>
                <span className="tool-node-caption hidden font-body text-xs leading-snug text-accent-soft opacity-0 transition-opacity duration-500 sm:block">
                  {node.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto w-full max-w-56 md:max-w-none md:scale-90">
          <Character pose="desk" fit="cover" className="aspect-3/2 w-full" />
        </div>
      </div>
    </section>
  );
}