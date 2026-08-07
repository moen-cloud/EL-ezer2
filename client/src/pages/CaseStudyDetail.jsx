import { useParams, Navigate, Link } from 'react-router-dom'
import { Download } from 'lucide-react'
import { getCaseStudyBySlug } from '../data/caseStudies'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'

const sections = [
  { key: 'clientOverview', label: 'Client Overview' },
  { key: 'challenge', label: 'Challenge' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'execution', label: 'Execution' },
  { key: 'results', label: 'Results' },
  { key: 'lessonsLearned', label: 'Lessons Learned' },
]

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) return <Navigate to="/404" replace />

  return (
    <>
      <Seo title={caseStudy.title} description={caseStudy.excerpt} image={caseStudy.image} />
      <PageHeader
        eyebrow={caseStudy.industry}
        title={caseStudy.title}
        breadcrumb={[{ label: 'Case Studies', to: '/case-studies' }, { label: caseStudy.client }]}
        image={caseStudy.image}
      />

      <section className="py-16 print:py-0">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
            <p className="text-sm text-ink/50">Client: {caseStudy.client}</p>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-secondary"
            >
              <Download className="h-4 w-4" />
              Download Summary (PDF)
            </button>
          </div>

          <img
            src={caseStudy.image}
            alt={caseStudy.client}
            className="mt-6 aspect-video w-full rounded-2xl object-cover print:rounded-none"
            loading="lazy"
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              {sections.map(({ key, label }) => (
                <div key={key}>
                  <h2 className="font-heading text-xl font-bold text-ink">{label}</h2>
                  <p className="mt-2 leading-relaxed text-ink/65">{caseStudy[key]}</p>
                </div>
              ))}
            </div>

            <aside className="print:hidden">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-ink/40">
                  Results at a Glance
                </p>
                <div className="mt-4 space-y-4">
                  {caseStudy.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-heading text-2xl font-bold text-emerald-dark">{m.value}</p>
                      <p className="text-xs text-ink/50">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary mt-6 w-full">
                  Schedule Consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
