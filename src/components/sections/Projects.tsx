import { ArrowRight } from "lucide-react"
import Reveal from "@/components/shared/Reveal"
import SectionHeading from "@/components/shared/SectionHeading"
import { ProjectCard } from "@/components/three/ProjectCard"
import { buttonVariants } from "@/components/ui/button"
import { profile, projects } from "@/data/portfolio"

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="My Projects"
          title={
            <>
              Featured <span className="text-accent-bright">Projects</span>
            </>
          }
          subtitle="Here are some of the projects I've built with modern technologies."
          cta={
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            return (
              <Reveal key={project.title} delay={(i % 3) * 90} className="h-full">
                <ProjectCard
                  project={{
                    title: project.title,
                    description: project.description,
                    github: project.github,
                    liveUrl: project.liveUrl,
                    stack: project.stack,
                    icon: project.icon,
                  }}
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
