import PortfolioHero from "@/components/portfolio-hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1C4532]">
      <PortfolioHero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  )
}

