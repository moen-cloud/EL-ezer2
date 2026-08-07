import { useParams, Navigate, Link } from 'react-router-dom'
import { getIndustryBySlug } from '../data/industries'
import { testimonials } from '../data/testimonials'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import TestimonialSlider from '../components/cards/TestimonialSlider'
import SectionHeading from '../components/ui/SectionHeading'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = getIndustryBySlug(slug)

  if (!industry) return <Navigate to="/404" replace />

  return (
    <>
      <Seo title={`${industry.name} Marketing`} description={industry.summary} image={industry.image} />
      <PageHeader
        eyebrow="Industry"
        title={`Digital Marketing for ${industry.name}`}
        description={industry.summary}
        breadcrumb={[{ label: 'Industries', to: '/industries' }, { label: industry.name }]}
        image={industry.image}
      />

      <section className="py-16">
        <div className="container-page">
          <img
            src={industry.image}
            alt={industry.name}
            className="aspect-[21/9] w-full rounded-2xl object-cover"
            loading="lazy"
          />

          <div className="mt-16">
            <SectionHeading eyebrow="What Clients Say" title="Trusted across the industry" align="center" />
            <div className="mt-10">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-emerald-dark p-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-white">
              Let&apos;s build a {industry.name.toLowerCase()} growth plan
            </h2>
            <p className="mx-auto mt-2 max-w-md text-white/80">
              Book a free consultation focused specifically on your industry and goals.
            </p>
            <Link
              to="/contact"
              className="btn-primary mt-6 inline-flex bg-white text-emerald-dark hover:bg-white/90"
            >
              Request Industry Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}