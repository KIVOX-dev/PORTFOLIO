import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatementTicker } from "@/components/StatementTicker";
import { Process } from "@/components/Process";
import { InsideWork } from "@/components/InsideWork";
import { FeaturedProject } from "@/components/FeaturedProject";
import { SplitBand } from "@/components/SplitBand";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <StatementTicker />
        <Process />
        <InsideWork />
        <FeaturedProject />
        <SplitBand />
        <ProjectsGrid />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
