import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type TiltCardProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
}

/** Hover-tilts its child in 3D, following the pointer. */
export default function TiltCard({ children, className, maxTilt = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)`
    }
    const reset = () => {
      el.style.transform = ""
    }

    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", reset)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", reset)
    }
  }, [maxTilt])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-transform duration-200 ease-out will-change-transform",
        className,
      )}
    >
      {children}
    </div>
  )
}
