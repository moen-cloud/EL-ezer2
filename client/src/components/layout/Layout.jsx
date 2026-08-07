import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import BackToTopButton from './BackToTopButton'
import StickyConsultationBar from './StickyConsultationBar'
import ScrollToTopOnNavigate from './ScrollToTopOnNavigate'
import ErrorBoundary from '../ErrorBoundary'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTopOnNavigate />
      <Navbar />
      <main className="flex-1 pb-20 sm:pb-0">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <StickyConsultationBar />
    </div>
  )
}
