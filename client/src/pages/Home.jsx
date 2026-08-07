import Seo from '../components/Seo'
import Hero from '../components/home/Hero'
import TrustedBy from '../components/home/TrustedBy'
import ServicesOverview from '../components/home/ServicesOverview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import ClientResultsSection from '../components/home/ClientResultsSection'
import FeaturedCaseStudies from '../components/home/FeaturedCaseStudies'
import TestimonialsSection from '../components/home/TestimonialsSection'
import BlogPreview from '../components/home/BlogPreview'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Seo 
        title="Strategic Digital Marketing Agency"
        description="Helping businesses attract customers, generate leads, and increase revenue through proven digital marketing strategies."
      />
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedPortfolio />
      <ClientResultsSection />
      <FeaturedCaseStudies />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  )
}
