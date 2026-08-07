import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import TeamCard from '../components/cards/TeamCard'
import { missionVisionValues } from '../data/about'
import { team } from '../data/team'
import { cld } from '../lib/cloudinary'
import { pageHeroes } from '../data/pageHeroes'
import { textReveal, imageReveal, cardTransition, viewport } from '../lib/motion'

export default function About() {
  const teamPreview = team.slice(0, 3)

  return (
    <>
      <Seo
        title="About Us"
        description="Learn about EL EZER Digital Marketing's mission, vision, and values, and the team behind our client results."
      />
      <PageHeader
        eyebrow="About Us"
        title="Marketing strategy built by people who have been on the client side too"
        description="We started EL EZER because too many small businesses were being sold tactics instead of strategy."
        breadcrumb={[{ label: 'About' }]}
        image={pageHeroes.about}
      />

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={textReveal}>
            <span className="eyebrow">Our Mission</span>
            <p className="mt-3 font-heading text-2xl font-semibold leading-snug text-ink">
              {missionVisionValues.mission}
            </p>
          </motion.div>
          <motion.div {...imageReveal} className="overflow-hidden rounded-2xl">
            <img
              src={'https://res.cloudinary.com/debhmwj73/image/upload/v1786062315/wor_ogannx.jpg'}
              alt="The EL EZER team collaborating"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Our Vision" title="Where we're headed" align="center" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink/65">{missionVisionValues.vision}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Values" title="What guides how we work" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {missionVisionValues.values.map((value, i) => (
              <motion.div
                key={value.title}
                {...cardTransition(i)}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"
              >
                <span className="font-heading text-2xl font-bold text-gold">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-base font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Meet the Team" title="The people behind the strategy" />
            <Link to="/about/team" className="btn-secondary flex-shrink-0">
              Meet Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamPreview.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page rounded-2xl bg-ink p-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-white">Want the longer version?</h2>
          <p className="mx-auto mt-2 max-w-md text-white/70">
            Read the full story of how EL EZER got started and where we&apos;re headed next.
          </p>
          <Link to="/about/story" className="btn-primary mt-6 inline-flex">
            Read Our Story
          </Link>
        </div>
      </section>
    </>
  )
}
