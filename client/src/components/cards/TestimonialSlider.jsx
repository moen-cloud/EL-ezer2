import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-card sm:p-12">
        <Quote className="h-10 w-10 text-emerald/20" />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            <div className="flex gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-6 font-heading text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              "{t.quote}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h4 className="font-heading font-bold text-ink">{t.name}</h4>
                <p className="text-sm text-ink/60">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button onClick={prev} className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-emerald hover:text-white">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={next} className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-emerald hover:text-white">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
