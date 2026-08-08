import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import { industries } from '../../data/industries'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import SearchOverlay from './SearchOverlay'
import MobileMenu from './MobileMenu'

const aboutLinks = [
  { label: 'About Us', to: '/about', description: 'Our mission, vision, and values' },
  { label: 'Our Story', to: '/about/story', description: 'How EL EZER got started' },
  { label: 'Our Team', to: '/about/team', description: 'Meet the people behind the work' },
]

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-1 py-2 font-heading text-sm font-medium transition-colors ${
          isActive ? 'text-emerald-dark' : 'text-gold hover:text-emerald-dark'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-emerald"
            />
          )}
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const progress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close every menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setIndustriesOpen(false)
    setAboutOpen(false)
  }, [location.pathname])

  const closeMenus = () => {
    setServicesOpen(false)
    setIndustriesOpen(false)
    setAboutOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      {/* Scroll progress indicator */}
      <div className="h-0.5 w-full bg-emerald-dark">
        <div
          className="h-full bg-emerald transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="EL EZER Digital Marketing, homepage">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald font-heading text-lg font-bold text-white">
            E
          </span>
          <span className="font-heading text-lg font-bold leading-none text-ink">
            EL EZER
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-dark">
              Digital Marketing
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <NavItem to="/">Home</NavItem>

          {/* Services mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 px-1 py-2 font-heading text-sm font-medium text-gold hover:text-emerald-dark"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-2xl border border-ink/10 bg-white p-6 shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={closeMenus}
                        className="block rounded-xl p-3 hover:bg-emerald-dark/10"
                      >
                        <span className="block font-heading text-sm font-semibold text-gold">
                          {service.shortName}
                        </span>
                        <span className="line-clamp-1 block text-xs text-ink/50">
                          {service.summary}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    onClick={closeMenus}
                    className="mt-4 flex items-center justify-between rounded-xl bg-surface px-4 py-3 font-heading text-sm font-semibold text-emerald-dark"
                  >
                    View all services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 px-1 py-2 font-heading text-sm font-medium text-gold hover:text-emerald-dark"
              onClick={() => setIndustriesOpen((v) => !v)}
              aria-expanded={industriesOpen}
            >
              Industries
              <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-72 -translate-x-1/2 rounded-2xl border border-ink/10 bg-white p-3 shadow-2xl"
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      to={`/industries/${industry.slug}`}
                      onClick={closeMenus}
                      className="block rounded-xl p-2.5 hover:bg-emerald-dark/10"
                    >
                      <span className="font-heading text-sm font-medium text-gold">{industry.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>

          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 px-1 py-2 font-heading text-sm font-medium text-gold hover:text-emerald-dark"
              onClick={() => setAboutOpen((v) => !v)}
              aria-expanded={aboutOpen}
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-2xl border border-ink/10 bg-white p-3 shadow-2xl"
                >
                  {aboutLinks.map((link) => (
                    <Link key={link.to} to={link.to} onClick={closeMenus} className="block rounded-xl p-2.5 hover:bg-emerald-dark/10">
                      <span className="block font-heading text-sm font-medium text-gold">{link.label}</span>
                      <span className="block text-xs text-ink/50">{link.description}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/60 hover:bg-surface hover:text-ink sm:flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link to="/contact" className="btn-primary hidden lg:inline-flex">
            Book a Free Consultation
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}