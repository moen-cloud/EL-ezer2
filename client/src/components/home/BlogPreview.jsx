import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blogPosts'
import SectionHeading from '../ui/SectionHeading'
import BlogCard from '../cards/BlogCard'

export default function BlogPreview() {
  const recent = blogPosts.slice(0, 3)

  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="From the Blog"
            title="Marketing insight worth your time"
            description="Practical thinking on SEO, paid media, content, and everything in between."
          />
          <Link to="/blog" className="btn-secondary flex-shrink-0">
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
