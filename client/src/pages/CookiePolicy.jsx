import LegalPage from './LegalPage'

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="August 2026"
      sections={[
        {
          heading: 'What Cookies Are',
          body: 'Cookies are small text files stored on your device that help websites function properly and, in some cases, remember information about your visit.',
        },
        {
          heading: 'How We Use Cookies',
          body: 'This site is built as a static application and keeps cookie use minimal. If you connect analytics or advertising tools such as Google Analytics or Meta Pixel, those tools will set their own cookies, which should be disclosed here once added.',
        },
        {
          heading: 'Managing Cookies',
          body: 'Most browsers let you control or delete cookies through their settings. Restricting cookies may affect how parts of this site function.',
        },
        {
          heading: 'Updates to This Policy',
          body: 'As tools and integrations on this site change, this policy should be updated to reflect what is actually in use.',
        },
      ]}
    />
  )
}
