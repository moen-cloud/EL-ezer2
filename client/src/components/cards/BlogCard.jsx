import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cardTransition } from '../../lib/motion'
import { formatDate } from '../../lib/format'

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.div
      {...cardTransition(index)}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-ink/50">
            <span className="rounded-full bg-emerald-dark px-2.5 py-1 font-semibold text-white">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-ink">{post.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  )
}
