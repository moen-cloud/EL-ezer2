import { motion } from 'framer-motion'
import { textReveal, viewport } from '../../lib/motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={textReveal}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-gold' : ''}`}>{eyebrow}</span>
      )}
      <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/80' : 'text-ink/60'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
