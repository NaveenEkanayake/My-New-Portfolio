import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import IntroHero from "@/components/sections/IntroHero"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Certificates from "@/components/sections/Certificates"
import Learning from "@/components/sections/Learning"
import Contact from "@/components/sections/Contact"
import PortfolioCanvas from "@/components/three/PortfolioCanvas"

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-ink">
      {/* Fixed 3D canvas rendered behind everything */}
      <PortfolioCanvas />

      {/* Page content sits above the canvas */}
      <div className="relative z-10">
        <IntroHero />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certificates />
          <Learning />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
