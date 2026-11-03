import {
  BookOpen,
  Briefcase,
  Clock,
  Code2,
  GraduationCap,
  Target,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/shared/Reveal"
import SectionHeading from "@/components/shared/SectionHeading"
import { about } from "@/data/portfolio"

const PILL_ICONS: Record<string, LucideIcon> = {
  "Full Stack Developer": Code2,
  "Problem Solver": Target,
  "Quick Learner": Clock,
}

const HIGHLIGHT_ICONS: LucideIcon[] = [GraduationCap, BookOpen, Briefcase]

const ORBIT_CHIPS = [
  { label: "React", top: "8%", left: "10%", delay: "0s" },
  { label: "Node.js", top: "18%", left: "68%", delay: "0.9s" },
  { label: "Python", top: "44%", left: "4%", delay: "1.7s" },
  { label: "AI / ML", top: "70%", left: "12%", delay: "0.4s" },
  { label: "Docker", top: "76%", left: "64%", delay: "1.3s" },
  { label: "MongoDB", top: "46%", left: "76%", delay: "2.1s" },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={about.badge}
          title={
            <>
              {about.titleA}
              <span className="text-accent-bright">{about.titleB}</span>
            </>
          }
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* thought-bubble panel */}
          <Reveal>
            <div className="relative mx-auto flex aspect-[5/4] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur">
              <div
                aria-hidden="true"
                className="absolute inset-0 grid-bg opacity-40"
              />
              {ORBIT_CHIPS.map((chip) => (
                <span
                  key={chip.label}
                  className="animate-float-mid absolute rounded-full border border-line bg-card/90 px-3 py-1.5 font-mono text-[11px] text-soft shadow-lg"
                  style={{
                    top: chip.top,
                    left: chip.left,
                    animationDelay: chip.delay,
                  }}
                >
                  {chip.label}
                </span>
              ))}

              <div className="relative flex flex-col items-center">
                <div className="animate-float-slow flex h-32 w-32 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-4xl font-bold text-accent-bright shadow-glow-green">
                  &lt;/&gt;
                </div>
                <span className="mt-3 h-4 w-4 rounded-full border border-accent/40 bg-accent/10" />
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-accent/25" />
              </div>
            </div>
          </Reveal>

          {/* text + highlights */}
          <div>
            <Reveal>
              <p className="text-[15px] leading-relaxed text-soft sm:text-base">
                {about.paragraph}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 flex flex-wrap gap-3">
                {about.pills.map((pill) => {
                  const Icon = PILL_ICONS[pill] ?? Code2
                  return (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-medium text-soft transition hover:border-accent/60 hover:text-accent-bright"
                    >
                      <Icon className="h-4 w-4 text-accent-bright" />
                      {pill}
                    </span>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 grid gap-4">
                {about.highlights.map((text, i) => {
                  const Icon = HIGHLIGHT_ICONS[i] ?? Briefcase
                  return (
                    <li
                      key={text}
                      className="flex items-center gap-4 rounded-xl border border-line bg-card/70 px-5 py-4 backdrop-blur transition hover:border-accent/50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-bright">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm leading-snug text-soft sm:text-[15px]">
                        {text}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
