"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Character from "@/components/Character";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

const BIO =
  "Hey there! I'm Hussain, a graphic designer and part-time NFT artist. I specialize in 2D surreal manipulations, creating dreamy escapes from reality, Emailer creatives, platform banners, and more. With four years in agencies and e-commerce, plus two years freelancing, I've mastered the art of meeting deadlines with a smile. Let's add some flair to your projects—whether it's spicing up branding or diving into NFTs, I'm your guy!";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const section = sectionRef.current;
    const bio = bioRef.current;
    if (!section || !bio) return;

    // Reduced motion: no split/animation — the bio stays at full --text color.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const dim = rootStyles.getPropertyValue("--muted").trim() || "#9c93b8";
    const bright = rootStyles.getPropertyValue("--text").trim() || "#f2effa";

    // Create SplitText + its ScrollTrigger DIRECTLY inside a context scoped to
    // the section root — NOT inside gsap.matchMedia(), whose instances aren't
    // reliably reverted by ctx.revert(). On unmount (e.g. navigating to a
    // /portfolio page) ctx.revert() reverts SplitText's DOM restructuring AND
    // kills the ScrollTrigger, in the correct order, before React unmounts —
    // this is what fixes the removeChild crash. Do NOT also call
    // split.revert()/ScrollTrigger.kill() manually. autoSplit re-splits on font
    // load / resize.
    const ctx = gsap.context(() => {
      SplitText.create(bio, {
        type: "lines",
        autoSplit: true,
        linesClass: "about-line",
        onSplit(self) {
          // Each line reads itself into focus: muted -> full text color,
          // staggered across the bio's scroll passage (scrub).
          return gsap.fromTo(
            self.lines,
            { color: dim },
            {
              color: bright,
              ease: "none",
              stagger: 0.4,
              scrollTrigger: {
                trigger: bio,
                start: "top 85%",
                end: "bottom 55%",
                scrub: true,
              },
            },
          );
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // bg-bg, not bg-surface: the character assets bake in #0A0714, so a #141021
  // section would render the frameless media as a visibly darker rectangle.
  return (
    <section
      ref={sectionRef}
      id="about"
      data-section="about"
      aria-labelledby="about-heading"
      className="flex min-h-svh scroll-mt-24 items-center bg-bg px-6 py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Character on the LEFT — the "about" pose looks right, toward the bio.
            Frameless: see the note in Hero.tsx. */}
        <div className="order-1 flex justify-center md:justify-start">
          <div className="w-full max-w-[360px] sm:max-w-[440px] md:max-w-[540px]">
            <Character pose="about" fit="cover" className="aspect-[3/2] w-full" />
          </div>
        </div>

        {/* Bio on the RIGHT */}
        <div className="order-2 flex flex-col items-start gap-6 text-left">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
            02 / About
          </span>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold leading-tight text-text sm:text-4xl"
          >
            A little about me
          </h2>
          <p
            ref={bioRef}
            className="max-w-xl font-body text-lg leading-relaxed text-text sm:text-xl"
          >
            {BIO}
          </p>
        </div>
      </div>
    </section>
  );
}
