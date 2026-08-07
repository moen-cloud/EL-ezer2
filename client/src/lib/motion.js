// The site uses exactly four animation types, defined once here and reused
// everywhere. Do not add new ad hoc `initial`/`whileInView` combinations in
// components — import from this file instead, so every reveal on the site
// stays visually consistent.
//
// 1. textReveal    — headings, paragraphs, eyebrows sliding up as they enter view
// 2. cardTransition — staggered card grids (services, portfolio, team, pricing...)
// 3. imageReveal    — photos and graphics scaling in as they enter view
// 4. StatCounter    — number counters (see components/ui/StatCounter.jsx)
//
// Interactive UI mechanics (dropdown menus, the mobile nav, accordions, the
// testimonial slider, the back-to-top button, the scroll progress bar) are
// intentionally left out of this system — those are functional state
// transitions, not decorative content reveals, so they keep their own
// lightweight transitions.

export const viewport = { once: true, margin: '-60px' }

// 1. Text slide-up reveal
export const textReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

// A version with a configurable delay, for sequencing multiple lines
// (e.g. eyebrow, then heading, then paragraph).
export function textRevealDelay(delay = 0) {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay } },
  }
}

// 2. Staggered card reveal — spread cards in a grid across a short delay
// based on their position, so they arrive as a wave rather than all at once.
const STAGGER_STEP = 0.12 // Adjusted for 100ms-150ms stagger delay
const STAGGER_CYCLE = 3

export function cardTransition(index = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.7, delay: (index % STAGGER_CYCLE) * STAGGER_STEP, ease: 'easeOut' },
  }
}

// 3. Image scale reveal
export const imageReveal = {
  initial: { opacity: 0, scale: 1.06 },
  whileInView: { opacity: 1, scale: 1 },
  viewport,
  transition: { duration: 0.8, ease: 'easeOut' },
}
