import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import Accordion from '../components/ui/Accordion'
import { faqCategories } from '../data/faqs'
import { pageHeroes } from '../data/pageHeroes'

export default function FAQ() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categoryNames = ['All', ...faqCategories.map((c) => c.category)]

  const visibleCategories = useMemo(() => {
    return faqCategories
      .filter((c) => category === 'All' || c.category === category)
      .map((c) => ({
        ...c,
        faqs: c.faqs.filter(
          (f) =>
            f.q.toLowerCase().includes(query.toLowerCase()) ||
            f.a.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((c) => c.faqs.length > 0)
  }, [query, category])

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about working with EL EZER Digital Marketing, from pricing to reporting."
      />
      <PageHeader
        eyebrow="FAQ"
        title="Answers to what people usually ask before starting"
        breadcrumb={[{ label: 'FAQ' }]}
        image={pageHeroes.faq}
      />

      <section className="py-16">
        <div className="container-page mx-auto max-w-3xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a question..."
              className="w-full rounded-full border border-ink/15 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none focus:border-emerald"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categoryNames.map((c) => (
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

          <div className="mt-10 space-y-10">
            {visibleCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="mb-4 font-heading text-lg font-semibold text-ink">{cat.category}</h2>
                <Accordion items={cat.faqs} />
              </div>
            ))}

            {visibleCategories.length === 0 && (
              <p className="text-center text-ink/50">No questions match &quot;{query}&quot;.</p>
            )}
          </div>

          <div className="mt-16 rounded-2xl bg-surface p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-ink">Still Have Questions?</h2>
            <p className="mt-2 text-sm text-ink/60">We&apos;re happy to walk through anything in more detail.</p>
            <Link to="/contact" className="btn-primary mt-5 inline-flex">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
