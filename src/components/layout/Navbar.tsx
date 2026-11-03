import { useEffect, useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { navLinks, profile } from "@/data/portfolio"
import { cn } from "@/lib/utils"

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/50 bg-accent/10 font-mono text-[13px] font-bold text-accent-bright shadow-glow-green transition group-hover:bg-accent/20">
        &lt;/&gt;
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-ink">
        {profile.name}
      </span>
    </a>
  )
}

export default function Navbar() {
  const [entered, setEntered] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")

  // The intro hero pins the body while it plays — only show the navbar
  // once the page has been released and the visitor starts scrolling.
  useEffect(() => {
    const onScroll = () => setEntered(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scrollspy: highlight the section crossing the middle of the viewport.
  useEffect(() => {
    const els = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el))
    if (els.length === 0) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        entered
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      )}
    >
      <div className="border-b border-line/60 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((l) => {
              const id = l.href.slice(1)
              const isActive = active === id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    isActive ? "text-ink" : "text-mute hover:text-ink",
                  )}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent shadow-glow-green" />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-accent/60 bg-surface/80 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent-bright hover:shadow-glow-green sm:inline-flex"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition hover:border-accent hover:text-accent-bright lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm transition-colors",
                  active === l.href.slice(1)
                    ? "bg-accent/10 text-accent-bright"
                    : "text-mute hover:bg-surface hover:text-ink",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
