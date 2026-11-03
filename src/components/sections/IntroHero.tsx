import MetroHero from "@/components/ui/scroll-locked-video-hero"
import { intro } from "@/data/portfolio"

/**
 * Entry sequence: the scroll-locked video hero from the prompt.
 * Scrolling scrubs the video; once it finishes and the visitor keeps
 * pushing forward, the page unlocks and the portfolio continues below.
 */
export default function IntroHero() {
  return (
    <MetroHero
      title={intro.title}
      scrollHint={intro.scrollHint}
      tagline={intro.tagline}
      signature={intro.signature}
      scrubDistance={intro.scrubDistance}
    />
  )
}
