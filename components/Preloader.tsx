"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Preloader({ images }: { images: string[] }) {
  const [hidden, setHidden] = useState(false);
  const [percent, setPercent] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterState = useRef({ value: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.style.overflowY = "hidden";

    gsap.registerPlugin(ScrollTrigger);

    if (reducedMotion) {
      setPercent(100);
      finish();
      return;
    }

    const imgTimer = window.setInterval(() => {
      if (images.length === 0) return;
      setActiveImg((i) => (i + 1) % images.length);
    }, 450);

    const tween = gsap.to(counterState.current, {
      value: 100,
      duration: 2.3,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.round(counterState.current.value)),
      onComplete: () => {
        window.clearInterval(imgTimer);
        window.setTimeout(finish, 250);
      },
    });

    return () => {
      tween.kill();
      window.clearInterval(imgTimer);
    };

    function finish() {
      if (!rootRef.current) {
        setHidden(true);
        document.body.style.overflowY = "";
        ScrollTrigger.refresh();
        return;
      }
      gsap.to(rootRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          setHidden(true);
          document.body.style.overflowY = "";
          ScrollTrigger.refresh();
        },
      });
    }
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-8 bg-bg"
      aria-hidden="true"
    >
      <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-line sm:h-48 sm:w-48">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: i === activeImg ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 ring-1 ring-inset ring-accent/20" />
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="font-accent text-4xl font-bold text-text sm:text-5xl">
          {percent}%
        </span>
        <div className="h-0.5 w-40 overflow-hidden rounded-full bg-line sm:w-56">
          <div
            className="h-full bg-accent transition-[width] duration-150 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}