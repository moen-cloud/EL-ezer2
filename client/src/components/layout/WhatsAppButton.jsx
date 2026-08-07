import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../data/site'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi EL EZER team, I'd like to talk about growing my business with digital marketing."
  )

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 sm:bottom-6"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  )
}
