import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardTransition } from '../../lib/motion'

export default function PricingCard({ plan, index = 0 }) {
  return (
    <motion.div
      {...cardTransition(index)}
      className={`relative flex flex-col rounded-2xl border p-7 ${
        plan.highlighted
          ? 'border-emerald bg-ink text-white shadow-lift lg:-translate-y-3'
          : 'border-ink/10 bg-white text-ink shadow-card'
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-heading text-xs font-semibold text-ink">
          Most Popular
        </span>
      )}

      <h3 className={`font-heading text-lg font-semibold ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
        {plan.name}
      </h3>
      <p className={`mt-2 text-sm leading-relaxed ${plan.highlighted ? 'text-white/70' : 'text-ink/60'}`}>
        {plan.description}
      </p>

      <div className="mt-5">
        {plan.price ? (
          <p className="font-heading text-4xl font-bold">
            KSh {plan.price.toLocaleString()}
            <span className={`text-base font-medium ${plan.highlighted ? 'text-white/60' : 'text-ink/50'}`}>
              /{plan.period}
            </span>
          </p>
        ) : (
          <p className="font-heading text-4xl font-bold">Custom</p>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlighted ? 'text-emerald' : 'text-emerald-dark'}`} />
            <span className={plan.highlighted ? 'text-white/80' : 'text-ink/70'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`mt-7 w-full text-center ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
      >
        {plan.cta}
      </Link>
    </motion.div>
  )
}