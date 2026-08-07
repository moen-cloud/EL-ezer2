import { Component } from 'react'
import { AlertTriangle } from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // In production, wire this up to an error-reporting service.
    console.error('EL EZER site error:', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false })
    window.location.assign('/')
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-dark">
            <AlertTriangle className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-ink">Something went wrong</h1>
          <p className="mt-2 max-w-md text-ink/60">
            We hit an unexpected error loading this page. Try returning to the homepage, and if the
            problem continues, reach out to us directly.
          </p>
          <button type="button" onClick={this.handleReset} className="btn-primary mt-6">
            Back to homepage
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
