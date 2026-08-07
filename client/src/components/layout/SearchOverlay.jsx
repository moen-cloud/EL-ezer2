import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { services } from '../../data/services'
import { blogPosts } from '../../data/blogPosts'
import { portfolioProjects } from '../../data/portfolio'
import { industries } from '../../data/industries'

function buildSearchIndex() {
  return [
    ...services.map((s) => ({
      type: 'Service',
      title: s.name,
      description: s.summary,
      href: `/services/${s.slug}`,
    })),
    ...industries.map((i) => ({
      type: 'Industry',
      title: i.name,
      description: i.summary,
      href: `/industries/${i.slug}`,
    })),
    ...portfolioProjects.map((p) => ({
      type: 'Portfolio',
      title: p.title,
      description: p.challenge,
      href: `/portfolio/${p.slug}`,
    })),
    ...blogPosts.map((b) => ({
      type: 'Blog',
      title: b.title,
      description: b.excerpt,
      href: `/blog/${b.slug}`,
    })),
  ]
}

const SEARCH_INDEX = buildSearchIndex()

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!isOpen) setQuery('')
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return SEARCH_INDEX.filter(
      (item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
    ).slice(0, 8)
  }, [query])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-ink/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-24 w-full max-w-xl rounded-2xl bg-white p-4 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
          >
            <div className="flex items-center gap-3 border-b border-ink/10 pb-3">
              <Search className="h-5 w-5 text-ink/40" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, industries, portfolio, blog..."
                className="w-full bg-transparent font-body text-sm text-ink outline-none placeholder:text-ink/40"
              />
              <button type="button" onClick={onClose} aria-label="Close search">
                <X className="h-5 w-5 text-ink/40" />
              </button>
            </div>

            <div className="mt-3 max-h-80 overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <p className="px-2 py-6 text-center text-sm text-ink/50">
                  No results for &quot;{query}&quot;. Try a different term.
                </p>
              )}
              {results.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-3 py-3 hover:bg-emerald-dark/10"
                >
                  <span className="eyebrow text-[10px]">{item.type}</span>
                  <p className="font-heading text-sm font-semibold text-ink">{item.title}</p>
                  <p className="line-clamp-1 text-xs text-ink/50">{item.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
