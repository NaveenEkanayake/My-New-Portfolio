/** Fixed ambient background: dark gradient, grid, drifting glow orbs. */
export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_-25%,#0c1c31_0%,#070b13_45%,#05070d_100%)]" />
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -left-32 top-[18%] h-96 w-96 animate-drift rounded-full bg-accent/10 blur-[110px]" />
      <div
        className="absolute -right-28 top-[58%] h-[28rem] w-[28rem] animate-drift rounded-full bg-glow/10 blur-[120px]"
        style={{ animationDelay: "4s", animationDuration: "22s" }}
      />
      <div
        className="absolute left-1/3 top-[78%] h-72 w-72 animate-drift rounded-full bg-[#7c3aed]/10 blur-[110px]"
        style={{ animationDelay: "9s", animationDuration: "26s" }}
      />
    </div>
  )
}
