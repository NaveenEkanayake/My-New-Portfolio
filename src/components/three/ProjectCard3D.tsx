/**
 * ProjectCard - A normal (non-3D) project card component
 * Displays project information in a simple card layout
 */
interface ProjectCardProps {
  project: {
    title: string
    description: string
    github: string
    liveUrl?: string
    stack: string[]
    icon: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group relative rounded-2xl border border-line bg-card/80 p-6 backdrop-blur overflow-hidden hover:border-accent/50 hover:shadow-glow-green transition-colors"
      style={{ transition: "transform 0.2s ease" }}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-bright">
          <span className="h-5 w-5" />
        </span>
        <div className="flex-1 pt-1">
          <h3 className="text-[17px] font-semibold leading-snug text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-[11px] text-soft"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright underline"
            >
              Live Demo →
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-bright underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}