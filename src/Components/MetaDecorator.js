import { Helmet } from "react-helmet";

export default function MetaDecorator({ title, description, imageUrl, imageAlt, location }) {
  return (
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:url" 
          content={'http://poydemkuda.ru/#'+location}
        />
        <meta name="twitter:card" content={imageUrl} />
        <meta name="twitter:image:alt" content={imageAlt} />
        <meta name="twitter:site" content={'http://poydemkuda.ru/#'+location} />
    </Helmet>
  )
}
