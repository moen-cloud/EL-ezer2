// TEMPORARY: photo fields use a placeholder avatar generator until real
// headshots are uploaded to Cloudinary at el-ezer/team/<name>.
// Once uploaded, swap each placeholderPhoto(...) call back to:
//   cld('el-ezer/team/<name>', { w: 500, h: 500 })
import { cld } from '../lib/cloudinary'

const placeholderPhoto = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=500&background=1B4332&color=D4AF37&bold=true`

export const team = [
  {
    name: 'Eleanor Ezer',
    role: 'Founder & Managing Director',
    photo: placeholderPhoto('Eleanor Ezer'),
    bio: 'Eleanor founded EL EZER after a decade leading growth marketing for mid-sized brands, with a focus on strategy that ties directly to revenue.',
    expertise: ['Strategy', 'Leadership'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Daniel Osoro',
    role: 'Head of Paid Media',
    photo: placeholderPhoto('Daniel Osoro'),
    bio: 'Daniel leads our Google and Meta advertising programs, with a background managing seven-figure ad budgets across e-commerce and services.',
    expertise: ['Google Ads', 'Facebook Ads'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Naomi Chege',
    role: 'Head of SEO & Content',
    photo: placeholderPhoto('Naomi Chege'),
    bio: 'Naomi has spent seven years building organic search strategies for healthcare, legal, and real estate clients.',
    expertise: ['SEO', 'Content Strategy'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Marcus Bello',
    role: 'Creative Director',
    photo: placeholderPhoto('Marcus Bello'),
    bio: 'Marcus oversees brand and creative work across every client, making sure strategy and design never work against each other.',
    expertise: ['Branding', 'Creative'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Automation Lead',
    photo: placeholderPhoto('Priya Nair'),
    bio: 'Priya builds the automation and CRM systems that keep client pipelines moving, drawing on a background in marketing operations.',
    expertise: ['Automation', 'CRM'],
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Tom Whitfield',
    role: 'Client Success Manager',
    photo: placeholderPhoto('Tom Whitfield'),
    bio: 'Tom is the day-to-day point of contact for most EL EZER clients, making sure strategy translates into clear communication.',
    expertise: ['Account Management'],
    linkedin: 'https://linkedin.com',
  },
]