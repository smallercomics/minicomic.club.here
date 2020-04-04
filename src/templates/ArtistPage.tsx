import React from 'react'
import { graphql, Link } from 'gatsby'

interface ArtistPageProps {
  data: {
    artistsJson: {
      name: string
      comics: [
        {
          slug: string
          title: string
        }
      ]
    }
  }
}

const ArtistPage = ({ data: { artistsJson: artist } }: ArtistPageProps) => {
  return (
    <>
      <h1>{artist.name}</h1>
      {artist.comics.map((c) => (
        <h2>
          <Link to={c.slug}>{c.title}</Link>
        </h2>
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query Artist($id: String!) {
    artistsJson(id: { eq: $id }) {
      name
      comics {
        slug
        title
      }
    }
  }
`

export default ArtistPage
