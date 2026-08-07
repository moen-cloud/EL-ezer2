import { Fragment, useState } from 'react'
import { Check, Minus } from 'lucide-react'
import { pricingPlans, pricingComparison } from '../data/pricing'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import PricingCard from '../components/cards/PricingCard'
import { pageHeroes } from '../data/pageHeroes'

function renderCell(value) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-emerald-dark" />
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-ink/20" />
  return <span className="text-xs text-ink/70">{value}</span>
}

export default function Pricing() {
  const [view, setView] = useState('packages')

  return (
    <>
      <Seo
        title="Pricing"
        description="Transparent digital marketing pricing packages from EL EZER, with custom proposals available for every business size."
      />
      <PageHeader
        eyebrow="Pricing"
        title="Straightforward packages, built to scale with you"
        description="Every package includes strategy, reporting, and a dedicated point of contact. Ad spend is always separate from management fees."
        breadcrumb={[{ label: 'Pricing' }]}
        image={pageHeroes.pricing}
      />

      <section className="py-16">
        <div className="container-page">
          <div className="mx-auto flex w-fit rounded-full bg-surface p-1">
            <button
              type="button"
              onClick={() => setView('packages')}
              className={`rounded-full px-5 py-2 font-heading text-sm font-medium transition-colors ${
                view === 'packages' ? 'bg-white shadow-card text-ink' : 'text-ink/50'
              }`}
            >
              Packages
            </button>
            <button
              type="button"
              onClick={() => setView('compare')}
              className={`rounded-full px-5 py-2 font-heading text-sm font-medium transition-colors ${
                view === 'compare' ? 'bg-white shadow-card text-ink' : 'text-ink/50'
              }`}
            >
              Compare Features
            </button>
          </div>

          {view === 'packages' ? (
            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {pricingPlans.map((plan, i) => (
                <PricingCard key={plan.name} plan={plan} index={i} />
              ))}
            </div>
          ) : (
            <div className="mt-12 overflow-x-auto rounded-2xl border border-ink/10">
              <table className="w-full min-w-[640px] border-collapse bg-white text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-surface">
                    <th className="p-4 text-left font-heading text-sm font-semibold text-ink">Feature</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.name} className="p-4 text-center font-heading text-sm font-semibold text-ink">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.categories.map((cat) => (
                    <Fragment key={cat.name}>
                      <tr className="bg-emerald-dark/10">
                        <td colSpan={pricingPlans.length + 1} className="px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide text-emerald-dark">
                          {cat.name}
                        </td>
                      </tr>
                      {cat.rows.map((row) => (
                        <tr key={row.label} className="border-b border-ink/5">
                          <td className="p-4 text-ink/70">{row.label}</td>
                          {row.values.map((value, i) => (
                            <td key={i} className="p-4 text-center">
                              {renderCell(value)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-16 grid gap-4 rounded-2xl border border-ink/10 bg-surface p-8 sm:grid-cols-2">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald" />
                <p className="text-sm text-ink/70">
                  <span className="font-heading font-semibold text-ink">{plan.name}</span> is best for{' '}
                  {plan.recommendedFor.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink/50">
            Not sure which package fits? A free consultation will point you to the right one.
          </p>
        </div>
      </section>
    </>
  )
}
