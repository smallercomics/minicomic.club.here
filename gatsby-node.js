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
      artist: ArtistsJson @link(by: "name")
      location: Location
      slug: String
      nearby: [ComicsJson]
    }
    type ArtistsJson implements Node {
      name: String
      comics: ComicsJson @link(by: "artist.name", from: "name")
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
