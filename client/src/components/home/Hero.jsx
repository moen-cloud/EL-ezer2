import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { textRevealDelay } from '../../lib/motion'

// Set to true once you've uploaded a video to Cloudinary at the path below.
// The poster image (HERO_IMAGE) still shows while the video loads, and
// browsers that block autoplay simply keep showing it.
const USE_VIDEO = true

// hero-main is a VIDEO asset in Cloudinary (resource_type: video), not an
// image, so there's no separate image with this public ID. Instead of
// uploading a duplicate poster image, we ask Cloudinary to extract a still
// frame directly from the video: so_0 grabs the frame at 0 seconds, and
// f_jpg tells Cloudinary to deliver it as a still JPG even though the
// source is a video.
const HERO_IMAGE =
  'https://res.cloudinary.com/debhmwj73/video/upload/so_0,w_1920,h_1080,c_fill,q_auto,f_jpg/v1785800740/hero-main.jpg'
const HERO_VIDEO = 'https://res.cloudinary.com/debhmwj73/video/upload/v1785800740/hero-main.mp4'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background image or video, scaling in on load */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        {USE_VIDEO ? (
          <video
            src={HERO_VIDEO}
            poster={HERO_IMAGE}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-60"
          />
        ) : (
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-60" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink" />
      </motion.div>

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-24 sm:py-32">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={textRevealDelay(0)}
          className="eyebrow text-gold"
        >
          Strategic Digital Marketing Agency
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textRevealDelay(0.1)}
          className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Strategic marketing that actually moves the needle for your business
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textRevealDelay(0.2)}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          We partner with ambitious businesses to attract the right customers, generate quality leads, and drive real revenue growth—focusing on the numbers that actually matter.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textRevealDelay(0.3)}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link to="/contact" className="btn-primary">
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-secondary border-white/20 bg-transparent text-white hover:border-emerald hover:text-white">
            Request Custom Quote
          </Link>
          <Link to="/portfolio" className="btn-ghost text-white hover:bg-white/10">
            View Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 sm:flex"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}