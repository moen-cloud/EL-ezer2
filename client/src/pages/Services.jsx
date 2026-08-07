import { useState } from 'react'
import { Search } from 'lucide-react'
import { services } from '../data/services'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import ServiceCard from '../components/cards/ServiceCard'
import { pageHeroes } from '../data/pageHeroes'

export default function Services() {
  const [query, setQuery] = useState('')

  const filtered = services.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.summary.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Seo
        title="Digital Marketing Services"
        description="Explore EL EZER's full range of digital marketing services, from SEO and paid ads to branding and marketing automation."
      />
      <PageHeader
        eyebrow="Services"
        title="Every service you need to grow, under one roof"
        description="Ten focused services, each one built to plug into a larger strategy rather than operate as a one-off tactic."
        breadcrumb={[{ label: 'Services' }]}
        image={pageHeroes.services}
      />

      <section className="py-16">
        <div className="container-page">
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full rounded-full border border-ink/15 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none focus:border-emerald"
            />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-ink/50">No services match &quot;{query}&quot;.</p>
          )}
        </div>
      </section>
    </>
  )
}
