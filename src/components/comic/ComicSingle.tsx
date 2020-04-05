import React from 'react'
import { Link } from 'gatsby'

import Stack, { StackWithMobilePadding } from '../layout/Stack'

import ComicMedia from './ComicMedia'

export interface ComicSingleProps {
  comic: {
    title: string
    description: string
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
  const { artist, title, media, description, location } = comic
  return (
    <Stack>
      <ComicMedia media={media} alt={description} />
      <StackWithMobilePadding>
        <h1>
          <em>{title}</em>
        </h1>
        <p>{description}</p>
        <p>
          {artist.name} is in <em>{location.title}</em>
        </p>
      </StackWithMobilePadding>
    </Stack>
  )
}

export default ComicSingle
