import React from 'react'
import { Link } from 'gatsby'

const ComicsList = ({ comics }) => {
  return comics.map((comic) => (
    <h2 key={comic.slug}>
      <Link to={comic.slug}>{comic.title}</Link>
    </h2>
  ))
}

export default ComicsList
