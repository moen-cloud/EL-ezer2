import { cld } from '../lib/cloudinary'

export const portfolioProjects = [
  {
    slug: 'coastal-realty-group',
    title: 'Coastal Realty Group',
    category: 'Real Estate',
    services: ['SEO', 'Google Ads'],
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785799003/coastal-realty.jpg',
    challenge: 'Coastal Realty was invisible in local search results, relying entirely on referrals for new listings.',
    solution: 'We rebuilt their local SEO foundation and layered in geo-targeted Google Ads around high-intent listing searches.',
    results: 'Organic listing inquiries grew steadily over six months, and paid search became a predictable second channel.',
    metrics: [
      { label: 'Organic Traffic', value: '+184%' },
      { label: 'Listing Inquiries', value: '+96%' },
      { label: 'Cost per Lead', value: '-38%' },
    ],
  },
  {
    slug: 'brightpath-clinics',
    title: 'Brightpath Clinics',
    category: 'Healthcare',
    services: ['SEO', 'Content Marketing'],
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785801768/Bright-path-clinic.jpg',
    challenge: 'A multi-location clinic group needed to compete with larger healthcare networks for patient searches.',
    solution: 'We built location-specific landing pages and a content program addressing common patient questions.',
    results: 'New patient bookings from organic search became the clinic\'s fastest-growing acquisition channel.',
    metrics: [
      { label: 'New Patient Bookings', value: '+142%' },
      { label: 'Organic Rankings (Top 3)', value: '47 Keywords' },
      { label: 'Bounce Rate', value: '-29%' },
    ],
  },
  {
    slug: 'sterling-associates',
    title: 'Sterling & Associates',
    category: 'Law Firms',
    services: ['Google Ads', 'Branding'],
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785802283/Law_Firms.jpg',
    challenge: 'This litigation firm had strong casework but an outdated brand that undersold their credibility.',
    solution: 'A brand refresh paired with a tightly targeted Google Ads program focused on case-relevant search terms.',
    results: 'Consultation requests rose sharply, and the firm reported higher-quality inquiries within the first quarter.',
    metrics: [
      { label: 'Consultation Requests', value: '+210%' },
      { label: 'Cost per Lead', value: '-31%' },
      { label: 'Brand Recall (Survey)', value: '+58%' },
    ],
  },
  {
    slug: 'ironclad-builders',
    title: 'Ironclad Builders',
    category: 'Construction',
    services: ['SEO', 'Lead Generation'],
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785802650/construction.jpg',
    challenge: 'A commercial construction firm had no digital presence beyond a static, outdated website.',
    solution: 'We built a lead generation funnel around their project portfolio, paired with local SEO for service areas.',
    results: 'The firm began receiving qualified project inquiries online for the first time in company history.',
    metrics: [
      { label: 'Qualified Leads / Month', value: '34' },
      { label: 'Organic Visibility', value: '+312%' },
      { label: 'Proposal Requests', value: '+87%' },
    ],
  },
  {
    slug: 'lumen-goods',
    title: 'Lumen Goods',
    category: 'E-Commerce',
    services: ['Facebook Ads', 'Email Marketing'],
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785802839/e-commerce.jpg',
    challenge: 'A home goods brand was heavily reliant on a single acquisition channel that had grown increasingly expensive.',
    solution: 'We diversified into Meta ads with a structured creative testing process and layered in lifecycle email flows.',
    results: 'Revenue per customer increased significantly as email began capturing value that paid ads alone were missing.',
    metrics: [
      { label: 'Revenue Growth', value: '+267%' },
      { label: 'Return on Ad Spend', value: '4.1x' },
      { label: 'Email Revenue Share', value: '22%' },
    ],
  },
  {
    slug: 'westbridge-academy',
    title: 'Westbridge Academy',
    category: 'Education',
    services: ['SEO', 'Social Media Marketing'],
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785802842/education.jpg',
    challenge: 'Enrollment had plateaued despite a strong academic reputation in the local community.',
    solution: 'A combined organic search and social content strategy targeted prospective parents at each decision stage.',
    results: 'Application volume grew across two consecutive enrollment cycles.',
    metrics: [
      { label: 'Applications', value: '+73%' },
      { label: 'Social Engagement', value: '+188%' },
      { label: 'Open House Signups', value: '+64%' },
    ],
  },
]

export const getProjectBySlug = (slug) => portfolioProjects.find((p) => p.slug === slug)
export const portfolioCategories = ['All', ...new Set(portfolioProjects.map((p) => p.category))]
