import React from 'react'
import { graphql } from 'gatsby'

import Stack from '../components/layout/Stack'
import ComicsList from '../components/comic/ComicsList'
import BackNext from '../components/navigation/BackNext'

const Comics = ({
  data: {
    allComicsJson: { nodes: comics },
  },
  pageContext,
}) => {
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
      sort: { order: ASC, fields: slug }
      skip: $skip
    ) {
      nodes {
        title
        slug
      }
    }
  }
`

export default Comics
