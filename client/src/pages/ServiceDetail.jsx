import { useParams, Navigate, Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { getServiceBySlug, services } from '../data/services'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import Accordion from '../components/ui/Accordion'
import Icon from '../components/ui/Icon'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/404" replace />

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <Seo title={service.name} description={service.summary} image={service.image} />
      <PageHeader
        eyebrow="Service"
        title={service.name}
        description={service.summary}
        breadcrumb={[{ label: 'Services', to: '/services' }, { label: service.shortName }]}
        image={service.image}
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <img
                src={service.image}
                alt={service.name}
                className="aspect-video w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-ink">Overview</h2>
              <p className="mt-3 leading-relaxed text-ink/65">{service.overview}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-ink">Benefits</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 rounded-xl bg-surface p-4 text-sm text-ink/70">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-dark" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-ink">Our Process</h2>
              <ol className="mt-4 space-y-4">
                {service.process.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-dark font-heading text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm text-ink/70">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-ink">Deliverables</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-emerald-dark p-6">
              <h2 className="font-heading text-lg font-bold text-white">Expected Results</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{service.expectedResults}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-ink">Frequently Asked Questions</h2>
              <div className="mt-4">
                <Accordion items={service.faqs} defaultOpenIndex={0} />
              </div>
            </div>
          </div>

          {/* Sticky inquiry CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <h3 className="font-heading text-lg font-semibold text-ink">
                Ready to talk about {service.shortName.toLowerCase()}?
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Book a free, no-pressure consultation and get a plan built around your business.
              </p>
              <Link to="/contact" className="btn-primary mt-5 w-full">
                Book Consultation
              </Link>
              <Link to="/pricing" className="btn-secondary mt-3 w-full">
                See Pricing
              </Link>

              <div className="mt-6 border-t border-ink/10 pt-6">
                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-ink/40">
                  Related Services
                </p>
                <div className="mt-3 space-y-1">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/services/${r.slug}`}
                      className="flex items-center justify-between rounded-xl px-2 py-2 text-sm text-ink/70 hover:bg-surface"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name={r.icon} className="h-4 w-4 text-emerald-dark" />
                        {r.shortName}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
