import React from 'react'
import { graphql } from 'gatsby'

import Stack from '../components/layout/Stack'
import ComicsGrid from '../components/comic/ComicsGrid'
import BackNext from '../components/navigation/BackNext'

interface ComicsPageProps {
  data: {
    allComicsJson: {
      nodes: [
        {
          slug: string
          title: string
          artist: {
            name: string
          }
          media: {
            childImageSharp: any
          }
        }
      ]
    }
  }
  pageContext: {
    backPage: string
    nextPage: string
  }
}

const ComicsPage = ({
  data: {
    allComicsJson: { nodes: comics },
  },
  pageContext,
}: ComicsPageProps) => {
  return (
    <Stack>
      <ComicsGrid comics={comics} />
      <BackNext {...pageContext} />
    </Stack>
  )
}

export const pageQuery = graphql`
  query Comics($skip: Int!, $limit: Int!) {
    allComicsJson(
      limit: $limit
      sort: { order: ASC, fields: slug }
      skip: $skip
    ) {
      nodes {
        title
        slug
        artist {
          name
        }
        media {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ComicsPage
