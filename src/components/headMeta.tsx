import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

interface HeadMetaProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

const HeadMeta: React.FunctionComponent<HeadMetaProps> = ({
  title,
  description,
  url,
  image,
}) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        title: defaultTitle,
        description: defaultDescription,
        defaultShare,
      },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
          defaultShare
        }
      }
    }
  `)

  return (
    <Helmet
      defer={false}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <html lang="en" />
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/here/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/here/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/here/favicon-16x16.png"
      />
      <link rel="manifest" href="/here/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/here/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="description" content={description || defaultDescription} />
      <meta property="og:url" content={`${siteUrl}/${url}` || siteUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Here" />
      <meta property="og:image" content={image || defaultShare} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
    </Helmet>
  )
}

export default HeadMeta
