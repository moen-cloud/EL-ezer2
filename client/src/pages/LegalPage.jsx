import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import { pageHeroes } from '../data/pageHeroes'

export default function LegalPage({ title, updated, sections }) {
  return (
    <>
      <Seo title={title} description={`${title} for EL EZER Digital Marketing.`} />
      <PageHeader eyebrow="Legal" title={title} breadcrumb={[{ label: title }]} image={pageHeroes.legal} />

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <p className="text-sm text-ink/50">Last updated: {updated}</p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-lg font-semibold text-ink">{section.heading}</h2>
                <p className="mt-2 leading-relaxed text-ink/65">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-surface p-6 text-sm text-ink/60">
            This page is a general template and is provided as a starting point only. Have it
            reviewed by a qualified attorney before publishing it to make sure it reflects your
            actual data practices and complies with the laws that apply to your business.
          </div>
        </div>
      </section>
    </>
  )
}
