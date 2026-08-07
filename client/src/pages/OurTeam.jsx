import Seo from '../components/Seo'
import PageHeader from '../components/ui/PageHeader'
import TeamCard from '../components/cards/TeamCard'
import { team } from '../data/team'

export default function OurTeam() {
  return (
    <>
      <Seo title="Our Team" description="Meet the strategic minds behind your growth." />
      <PageHeader
        eyebrow="The Team"
        title="People who care about your growth as much as you do"
        description="We're a dedicated team of strategists, creatives, and analysts working together to move the needle for your business."
      />
      <section className="py-24">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
