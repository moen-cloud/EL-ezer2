import { cld } from '../lib/cloudinary'

// Every hero background image for a top-level/listing page lives here, in
// one place. Detail pages (a single service, industry, portfolio project,
// case study, or blog post) do NOT use this file — they reuse that item's
// own `image` field from its data file instead (e.g. services.js), since
// that is more specific to the page than a generic banner would be.
//
// To swap an image: upload your photo to Cloudinary inside el-ezer/heroes/,
// name it to match the key below, and it will pick up automatically.

export const pageHeroes = {
  services: cld('services', { w: 1920, h: 700, crop: 'fit' }),
  industries: cld('industries', { w: 1920, h: 700 }),
  portfolio: cld('portfolio', { w: 1920, h: 700 }),
  clientResults: cld('client-results', { w: 1920, h: 700 }),
  pricing: cld('pricing', { w: 1920, h: 700 }),
  blog: cld('blog', { w: 1920, h: 700 }),
  faq: cld('faq', { w: 1920, h: 700 }),
  about: 'https://res.cloudinary.com/debhmwj73/image/upload/v1786062315/wor_ogannx.jpg',
  ourStory: cld('our-story', { w: 1920, h: 700 }),
  ourTeam: cld('our-team', { w: 1920, h: 700 }),
  contact: cld('contact', { w: 1920, h: 700 }),
  legal: cld('legal', { w: 1920, h: 700 }),
}
