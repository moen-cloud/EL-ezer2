import { useState } from 'react'
import { ClipboardCheck, CheckCircle2 } from 'lucide-react'
import { useFormspree } from '../../hooks/useFormspree'

const goals = ['More Website Traffic', 'More Leads', 'Better Rankings', 'Stronger Brand Presence']

export default function FreeAuditForm() {
  const [form, setForm] = useState({ url: '', industry: '', goal: goals[0] })
  const { submit, status, error } = useFormspree(import.meta.env.VITE_FORMSPREE_AUDIT_ID)

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await submit({ ...form, form: 'Free Marketing Audit Request' })
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="h-10 w-10 text-emerald" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">Audit request received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          We will review your site and send your free marketing audit within two business days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-10"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-light text-emerald-dark">
        <ClipboardCheck className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-heading text-xl font-semibold text-ink">Get a Free Marketing Audit</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        We will review your website and current marketing, then send back a short, specific report
        on where the easiest opportunities are.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="audit-url" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Website URL
          </label>
          <input
            id="audit-url"
            type="url"
            required
            placeholder="https://yourbusiness.com"
            value={form.url}
            onChange={(e) => update('url', e.target.value)}
            className="w-full rounded-xl border border-ink/15 px-4 py-2.5 text-sm text-ink outline-none focus:border-emerald"
          />
        </div>

        <div>
          <label htmlFor="audit-industry" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Industry
          </label>
          <input
            id="audit-industry"
            type="text"
            required
            placeholder="e.g. Real Estate, Healthcare, E-Commerce"
            value={form.industry}
            onChange={(e) => update('industry', e.target.value)}
            className="w-full rounded-xl border border-ink/15 px-4 py-2.5 text-sm text-ink outline-none focus:border-emerald"
          />
        </div>

        <div>
          <label htmlFor="audit-goal" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Primary Goal
          </label>
          <select
            id="audit-goal"
            value={form.goal}
            onChange={(e) => update('goal', e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-emerald"
          >
            {goals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>
      </div>

      {status === 'error' && <p className="mt-3 text-sm text-red-500">{error}</p>}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full">
        {status === 'submitting' ? 'Sending…' : 'Get Free Audit'}
      </button>
    </form>
  )
}
