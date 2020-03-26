import React from 'react'
import { graphql, Link } from 'gatsby'

const Comic = ({ data: { comicsJson: comic } }) => {
  return (
    <>
      <h1>{comic.title}</h1>
      <h2>
        <Link to={comic.artist.slug}>{comic.artist.name}</Link>
      </h2>
    </>
  )
}

export const pageQuery = graphql`
  query Comic($id: String!) {
    comicsJson(id: { eq: $id }) {
      title
      slug
      artist {
        name
        slug
      }
    }
  }
`

export default Comic
