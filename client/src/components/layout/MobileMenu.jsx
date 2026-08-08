import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, X, Phone, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import { industries } from '../../data/industries'
import { siteConfig } from '../../data/site'

const aboutLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Story', to: '/about/story' },
  { label: 'Our Team', to: '/about/team' },
]

// Deliberately built without an animation library. The panel and backdrop
// stay permanently mounted and are moved on/off screen with plain CSS
// transitions (transform + opacity). This is intentional: it has no
// "exit animation" state to track and nothing that can get stuck, unlike
// the previous version. If it's visually open, it's interactive. If it's
// closed, it's off-screen and non-interactive. There is no third state.

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
      {/* CSS grid-rows trick: animates smoothly to the content's natural
          height without JavaScript measuring anything or needing "auto"
          keyframes, and can't get stuck mid-animation. */}
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

function MenuLink({ to, onClick, children, index }) {
  return (
    <div
      className="animate-fadeUp border-b border-white/10 opacity-0"
      style={{ animationDelay: `${150 + index * 50}ms` }}
    >
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
        }
      >
        {children}
      </NavLink>
    </div>
  )
}

export default function MobileMenu({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section))
  }

  // Lock background scroll while open, allow Escape to close, and collapse
  // any open accordion so the menu doesn't reopen mid-section next time.
  useEffect(() => {
    if (!isOpen) {
      setOpenSection(null)
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop — always mounted, faded and click-through when closed */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[59] bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panel — always mounted, slides fully off-screen when closed */}
      <div
        style={{ height: '100dvh' }}
        className={`fixed inset-y-0 right-0 z-[60] flex w-full flex-col bg-ink transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        aria-label="Site navigation"
      >
        <div className="flex shrink-0 items-center justify-between px-6 py-5">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald font-heading text-lg font-bold text-white">
              E
            </span>
            <span className="font-heading text-lg font-bold text-white">EL EZER</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto px-6">
          <MenuLink to="/" onClick={onClose} index={0}>
            Home
          </MenuLink>

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
                  onClick={onClose}
                  className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {service.shortName}
                </Link>
              ))}
            </div>
            <Link
              to="/services"
              onClick={onClose}
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
                  onClick={onClose}
                  className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </AccordionRow>

          <MenuLink to="/portfolio" onClick={onClose} index={1}>
            Portfolio
          </MenuLink>
          <MenuLink to="/pricing" onClick={onClose} index={2}>
            Pricing
          </MenuLink>
          <MenuLink to="/blog" onClick={onClose} index={3}>
            Blog
          </MenuLink>

          <AccordionRow
            label="About"
            isOpen={openSection === 'about'}
            onToggle={() => toggleSection('about')}
          >
            {aboutLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </AccordionRow>

          <MenuLink to="/contact" onClick={onClose} index={4}>
            Contact
          </MenuLink>
        </nav>

        <div className="flex shrink-0 flex-col gap-2 px-6 py-5">
          <Link to="/contact" onClick={onClose} className="btn-primary w-full">
            Book a Free Consultation
          </Link>
          <a
            href={siteConfig.phoneHref}
            onClick={onClose}
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