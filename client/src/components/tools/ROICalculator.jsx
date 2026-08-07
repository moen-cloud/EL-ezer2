import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'
import { Link } from 'react-router-dom'

const industryDefaults = {
  'Real Estate': { conversionRate: 2.5, avgValue: 8000 },
  Healthcare: { conversionRate: 4, avgValue: 600 },
  'Law Firms': { conversionRate: 3, avgValue: 2500 },
  'E-Commerce': { conversionRate: 2, avgValue: 90 },
  Other: { conversionRate: 2.5, avgValue: 500 },
}

export default function ROICalculator() {
  const [industry, setIndustry] = useState('Real Estate')
  const [visitors, setVisitors] = useState(2000)
  const [adSpend, setAdSpend] = useState(1500)

  const results = useMemo(() => {
    const { conversionRate, avgValue } = industryDefaults[industry]
    const leads = Math.round((visitors * conversionRate) / 100)
    const estimatedRevenue = Math.round(leads * avgValue * 0.2) // assumes a 20% close rate on leads
    const roas = adSpend > 0 ? (estimatedRevenue / adSpend).toFixed(1) : '—'
    const costPerLead = leads > 0 ? Math.round(adSpend / leads) : 0

    return { leads, estimatedRevenue, roas, costPerLead }
  }, [industry, visitors, adSpend])

  return (
    <div className="grid gap-8 rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2">
      <div>
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-light text-emerald-dark">
          <Calculator className="h-5 w-5" />
        </span>
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
          Estimate Your Potential ROI
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          Adjust the numbers below to see a rough estimate of leads, revenue, and return on ad
          spend based on your industry. This is a directional estimate, not a guarantee, your free
          consultation will build a version specific to your business.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label htmlFor="industry" className="mb-1.5 block font-heading text-sm font-medium text-ink">
              Industry
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-emerald"
            >
              {Object.keys(industryDefaults).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="visitors" className="mb-1.5 flex justify-between font-heading text-sm font-medium text-ink">
              <span>Monthly Website Visitors</span>
              <span className="text-emerald-dark">{visitors.toLocaleString()}</span>
            </label>
            <input
              id="visitors"
              type="range"
              min="200"
              max="20000"
              step="100"
              value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full accent-emerald"
            />
          </div>

          <div>
            <label htmlFor="adSpend" className="mb-1.5 flex justify-between font-heading text-sm font-medium text-ink">
              <span>Monthly Ad Spend</span>
              <span className="text-emerald-dark">${adSpend.toLocaleString()}</span>
            </label>
            <input
              id="adSpend"
              type="range"
              min="0"
              max="10000"
              step="100"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full accent-emerald"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-white sm:p-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Estimated Leads / Month</p>
            <p className="mt-1 font-heading text-3xl font-bold text-emerald">{results.leads}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Cost per Lead</p>
            <p className="mt-1 font-heading text-3xl font-bold">${results.costPerLead}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Estimated Revenue</p>
            <p className="mt-1 font-heading text-3xl font-bold text-emerald">
              ${results.estimatedRevenue.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Estimated ROAS</p>
            <p className="mt-1 font-heading text-3xl font-bold">{results.roas}x</p>
          </div>
        </div>

        <Link to="/contact" className="btn-primary mt-8 w-full">
          Get My Accurate Growth Plan
        </Link>
      </div>
    </div>
  )
}
