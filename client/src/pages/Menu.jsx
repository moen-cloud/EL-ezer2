import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ChevronDown, X, Phone, ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { siteConfig } from '../data/site'
import Seo from '../components/Seo'

const aboutLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Story', to: '/about/story' },
  { label: 'Our Team', to: '/about/team' },
]

// This is a real, normal page — not an overlay. It navigates to like any
// other route (via the hamburger button in Navbar.jsx being a plain Link
// to /menu) and closes by navigating back. Deliberately avoids
// position:fixed, z-index, portals, and aria-hidden entirely, since those
// were the source of every bug the overlay version ran into.

function AccordionRow({ label, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 font-heading text-base font-medium text-gold"
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-emerald' : 'text-gold/60'
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 pb-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function Menu() {
  const [openSection, setOpenSection] = useState(null)
  const navigate = useNavigate()

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section))
  }

  return (
    <>
      <Seo title="Menu" description="Browse EL EZER Digital Marketing." />
      <div className="flex min-h-screen flex-col bg-ink lg:hidden">
        <div className="flex shrink-0 items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald font-heading text-lg font-bold text-white">
              E
            </span>
            <span className="font-heading text-lg font-bold text-white">EL EZER</span>
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 px-6">
          <div className="border-b border-white/10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
              }
            >
              Home
            </NavLink>
          </div>

          <AccordionRow
            label="Services"
            isOpen={openSection === 'services'}
            onToggle={() => toggleSection('services')}
          >
            <div className="grid grid-cols-2 gap-1">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {service.shortName}
                </Link>
              ))}
            </div>
            <Link
              to="/services"
              className="mt-2 flex items-center gap-1 px-2 py-2 text-sm font-semibold text-emerald"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AccordionRow>

          <AccordionRow
            label="Industries"
            isOpen={openSection === 'industries'}
            onToggle={() => toggleSection('industries')}
          >
            <div className="grid grid-cols-2 gap-1">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </AccordionRow>

          <div className="border-b border-white/10">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
              }
            >
              Portfolio
            </NavLink>
          </div>

          <div className="border-b border-white/10">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
              }
            >
              Pricing
            </NavLink>
          </div>

          <div className="border-b border-white/10">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
              }
            >
              Blog
            </NavLink>
          </div>

          <AccordionRow
            label="About"
            isOpen={openSection === 'about'}
            onToggle={() => toggleSection('about')}
          >
            {aboutLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </AccordionRow>

          <div className="border-b border-white/10">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>

        <div className="flex shrink-0 flex-col gap-2 px-6 py-5">
          <Link to="/contact" className="btn-primary w-full">
            Book a Free Consultation
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/15 px-5 py-2.5 font-heading text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </>
  )
}