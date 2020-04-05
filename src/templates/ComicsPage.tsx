import React from 'react'
import { graphql } from 'gatsby'

import Stack from '../components/layout/Stack'
import ComicsList from '../components/comic/ComicsList'
import BackNext from '../components/navigation/BackNext'

interface ComicsPageProps {
  data: {
    allComicsJson: {
      nodes: [
        {
          slug: string
          title: string
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
      <ComicsList comics={comics} />
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
      }
    }
  }
`

export default ComicsPage
