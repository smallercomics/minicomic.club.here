import React from 'react'
import { Link } from 'gatsby'

import Stack from '../layout/Stack'

import ComicMedia from './ComicMedia'

const ComicSingle = ({ comic }) => {
  const { media, description } = comic
  return (
    <Stack>
      <ComicMedia media={media} alt={description} />
      <h1>{comic.title}</h1>
      <p>{description}</p>
      <p>
        <Link to={comic.artist.slug}>{comic.artist.name}</Link> is in{' '}
        <em>{comic.location.title}</em>
      </p>
    </Stack>
  )
}

export default ComicSingle
