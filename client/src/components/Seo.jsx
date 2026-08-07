import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description, image }) {
  const fullTitle = title ? `${title} | EL EZER Digital Marketing` : 'EL EZER Digital Marketing'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  )
}
