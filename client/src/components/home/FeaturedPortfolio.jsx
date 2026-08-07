import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import PortfolioCard from '../cards/PortfolioCard'
import { portfolioProjects as portfolio } from '../../data/portfolio'

export default function FeaturedPortfolio() {
  const featuredProjects = portfolio.slice(0, 3)

  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Projects that delivered measurable impact"
            description="A selection of recent work where strategy and execution came together to drive real business results."
          />
          <Link to="/portfolio" className="btn-ghost hidden sm:flex">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <PortfolioCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link to="/portfolio" className="btn-primary w-full">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
