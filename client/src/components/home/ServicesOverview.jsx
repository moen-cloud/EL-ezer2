import { useState } from 'react'
import { services } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../cards/ServiceCard'

const filters = ['All', 'Paid Media', 'Organic Growth', 'Brand & Automation']

const filterMap = {
  'Paid Media': ['google-ads', 'facebook-ads', 'custom-ad-campaigns'],
  'Organic Growth': ['seo', 'content-marketing', 'social-media-marketing'],
  'Brand & Automation': ['branding', 'marketing-automation', 'email-marketing', 'lead-generation'],
}

export default function ServicesOverview() {
  const [active, setActive] = useState('All')

  const visibleServices =
    active === 'All' ? services : services.filter((s) => filterMap[active]?.includes(s.slug))

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Marketing services built to move real numbers"
            description="Every service is designed to plug into a larger growth strategy, not operate as an isolated tactic."
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
                active === f ? 'bg-emerald text-white' : 'bg-surface text-ink/60 hover:bg-emerald-dark hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
