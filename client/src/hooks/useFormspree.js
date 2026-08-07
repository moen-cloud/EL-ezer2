import { useState } from 'react'

/**
 * Handles submitting a form to Formspree without needing a custom backend.
 * Create a free form at https://formspree.io, grab its form ID (looks like
 * "myzbnqkd"), and set it as an environment variable (see .env.example).
 *
 * Usage:
 *   const { submit, status, error } = useFormspree(import.meta.env.VITE_FORMSPREE_CONTACT_ID)
 *   await submit({ name, email, message })
 */
export function useFormspree(formId) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  async function submit(data) {
    if (!formId) {
      setStatus('error')
      setError('This form is not connected yet. Add a Formspree form ID to your .env file.')
      return { ok: false }
    }

    setStatus('submitting')
    setError(null)

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        return { ok: true }
      }

      const payload = await response.json().catch(() => null)
      setStatus('error')
      setError(payload?.errors?.[0]?.message || 'Something went wrong sending this form. Please try again.')
      return { ok: false }
    } catch (err) {
      setStatus('error')
      setError('We could not reach the server. Check your connection and try again.')
      return { ok: false }
    }
  }

  function reset() {
    setStatus('idle')
    setError(null)
  }

  return { submit, status, error, reset }
}
