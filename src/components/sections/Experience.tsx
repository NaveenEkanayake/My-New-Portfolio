import { ArrowRight, CheckCircle2 } from "lucide-react"
import Reveal from "@/components/shared/Reveal"
import SectionHeading from "@/components/shared/SectionHeading"
import { buttonVariants } from "@/components/ui/button"
import { experience, profile, tools } from "@/data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={experience.badge}
          title={
            <>
              {experience.titleA}
              <span className="text-accent-bright">{experience.titleB}</span>
            </>
          }
          subtitle={experience.subtitle}
          cta={
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              More Details
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          {/* experience list */}
          <div>
            <Reveal>
              <div className="rounded-2xl border border-line bg-card/80 p-6 backdrop-blur">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {experience.role.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-soft">
                      {experience.role.company}
                    </p>
                  </div>
                  <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-mute">
                    {experience.role.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {experience.role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-soft">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {experience.more.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface/60 px-5 py-4 text-sm text-soft"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-bright">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* tools & technologies */}
          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-line bg-card/80 p-6 backdrop-blur">
              <h3 className="text-base font-semibold text-ink">
                Tools &amp; Technologies
              </h3>
              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                {tools.map((tool) => (
                  <div key={tool.name} className="group flex flex-col items-center gap-2">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface font-mono text-[11px] font-bold transition group-hover:-translate-y-1 group-hover:border-accent/60 group-hover:shadow-glow-cyan"
                      style={{ color: tool.color }}
                    >
                      {tool.abbr}
                    </span>
                    <span className="text-center text-[10px] leading-tight text-mute">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
