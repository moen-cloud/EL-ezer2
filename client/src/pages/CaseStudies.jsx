import { useState } from 'react'
import { Search } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import CaseStudyCard from '../components/cards/CaseStudyCard'
import { pageHeroes } from '../data/pageHeroes'

const industries = ['All', ...new Set(caseStudies.map((c) => c.industry))]

export default function CaseStudies() {
  const [query, setQuery] = useState('')
  const [industry, setIndustry] = useState('All')

  const filtered = caseStudies.filter((c) => {
    const matchesIndustry = industry === 'All' || c.industry === industry
    const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase())
    return matchesIndustry && matchesQuery
  })

  return (
    <>
      <Seo
        title="Case Studies"
        description="In-depth case studies showing the strategy and results behind EL EZER's client work."
      />
      <PageHeader
        eyebrow="Case Studies"
        title="Full breakdowns, not just highlight reels"
        description="Every case study covers the real challenge, the strategy we used, and the results that followed."
        breadcrumb={[{ label: 'Case Studies' }]}
        image={pageHeroes.caseStudies}
      />

      <section className="py-16">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
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
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search case studies..."
                className="w-full rounded-full border border-ink/15 bg-white py-2.5 pl-11 pr-4 text-sm text-ink outline-none focus:border-emerald"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {filtered.map((cs, i) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-ink/50">No case studies match your filters.</p>
          )}
        </div>
      </section>
    </>
  )
}
