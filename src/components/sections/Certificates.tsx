import { Award, ArrowRight, Plus } from "lucide-react"
import Reveal from "@/components/shared/Reveal"
import SectionHeading from "@/components/shared/SectionHeading"
import TiltCard from "@/components/shared/TiltCard"
import { buttonVariants } from "@/components/ui/button"
import { certificates, profile } from "@/data/portfolio"

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Certificates"
          title={
            <>
              My <span className="text-accent-bright">Certificates</span>
            </>
          }
          subtitle="Courses and certifications that boost my journey."
          cta={
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              View Certificates
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 90} className="h-full">
              <TiltCard className="h-full">
                <article
                  className={`flex h-full flex-col rounded-2xl bg-white p-6 text-slate-900 shadow-[0_18px_44px_-26px_rgba(0,0,0,0.85)] ${
                    i === 0 ? "ring-2 ring-accent/60" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a14] text-accent-bright">
                      <Award className="h-5 w-5" />
                    </span>
                    <span className="pt-1 text-right font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      {cert.issuer}
                      {cert.year ? ` · ${cert.year}` : ""}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold leading-snug text-[#0b1220]">
                    {cert.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">
                    {cert.description}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}

          {/* + More… Coming Soon */}
          <Reveal delay={180} className="h-full">
            <div className="flex h-full min-h-[190px] flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface/60 p-6 text-center">
              <Plus className="h-8 w-8 text-mute" />
              <p className="mt-3 text-base font-semibold text-ink">More...</p>
              <p className="mt-1 text-xs text-mute">Coming Soon</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
