import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GrowthChart from '../ui/GrowthChart'
import StatCounter from '../ui/StatCounter'
import { cardTransition, imageReveal } from '../../lib/motion'
import { clientResultsSeries, beforeAfterExamples } from '../../data/clientResults'

export default function ClientResultsSection() {
  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Client Results"
            title="What growth actually looks like, month over month"
            description="A sample of indexed growth curves from active client engagements."
          />
          <Link to="/client-results" className="btn-secondary flex-shrink-0">
            See All Results
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {clientResultsSeries.map((series, i) => (
            <motion.div
              key={series.client}
              {...cardTransition(i)}
              className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
            >
              <span className="eyebrow">{series.industry}</span>
              <h3 className="mt-1 font-heading text-base font-semibold text-ink">{series.client}</h3>
              <p className="text-xs text-ink/50">{series.metric}, indexed from 100</p>
              <motion.div {...imageReveal} className="mt-4">
                <GrowthChart data={series.data} />
              </motion.div>
              <p className="mt-2 text-right font-heading text-lg font-bold text-emerald-dark">
                +<StatCounter value={Math.round(series.data.at(-1) - 100)} suffix="%" />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {beforeAfterExamples.map((ex, i) => (
            <motion.div
              key={ex.client}
              {...cardTransition(i)}
              className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
            >
              <p className="font-heading text-sm font-semibold text-ink">{ex.client}</p>
              <p className="text-xs text-ink/50">{ex.metric}</p>
              <div className="mt-4 flex items-end gap-6">
                <div>
                  <p className="text-2xl font-bold text-ink/30 line-through decoration-2">{ex.before}</p>
                  <p className="text-xs text-ink/40">Before</p>
                </div>
                <ArrowRight className="mb-4 h-4 w-4 text-ink/30" />
                <div>
                  <p className="font-heading text-3xl font-bold text-emerald-dark">
                    <StatCounter value={ex.after} />
                  </p>
                  <p className="text-xs text-ink/40">After</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
