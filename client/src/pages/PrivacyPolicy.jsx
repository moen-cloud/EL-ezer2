import LegalPage from './LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 2026"
      sections={[
        {
          heading: 'Information We Collect',
          body: 'When you fill out a form on this site, such as a consultation request or newsletter signup, we collect the information you provide, including your name, email address, phone number, and any project details you share.',
        },
        {
          heading: 'How We Use Your Information',
          body: 'We use the information you submit to respond to your inquiry, provide the services you request, and, if you opt in, send occasional marketing emails. We do not sell your personal information to third parties.',
        },
        {
          heading: 'Third-Party Services',
          body: 'Form submissions on this site are processed through Formspree, and images are delivered through Cloudinary. Each of these providers has its own privacy practices governing the data that passes through their systems.',
        },
        {
          heading: 'Cookies',
          body: 'This site may use basic cookies to support core functionality. See our Cookie Policy for more detail on what is used and why.',
        },
        {
          heading: 'Your Choices',
          body: 'You can unsubscribe from marketing emails at any time using the link in any email we send, or by contacting us directly to request that your information be removed.',
        },
        {
          heading: 'Contact Us',
          body: 'If you have questions about this policy or how your information is handled, reach out through our contact page.',
        },
      ]}
    />
  )
}
