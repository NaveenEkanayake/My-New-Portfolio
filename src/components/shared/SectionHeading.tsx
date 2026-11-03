import type { ReactNode } from "react"
import Reveal from "@/components/shared/Reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  badge?: string
  title: ReactNode
  subtitle?: string
  align?: "center" | "left"
  cta?: ReactNode
  className?: string
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  cta,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12",
        align === "center" && "flex flex-col items-center text-center",
        className,
      )}
    >
      {badge && (
        <span className="mb-4 inline-flex items-center rounded-full border border-accent-soft/40 bg-accent-soft/10 px-4 py-1.5 text-[13px] font-medium tracking-wide text-accent-soft">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute sm:text-base">
          {subtitle}
        </p>
      )}
      {cta && <div className="mt-7">{cta}</div>}
    </Reveal>
  )
}
