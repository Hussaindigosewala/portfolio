"use client";

import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ClientLogo {
  name: string;
  src: string;
}

const CLIENTS: ClientLogo[] = [
  { name: "ANZ", src: "/assets/clients/australia-and-new-zealand-banking-group-limited-anz-vector-logo.png" },
  { name: "Diageo India", src: "/assets/clients/diageo-logo-black.png" },
  { name: "Frozen At Door", src: "/assets/clients/frozen-shop-optimized.png" },
  { name: "KJSCE", src: "/assets/clients/kjsce.png" },
  { name: "KOM", src: "/assets/clients/kom-logo-2.png" },
  { name: "Kirloskar", src: "/assets/clients/logo-black-01.png" },
  { name: "Dyson", src: "/assets/clients/new-project-1.png" },
  { name: "PHD Chamber of Commerce and Industry", src: "/assets/clients/new-project-6.png" },
  { name: "RLT", src: "/assets/clients/rlt-white-logo.png" },
  { name: "The Face Shop", src: "/assets/clients/new-project-8.png" },
  { name: "KPIT Sparkle", src: "/assets/clients/new-project-9.png" },
  { name: "Somaiya Vidyavihar University", src: "/assets/clients/svu.png" },
];

const MAX_DISTANCE = 260;
const MAX_PULL = 10;

type QuickFn = (value: number) => void;
interface QuickFnSet {
  scale: QuickFn;
  opacity: QuickFn;
  x: QuickFn;
  y: QuickFn;
}

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quickFns = useRef<(QuickFnSet | null)[]>([]);
  const mobileScrollerRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-clients-heading]", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from("[data-client-card]", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Mobile: pure auto-scroll, no pause on any interaction, ever.
  useEffect(() => {
    const scroller = mobileScrollerRef.current;
    if (!scroller) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let rafId: number;
    const SPEED = 0.6;
    const halfWidth = () => scroller.scrollWidth / 2;

    const tick = () => {
      scroller.scrollLeft += SPEED;
      if (scroller.scrollLeft >= halfWidth()) {
        scroller.scrollLeft -= halfWidth();
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || reducedMotion) return;

    quickFns.current = cardRefs.current.map((el) => {
      if (!el) return null;
      return {
        scale: gsap.quickTo(el, "scale", { duration: 0.45, ease: "power3.out" }),
        opacity: gsap.quickTo(el, "opacity", { duration: 0.45, ease: "power3.out" }),
        x: gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" }),
      };
    });

    const grid = gridRef.current;
    if (!grid) return;

    const onMove = (e: PointerEvent) => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const fns = quickFns.current[i];
        if (!fns) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const proximity = Math.max(0, 1 - dist / MAX_DISTANCE);

        fns.scale(1 + proximity * 0.12);
        fns.opacity(0.45 + proximity * 0.55);
        if (dist > 0) {
          fns.x((dx / dist) * proximity * MAX_PULL);
          fns.y((dy / dist) * proximity * MAX_PULL);
        }
      });
    };

    const onLeave = () => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const fns = quickFns.current[i];
        if (!fns) return;
        fns.scale(1);
        fns.opacity(0.45);
        fns.x(0);
        fns.y(0);
      });
    };

    grid.addEventListener("pointermove", onMove);
    grid.addEventListener("pointerleave", onLeave);
    onLeave();

    return () => {
      grid.removeEventListener("pointermove", onMove);
      grid.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section id="clients" ref={sectionRef} className="bg-bg py-24">
      <div data-clients-heading className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
          03 / Clients
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-text sm:text-4xl">
          Brands I&apos;ve worked with
        </h2>
      </div>

      {/* Mobile: continuous auto-scroll strip, no pausing */}
      <div
        ref={mobileScrollerRef}
        className="mt-12 flex gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] scrollbar-none sm:hidden [&::-webkit-scrollbar]:hidden"
      >
        {[...CLIENTS, ...CLIENTS].map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            title={client.name}
            className="flex h-20 w-28 shrink-0 items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.src}
              alt={client.name}
              draggable={false}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Tablet/desktop: cursor-spotlight grid */}
      <div
        ref={gridRef}
        className="mx-auto mt-14 hidden max-w-5xl grid-cols-4 place-items-center gap-x-6 gap-y-10 px-6 sm:grid lg:grid-cols-6"
      >
        {CLIENTS.map((client, i) => (
          <div
            key={client.name}
            data-client-card
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            title={client.name}
            className="flex h-16 w-full items-center justify-center sm:h-20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.src}
              alt={client.name}
              draggable={false}
              className="h-full w-full object-contain grayscale-60"
            />
          </div>
        ))}
      </div>
    </section>
  );
}