import { useForm } from 'react-hook-form'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { useFormspree } from '../hooks/useFormspree'

const budgetRanges = ['Under $1,000/month', '$1,000 – $3,000/month', '$3,000 – $10,000/month', '$10,000+/month', 'Not sure yet']
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { submit, status, error } = useFormspree(import.meta.env.VITE_FORMSPREE_CONTACT_ID)

  async function onSubmit(data) {
    const result = await submit(data)
    if (result.ok) reset()
  }

  const inputClass =
    'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-emerald'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="h-10 w-10 text-emerald" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          Thank you for reaching out. A member of our team will get back to you within one
          business day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-10"
    >
      <h3 className="font-heading text-xl font-semibold text-ink">Let's talk about your business</h3>
      <p className="mt-2 text-sm text-ink/60">
        Share a few details below, and we'll reach out to discuss how we can help you grow. No pressure, no obligations.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            What should we call you?
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName', { required: 'Your name is required' })}
            className={`${inputClass} ${errors.fullName ? 'border-red-400' : 'border-ink/15'}`}
            placeholder="Jane Doe"
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="companyName" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Where do you work?
          </label>
          <input
            id="companyName"
            type="text"
            {...register('companyName', { required: 'Company name is required' })}
            className={`${inputClass} ${errors.companyName ? 'border-red-400' : 'border-ink/15'}`}
            placeholder="Your Business LLC"
          />
          {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Where can we email you?
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
            })}
            className={`${inputClass} ${errors.email ? 'border-red-400' : 'border-ink/15'}`}
            placeholder="jane@yourbusiness.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            className={`${inputClass} ${errors.phone ? 'border-red-400' : 'border-ink/15'}`}
            placeholder="(555) 019-2837"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Service Required
          </label>
          <select
            id="service"
            {...register('service', { required: true })}
            className={`${inputClass} border-ink/15`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="industry" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Industry
          </label>
          <select
            id="industry"
            {...register('industry', { required: true })}
            className={`${inputClass} border-ink/15`}
            defaultValue=""
          >
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((i) => (
              <option key={i.slug} value={i.name}>
                {i.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Monthly Budget
          </label>
          <select
            id="budget"
            {...register('budget', { required: true })}
            className={`${inputClass} border-ink/15`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="goal" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Marketing Goal
          </label>
          <input
            id="goal"
            type="text"
            {...register('goal', { required: 'Let us know your main goal' })}
            className={`${inputClass} ${errors.goal ? 'border-red-400' : 'border-ink/15'}`}
            placeholder="e.g. More qualified leads"
          />
          {errors.goal && <p className="mt-1 text-xs text-red-500">{errors.goal.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-1.5 block font-heading text-sm font-medium text-ink">
            Project Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register('description', { required: 'A short description helps us prepare' })}
            className={`${inputClass} resize-none ${errors.description ? 'border-red-400' : 'border-ink/15'}`}
            placeholder="Tell us a bit about your business and what you're hoping to achieve."
          />
          {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
        </div>
      </div>

      {status === 'error' && <p className="mt-4 text-sm text-red-500">{error}</p>}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
