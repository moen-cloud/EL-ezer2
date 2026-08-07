import { useParams, Navigate, Link } from 'react-router-dom'
import { getPostBySlug, blogPosts } from '../data/blogPosts'
import { formatDate } from '../lib/format'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import BlogCard from '../components/cards/BlogCard'
import NewsletterForm from '../components/ui/NewsletterForm'

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-8 font-heading text-2xl font-bold text-ink">{block.text}</h2>
    case 'list':
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-ink/70">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'p':
    default:
      return <p className="mt-4 leading-relaxed text-ink/70">{block.text}</p>
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/404" replace />

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)
  const relatedFallback = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} image={post.image} />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        breadcrumb={[{ label: 'Blog', to: '/blog' }, { label: post.title }]}
        image={post.image}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="flex items-center gap-3 text-sm text-ink/50">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="mt-6 aspect-video w-full rounded-2xl object-cover"
              loading="lazy"
            />

            <div className="mt-8">
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-ink/10 pt-6">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-surface px-3 py-1 text-xs text-ink/60">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <h3 className="font-heading text-sm font-semibold text-ink">Get insights like this monthly</h3>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold text-ink">Related Articles</h3>
              <div className="mt-4 space-y-4">
                {relatedFallback.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="flex gap-3 rounded-xl hover:bg-surface">
                    <img src={p.image} alt={p.title} className="h-16 w-16 flex-shrink-0 rounded-lg object-cover" loading="lazy" />
                    <div>
                      <p className="line-clamp-2 font-heading text-sm font-medium text-ink">{p.title}</p>
                      <p className="mt-1 text-xs text-ink/40">{formatDate(p.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="container-page mt-16">
          <h2 className="font-heading text-xl font-bold text-ink">More from the blog</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedFallback.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
