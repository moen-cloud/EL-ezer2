import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ eyebrow, title, description, breadcrumb = [], image }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/5 bg-ink py-16 sm:py-20">
      {image && (
        <div className="absolute inset-0">
          <motion.img
            src={image}
            alt=""
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink" />
        </div>
      )}

      <div className="container-page relative">
        {breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {eyebrow && <span className="eyebrow text-gold">{eyebrow}</span>}
          <h1 className="mt-3 max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
