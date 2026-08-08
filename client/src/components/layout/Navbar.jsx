import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ChevronDown, ArrowRight, Phone } from 'lucide-react'
import { services } from '../../data/services'
import { industries } from '../../data/industries'
import { siteConfig } from '../../data/site'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import SearchOverlay from './SearchOverlay'

const aboutLinks = [
  { label: 'About Us', to: '/about', description: 'Our mission, vision, and values' },
  { label: 'Our Story', to: '/about/story', description: 'How EL EZER got started' },
  { label: 'Our Team', to: '/about/team', description: 'Meet the people behind the work' },
]

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
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

// ---- Mobile menu (full-screen panel with accordion dropdowns) ----

const panelVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { x: '100%', transition: { duration: 0.3, ease: 'easeIn' } },
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function MobileAccordionRow({ label, isOpen, onToggle, children }) {
  return (
    <motion.div variants={itemVariants} className="border-b border-white/10">
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
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function MobileMenuPanel({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section))
  }

  useEffect(() => {
    if (!isOpen) return
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

  useEffect(() => {
    if (!isOpen) setOpenSection(null)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            className="fixed inset-0 z-[59] bg-black/60 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, height: '100dvh' }}
            className="z-[60] flex flex-col bg-ink lg:hidden"
            role="dialog"
            aria-modal="true"
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

            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="min-h-0 flex-1 overflow-y-auto px-6"
            >
              <motion.div variants={itemVariants} className="border-b border-white/10">
                <NavLink
                  to="/"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
                  }
                >
                  Home
                </NavLink>
              </motion.div>

              <MobileAccordionRow
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
              </MobileAccordionRow>

              <MobileAccordionRow
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
              </MobileAccordionRow>

              <motion.div variants={itemVariants} className="border-b border-white/10">
                <NavLink
                  to="/portfolio"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
                  }
                >
                  Portfolio
                </NavLink>
              </motion.div>

              <motion.div variants={itemVariants} className="border-b border-white/10">
                <NavLink
                  to="/pricing"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
                  }
                >
                  Pricing
                </NavLink>
              </motion.div>

              <motion.div variants={itemVariants} className="border-b border-white/10">
                <NavLink
                  to="/blog"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
                  }
                >
                  Blog
                </NavLink>
              </motion.div>

              <MobileAccordionRow
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
              </MobileAccordionRow>

              <motion.div variants={itemVariants} className="border-b border-white/10">
                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-4 font-heading text-base font-medium ${isActive ? 'text-emerald' : 'text-gold'}`
                  }
                >
                  Contact
                </NavLink>
              </motion.div>
            </motion.nav>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex shrink-0 flex-col gap-2 px-6 py-5"
            >
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
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ---- Navbar ----

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

      <MobileMenuPanel isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}