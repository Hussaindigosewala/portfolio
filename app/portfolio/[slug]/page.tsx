import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioCategoryGrid from "@/components/PortfolioCategoryGrid";
import { getCategorySlugs, getCategoryBySlug } from "@/lib/portfolio-scan";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Only the known category slugs exist in the static export (no runtime fallback).
export const dynamicParams = false;

export function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  return {
    title: category ? `${category.title} — Hussain` : "Portfolio — Hussain",
    description: category?.blurb,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <div className="min-h-svh bg-bg px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb / back to home */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 font-body text-sm text-muted">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none focus-visible:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/#portfolio"
                className="transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none focus-visible:underline"
              >
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text" aria-current="page">
              {category.title}
            </li>
          </ol>
        </nav>

        <header className="mb-12 flex flex-col gap-3">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
            Portfolio
          </span>
          <h1 className="text-balance font-accent text-3xl font-bold uppercase leading-tight text-text sm:text-5xl">
            {category.title}
          </h1>
          <p className="max-w-2xl font-body text-base text-muted sm:text-lg">
            {category.blurb}
          </p>
        </header>

        <PortfolioCategoryGrid category={category} />

        {/* Contact CTA */}
        <div className="mt-24 flex flex-col items-center gap-5 rounded-2xl border border-line bg-surface px-6 py-12 text-center">
          <h2 className="font-display text-2xl font-bold text-text sm:text-3xl">
            Like what you see?
          </h2>
          <p className="max-w-md font-body text-muted">
            Let&rsquo;s create something together — I&rsquo;m open for new projects.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 font-body text-sm font-semibold text-bg shadow-[0_0_30px_-8px_var(--accent)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
