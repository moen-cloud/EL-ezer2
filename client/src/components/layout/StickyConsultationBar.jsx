import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { siteConfig } from '../../data/site'

export default function StickyConsultationBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-ink/10 bg-white/95 p-3 backdrop-blur sm:hidden">
      <a
        href={siteConfig.phoneHref}
        aria-label="Call us"
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-ink/10 text-ink"
      >
        <Phone className="h-5 w-5" />
      </a>
      <Link to="/contact" className="btn-primary w-full">
        Book a Free Consultation
      </Link>
    </div>
  )
}
