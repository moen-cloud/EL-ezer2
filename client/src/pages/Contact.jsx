import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import ContactForm from '../components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us" description="Get in touch with our team to discuss your growth strategy." />
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's start a conversation about your growth"
        description="Whether you have a specific project in mind or just want to explore what's possible, we're here to help."
      />
      <section className="py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink">Contact Information</h2>
            <p className="mt-4 text-ink/60">
              Reach out via any of the channels below. We typically respond within one business day.
            </p>
            
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink">Phone</h3>
                  <a href={siteConfig.phoneHref} className="mt-1 block text-ink/60 hover:text-emerald">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-ink/60 hover:text-emerald">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink">Office</h3>
                  <p className="mt-1 text-ink/60">{siteConfig.address}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink">Hours</h3>
                  <p className="mt-1 text-ink/60">{siteConfig.hours}</p>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  )
}
