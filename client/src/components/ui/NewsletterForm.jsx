import { useState } from 'react'
import { Mail, Loader2, CheckCircle2 } from 'lucide-react'

export default function NewsletterForm({ dark = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!email) {
      setMessage('Please enter your email')
      setStatus('error')
      return
    }

    setStatus('loading')
    
    try {
      // Replace with your actual newsletter endpoint or service
      // This is a placeholder that simulates a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus('success')
      setMessage('Thanks for subscribing!')
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const inputClass = dark
    ? 'w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 outline-none transition-colors focus:border-white/40'
    : 'w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm text-ink placeholder-ink/40 outline-none transition-colors focus:border-emerald'

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 ${dark ? 'text-white' : 'text-emerald'}`}>
        <CheckCircle2 className="h-5 w-5" />
        <span className="text-sm">{message}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-heading text-sm font-semibold transition-all ${
            dark
              ? 'bg-white/20 text-white hover:bg-white/30 disabled:opacity-50'
              : 'bg-emerald text-white hover:bg-emerald-dark disabled:opacity-50'
          }`}
        >
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
        </button>
      </div>
      {message && status === 'error' && (
        <p className={`text-xs ${dark ? 'text-white/70' : 'text-red-500'}`}>{message}</p>
      )}
    </form>
  )
}
