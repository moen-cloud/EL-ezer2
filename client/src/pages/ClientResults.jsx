import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, Share2, BarChart3, Target } from 'lucide-react'
import { clientResultsSummary, clientResultsSeries, beforeAfterExamples } from '../data/clientResults'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import GrowthChart from '../components/ui/GrowthChart'
import StatCounter from '../components/ui/StatCounter'
import { cardTransition, imageReveal } from '../lib/motion'
import { pageHeroes } from '../data/pageHeroes'

const iconMap = { TrendingUp, Share2, BarChart3, Target }
const industries = ['All', ...new Set(clientResultsSeries.map((s) => s.industry))]

export default function ClientResults() {
  const [industry, setIndustry] = useState('All')

  const filteredSeries =
    industry === 'All' ? clientResultsSeries : clientResultsSeries.filter((s) => s.industry === industry)

  return (
    <>
      <Seo
        title="Client Results"
        description="Real, measurable growth across leads, traffic, social reach, and return on ad spend."
      />
      <PageHeader
        eyebrow="Client Results"
        title="The numbers behind the work"
        description="A live look at the kind of growth our clients see across lead volume, traffic, and paid media efficiency."
        breadcrumb={[{ label: 'Client Results' }]}
        image={pageHeroes.clientResults}
      />

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clientResultsSummary.map((stat, i) => {
              const StatIcon = iconMap[stat.icon]
              return (
                <motion.div
                  key={stat.label}
                  {...cardTransition(i)}
                  className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
                >
                  <StatIcon className="h-6 w-6 text-emerald-dark" />
                  <p className="mt-4 font-heading text-3xl font-bold text-ink">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-ink/50">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {industries.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndustry(i)}
                className={`rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
                  industry === i ? 'bg-emerald text-white' : 'bg-surface text-ink/60 hover:bg-emerald-dark hover:text-white'
                }`}
              >
                {i}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {filteredSeries.map((series, i) => (
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

          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-ink">Before and After</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
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

          <div className="mt-16 rounded-2xl bg-ink p-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-white">
              Let&apos;s Achieve Similar Results
            </h2>
            <Link to="/contact" className="btn-primary mt-6 inline-flex">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
