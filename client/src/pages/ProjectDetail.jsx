import { useParams, Navigate, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/portfolio'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/404" replace />

  return (
    <>
      <Seo title={project.title} description={project.challenge} image={project.image} />
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        breadcrumb={[{ label: 'Portfolio', to: '/portfolio' }, { label: project.title }]}
        image={project.image}
      />

      <section className="py-16">
        <div className="container-page">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full rounded-2xl object-cover"
            loading="lazy"
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="font-heading text-xl font-bold text-ink">The Challenge</h2>
                <p className="mt-2 leading-relaxed text-ink/65">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-ink">The Solution</h2>
                <p className="mt-2 leading-relaxed text-ink/65">{project.solution}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-ink">The Results</h2>
                <p className="mt-2 leading-relaxed text-ink/65">{project.results}</p>
              </div>
            </div>

            <aside>
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-ink/40">
                  Services Used
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.services.map((s) => (
                    <span key={s} className="rounded-full bg-emerald-dark px-3 py-1 text-xs font-medium text-white">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-4 border-t border-ink/10 pt-6">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-heading text-2xl font-bold text-emerald-dark">{m.value}</p>
                      <p className="text-xs text-ink/50">{m.label}</p>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-primary mt-6 w-full">
                  Start Your Project
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
