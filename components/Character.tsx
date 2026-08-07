"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export type Pose = "base" | "about" | "desk" | "wave";

interface PoseAsset {
  /** Looping video for this pose, or `null` if only a static image exists. */
  video: string | null;
  /** Poster / static fallback frame (also used under reduced motion). */
  poster: string;
  alt: string;
}

/**
 * Single source of truth for every character pose.
 *
 * Every pose is poster-only right now: only the .png assets were regenerated
 * against the #0A0714 / grey-outfit reference, and the frameless treatment
 * below has no card to hide a mismatched loop behind. Each `video: null` below
 * carries the specific reason. Restore its path once that .mp4 is re-rendered
 * — the video path in this component is live and correct, just unused.
 *
 * NOTE for whoever re-renders these: encoding is itself part of the problem.
 * loop-wave.mp4 is correct at source but decodes to #0D0C15 on the page, a
 * measurably grey rectangle against #0A0714, so the new loops need verifying
 * after encode, not just in the source render.
 */
const POSES: Record<Pose, PoseAsset> = {
  base: {
    video: "/assets/character/loop-base.mp4",
    poster: "/assets/character/char-base.png",
    alt: "Hussain's character, standing pose",
  },
  about: {
    video: "/assets/character/loop-about.mp4",
    poster: "/assets/character/char-look-right.png",
    alt: "Hussain's character, looking to the side",
  },
  desk: {
    video: "/assets/character/loop-desk.mp4",
    poster: "/assets/character/char-desk.png",
    alt: "Hussain's character, working at a desk",
  },
  wave: {
    video: "/assets/character/loop-wave.mp4",
    poster: "/assets/character/char-wave.png",
    alt: "Hussain's character, waving",
  },
};

/**
 * Feathered edges, applied to every pose.
 *
 * The character renders frameless — directly on the page background, with no
 * card — so every boundary of the media has to dissolve rather than stop. The
 * asset is fully opaque, so without this it occludes whatever ambient glow the
 * section paints behind it and punches a visible dark rectangle out of it
 * (measured on the hero: #0B0817 inside vs #241A40 outside).
 *
 * Stops are pinned to the assets: the figure starts at 6.8% from the top in all
 * four poses, so the top ramp closes at 5%; the bottom ramp dissolves the torso,
 * which every asset cuts off at the frame edge; the side ramps clear the figure
 * in all poses and only graze the far ends of the desk pose's table.
 *
 * Browsers without `mask-composite` fall back to no feather, not a broken mask.
 */
const FEATHER_MASK =
  "linear-gradient(to bottom, transparent 0%, #000 5%, #000 86%, transparent 100%)," +
  "linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%)";

const featherStyle: CSSProperties = {
  maskImage: FEATHER_MASK,
  maskComposite: "intersect",
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function prefersReducedMotionNow(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

/** Tracks the user's reduced-motion preference reactively (SSR-safe). */
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    setReduced(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

interface CharacterProps {
  pose: Pose;
  /** Sizing / positioning classes applied to the root element. */
  className?: string;
  /**
   * How the media fills its container. Default "contain" never crops the
   * character (safe for any pose). Use "cover" when the container is sized to
   * deliberately frame/crop (e.g. the hero's portrait card).
   */
  fit?: "cover" | "contain";
}

/**
 * Reusable character visual.
 *
 * - Video poses: a real <video> on every breakpoint. It only starts
 *   loading/playing once within ~200px of the viewport (Intersection Observer),
 *   and pauses — not hides — when scrolled fully offscreen, resuming when it
 *   returns into range.
 * - Poster-only poses (`video: null`): renders the static .png directly.
 * - Reduced motion: never loads or plays any video — renders the poster image.
 *
 * Every pose asset bakes in its own #0A0714 background, matching the page, so
 * sections render this with no card/frame around it — see the callers.
 */
export default function Character({
  pose,
  className,
  fit = "contain",
}: CharacterProps) {
  const asset = POSES[pose];
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const useVideo = asset.video !== null && !reducedMotion;
  const objectFit = fit === "cover" ? "object-cover" : "object-contain";

  useEffect(() => {
    if (!useVideo) return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          // Hard guard: never touch video data under reduced motion, even if
          // the preference resolves a tick after this observer is wired up.
          if (prefersReducedMotionNow()) return;

          // Lazy-attach the source the first time we come into range. With
          // preload="none", nothing is fetched until play() is called.
          if (!video.src && asset.video) {
            video.src = asset.video;
          }
          video.muted = true;
          video.playsInline = true;
          void video.play().catch(() => {
            /* autoplay can be briefly blocked until data is ready; ignore */
          });
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [useVideo, asset.video]);

  if (!useVideo) {
    return (
      <div ref={containerRef} className={className} style={featherStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.poster}
          alt={asset.alt}
          draggable={false}
          className={`h-full w-full ${objectFit}`}
          // style={{ width: "calc(100% + 40px)", marginLeft: "-20px" }}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} style={featherStyle}>
      <video
        ref={videoRef}
        poster={asset.poster}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        disablePictureInPicture
        aria-label={asset.alt}
        className={`h-full w-full ${objectFit}`}
        // style={{ width: "calc(100% - 36px)", marginLeft: "-20px" }}
      />
    </div>
  );
}
