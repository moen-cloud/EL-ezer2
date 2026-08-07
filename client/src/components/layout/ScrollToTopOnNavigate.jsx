import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Automatically scroll to the top of the page when navigation occurs
 */
export default function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
