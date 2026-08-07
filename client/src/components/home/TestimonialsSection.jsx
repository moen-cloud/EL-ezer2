import SectionHeading from '../ui/SectionHeading'
import TestimonialSlider from '../cards/TestimonialSlider'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client Voices"
          title="Don't take our word for it"
          align="center"
        />
        <div className="mt-12">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}
