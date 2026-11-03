import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* A floating 3D scene: the moving character from the reference image — */
/* a young programmer sitting cross-legged typing on a laptop, framed   */
/* by a rotating green ring and floating tech icons (code window, </>,   */
/* React atom, rocket, sparkles, "Code Create Innovate" badge).         */
/* Each layer sits at its own translateZ so pointer movement produces   */
/* real parallax depth, and every icon bobs on its own float loop.       */
/* ------------------------------------------------------------------ */

type LayerProps = {
  z: number
  rotate?: number
  animation?: string
  delay?: string
  className?: string
  children: ReactNode
}

function Layer({ z, rotate = 0, animation = "animate-float-slow", delay = "0s", className, children }: LayerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute", className)}
      style={{ transform: `translateZ(${z}px) rotate(${rotate}deg)` }}
    >
      <div className={animation} style={{ animationDelay: delay }}>
        {children}
      </div>
    </div>
  )
}

function CharacterSvg() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="c-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#191b22" />
          <stop offset="1" stopColor="#0a0b0f" />
        </linearGradient>
        <linearGradient id="c-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8cfa6" />
          <stop offset="1" stopColor="#efb98d" />
        </linearGradient>
        <linearGradient id="c-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a3624" />
          <stop offset="1" stopColor="#2a1d12" />
        </linearGradient>
        <linearGradient id="c-pants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14151a" />
          <stop offset="1" stopColor="#08090c" />
        </linearGradient>
        <linearGradient id="c-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef2f8" />
          <stop offset="1" stopColor="#b6c0d0" />
        </linearGradient>
        <linearGradient id="c-keyboard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c3240" />
          <stop offset="1" stopColor="#1b202b" />
        </linearGradient>
        <radialGradient id="c-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000000" stopOpacity="0.55" />
          <stop offset="1" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="300" cy="545" rx="190" ry="34" fill="url(#c-shadow)" />

      {/* cross-legged pants — right leg first, left leg crosses over */}
      <path
        d="M338,450 C390,466 426,494 416,520 C406,544 332,556 266,538"
        fill="none"
        stroke="url(#c-pants)"
        strokeWidth="60"
        strokeLinecap="round"
      />
      <path
        d="M262,450 C210,466 174,494 184,520 C194,544 268,556 334,538"
        fill="none"
        stroke="url(#c-pants)"
        strokeWidth="60"
        strokeLinecap="round"
      />

      {/* sneakers (white soles, white laces) */}
      <g transform="translate(348,540) rotate(6)">
        <rect x="-34" y="-12" width="74" height="26" rx="13" fill="#15161b" />
        <rect x="-36" y="4" width="80" height="18" rx="9" fill="#f3f5f9" />
        <path
          d="M-8,-7 L2,-1 M4,-9 L14,-3"
          stroke="#e6eaf1"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(252,540) scale(-1,1) rotate(6)">
        <rect x="-34" y="-12" width="74" height="26" rx="13" fill="#15161b" />
        <rect x="-36" y="4" width="80" height="18" rx="9" fill="#f3f5f9" />
        <path
          d="M-8,-7 L2,-1 M4,-9 L14,-3"
          stroke="#e6eaf1"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>

      {/* neck, hoodie torso, hood roll */}
      <path d="M281,282 L281,310 Q300,320 319,310 L319,282 Z" fill="#e2a97e" />
      <path
        d="M300,302 C253,302 226,332 222,384 L216,468 C262,484 338,484 384,468 L378,384 C374,332 347,302 300,302 Z"
        fill="url(#c-hoodie)"
      />
      <path
        d="M238,322 C248,288 274,270 300,270 C326,270 352,288 362,322 C342,308 322,300 300,300 C278,300 258,308 238,322 Z"
        fill="#1d2029"
      />

      {/* arms reaching to the keyboard (behind the screen) */}
      <path
        d="M246,338 C214,364 204,416 244,446"
        fill="none"
        stroke="url(#c-hoodie)"
        strokeWidth="46"
        strokeLinecap="round"
      />
      <path
        d="M354,338 C386,364 396,416 356,446"
        fill="none"
        stroke="url(#c-hoodie)"
        strokeWidth="46"
        strokeLinecap="round"
      />
      {/* smartwatch on his left wrist (viewer right) */}
      <g transform="rotate(40 374 434)">
        <rect x="359" y="426" width="30" height="17" rx="8" fill="#141519" />
        <rect x="364" y="429" width="20" height="11" rx="5" fill="#22d3ee" opacity="0.9" />
      </g>

      {/* head: ears, face, curly hair */}
      <circle cx="240" cy="246" r="12" fill="#e8b183" />
      <circle cx="360" cy="246" r="12" fill="#e8b183" />
      <ellipse cx="300" cy="238" rx="58" ry="62" fill="url(#c-skin)" />

      <g fill="url(#c-hair)">
        <circle cx="246" cy="230" r="16" />
        <circle cx="244" cy="208" r="22" />
        <circle cx="250" cy="188" r="24" />
        <circle cx="268" cy="174" r="26" />
        <circle cx="294" cy="166" r="28" />
        <circle cx="322" cy="170" r="27" />
        <circle cx="346" cy="184" r="25" />
        <circle cx="357" cy="206" r="22" />
        <circle cx="355" cy="226" r="17" />
        <circle cx="274" cy="190" r="21" />
        <circle cx="302" cy="184" r="23" />
        <circle cx="328" cy="192" r="21" />
        <circle cx="349" cy="208" r="18" />
      </g>
      <g fill="#523d27" opacity="0.7">
        <circle cx="284" cy="176" r="10" />
        <circle cx="316" cy="172" r="8" />
        <circle cx="257" cy="197" r="7" />
      </g>

      {/* face */}
      <path
        d="M266,220 Q278,212 291,217"
        stroke="#3a2b1c"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M309,217 Q322,212 334,220"
        stroke="#3a2b1c"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="279" cy="242" rx="13" ry="15.5" fill="#ffffff" />
      <ellipse cx="321" cy="242" rx="13" ry="15.5" fill="#ffffff" />
      <circle cx="280" cy="244" r="8" fill="#171310" />
      <circle cx="322" cy="244" r="8" fill="#171310" />
      <circle cx="283" cy="240" r="3" fill="#ffffff" />
      <circle cx="325" cy="240" r="3" fill="#ffffff" />
      <circle cx="277" cy="248" r="1.6" fill="#ffffff" opacity="0.85" />
      <circle cx="319" cy="248" r="1.6" fill="#ffffff" opacity="0.85" />
      <path
        d="M300,250 C306,257 304,263 298,263"
        stroke="#dda87c"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="264" cy="264" rx="11" ry="6" fill="#ff9d8a" opacity="0.35" />
      <ellipse cx="336" cy="264" rx="11" ry="6" fill="#ff9d8a" opacity="0.35" />
      {/* smile with visible teeth */}
      <path d="M277,273 Q300,296 323,273 Q300,281 277,273 Z" fill="#7c3b34" />
      <path d="M281,274 Q300,280 319,274 L318,278 Q300,283 282,278 Z" fill="#ffffff" />

      {/* laptop lid (back facing us, glowing </> emblem) */}
      <path
        d="M244,444 L253,332 Q254,323 263,323 L337,323 Q346,323 347,332 L356,444 Z"
        fill="url(#c-silver)"
        stroke="#96a1b4"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="300" cy="388" r="34" fill="#ffffff" opacity="0.12" />
      <g
        stroke="#f6f9ff"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.75))" }}
      >
        <path d="M287,375 L277,389 L287,403" />
        <path d="M313,375 L323,389 L313,403" />
        <path d="M307,371 L293,407" />
      </g>

      {/* laptop base with keyboard */}
      <path
        d="M234,442 L366,442 L392,476 L208,476 Z"
        fill="url(#c-silver)"
        stroke="#96a1b4"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M244,448 L356,448 L374,470 L226,470 Z" fill="url(#c-keyboard)" />
      <path
        d="M252,455 H348 M244,462 H356 M236,468 H364"
        stroke="#6b7590"
        strokeWidth="2.5"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path d="M208,476 L392,476 L386,489 Q300,496 214,489 Z" fill="#8d97ab" />

      {/* hands typing — each taps on its own beat */}
      <g className="animate-tap-l">
        <ellipse cx="268" cy="458" rx="20" ry="14" fill="url(#c-skin)" />
        <path
          d="M258,452 L258,464 M268,451 L268,465 M278,452 L278,464"
          stroke="#e0a67c"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
      <g className="animate-tap-r">
        <ellipse cx="332" cy="458" rx="20" ry="14" fill="url(#c-skin)" />
        <path
          d="M322,452 L322,464 M332,451 L332,465 M342,452 L342,464"
          stroke="#e0a67c"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
    </svg>
  )
}

export default function Character3D({ className }: { className?: string }) {
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = tiltRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const px = Math.max(-0.6, Math.min(0.6, (e.clientX - r.left) / r.width - 0.5))
      const py = Math.max(-0.6, Math.min(0.6, (e.clientY - r.top) / r.height - 0.5))
      el.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 12}deg)`
    }
    const reset = () => {
      el.style.transform = "rotateY(0deg) rotateX(0deg)"
    }

    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", reset)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", reset)
    }
  }, [])

  return (
    <div
      role="img"
      aria-label="3D illustration of Naveen sitting cross-legged and typing on a laptop, surrounded by floating code, React and rocket icons"
      className={cn("relative mx-auto aspect-square w-full max-w-[560px]", className)}
      style={{ perspective: "1200px" }}
    >
      <div
        ref={tiltRef}
        className="h-full w-full"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease-out" }}
      >
        <div
          className="h-full w-full scale-[0.78] sm:scale-90 lg:scale-100"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* rotating green light ring behind the character */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateZ(-60px)" }}
          >
            <div className="animate-spin-slow">
              <svg width="470" height="470" viewBox="0 0 470 470">
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#22c55e" stopOpacity="0.1" />
                    <stop offset="0.45" stopColor="#4ade80" />
                    <stop offset="1" stopColor="#22d3ee" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                <circle
                  cx="235"
                  cy="235"
                  r="212"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="150 64 42 64"
                />
                <circle
                  cx="235"
                  cy="235"
                  r="196"
                  fill="none"
                  stroke="#22c55e"
                  strokeOpacity="0.16"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          {/* ground glow */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-[6%] mx-auto h-16 w-64 animate-pulse-soft rounded-[50%] bg-accent/25 blur-2xl"
            style={{ transform: "translateZ(-40px)" }}
          />

          {/* the moving character */}
          <div aria-hidden="true" className="absolute inset-0" style={{ transform: "translateZ(0px)" }}>
            <div className="animate-bob-soft h-full w-full">
              <CharacterSvg />
            </div>
          </div>

          {/* floating code editor window (top-left, tilted) */}
          <Layer z={70} rotate={-9} delay="0.4s" className="left-[1%] top-[12%]">
            <svg width="190" height="124" viewBox="0 0 190 124">
              <rect x="2" y="2" width="186" height="120" rx="14" fill="#1c1650" stroke="#3b2f8f" strokeWidth="2" />
              <path d="M2,16 Q2,2 16,2 L174,2 Q188,2 188,16 L188,30 L2,30 Z" fill="#251c66" />
              <circle cx="18" cy="16" r="4.5" fill="#ff5f57" />
              <circle cx="34" cy="16" r="4.5" fill="#febc2e" />
              <circle cx="50" cy="16" r="4.5" fill="#28c840" />
              <rect x="16" y="42" width="66" height="7" rx="3.5" fill="#67e8f9" />
              <rect x="88" y="42" width="44" height="7" rx="3.5" fill="#c084fc" />
              <rect x="26" y="58" width="50" height="7" rx="3.5" fill="#fde047" />
              <rect x="82" y="58" width="68" height="7" rx="3.5" fill="#4ade80" />
              <rect x="36" y="74" width="38" height="7" rx="3.5" fill="#c084fc" />
              <rect x="80" y="74" width="56" height="7" rx="3.5" fill="#67e8f9" />
              <rect x="26" y="90" width="62" height="7" rx="3.5" fill="#4ade80" />
              <rect x="94" y="90" width="34" height="7" rx="3.5" fill="#fde047" />
              <rect x="36" y="106" width="48" height="7" rx="3.5" fill="#67e8f9" />
            </svg>
          </Layer>

          {/* </> badge (middle-left) */}
          <Layer z={95} animation="animate-float-mid" delay="1.1s" className="left-[4%] top-[54%]">
            <svg width="66" height="66" viewBox="0 0 66 66">
              <rect x="3" y="3" width="60" height="60" rx="16" fill="#1e40af" stroke="#3b82f6" strokeWidth="2" />
              <path
                d="M26 22 L16 33 L26 44 M40 22 L50 33 L40 44 M37 20 L29 46"
                stroke="#ffffff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Layer>

          {/* green sparkles (upper-right) */}
          <Layer z={65} animation="animate-float-fast" delay="0.8s" className="right-[24%] top-[17%]">
            <svg width="76" height="46" viewBox="0 0 76 46">
              <path
                d="M6 26 L16 34 L32 12"
                stroke="#4ade80"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 30 L52 36 L66 20"
                stroke="#22c55e"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M60 4 L62.5 10 L68.5 12 L62.5 14 L60 20 L57.5 14 L51.5 12 L57.5 10 Z" fill="#86efac" />
            </svg>
          </Layer>

          {/* React atom badge (middle-right) */}
          <Layer z={110} animation="animate-float-mid" delay="0.2s" className="right-[1%] top-[40%]">
            <svg width="74" height="74" viewBox="0 0 74 74">
              <rect x="3" y="3" width="68" height="68" rx="18" fill="#0f1e56" stroke="#1e40af" strokeWidth="2" />
              <g stroke="#67e8f9" strokeWidth="3" fill="none">
                <ellipse cx="37" cy="37" rx="24" ry="9.5" />
                <ellipse cx="37" cy="37" rx="24" ry="9.5" transform="rotate(60 37 37)" />
                <ellipse cx="37" cy="37" rx="24" ry="9.5" transform="rotate(120 37 37)" />
              </g>
              <circle cx="37" cy="37" r="5.5" fill="#22d3ee" />
            </svg>
          </Layer>

          {/* 3D rocket (lower-right, pointing up-right) */}
          <Layer z={130} rotate={16} animation="animate-float-fast" delay="0.6s" className="right-[5%] bottom-[14%]">
            <svg width="86" height="96" viewBox="0 0 86 96">
              <path d="M40 64 C34 78 38 88 43 93 C48 88 52 78 46 64 Z" fill="#fbbf24" />
              <path d="M42 66 C39 76 41 84 43 87 C45 84 47 76 44 66 Z" fill="#fb923c" />
              <path d="M30 50 C20 58 16 68 18 74 C26 70 32 64 36 58 Z" fill="#2563eb" />
              <path d="M56 50 C66 58 70 68 68 74 C60 70 54 64 50 58 Z" fill="#2563eb" />
              <path
                d="M43 6 C56 20 62 38 60 56 L26 56 C24 38 30 20 43 6 Z"
                fill="#eef2f9"
                stroke="#c3ccdb"
                strokeWidth="2"
              />
              <path d="M43 6 C49 14 53 24 55 33 L31 33 C33 24 37 14 43 6 Z" fill="#3b82f6" />
              <circle cx="43" cy="43" r="9" fill="#0ea5e9" stroke="#bae6fd" strokeWidth="3" />
              <rect x="27" y="50" width="32" height="6" rx="3" fill="#93c5fd" />
            </svg>
          </Layer>

          {/* "Code Create Innovate" speech badge (top-right) */}
          <Layer z={85} delay="1.6s" className="right-[2%] top-[1%]">
            <div className="relative rounded-full border border-accent/60 bg-[#0b1a14]/85 px-4 py-2 text-[11px] font-semibold tracking-wide text-accent-bright shadow-glow-green backdrop-blur-sm sm:text-xs">
              Code Create Innovate
              <span className="absolute -bottom-1.5 left-7 h-3 w-3 rotate-45 border-b border-r border-accent/60 bg-[#0b1a14]" />
            </div>
          </Layer>
        </div>
      </div>
    </div>
  )
}
