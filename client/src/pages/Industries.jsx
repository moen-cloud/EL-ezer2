import { industries } from '../data/industries'
import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import IndustryCard from '../components/cards/IndustryCard'
import { pageHeroes } from '../data/pageHeroes'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="EL EZER builds tailored digital marketing strategies for real estate, healthcare, law firms, e-commerce, and more."
      />
      <PageHeader
        eyebrow="Industries"
        title="Marketing built around how your industry actually sells"
        description="Every industry has a different buying process. We tailor strategy, content, and channels to match yours."
        breadcrumb={[{ label: 'Industries' }]}
        image={pageHeroes.industries}
      />

      <section className="py-16">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.slug} industry={industry} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
