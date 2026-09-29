import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/lib/SmoothScroll";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/Preloader";
import { getCategoryBySlug } from "@/lib/portfolio-scan";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hussain — Portfolio",
  description:
    "Premium single-page portfolio. Design, software, and selected work by Hussain.",
};

export const viewport: Viewport = {
  themeColor: "#0a0714",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable} ${unbounded.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's
          cz-shortcut-listener) mutate <body> before hydration, producing a
          false-positive mismatch warning. This suppresses only that. */}
      <body
        className="bg-bg font-body text-text antialiased"
        suppressHydrationWarning
      >
        <Preloader
          images={
            getCategoryBySlug("nft-artworks")
              ?.items.filter((item) => item.mediaType === "image")
              .slice(0, 8)
              .map((item) => item.mediaSrc)
              .filter((src): src is string => Boolean(src)) ?? []
          }
        />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
