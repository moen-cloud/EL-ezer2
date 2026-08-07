import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="404 - Page Not Found" />
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10 text-emerald">
          <Search className="h-10 w-10" />
        </div>
        <h1 className="mt-6 font-heading text-4xl font-bold text-ink sm:text-5xl">Page Not Found</h1>
        <p className="mt-4 max-w-md text-lg text-ink/60">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-10">
          Back to Homepage
        </Link>
      </div>
    </>
  )
}
