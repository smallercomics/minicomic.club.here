import React from 'react'
import { Link } from 'gatsby'

import Stack from '../layout/Stack'

import ComicMedia from './ComicMedia'

export interface ComicSingleProps {
  comic: {
    title: string
    description: string
    posted: string
    media: {
      publicURL: string
    }
    artist: {
      slug: string
      name: string
    }
    location: {
      title: string
    }
  }
}

const ComicSingle = ({ comic }: ComicSingleProps) => {
  const { artist, title, media, description, location, posted } = comic
  return (
    <Stack>
      <ComicMedia media={media} alt={description} />
      <h1>{title}</h1>
      <p>{posted}</p>
      <p>{description}</p>
      <p>
        <Link to={artist.slug}>{artist.name}</Link> is in{' '}
        <em>{location.title}</em>
      </p>
    </Stack>
  )
}

export default ComicSingle
