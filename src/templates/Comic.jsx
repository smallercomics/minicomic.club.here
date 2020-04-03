import React from 'react'
import { graphql } from 'gatsby'

import Stack from '../components/layout/Stack'

import ComicSingle from '../components/comic/ComicSingle'
import ComicsList from '../components/comic/ComicsList'

const Comic = ({ data: { comicsJson: comic } }) => (
  <Stack>
    <ComicSingle comic={comic} />
    <h3>
      Near<em>ish</em>
    </h3>
    <ComicsList comics={comic.nearby} />
  </Stack>
)

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
      nearby {
        title
        slug
      }
    }
  }
`

export default Comic
