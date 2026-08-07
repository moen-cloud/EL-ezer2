import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cardTransition } from '../../lib/motion'
import { ArrowRight } from 'lucide-react'

export default function CaseStudyCard({ caseStudy, index = 0 }) {
  return (
    <motion.div
      {...cardTransition(index)}
      className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={caseStudy.image} alt={caseStudy.client} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow">{caseStudy.industry}</span>
        <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-ink">{caseStudy.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{caseStudy.excerpt}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-ink/10 pt-4">
          {caseStudy.metrics.slice(0, 3).map((m) => (
            <div key={m.label}>
              <p className="font-heading text-base font-bold text-emerald-dark">{m.value}</p>
              <p className="text-[11px] leading-tight text-ink/50">{m.label}</p>
            </div>
          ))}
        </div>

        <Link
          to={`/case-studies/${caseStudy.slug}`}
          className="mt-5 inline-flex items-center gap-1 font-heading text-sm font-semibold text-emerald-dark"
        >
          Read Full Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
