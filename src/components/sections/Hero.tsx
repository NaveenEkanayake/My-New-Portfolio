import { ArrowRight, ChevronDown } from "lucide-react"
import Character3D from "@/components/character/Character3D"
import { GithubIcon } from "@/components/shared/BrandIcons"
import Reveal from "@/components/shared/Reveal"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/portfolio"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-20 sm:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8">
        {/* copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-soft/40 bg-accent-soft/10 px-4 py-1.5 text-[13px] font-medium text-accent-soft">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-soft" />
              {profile.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Hi, I&apos;m
              <span className="mt-1 block text-accent-bright text-glow-green">
                {profile.name} <span className="wave-hand">👋</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-soft sm:text-lg lg:mx-0">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#about" className={buttonVariants({ size: "lg" })}>
                Explore My Journey
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <GithubIcon className="h-4 w-4" />
                View GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* moving 3D character */}
        <Reveal delay={150} className="order-first lg:order-none">
          <Character3D />
        </Reveal>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-mute transition-colors hover:text-accent-bright sm:flex"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
