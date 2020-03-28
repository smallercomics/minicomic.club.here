import React from 'react'
import { graphql, Link } from 'gatsby'

import Stack from '../components/layout/Stack'
import ComicMedia from '../components/comic/ComicMedia'

const Comic = ({ data: { comicsJson: comic } }) => {
  const { media, description } = comic
  return (
    <Stack>
      <ComicMedia media={media} alt={description} />
      <h1>
        {comic.title} <em>{comic.location.title}</em>
      </h1>
      <h2>
        <Link to={comic.artist.slug}>{comic.artist.name}</Link>
      </h2>
      <p>{description}</p>
    </Stack>
  )
}

export const pageQuery = graphql`
  query Comic($id: String!) {
    comicsJson(id: { eq: $id }) {
      title
      description
      media {
        publicURL
      }
      slug
      artist {
        name
        slug
      }
      location {
        title
      }
    }
  }
`

export default Comic
