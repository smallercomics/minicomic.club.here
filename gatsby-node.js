require('ts-node').register({ files: true })

const fs = require('fs')
const path = require('path')
const getDistance = require('./src/data-helpers/getDistance')
const slugifyFieldResolver = require('./src/data-helpers/slugifyFieldResolver')

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Location {
      title: String,
      lat: Float,
      long: Float,
    }
    type ComicsJson implements Node {
      title: String
      description: String
      artist: ArtistsJson @link(by: "name")
      posted: Date
      media: File @link(by: "relativePath")
      location: Location
      slug: String
      nearby: [ComicsJson]
    }
    type ArtistLink {
      id: String
      kind: String
    }
    type ArtistsJson implements Node {
      name: String
      comics: [ComicsJson] @link(by: "artist.name", from: "name")
      slug: String
      links: [ArtistLink]
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    ComicsJson: {
      slug: {
        resolve: slugifyFieldResolver('title'),
      },
      nearby: {
        resolve(source, args, context) {
          const allComics = context.nodeModel.getAllNodes({
            type: `ComicsJson`,
          })
          return allComics
            .filter((comic) => {
              return comic.id !== source.id
            })
            .map((comic) => ({
              ...comic,
              distance: getDistance(
                source.location.lat,
                source.location.long,
                comic.location.lat,
                comic.location.long
              ),
            }))
            .sort((a, b) => (a.distance > b.distance ? 1 : -1))
            .slice(0, 5)
        },
      },
    },
    ArtistsJson: {
      slug: {
        resolve: slugifyFieldResolver('name'),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allComicsJson(sort: { fields: posted, order: DESC }) {
        nodes {
          slug
          id
          posted
        }
      }
      allArtistsJson {
        nodes {
          slug
          id
        }
      }
    }
  `)

  pages.data.allComicsJson.nodes.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve('src/templates/ComicPage.tsx'),
      context: {
        id: node.id,
      },
    })
  })
  pages.data.allArtistsJson.nodes.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve('src/templates/ArtistPage.tsx'),
      context: {
        id: node.id,
      },
    })
  })

  const perPage = 5
  const maxPages = pages.data.allComicsJson.nodes.length
  for (let i = 0; i < maxPages; i += perPage) {
    createPage({
      path: `/${i + 1}`,
      component: path.resolve('src/templates/ComicsPage.tsx'),
      context: {
        skip: i,
        limit: perPage,
        backPage: i === 0 ? null : `/${i === 1 ? '' : i - 1}`,
        nextPage: i + perPage < maxPages ? `/${i + 2}` : null,
      },
    })
  }
  // Create the index page.
  createPage({
    path: '/',
    component: path.resolve('src/templates/ComicsPage.tsx'),
    context: {
      skip: 0,
      limit: perPage,
      backPage: null,
      nextPage: maxPages > perPage ? '/2' : null,
    },
  })
}

exports.onPostBootstrap = async () => {
  const publicFiles = fs.readdirSync(path.resolve('src/public'))

  publicFiles.map((f) =>
    fs.copyFileSync(
      path.resolve(`src/public/${f}`),
      path.resolve(`public/${f}`)
    )
  )
}

/**
 * This will stop the gatsby build from breaking because leaflet
 * references window
 **/
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
