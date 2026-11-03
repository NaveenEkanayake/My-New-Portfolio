import type { ReactNode } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons"
import Reveal from "@/components/shared/Reveal"
import { buttonVariants } from "@/components/ui/button"
import { contact, profile } from "@/data/portfolio"

type IconComponent = (props: { className?: string }) => ReactNode

const LINKS: { icon: IconComponent; label: string; value: string; href: string }[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/naveen-ekanayake", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "github.com/NaveenEkanayake", href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-accent-soft/40 bg-accent-soft/10 px-4 py-1.5 text-[13px] font-medium tracking-wide text-accent-soft">
            {contact.badge}
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            {contact.titleA}
            <span className="text-accent-bright">{contact.titleB}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute sm:text-base">
            {contact.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-4">
          {LINKS.map((link, i) => {
            const Icon = link.icon
            const isMail = link.href.startsWith("mailto:")
            return (
              <Reveal key={link.label} delay={i * 90}>
                <a
                  href={link.href}
                  {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-card/80 px-6 py-4 text-left backdrop-blur transition hover:border-accent/60 hover:shadow-glow-green"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-bright transition group-hover:bg-accent/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-mute">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-ink transition group-hover:text-accent-bright">
                      {link.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={280} className="mt-12 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className={buttonVariants({ size: "lg" })}
          >
            {contact.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="rotate-[-3deg] font-script text-3xl text-accent-bright/90 sm:text-4xl">
            {contact.script}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
