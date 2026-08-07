import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cardTransition, imageReveal } from '../../lib/motion'

export default function PortfolioCard({ project, index }) {
  return (
    <motion.div {...cardTransition(index)} className="group relative overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          variants={imageReveal}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald">
            {project.category}
          </span>
        </div>
        <h3 className="mt-2 font-heading text-xl font-bold text-ink">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink/60">{project.summary}</p>
        <Link
          to={`/portfolio/${project.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-dark hover:text-emerald"
        >
          View Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
