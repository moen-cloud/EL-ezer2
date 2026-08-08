// TEMPORARY: banner images use a placeholder generator until real hero
// photos are uploaded to Cloudinary at el-ezer/heroes/<key>.
//
// To go live with real images: upload each photo to Cloudinary inside
// el-ezer/heroes/, name it to match the key below (e.g. "portfolio",
// "pricing"), then swap that entry back to:
//   cld('el-ezer/heroes/<key>', { w: 1920, h: 700 })
import { cld } from '../lib/cloudinary'

const placeholderHero = (label) =>
  `https://placehold.co/1920x700/1B4332/D4AF37?text=${encodeURIComponent(label)}&font=roboto`

export const pageHeroes = {
  services: placeholderHero('Services'),
  industries: placeholderHero('Industries'),
  portfolio: placeholderHero('Portfolio'),
  clientResults: placeholderHero('Client Results'),
  pricing: placeholderHero('Pricing'),
  blog: placeholderHero('Blog'),
  faq: placeholderHero('FAQ'),
  about: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786062315/wor_ogannx.jpg',
  ourStory: placeholderHero('Our Story'),
  ourTeam: placeholderHero('Our Team'),
  contact: placeholderHero('Contact'),
  legal: placeholderHero('Legal'),
}
