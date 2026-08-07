import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '../../data/caseStudies'
import SectionHeading from '../ui/SectionHeading'
import CaseStudyCard from '../cards/CaseStudyCard'

export default function FeaturedCaseStudies() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Case Studies"
            title="The strategy behind the results"
            description="Full breakdowns of how we approached each engagement, from challenge to measurable outcome."
          />
          <Link to="/case-studies" className="btn-secondary flex-shrink-0">
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
