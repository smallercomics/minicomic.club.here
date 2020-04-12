import React from 'react'
import { graphql } from 'gatsby'

import Stack from '../components/layout/Stack'
import ComicsGrid from '../components/comic/ComicsGrid'
import BackNext from '../components/navigation/BackNext'
import HeadMeta from '../components/headMeta'

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

const ComicsPage: React.FunctionComponent<ComicsPageProps> = ({
  data: {
    allComicsJson: { nodes: comics },
  },
  pageContext,
}) => {
  return (
    <Stack>
      <HeadMeta />
      <ComicsGrid comics={comics} />
      <BackNext {...pageContext} />
    </Stack>
  )
}

export const pageQuery = graphql`
  query Comics($skip: Int!, $limit: Int!) {
    allComicsJson(
      limit: $limit
      sort: { order: DESC, fields: posted }
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
