"use client";

import { useState } from "react";
import type Lenis from "lenis";

// Positive value = stop that many px above the section's top edge.
const SECTION_OFFSETS: Record<string, number> = {
  about: 120,
  clients: -160,
  arsenal: -20,
  portfolio: 5,
  contact: 10,
};

const MOBILE_SECTION_OFFSETS: Record<string, number> = {
  about: 5,
  clients: 60,
  arsenal: 60,
  portfolio: 60,
  contact: 60,
};

function scrollToHash(hash: string) {
  const id = hash.replace("/#", "").replace("#", "");
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;

  if (id === "hero") {
    if (lenis) {
      lenis.scrollTo(0, { offset: 0, duration: 1.6, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  const offset = SECTION_OFFSETS[id] ?? 120;

  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.6, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -offset);
  }
}

// Route-aware anchors ("/#id") so the nav works from the portfolio sub-pages
// too: on the homepage they scroll in place; from a sub-page they navigate home
// and then scroll to the section.
const links = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#clients", label: "Clients" },
  { href: "/#arsenal", label: "Arsenal" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#contact", label: "Contact" },
] as const;

/**
 * Fixed top navigation. Plain anchors: same-page hash scroll on the homepage,
 * full navigation + scroll when clicked from a sub-page.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="/"
          className="font-display text-lg font-bold tracking-tight text-text"
        >
          HUSSAIN DIGOSEWALA<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    scrollToHash(link.href);
                  }
                }}
                className="font-body text-sm text-muted transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-md border border-line p-2 text-text transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 6h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 10h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-line bg-surface px-6 py-2 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  setOpen(false);
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    scrollToHash(link.href);
                  }
                }}
                className="block py-2 font-body text-sm text-muted transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
