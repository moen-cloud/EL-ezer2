import { cld } from '../lib/cloudinary'

export const caseStudies = [
  {
    slug: 'coastal-realty-group',
    title: 'How Coastal Realty Group Doubled Listing Inquiries in Six Months',
    client: 'Coastal Realty Group',
    industry: 'Real Estate',
    image: cld('el-ezer/case-studies/coastal-realty', { w: 1400, h: 900 }),
    excerpt: 'A local SEO rebuild combined with geo-targeted paid search turned a referral-only agency into a consistent inbound lead machine.',
    clientOverview:
      'Coastal Realty Group is a nine-agent brokerage serving three coastal communities, previously dependent almost entirely on referrals and open houses for new business.',
    challenge:
      'The agency\'s website ranked on page three or later for nearly every relevant local search term, and their Google Ads account had never been properly structured, resulting in wasted spend on broad, unqualified clicks.',
    strategy:
      'We prioritized technical SEO fixes first, then rebuilt their site architecture around neighborhood-specific landing pages. Paid search was restructured around tightly matched, high-intent listing terms with dedicated landing pages for each.',
    execution:
      'Over twelve weeks, we published sixteen neighborhood guides, fixed core web vitals issues that were suppressing rankings, and rebuilt the Google Ads account from the ground up with proper conversion tracking.',
    results:
      'Within six months, organic traffic grew 184 percent and listing inquiries nearly doubled, while cost per lead from paid search dropped by more than a third.',
    lessonsLearned:
      'The biggest unlock was not a single tactic but the sequencing: fixing the technical foundation before investing further budget into content or ads meant every dollar spent afterward worked harder.',
    metrics: [
      { label: 'Organic Traffic', value: '+184%' },
      { label: 'Listing Inquiries', value: '+96%' },
      { label: 'Cost per Lead', value: '-38%' },
    ],
  },
  {
    slug: 'brightpath-clinics',
    title: 'Brightpath Clinics: Building a Patient Acquisition Engine',
    client: 'Brightpath Clinics',
    industry: 'Healthcare',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785801768/Bright-path-clinic.jpg',
    excerpt: 'A location-based content and SEO strategy helped a multi-site clinic group compete against much larger healthcare networks.',
    clientOverview:
      'Brightpath Clinics operates four outpatient locations, competing directly against two much larger regional healthcare networks with significantly bigger marketing budgets.',
    challenge:
      'Each clinic location shared a single generic page on the website, meaning none of them ranked for the specific, location-based searches patients were actually using.',
    strategy:
      'We built dedicated, genuinely useful pages for each location and paired them with a content program answering the specific questions prospective patients search for before booking.',
    execution:
      'Content was published on a consistent biweekly schedule, informed by real patient questions gathered from the clinic\'s front desk staff, then optimized against search demand data.',
    results:
      'New patient bookings attributed to organic search became the clinic group\'s fastest-growing acquisition channel within five months.',
    lessonsLearned:
      'Content grounded in real patient questions consistently outperformed content built purely from keyword research, a pattern we now apply across healthcare clients.',
    metrics: [
      { label: 'New Patient Bookings', value: '+142%' },
      { label: 'Top 3 Rankings', value: '47 Keywords' },
      { label: 'Bounce Rate', value: '-29%' },
    ],
  },
  {
    slug: 'lumen-goods',
    title: 'Lumen Goods: Diversifying Beyond a Single Ad Channel',
    client: 'Lumen Goods',
    industry: 'E-Commerce',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785805200/lumen-goods.jpg',
    excerpt: 'A structured creative testing process on Meta, paired with lifecycle email, reduced dependency on a single rising-cost channel.',
    clientOverview:
      'Lumen Goods is a direct-to-consumer home goods brand that had grown almost entirely through a single paid channel, leaving the business exposed as costs on that channel rose.',
    challenge:
      'Rising acquisition costs on their primary channel were compressing margins, and the brand had no meaningful email program despite a sizeable existing customer list.',
    strategy:
      'We introduced Meta advertising with a disciplined creative testing cadence, while simultaneously building welcome, abandoned cart, and post-purchase email flows.',
    execution:
      'New ad creative was tested weekly against clear success criteria, with winning concepts scaled and losing ones retired quickly rather than left to underperform.',
    results:
      'Revenue grew significantly as email began capturing meaningful value from existing customers that paid acquisition alone had been leaving on the table.',
    lessonsLearned:
      'The existing customer list was underused equity. Activating it through email delivered some of the fastest, most cost-efficient revenue gains of the entire engagement.',
    metrics: [
      { label: 'Revenue Growth', value: '+267%' },
      { label: 'Return on Ad Spend', value: '4.1x' },
      { label: 'Email Revenue Share', value: '22%' },
    ],
  },
]

export const getCaseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug)
