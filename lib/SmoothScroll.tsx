"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Client wrapper that initializes Lenis smooth scrolling and keeps it in
 * lockstep with GSAP ScrollTrigger, so pinned / scrubbed scroll animations
 * (e.g. the Hero) track the smooth-scrolled position exactly.
 *
 * Pattern: Lenis is driven by GSAP's single ticker (rather than its own rAF),
 * and every Lenis scroll event pushes an immediate ScrollTrigger.update().
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    (window as unknown as { __lenis: Lenis }).__lenis = lenis;

    // Sync ScrollTrigger to the smooth-scrolled position.
    lenis.on("scroll", ScrollTrigger.update);

    // One source of truth for the frame loop: GSAP's ticker drives Lenis.
    const update = (time: number) => {
      lenis.raf(time * 1000); // gsap ticker time is seconds; Lenis expects ms
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
