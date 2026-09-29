import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import ToolsArsenal from "@/components/sections/ToolsArsenal";
import PortfolioHighlights from "@/components/sections/PortfolioHighlights";
import Contact from "@/components/sections/Contact";
import { getCategories } from "@/lib/portfolio-scan";

export default function Home() {
  const categories = getCategories();
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <ToolsArsenal />
      <PortfolioHighlights categories={categories} />
      <Contact />
    </>
  );
}
