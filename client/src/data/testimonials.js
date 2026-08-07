import { cld } from '../lib/cloudinary'

export const testimonials = [
  {
    name: 'Maria Alonso',
    role: 'Owner, Coastal Realty Group',
    photo: cld('el-ezer/testimonials/maria-alonso', { w: 200, h: 200 }),
    quote:
      'We went from relying entirely on referrals to having a genuine online pipeline. The team communicated clearly at every stage and the results matched what they promised us upfront.',
    rating: 5,
    video: null,
  },
  {
    name: 'Dr. James Osei',
    role: 'Managing Director, Brightpath Clinics',
    photo: cld('el-ezer/testimonials/james-osei', { w: 200, h: 200 }),
    quote:
      'Our patient bookings from search grew faster than we expected. What stood out was how much they understood our industry before we even started working together.',
    rating: 5,
    video: null,
  },
  {
    name: 'Ruth Kamau',
    role: 'Founder, Lumen Goods',
    photo: cld('el-ezer/testimonials/ruth-kamau', { w: 200, h: 200 }),
    quote:
      'They diversified our marketing at exactly the right time. Our reliance on one channel used to keep me up at night, and that is no longer the case.',
    rating: 5,
    video: cld('el-ezer/testimonials/ruth-kamau-video-poster', { w: 640, h: 360 }),
  },
  {
    name: 'David Sterling',
    role: 'Partner, Sterling & Associates',
    photo: cld('el-ezer/testimonials/david-sterling', { w: 200, h: 200 }),
    quote:
      'Professional from the first call. The strategy was tailored to how our clients actually search for legal help, not a generic playbook.',
    rating: 5,
    video: null,
  },
]
