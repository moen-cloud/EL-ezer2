import { cld } from '../lib/cloudinary'

export const industries = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: 'Home',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786064093/reeal_estate.jpg',
    summary: 'Listing campaigns, agent branding, and lead capture built for how people actually shop for property today.',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'HeartPulse',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786063453/healthcare.jpg',
    summary: 'Patient acquisition marketing that respects compliance requirements without slowing down growth.',
  },
  {
    slug: 'law-firms',
    name: 'Law Firms',
    icon: 'Scale',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785802283/Law_Firms.jpg',
    summary: 'Case-driven content and local search strategy that builds trust before the first consultation call.',
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: 'HardHat',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785802650/construction.jpg',
    summary: 'Local visibility and project-based lead generation for contractors and construction firms.',
  },
  {
    slug: 'e-commerce',
    name: 'E-Commerce',
    icon: 'ShoppingCart',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785803000/e-commerce.jpg',
    summary: 'Full-funnel paid and lifecycle marketing built around revenue per customer, not just traffic.',
  },
  {
    slug: 'education',
    name: 'Education',
    icon: 'GraduationCap',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785803300/education.jpg',
    summary: 'Enrollment marketing for schools and training providers, from awareness through application.',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: 'UtensilsCrossed',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786063285/Hospitality.jpg',
    summary: 'Bookings and covers driven through local search, social proof, and seasonal campaigns.',
  },
  {
    slug: 'finance',
    name: 'Finance',
    icon: 'Landmark',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786064216/Finance.jpg',
    summary: 'Trust-building content and compliant lead generation for financial services brands.',
  },
  {
    slug: 'ngos',
    name: 'NGOs',
    icon: 'HandHeart',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786064943/NGOs.jpg',
    summary: 'Donor acquisition and awareness campaigns built around measurable social impact.',
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: 'Cpu',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786064800/Technology.jpg',
    summary: 'Demand generation for software and technology companies, from first touch to demo booked.',
  },
]

export const getIndustryBySlug = (slug) => industries.find((i) => i.slug === slug)
