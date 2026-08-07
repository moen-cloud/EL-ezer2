import { motion } from 'framer-motion'
import { cardTransition } from '../../lib/motion'
import SectionHeading from '../ui/SectionHeading'

const reasons = [
  {
    title: 'Strategy Tied to Revenue',
    description: 'We focus on what actually matters to your business: qualified leads and real revenue, not just vanity metrics.',
  },
  {
    title: 'Full Transparency',
    description: 'Live dashboards and honest monthly reporting, including when something is not working.',
  },
  {
    title: 'Your Dedicated Growth Partners',
    description: 'You will work with a consistent, dedicated team that truly understands your business inside and out.',
  },
  {
    title: 'Clear, Human Communication',
    description: 'No getting lost in a support queue. We answer your questions quickly, clearly, and honestly.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why EL EZER"
          title="A marketing partner that treats your growth like our own"
          light
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              {...cardTransition(i)}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-heading text-base font-semibold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
