import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cardTransition } from '../../lib/motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      {...cardTransition(index)}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <h3 className="font-heading text-lg font-semibold text-ink">{service.shortName}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{service.summary}</p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1 font-heading text-sm font-semibold text-emerald-dark"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
