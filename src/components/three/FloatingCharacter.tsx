import { useEffect } from "react"
import { Html } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/* ------------------------------------------------------------------ */
/* The SVG programmer character – inline (same as Character3D.tsx)     */
/* ------------------------------------------------------------------ */

function CharacterSvg() {
  return (
    <svg
      viewBox="0 0 600 600"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fc-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#191b22" />
          <stop offset="1" stopColor="#0a0b0f" />
        </linearGradient>
        <linearGradient id="fc-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8cfa6" />
          <stop offset="1" stopColor="#efb98d" />
        </linearGradient>
        <linearGradient id="fc-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a3624" />
          <stop offset="1" stopColor="#2a1d12" />
        </linearGradient>
        <linearGradient id="fc-pants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14151a" />
          <stop offset="1" stopColor="#08090c" />
        </linearGradient>
        <linearGradient id="fc-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef2f8" />
          <stop offset="1" stopColor="#b6c0d0" />
        </linearGradient>
        <linearGradient id="fc-keyboard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c3240" />
          <stop offset="1" stopColor="#1b202b" />
        </linearGradient>
        <radialGradient id="fc-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000000" stopOpacity="0.55" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      <ellipse cx="300" cy="545" rx="190" ry="34" fill="url(#fc-shadow)" />

      <path d="M338,450 C390,466 426,494 416,520 C406,544 332,556 266,538" fill="none" stroke="url(#fc-pants)" strokeWidth="60" strokeLinecap="round" />
      <path d="M262,450 C210,466 174,494 184,520 C194,544 268,556 334,538" fill="none" stroke="url(#fc-pants)" strokeWidth="60" strokeLinecap="round" />

      <g transform="translate(348,540) rotate(6)">
        <rect x="-34" y="-12" width="74" height="26" rx="13" fill="#15161b" />
        <rect x="-36" y="4" width="80" height="18" rx="9" fill="#f3f5f9" />
        <path d="M-8,-7 L2,-1 M4,-9 L14,-3" stroke="#e6eaf1" strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <g transform="translate(252,540) scale(-1,1) rotate(6)">
        <rect x="-34" y="-12" width="74" height="26" rx="13" fill="#15161b" />
        <rect x="-36" y="4" width="80" height="18" rx="9" fill="#f3f5f9" />
        <path d="M-8,-7 L2,-1 M4,-9 L14,-3" stroke="#e6eaf1" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      <path d="M281,282 L281,310 Q300,320 319,310 L319,282 Z" fill="#e2a97e" />
      <path d="M300,302 C253,302 226,332 222,384 L216,468 C262,484 338,484 384,468 L378,384 C374,332 347,302 300,302 Z" fill="url(#fc-hoodie)" />
      <path d="M238,322 C248,288 274,270 300,270 C326,270 352,288 362,322 C342,308 322,300 300,300 C278,300 258,308 238,322 Z" fill="#1d2029" />

      <path d="M246,338 C214,364 204,416 244,446" fill="none" stroke="url(#fc-hoodie)" strokeWidth="46" strokeLinecap="round" />
      <path d="M354,338 C386,364 396,416 356,446" fill="none" stroke="url(#fc-hoodie)" strokeWidth="46" strokeLinecap="round" />
      <g transform="rotate(40 374 434)">
        <rect x="359" y="426" width="30" height="17" rx="8" fill="#141519" />
        <rect x="364" y="429" width="20" height="11" rx="5" fill="#22d3ee" opacity="0.9" />
      </g>

      <circle cx="240" cy="246" r="12" fill="#e8b183" />
      <circle cx="360" cy="246" r="12" fill="#e8b183" />
      <ellipse cx="300" cy="238" rx="58" ry="62" fill="url(#fc-skin)" />

      <g fill="url(#fc-hair)">
        <circle cx="246" cy="230" r="16" /><circle cx="244" cy="208" r="22" />
        <circle cx="250" cy="188" r="24" /><circle cx="268" cy="174" r="26" />
        <circle cx="294" cy="166" r="28" /><circle cx="322" cy="170" r="27" />
        <circle cx="346" cy="184" r="25" /><circle cx="357" cy="206" r="22" />
        <circle cx="355" cy="226" r="17" /><circle cx="274" cy="190" r="21" />
        <circle cx="302" cy="184" r="23" /><circle cx="328" cy="192" r="21" />
        <circle cx="349" cy="208" r="18" />
      </g>
      <g fill="#523d27" opacity="0.7">
        <circle cx="284" cy="176" r="10" /><circle cx="316" cy="172" r="8" />
        <circle cx="257" cy="197" r="7" />
      </g>

      <path d="M266,220 Q278,212 291,217" stroke="#3a2b1c" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <path d="M309,217 Q322,212 334,220" stroke="#3a2b1c" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <ellipse cx="279" cy="242" rx="13" ry="15.5" fill="#ffffff" />
      <ellipse cx="321" cy="242" rx="13" ry="15.5" fill="#ffffff" />
      <circle cx="280" cy="244" r="8" fill="#171310" />
      <circle cx="322" cy="244" r="8" fill="#171310" />
      <circle cx="283" cy="240" r="3" fill="#ffffff" />
      <circle cx="325" cy="240" r="3" fill="#ffffff" />
      <circle cx="277" cy="248" r="1.6" fill="#ffffff" opacity="0.85" />
      <circle cx="319" cy="248" r="1.6" fill="#ffffff" opacity="0.85" />
      <path d="M300,250 C306,257 304,263 298,263" stroke="#dda87c" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="264" cy="264" rx="11" ry="6" fill="#ff9d8a" opacity="0.35" />
      <ellipse cx="336" cy="264" rx="11" ry="6" fill="#ff9d8a" opacity="0.35" />
      <path d="M277,273 Q300,296 323,273 Q300,281 277,273 Z" fill="#7c3b34" />
      <path d="M281,274 Q300,280 319,274 L318,278 Q300,283 282,278 Z" fill="#ffffff" />

      <path d="M244,444 L253,332 Q254,323 263,323 L337,323 Q346,323 347,332 L356,444 Z" fill="url(#fc-silver)" stroke="#96a1b4" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="300" cy="388" r="34" fill="#ffffff" opacity="0.12" />
      <g stroke="#f6f9ff" strokeWidth="5.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.75))" }}>
        <path d="M287,375 L277,389 L287,403" />
        <path d="M313,375 L323,389 L313,403" />
        <path d="M307,371 L293,407" />
      </g>
      <path d="M234,442 L366,442 L392,476 L208,476 Z" fill="url(#fc-silver)" stroke="#96a1b4" strokeWidth="3" strokeLinejoin="round" />
      <path d="M244,448 L356,448 L374,470 L226,470 Z" fill="url(#fc-keyboard)" />
      <path d="M252,455 H348 M244,462 H356 M236,468 H364" stroke="#6b7590" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
      <path d="M208,476 L392,476 L386,489 Q300,496 214,489 Z" fill="#8d97ab" />

      <ellipse cx="268" cy="458" rx="20" ry="14" fill="url(#fc-skin)" />
      <path d="M258,452 L258,464 M268,451 L268,465 M278,452 L278,464" stroke="#e0a67c" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <ellipse cx="332" cy="458" rx="20" ry="14" fill="url(#fc-skin)" />
      <path d="M322,452 L322,464 M332,451 L332,465 M342,452 L342,464" stroke="#e0a67c" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Waypoints – where the character should be at each section           */
/* ------------------------------------------------------------------ */
/**
 * Progress percentages that map to section scroll positions:
 *  0%   → Hero (center-right, scale 1.0)
 *  20%   → About (left side, scale 0.82, rotY 12deg)
 *  40%   → Projects (right side, scale 0.88, rotY -15deg)
 *  60%   → Experience (left side, scale 0.8, rotY 8deg)
 *  80%   → Certificates (center top, scale 0.75, rotY -5deg)
 * 100%   → Contact (center, scale 0.9, rotY 0deg)
 *
 * Using GSAP ScrollTrigger with scrub: 1.5 for buttery smooth movement
 * that follows the scroll rather than jumping to exact positions.
 */
const WAYPOINTS = {
  hero:    { progress: 0,   x:  3.2, y: 0.2,  z: 0,    rotY:  0,   scale: 1.05 },
  about:   { progress: 0.18, x: -3.5, y: 0.4,  z: -1,   rotY:  12,  scale: 0.82 },
  projects:{ progress: 0.36, x:  3.8, y: -0.2, z: -0.5, rotY: -15,  scale: 0.88 },
  experience:{ progress: 0.54, x: -3.2, y: 0.1,  z: -0.5, rotY:  8,   scale: 0.8  },
  certificates:{ progress: 0.72, x:  0.5, y: 1.8,  z: -1,   rotY: -5,   scale: 0.75 },
  contact: { progress: 1.0,  x:  0,   y: -0.3, z: 0,    rotY:  0,   scale: 0.9  },
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function getWaypointAt(progress: number) {
  const p = Math.max(0, Math.min(1, progress))

  const entries = [WAYPOINTS.hero, WAYPOINTS.about, WAYPOINTS.projects,
                   WAYPOINTS.experience, WAYPOINTS.certificates, WAYPOINTS.contact]

  let lo = entries[0]
  let hi = entries[entries.length - 1]

  for (let i = 0; i < entries.length - 1; i++) {
    if (p >= entries[i].progress && p <= entries[i + 1].progress) {
      lo = entries[i]
      hi = entries[i + 1]
      break
    }
  }

  const t = lo.progress === hi.progress ? 0 : (p - lo.progress) / (hi.progress - lo.progress)
  return {
    x: lerp(lo.x, hi.x, t),
    y: lerp(lo.y, hi.y, t),
    z: lerp(lo.z, hi.z, t),
    rotY: lerp(lo.rotY, hi.rotY, t),
    scale: lerp(lo.scale, hi.scale, t),
  }
}

/* ------------------------------------------------------------------ */
/* GSAP ScrollTrigger-driven character movement                      */
/* ------------------------------------------------------------------ */

/**
 * Sets up GSAP ScrollTrigger that updates the character position on each
 * scroll tick. The character follows the scroll with scrub for smooth
 * movement between sections.
 */
function setupScrollTrigger(htmlRef: HTMLDivElement) {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight

  // Create a ScrollTrigger that drives character position on each update
  const st = ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: `total ${totalHeight}px`,
    onUpdate: (self: any) => {
      const progress = Math.max(0, Math.min(1, self.progress))
      const wp = getWaypointAt(progress)

      if (htmlRef) {
        htmlRef.style.transform = `translate(-50%, -50%) scale(${wp.scale}) rotateY(${wp.rotY}deg) translateZ(${wp.z}px)`
      }
    },
    scrub: 1.5,
  })
}

/* ------------------------------------------------------------------ */
/* The floating Html character that lives in 3D space                  */
/* ------------------------------------------------------------------ */

export default function FloatingCharacter() {
  useEffect(() => {
    // Respect user reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const htmlRef = document.querySelector<HTMLDivElement>(".floating-character-html")
    if (!htmlRef) return

    // Set up ScrollTrigger with scrub for smooth following
    const cleanup = setupScrollTrigger(htmlRef)

    // Clean up on unmount - kill the ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => ScrollTrigger.kill(trigger))
    }
  }, [])

  return (
    <Html
      position={[3.2, 0.2, 0]}
      center
      zIndexRange={[10, 20]}
      style={{ width: 0, height: 0, pointerEvents: "none" }}
    >
      <div
        className="floating-character-html"
        style={{
          width: 320,
          height: 320,
          transform: "translate(-50%, -50%) scale(1.05) rotateY(0deg)",
          transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          filter: "drop-shadow(0 0 24px rgba(34,197,94,0.35))",
          pointerEvents: "none",
        }}
      >
        <CharacterSvg />
      </div>
    </Html>
  )
}