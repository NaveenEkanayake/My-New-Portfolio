import Reveal from "@/components/shared/Reveal"
import { learning } from "@/data/portfolio"

/** Server rack + floating cloud and infinity symbols (DevOps motif). */
function LearningScene() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="w-full"
      role="img"
      aria-label="Illustration of a server rack with floating cloud and infinity symbols"
    >
      {/* floating cloud */}
      <g className="animate-float-slow" fill="#132340">
        <circle cx="54" cy="54" r="20" />
        <circle cx="84" cy="44" r="26" />
        <circle cx="114" cy="56" r="18" />
        <rect x="54" y="56" width="60" height="20" rx="10" />
      </g>

      {/* DevOps infinity loop */}
      <g
        className="animate-float-mid"
        style={{ animationDelay: "1.2s" }}
        fill="none"
        stroke="#4ade80"
        strokeWidth="7"
        strokeLinecap="round"
      >
        <path d="M120,244 C104,224 74,224 60,244 C74,264 104,264 120,244 C136,224 166,224 180,244 C166,264 136,264 120,244 Z" />
      </g>

      {/* floating sparkles */}
      <g fill="#22d3ee" className="animate-pulse-soft">
        <circle cx="356" cy="70" r="4" />
        <circle cx="384" cy="110" r="3" style={{ animationDelay: "0.8s" }} />
        <circle cx="64" cy="160" r="3.5" style={{ animationDelay: "1.4s" }} />
      </g>

      {/* server rack */}
      <g
        className="animate-float-mid"
        style={{ animationDelay: "0.3s" }}
      >
        <rect x="130" y="132" width="200" height="52" rx="10" fill="#101827" stroke="#24304a" strokeWidth="2" />
        <rect x="146" y="146" width="64" height="10" rx="5" fill="#1f2b41" />
        <rect x="146" y="162" width="96" height="10" rx="5" fill="#1f2b41" />
        <circle cx="300" cy="152" r="5" fill="#22c55e" className="animate-pulse-soft" />
        <circle cx="316" cy="152" r="5" fill="#22d3ee" opacity="0.6" />
        <circle cx="300" cy="168" r="5" fill="#22d3ee" opacity="0.6" style={{ animationDelay: "1s" }} />
        <circle cx="316" cy="168" r="5" fill="#22c55e" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />

        <rect x="130" y="192" width="200" height="52" rx="10" fill="#101827" stroke="#24304a" strokeWidth="2" />
        <rect x="146" y="206" width="96" height="10" rx="5" fill="#1f2b41" />
        <rect x="146" y="222" width="64" height="10" rx="5" fill="#1f2b41" />
        <circle cx="300" cy="212" r="5" fill="#22d3ee" className="animate-pulse-soft" style={{ animationDelay: "0.7s" }} />
        <circle cx="316" cy="212" r="5" fill="#22c55e" opacity="0.7" />
        <circle cx="300" cy="228" r="5" fill="#22c55e" opacity="0.7" />
        <circle cx="316" cy="228" r="5" fill="#22d3ee" className="animate-pulse-soft" style={{ animationDelay: "1.2s" }} />

        <rect x="130" y="252" width="200" height="52" rx="10" fill="#101827" stroke="#24304a" strokeWidth="2" />
        <rect x="146" y="266" width="76" height="10" rx="5" fill="#1f2b41" />
        <rect x="146" y="282" width="96" height="10" rx="5" fill="#1f2b41" />
        <circle cx="300" cy="272" r="5" fill="#22c55e" className="animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <circle cx="316" cy="272" r="5" fill="#22d3ee" opacity="0.6" />
        <circle cx="300" cy="288" r="5" fill="#22d3ee" opacity="0.6" />
        <circle cx="316" cy="288" r="5" fill="#22c55e" className="animate-pulse-soft" style={{ animationDelay: "0.3s" }} />
      </g>

      {/* base glow */}
      <ellipse cx="230" cy="316" rx="130" ry="14" fill="#22c55e" opacity="0.12" />
    </svg>
  )
}

export default function Learning() {
  return (
    <section id="learning" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-accent-soft/40 bg-accent-soft/10 px-4 py-1.5 text-[13px] font-medium tracking-wide text-accent-soft">
            {learning.badge}
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-mute">
            {learning.title}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            <span className="text-accent-bright text-glow-green">
              {learning.headingA}
              {learning.headingB}
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute sm:text-base">
            {learning.subtitle}
          </p>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={100} className="order-2 lg:order-1">
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {learning.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-[12px] text-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent-bright"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180} className="order-1 lg:order-2">
            <LearningScene />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
