import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-emerald-dark py-20">
      <div className="absolute inset-0 bg-growth-line bg-cover bg-center opacity-40" />
      <div className="container-page relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl"
        >
          Let's talk about your growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto mt-4 max-w-xl text-white/80"
        >
          Book a free consultation and let's map out a clear, actionable plan to move the numbers that matter most to your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link to="/contact" className="btn-primary bg-white text-emerald-dark hover:bg-white/90 hover:text-emerald-dark">
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/pricing" className="btn-secondary border-white/30 bg-transparent text-white hover:border-white hover:text-white">
            Request Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
