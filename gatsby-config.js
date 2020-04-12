require('ts-node').register({ files: true })

module.exports = {
  pathPrefix: `/here`,
  siteMetadata: {
    title: 'Here',
    siteUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://minicomic.club/here/',
    defaultShare: 'https://minicomic.club/here/default-share.png',
    description: 'Ambient comics from were you are',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout/Page.tsx'),
      },
    },
  ],
}
