"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Character from "@/components/Character";
import SocialIcons from "@/components/SocialIcons";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    // Reduced motion: no pin/animation at all.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Build the pinned timeline DIRECTLY inside a context scoped to the section
    // root — NOT inside gsap.matchMedia(), whose ScrollTriggers aren't reliably
    // reverted by ctx.revert(). On unmount (e.g. navigating to a /portfolio
    // page) ctx.revert() unpins the hero (removing ScrollTrigger's pin-spacer
    // wrapper) and kills the ScrollTrigger before React unmounts — this is what
    // fixes the removeChild crash.
    const ctx = gsap.context(() => {
      // Pin the hero briefly; the character stays anchored while the headline,
      // subtext, and CTAs fade out and scale down as the user scrolls into About.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=60%",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      tl.to(text, {
        autoAlpha: 0,
        scale: 0.92,
        y: -30,
        ease: "none",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-section="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh scroll-mt-24 items-center overflow-hidden bg-bg px-6"
    >
      {/* Ambient violet glow (design-token accent only).
          It is kept off the character, which is an opaque asset: a glow behind
          it is occluded and reappears as a bright rim, redrawing the card
          outline this section just lost. On md+ that means the text column;
          below md the two stack, so it drops to the text underneath. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[72%] h-[75vmin] w-[75vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px] md:left-[30%] md:top-1/2"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 68%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 py-28 md:grid-cols-2 md:gap-6">
        {/* Text group — this is what fades + scales on scroll */}
        <div
          ref={textRef}
          className="order-2 flex flex-col items-center gap-6 text-center md:order-1 md:items-start md:text-left"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
            Portfolio
          </span>
          <h1
            id="hero-heading"
            className="font-display text-5xl font-extrabold leading-[0.95] text-text sm:text-6xl lg:text-7xl"
          >
            Hussain Digosewala
          </h1>
          <p className="max-w-md font-body text-base text-muted sm:text-lg">
            Sr. Graphic Designer | Content Creator | Art Director
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 font-body text-sm font-semibold text-bg shadow-[0_0_30px_-8px_var(--accent)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-line bg-transparent px-7 py-3 font-body text-sm font-semibold text-text transition-colors duration-200 hover:border-accent hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Get in Touch
            </a>
          </div>

          <SocialIcons className="mt-2 justify-center md:justify-start" />
        </div>

        {/* Character — stays anchored during the pin. No card/frame: the asset
            bakes in the page's own #0A0714 background, so it sits directly on
            the section. 3/2 is the widest-content pose's aspect — anything
            taller severs the outer arms, and with no frame that cut reads as
            the box edge we just removed. Character feathers its own edges.

            Deliberately no local halo behind the character: the asset is
            opaque, so a glow under it can only ever show *around* it — which
            redraws the rectangle. The section's own ambient glow (above) is
            what lights this area. */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="w-full max-w-140 sm:max-w-180 md:max-w-220">
            <Character pose="base" fit="cover" className="aspect-3/2 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
