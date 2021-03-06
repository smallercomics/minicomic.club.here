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
      media: File @link(by: "relativePath")
      location: Location
      slug: String
      nearby: [ComicsJson]
    }
    type ArtistsJson implements Node {
      name: String
      comics: [ComicsJson] @link(by: "artist.name", from: "name")
      slug: String
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
      allComicsJson {
        nodes {
          slug
          id
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
      component: path.resolve('src/templates/Comic.jsx'),
      context: {
        id: node.id,
      },
    })
  })
  pages.data.allArtistsJson.nodes.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve('src/templates/Artist.jsx'),
      context: {
        id: node.id,
      },
    })
  })

  const perPage = 1
  const maxPages = pages.data.allComicsJson.nodes.length
  for (let i = 0; i < maxPages; i += perPage) {
    createPage({
      path: `/${i + 1}`,
      component: path.resolve('src/templates/Comics.jsx'),
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
    component: path.resolve('src/templates/Comics.jsx'),
    context: {
      skip: 0,
      limit: perPage,
      backPage: null,
      nextPage: '/2',
    },
  })
}
