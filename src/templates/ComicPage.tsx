import React from 'react'
import { graphql } from 'gatsby'

import Stack from '../components/layout/Stack'

import ComicSingle from '../components/comic/ComicSingle'
import ComicsList from '../components/comic/ComicsList'

interface ComicPageProps {
  data: {
    comicsJson: {
      title: string
      description: string
      media: {
        publicURL: string
      }
      slug: string
      artist: {
        name: string
        slug: string
      }
      location: {
        title: string
      }
      nearby: [
        {
          title: string
          slug: string
        }
      ]
    }
  }
}

const ComicPage = ({ data: { comicsJson: comic } }: ComicPageProps) => (
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
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
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

export default ComicPage
