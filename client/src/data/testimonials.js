// TEMPORARY: photo fields use a placeholder avatar generator until real
// headshots are uploaded to Cloudinary at el-ezer/testimonials/<name>.
// Once uploaded, swap each placeholderPhoto(...) call back to:
//   cld('el-ezer/testimonials/<name>', { w: 200, h: 200 })
import { cld } from '../lib/cloudinary'

const placeholderPhoto = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=1B4332&color=D4AF37&bold=true`

export const testimonials = [
  {
    name: 'Maria Alonso',
    role: 'Owner, Coastal Realty Group',
    photo: placeholderPhoto('Maria Alonso'),
    quote:
      'We went from relying entirely on referrals to having a genuine online pipeline. The team communicated clearly at every stage and the results matched what they promised us upfront.',
    rating: 5,
    video: null,
  },
  {
    name: 'Dr. James Osei',
    role: 'Managing Director, Brightpath Clinics',
    photo: placeholderPhoto('James Osei'),
    quote:
      'Our patient bookings from search grew faster than we expected. What stood out was how much they understood our industry before we even started working together.',
    rating: 5,
    video: null,
  },
  {
    name: 'Ruth Kamau',
    role: 'Founder, Lumen Goods',
    photo: placeholderPhoto('Ruth Kamau'),
    quote:
      'They diversified our marketing at exactly the right time. Our reliance on one channel used to keep me up at night, and that is no longer the case.',
    rating: 5,
    // TEMPORARY: no video poster until the real asset is uploaded.
    video: null,
  },
  {
    name: 'David Sterling',
    role: 'Partner, Sterling & Associates',
    photo: placeholderPhoto('David Sterling'),
    quote:
      'Professional from the first call. The strategy was tailored to how our clients actually search for legal help, not a generic playbook.',
    rating: 5,
    video: null,
  },
]