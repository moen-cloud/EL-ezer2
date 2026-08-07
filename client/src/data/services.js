import { cld } from '../lib/cloudinary'

// Each service has enough detail to power both the overview cards on the
// homepage and the full detail page at /services/:slug

export const services = [
  {
    slug: 'seo',
    name: 'Search Engine Optimization',
    shortName: 'SEO',
    icon: 'Search',
    summary: 'Rank higher, get found, and turn organic search into a dependable source of leads.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785803683/Search_Engine_Optimization.jpg',
    overview:
      'We build SEO programs around how your customers actually search, not around vanity keywords. That means technical fixes, content built to answer real questions, and a link profile that holds up over time.',
    benefits: [
      'Higher rankings for the terms your customers actually use',
      'Compounding organic traffic that lowers your cost per lead over time',
      'A site that is fast, crawlable, and easy for search engines to trust',
      'Clear monthly reporting tied to rankings, traffic, and conversions',
    ],
    process: [
      'Technical and competitive audit',
      'Keyword and content strategy',
      'On-page and technical implementation',
      'Content production and link building',
      'Monthly measurement and iteration',
    ],
    deliverables: [
      'Full SEO audit and roadmap',
      'On-page optimization across priority pages',
      'Monthly content calendar and published articles',
      'Backlink outreach and authority building',
      'Monthly performance report',
    ],
    expectedResults: 'Most clients see meaningful ranking movement within 90 days, with organic traffic and lead volume compounding from month four onward.',
    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'Early technical wins can show up within a few weeks, but meaningful ranking and traffic growth usually takes three to six months, depending on your site\'s starting point and competition.',
      },
      {
        q: 'Do you guarantee first page rankings?',
        a: 'No one can honestly guarantee a specific ranking, and we are direct about that. What we commit to is a transparent process and measurable progress against agreed targets.',
      },
    ],
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    icon: 'Share2',
    summary: 'Build an audience that actually pays attention, across the platforms your customers use.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785806156/social_media_marketing.jpg',
    overview:
      'We manage social media as a growth channel, not a content calendar for its own sake. Every post, story, and campaign ties back to awareness, engagement, or leads.',
    benefits: [
      'Consistent, on-brand content across the platforms that matter to your audience',
      'Community management that responds to real people in real time',
      'Paid social layered on top of organic to extend your reach',
      'Reporting that shows follower growth alongside actual business impact',
    ],
    process: [
      'Audience and platform research',
      'Content strategy and monthly calendar',
      'Content production and scheduling',
      'Community management and engagement',
      'Performance review and optimization',
    ],
    deliverables: [
      'Monthly content calendar',
      'Custom graphics, short-form video, and copy',
      'Daily community management',
      'Monthly analytics report',
    ],
    expectedResults: 'Clients typically see engagement rates improve within the first month, with steady follower and inbound message growth over the following quarter.',
    faqs: [
      {
        q: 'Which platforms do you manage?',
        a: 'Instagram, Facebook, LinkedIn, TikTok, and X, chosen based on where your specific audience actually spends time rather than every platform by default.',
      },
    ],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    shortName: 'Google Ads',
    icon: 'Target',
    summary: 'Capture demand from people actively searching for what you offer, right now.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785805915/Google_ads.jpg',
    overview:
      'We build Google Ads accounts for efficiency from day one: tight keyword match types, negative keyword lists, and landing pages built to convert the traffic you are already paying for.',
    benefits: [
      'Immediate visibility for high-intent search terms',
      'Budget spent on qualified clicks, not wasted impressions',
      'Conversion tracking tied directly to leads and revenue',
      'Ongoing bid and budget optimization as data comes in',
    ],
    process: [
      'Account and competitor audit',
      'Keyword research and campaign structure',
      'Ad copy, extensions, and landing page alignment',
      'Launch and conversion tracking setup',
      'Weekly bid and budget optimization',
    ],
    deliverables: [
      'Fully structured campaign build',
      'Ad copy and creative testing',
      'Conversion tracking and dashboard setup',
      'Weekly optimization and monthly reporting',
    ],
    expectedResults: 'Most accounts stabilize their cost per lead within four to six weeks as we gather enough data to optimize bidding.',
    faqs: [
      {
        q: 'What budget do I need to get started?',
        a: 'It depends on your industry and competition, but we typically recommend a minimum of KSh 130,000 to KSh 195,000 per month in ad spend to gather enough data to optimize effectively.',
      },
    ],
  },
  {
    slug: 'facebook-ads',
    name: 'Facebook & Instagram Ads',
    shortName: 'Facebook Ads',
    icon: 'Megaphone',
    summary: 'Reach the right audience with creative that stops the scroll and drives action.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785805950/facebook_ads.jpg',
    overview:
      'Meta advertising works when the creative, audience, and offer are aligned. We test systematically instead of guessing, so budget moves toward what is actually converting.',
    benefits: [
      'Precise audience targeting based on real customer data',
      'Creative testing to find what actually converts',
      'Full-funnel campaigns, from awareness to retargeting',
      'Transparent reporting on cost per lead and return on ad spend',
    ],
    process: [
      'Audience and offer research',
      'Creative concepting and production',
      'Campaign structure and pixel setup',
      'Launch and A/B testing',
      'Scaling what works, cutting what does not',
    ],
    deliverables: [
      'Custom ad creative and copy variations',
      'Full campaign setup across the funnel',
      'Weekly optimization',
      'Monthly performance report',
    ],
    expectedResults: 'Clients generally see cost-per-lead stabilize within three to four weeks of consistent testing.',
    faqs: [
      {
        q: 'Do you handle the creative production too?',
        a: 'Yes. Our team produces static and video ad creative as part of the service, informed by what is already performing in your industry.',
      },
    ],
  },
  {
    slug: 'content-marketing',
    name: 'Content Marketing',
    shortName: 'Content Marketing',
    icon: 'PenTool',
    summary: 'Content that builds trust before the first sales conversation ever happens.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785805710/content_marketing.jpg',
    overview:
      'From blog articles to downloadable guides, we create content that answers the questions your prospects are already asking, positioning you as the obvious choice by the time they reach out.',
    benefits: [
      'A content library that supports SEO, sales, and social all at once',
      'Consistent publishing without pulling your team away from client work',
      'Content mapped to each stage of the buyer journey',
      'Editorial quality that reflects well on your brand',
    ],
    process: [
      'Content audit and topic research',
      'Editorial calendar planning',
      'Writing, editing, and design',
      'Publishing and distribution',
      'Performance tracking and refresh cycles',
    ],
    deliverables: [
      'Monthly editorial calendar',
      'Written articles, guides, and case studies',
      'Supporting graphics and formatting',
      'Distribution across owned channels',
    ],
    expectedResults: 'Content compounds. Expect gradual traffic and authority growth that accelerates from month three onward.',
    faqs: [
      {
        q: 'Who writes the content?',
        a: 'Our in-house content team writes everything, working from briefs shaped by your expertise and our keyword research, then reviewed with you before publishing.',
      },
    ],
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    shortName: 'Email Marketing',
    icon: 'Mail',
    summary: 'Turn your list into one of your most profitable, most controllable channels.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785806190/email_marketing.jpg',
    overview:
      'We design email programs that nurture leads and bring past customers back, from welcome sequences to targeted campaigns tied to specific offers.',
    benefits: [
      'Automated sequences that nurture leads while you sleep',
      'Segmented campaigns that speak to the right audience',
      'Clean, on-brand templates that render well everywhere',
      'Reporting on opens, clicks, and revenue attributed to email',
    ],
    process: [
      'List and platform audit',
      'Segmentation and automation strategy',
      'Template design and copywriting',
      'Automation build and testing',
      'Ongoing campaign management',
    ],
    deliverables: [
      'Welcome and nurture automation sequences',
      'Monthly campaign calendar',
      'Custom email templates',
      'Monthly performance report',
    ],
    expectedResults: 'Automated flows typically begin generating revenue within the first two weeks of going live.',
    faqs: [
      {
        q: 'Which email platforms do you work with?',
        a: 'We work with most major platforms, including Klaviyo, Mailchimp, and HubSpot, and can recommend one if you are starting from scratch.',
      },
    ],
  },
  {
    slug: 'lead-generation',
    name: 'Lead Generation',
    shortName: 'Lead Generation',
    icon: 'Users',
    summary: 'A steady, predictable pipeline of qualified leads, not just one-off spikes in traffic.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785805836/lead_generation.jpg',
    overview:
      'We combine paid, organic, and conversion optimization into a single system designed around one outcome: qualified leads landing in your inbox or CRM.',
    benefits: [
      'Multi-channel lead capture instead of a single point of failure',
      'Landing pages and forms built to convert, not just look good',
      'Lead qualification criteria matched to your sales process',
      'A pipeline you can forecast against',
    ],
    process: [
      'Ideal customer and funnel mapping',
      'Channel selection and campaign build',
      'Landing page and form optimization',
      'Launch and lead qualification setup',
      'Ongoing testing to lower cost per lead',
    ],
    deliverables: [
      'Lead generation funnel across selected channels',
      'Conversion-optimized landing pages',
      'Lead scoring and routing setup',
      'Monthly lead volume and quality report',
    ],
    expectedResults: 'Most clients see their first qualified leads within the first two weeks of launch, with volume growing as we optimize.',
    faqs: [
      {
        q: 'What counts as a "qualified" lead?',
        a: 'We define qualification criteria together up front, based on your sales process, so the leads you receive are ones your team can actually work.',
      },
    ],
  },
  {
    slug: 'branding',
    name: 'Branding',
    shortName: 'Branding',
    icon: 'Sparkles',
    summary: 'A brand identity that looks credible and consistent everywhere it shows up.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785805779/branding.jpg',
    overview:
      'From logo and color system to voice and messaging, we build brand foundations that make every other marketing effort easier and more effective.',
    benefits: [
      'A visual identity that reads as professional across every channel',
      'Messaging that is consistent whether a customer meets you on social, email, or your site',
      'Brand guidelines your whole team can actually use',
      'A stronger foundation for every future campaign',
    ],
    process: [
      'Discovery and market positioning',
      'Visual identity design',
      'Voice and messaging framework',
      'Brand guideline documentation',
      'Rollout across channels',
    ],
    deliverables: [
      'Logo suite and visual identity system',
      'Brand guideline document',
      'Messaging framework',
      'Templates for common marketing materials',
    ],
    expectedResults: 'A completed brand identity typically takes four to six weeks, ready to roll out across your website and campaigns.',
    faqs: [
      {
        q: 'Can you rebrand an existing business?',
        a: 'Yes, this is common. We work carefully to modernize your identity while keeping the recognition you have already built with existing customers.',
      },
    ],
  },
  {
    slug: 'marketing-automation',
    name: 'Marketing Automation',
    shortName: 'Marketing Automation',
    icon: 'Workflow',
    summary: 'Systems that follow up, nurture, and qualify leads automatically, without dropping the ball.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785806220/marketing_automation.jpg',
    overview:
      'We build the behind-the-scenes systems that keep leads moving: automated follow-up, lead scoring, and CRM workflows so nothing falls through the cracks.',
    benefits: [
      'Faster lead response times without extra manual work',
      'Consistent follow-up across every lead, every time',
      'CRM and marketing tools that actually talk to each other',
      'More time for your team to focus on closing, not chasing',
    ],
    process: [
      'Workflow and tooling audit',
      'Automation mapping',
      'Build and integration',
      'Testing across scenarios',
      'Training your team on the new system',
    ],
    deliverables: [
      'Automated lead nurture workflows',
      'CRM and tool integrations',
      'Lead scoring setup',
      'Team training and documentation',
    ],
    expectedResults: 'Automation typically pays for itself within the first quarter through faster response times and fewer missed follow-ups.',
    faqs: [
      {
        q: 'Do we need to switch CRMs?',
        a: 'Usually not. We build automation around the tools you already use wherever possible, and only recommend switching if your current setup genuinely cannot support your goals.',
      },
    ],
  },
  {
    slug: 'custom-ad-campaigns',
    name: 'Custom Ad Campaigns',
    shortName: 'Custom Campaigns',
    icon: 'Rocket',
    summary: 'A tailored, multi-channel campaign built around a specific launch, event, or goal.',
    image: 'https://res.cloudinary.com/debhmwj73/image/upload/v1785806977/custom_campaigns.jpg',
    overview:
      'For product launches, seasonal pushes, or one-off goals, we build custom campaigns that coordinate messaging and budget across every relevant channel at once.',
    benefits: [
      'One coordinated strategy instead of disconnected channel efforts',
      'Creative and messaging tailored to the specific goal',
      'Budget allocated to whichever channels perform best in real time',
      'A dedicated reporting view for the campaign period',
    ],
    process: [
      'Goal and timeline definition',
      'Channel and budget strategy',
      'Creative production',
      'Coordinated launch',
      'Real-time optimization and post-campaign report',
    ],
    deliverables: [
      'Full campaign strategy and timeline',
      'Cross-channel creative assets',
      'Daily monitoring during the campaign window',
      'Post-campaign performance report',
    ],
    expectedResults: 'Results are tied to the specific campaign goal and timeline, defined together before launch.',
    faqs: [
      {
        q: 'How far in advance should we plan a campaign?',
        a: 'For most launches, four to six weeks of lead time gives us enough room to plan, produce creative, and set up tracking properly.',
      },
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
