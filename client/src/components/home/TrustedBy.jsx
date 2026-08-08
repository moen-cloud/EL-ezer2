// TEMPORARY: logo images use a placeholder service until real logos are
// uploaded to Cloudinary at el-ezer/logos/<slug>.
// Once uploaded, swap placeholderLogo(...) back to:
//   cld(`el-ezer/logos/${logo}`, { w: 160, h: 60 })
import { cld } from '../../lib/cloudinary'

const logos = [
  'coastal-realty', 'brightpath-clinics', 'sterling-associates', 'ironclad-builders',
  'lumen-goods', 'westbridge-academy', 'harbor-finance', 'novus-tech',
]

const logoLabel = (slug) =>
  slug
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')

const placeholderLogo = (slug) =>
  `https://placehold.co/160x60/f5f5f0/1B4332?text=${encodeURIComponent(logoLabel(slug))}&font=roboto`

export default function TrustedBy() {
  const doubled = [...logos, ...logos]

  return (
    <section className="border-y border-ink/5 bg-white py-10">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
          Trusted by growing businesses across industries
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-16 py-2">
          {doubled.map((logo, i) => (
            <img
              key={`${logo}-${i}`}
              src={placeholderLogo(logo)}
              alt=""
              className="h-8 w-auto flex-shrink-0 opacity-40 grayscale transition-opacity hover:opacity-70 sm:h-9"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}