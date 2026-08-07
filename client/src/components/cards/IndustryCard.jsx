import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Icon from '../ui/Icon'
import { cardTransition } from '../../lib/motion'

export default function IndustryCard({ industry, index }) {
  return (
    <motion.div {...cardTransition(index)} className="group rounded-2xl border border-ink/10 bg-white p-8 shadow-card transition-all hover:border-emerald/30 hover:shadow-lift">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
        <Icon name={industry.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-heading text-xl font-bold text-ink">{industry.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{industry.summary}</p>
      <Link
        to={`/industries/${industry.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-dark hover:text-emerald"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
