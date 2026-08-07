import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect on the client, useEffect on the server (to avoid the SSR
 * "useLayoutEffect does nothing on the server" warning).
 *
 * GSAP setup MUST run in a layout effect: on route navigation React removes the
 * DOM in its mutation phase, and a layout-effect cleanup runs in that same phase
 * (before the removal), whereas a plain useEffect cleanup runs later in the
 * passive phase — too late to revert ScrollTrigger's pin-spacer / SplitText DOM
 * restructuring, which is what caused the "removeChild ... not a child" crash.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
