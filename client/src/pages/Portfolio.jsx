import { useState } from 'react'
import { Search } from 'lucide-react'
import { portfolioProjects, portfolioCategories } from '../data/portfolio'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import PortfolioCard from '../components/cards/PortfolioCard'
import { pageHeroes } from '../data/pageHeroes'

export default function Portfolio() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = portfolioProjects.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <>
      <Seo
        title="Portfolio"
        description="Browse recent digital marketing projects and results from EL EZER Digital Marketing."
      />
      <PageHeader
        eyebrow="Portfolio"
        title="Work we're proud to show"
        description="A selection of projects across industries, each one backed by real, measurable outcomes."
        breadcrumb={[{ label: 'Portfolio' }]}
        image={pageHeroes.portfolio}
      />

      <section className="py-16">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
                    category === c ? 'bg-emerald text-white' : 'bg-surface text-ink/60 hover:bg-emerald-dark hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-full border border-ink/15 bg-white py-2.5 pl-11 pr-4 text-sm text-ink outline-none focus:border-emerald"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <PortfolioCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-ink/50">No projects match your filters.</p>
          )}
        </div>
      </section>
    </>
  )
}
