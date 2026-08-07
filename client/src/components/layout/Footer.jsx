import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { services } from '../../data/services'
import NewsletterForm from '../ui/NewsletterForm'

const footerServiceLinks = services.slice(0, 6)

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Story', to: '/about/story' },
  { label: 'Our Team', to: '/about/team' },
  { label: 'Industries', to: '/industries' },
]

const resourceLinks = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faq' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
]

const socialLinks = [
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.social.x, label: 'X' },
  { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald font-heading text-lg font-bold text-white">
              E
            </span>
            <span className="font-heading text-lg font-bold text-white">EL EZER</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {siteConfig.tagline}. Partnering with businesses to build marketing systems that drive real growth, not just impressions.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-emerald" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-emerald" /> {siteConfig.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald" /> {siteConfig.address}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald" /> {siteConfig.hours}
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: SocialIcon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-emerald"
              >
                <SocialIcon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServiceLinks.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-semibold text-emerald hover:text-gold">
                All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-heading text-sm font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {resourceLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-white">Stay in the loop</h3>
          <p className="mt-4 text-sm">
            Monthly marketing insights, no spam. Unsubscribe whenever you like.
          </p>
          <div className="mt-4">
            <NewsletterForm dark />
          </div>
          <Link to="/pricing" className="btn-primary mt-6 w-full">
            Request Custom Proposal
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} EL EZER Digital Marketing. All rights reserved.</p>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}