import { Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardTransition } from '../../lib/motion'

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      {...cardTransition(index)}
      className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-base font-semibold text-ink">{member.name}</h3>
            <p className="text-sm text-emerald-dark">{member.role}</p>
          </div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${member.name} on LinkedIn`}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-surface text-ink/60 hover:bg-emerald-dark hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">{member.bio}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {member.expertise.map((skill) => (
            <span key={skill} className="rounded-full bg-surface px-2.5 py-1 text-xs text-ink/50">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
