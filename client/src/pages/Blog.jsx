import { useState } from 'react'
import { Search } from 'lucide-react'
import { blogPosts, blogCategories } from '../data/blogPosts'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import BlogCard from '../components/cards/BlogCard'
import NewsletterForm from '../components/ui/NewsletterForm'
import { pageHeroes } from '../data/pageHeroes'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    return matchesCategory && matchesQuery
  })

  return (
    <>
      <Seo
        title="Blog"
        description="Practical digital marketing insight on SEO, paid advertising, content marketing, and automation from the EL EZER team."
      />
      <PageHeader
        eyebrow="Blog"
        title="Marketing insight worth your time"
        description="No fluff, no filler. Just practical thinking from the team running these strategies every day."
        breadcrumb={[{ label: 'Blog' }]}
        image={pageHeroes.blog}
      />

      <section className="py-16">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((c) => (
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
                placeholder="Search articles..."
                className="w-full rounded-full border border-ink/15 bg-white py-2.5 pl-11 pr-4 text-sm text-ink outline-none focus:border-emerald"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-ink/50">No articles match your search.</p>
          )}

          <div className="mt-16 rounded-2xl bg-ink p-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-white">Subscribe for Insights</h2>
            <p className="mx-auto mt-2 max-w-md text-white/70">
              A short, useful email whenever we publish something worth your time. Nothing more.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <NewsletterForm dark />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
