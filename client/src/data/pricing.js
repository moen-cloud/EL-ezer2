export const pricingPlans = [
  {
    name: 'Starter',
    price: 39000,
    period: 'month',
    description: 'For small businesses starting to invest seriously in one core channel.',
    features: [
      'One core channel (SEO or Social Media)',
      'Monthly strategy call',
      'Basic performance dashboard',
      'Email support',
      'Ideal for solo founders and small teams',
    ],
    recommendedFor: 'Small businesses testing digital marketing for the first time',
    highlighted: false,
    cta: 'Request Custom Proposal',
  },
  {
    name: 'Growth',
    price: 105000,
    period: 'month',
    description: 'For businesses ready to combine multiple channels into one strategy.',
    features: [
      'Two to three combined channels',
      'Bi-weekly strategy calls',
      'Full performance dashboard',
      'Priority email and chat support',
      'Quarterly strategy review',
    ],
    recommendedFor: 'Growing businesses with an established customer base',
    highlighted: true,
    cta: 'Request Custom Proposal',
  },
  {
    name: 'Performance',
    price: 195000,
    period: 'month',
    description: 'A full-funnel program for businesses with aggressive growth targets.',
    features: [
      'Full-funnel, multi-channel strategy',
      'Weekly strategy calls',
      'Custom reporting and attribution',
      'Dedicated account manager',
      'Creative production included',
    ],
    recommendedFor: 'Established businesses scaling aggressively',
    highlighted: false,
    cta: 'Request Custom Proposal',
  },
  {
    name: 'Enterprise',
    price: null,
    period: null,
    description: 'A fully custom engagement scoped around your specific goals and complexity.',
    features: [
      'Custom channel mix and scope',
      'Dedicated strategy and creative team',
      'Custom integrations and reporting',
      'Executive-level reporting cadence',
      'Multi-location or multi-brand support',
    ],
    recommendedFor: 'Multi-location businesses and larger organizations',
    highlighted: false,
    cta: 'Request Custom Proposal',
  },
]

export const pricingComparison = {
  categories: [
    {
      name: 'Strategy & Reporting',
      rows: [
        { label: 'Strategy calls', values: ['Monthly', 'Bi-weekly', 'Weekly', 'Custom'] },
        { label: 'Performance dashboard', values: [true, true, true, true] },
        { label: 'Custom attribution reporting', values: [false, false, true, true] },
        { label: 'Dedicated account manager', values: [false, false, true, true] },
      ],
    },
    {
      name: 'Channels',
      rows: [
        { label: 'Channels included', values: ['1', '2-3', 'Full funnel', 'Custom'] },
        { label: 'Creative production', values: [false, 'Limited', true, true] },
        { label: 'Marketing automation', values: [false, 'Add-on', true, true] },
      ],
    },
    {
      name: 'Support',
      rows: [
        { label: 'Support channel', values: ['Email', 'Email + Chat', 'Priority', 'Executive'] },
        { label: 'Quarterly review', values: [false, true, true, true] },
      ],
    },
  ],
}