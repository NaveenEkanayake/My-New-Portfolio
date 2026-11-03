import { ArrowUp } from "lucide-react"
import { navLinks, profile } from "@/data/portfolio"

const BOTTOM_LINKS = ["Home", "About", "Projects", "Certificates", "Contact"]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-7 sm:px-6 md:flex-row lg:px-8">
        <p className="font-mono text-xs text-mute">
          © {year} {profile.name}. All rights reserved.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {navLinks
            .filter((l) => BOTTOM_LINKS.includes(l.label))
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium text-mute transition-colors hover:text-accent-bright"
              >
                {l.label}
              </a>
            ))}
        </nav>

        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition hover:border-accent hover:text-accent-bright hover:shadow-glow-green"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
