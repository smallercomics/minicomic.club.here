import React from 'react'
import { graphql, Link } from 'gatsby'

const Comics = ({
  data: {
    allComicsJson: { nodes: comics },
  },
  pageContext: { backPage, nextPage },
}) => {
  return (
    <>
      <h1>Comics</h1>
      {comics.map((comic) => (
        <h2 key={comic.slug}>
          <Link to={comic.slug}>{comic.title}</Link>
        </h2>
      ))}
      {!!backPage && <Link to={`${backPage}`}>Back</Link>}
      {!!nextPage && <Link to={`${nextPage}`}>Next</Link>}
    </>
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
