import LegalPage from './LegalPage'

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="August 2026"
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: 'By using this website, you agree to these terms. If you do not agree, please discontinue use of the site.',
        },
        {
          heading: 'Use of Content',
          body: 'All content on this site, including text, graphics, and branding, belongs to EL EZER Digital Marketing unless otherwise noted, and may not be reproduced without permission.',
        },
        {
          heading: 'Service Engagements',
          body: 'Any marketing services described on this site are subject to a separate written agreement outlining scope, pricing, and terms specific to your engagement.',
        },
        {
          heading: 'No Guarantee of Results',
          body: 'While we work to deliver strong outcomes for every client, digital marketing results depend on many factors outside our direct control, and no specific result is guaranteed by this website or its content.',
        },
        {
          heading: 'Limitation of Liability',
          body: 'EL EZER Digital Marketing is not liable for any indirect or consequential damages arising from use of this website.',
        },
        {
          heading: 'Changes to These Terms',
          body: 'These terms may be updated from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.',
        },
      ]}
    />
  )
}
