import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import { companyTimeline } from '../data/about'
import { pageHeroes } from '../data/pageHeroes'

export default function OurStory() {
  return (
    <>
      <Seo
        title="Our Story"
        description="How EL EZER Digital Marketing grew from a two-person consultancy into a full-service growth marketing agency."
      />
      <PageHeader
        eyebrow="Our Story"
        title="From a two-person consultancy to a full growth team"
        breadcrumb={[{ label: 'About', to: '/about' }, { label: 'Our Story' }]}
        image={pageHeroes.ourStory}
      />

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <p className="leading-relaxed text-ink/65">
            EL EZER started with a simple observation: small businesses were being sold disconnected
            tactics, a boosted post here, a batch of ads there, without any strategy tying it
            together. We built EL EZER to fix that, treating every channel as part of one connected
            growth plan rather than a menu of unrelated services.
          </p>
        </div>

        <div className="container-page mt-16 max-w-3xl">
          <div className="relative border-l-2 border-emerald-dark pl-8">
            {companyTimeline.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[2.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-emerald ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="eyebrow">{milestone.year}</span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-ink">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container-page mt-8 max-w-3xl rounded-2xl bg-emerald-dark p-8">
          <h2 className="font-heading text-xl font-bold text-white">
            Founded on a simple idea
          </h2>
          <p className="mt-2 leading-relaxed text-white/80">
            Our founder, Eleanor Ezer, spent a decade inside in-house marketing teams before starting
            EL EZER, watching good businesses lose ground to competitors with weaker products but
            stronger marketing. That gap is still what we spend every day trying to close for our
            clients.
          </p>
        </div>

        <div className="container-page mt-16 text-center">
          <h2 className="font-heading text-2xl font-bold text-ink">Start your own growth journey</h2>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
