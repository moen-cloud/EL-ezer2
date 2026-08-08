// Every hero background image for a top-level/listing page lives here, in
// one place. Detail pages (a single service, industry, portfolio project,
// or blog post) do NOT use this file — they reuse that item's own `image`
// field from its own data file instead (e.g. services.js), since that is
// more specific to the page than a generic banner would be.
//
// HOW TO ADD YOUR REAL PHOTOS (replaces the placeholders below):
// 1. Log into Cloudinary -> Media Library
// 2. Create a folder called "el-ezer", and inside it, a folder called "heroes"
// 3. Upload a photo for each key below (services, industries, portfolio...)
// 4. IMPORTANT: when uploading, set the "Public ID" field to match the key
//    exactly (e.g. upload your services banner with Public ID "services").
//    If you skip this, Cloudinary invents a random name instead (this is
//    what happened with the current "about" image below) and the code
//    won't find it automatically — you'd have to hardcode that random URL
//    instead, which is harder to maintain.
// 5. Once uploaded with the right name, swap that entry below from
//    placeholderHero(...) to: cld('el-ezer/heroes/<key>', { w: 1920, h: 700 })
//
// Nothing breaks if an image is missing — the placeholder just keeps
// showing until you replace it, so you can launch before every photo is in.

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
  // This one is already real — uploaded to Cloudinary, just under an
  // auto-generated name since no custom Public ID was set at upload time.
  about: cld('wor_ogannx', { w: 1920, h: 700 }),
  ourStory: placeholderHero('Our Story'),
  ourTeam: placeholderHero('Our Team'),
  contact: placeholderHero('Contact'),
  legal: placeholderHero('Legal'),
}