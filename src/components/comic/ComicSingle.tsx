import React from 'react'
import { Link } from 'gatsby'

import Stack, { StackWithMobilePadding } from '../layout/Stack'
import { S, P, H1 } from '../typography'

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
      <StackWithMobilePadding>
        <H1>
          <em>{title}</em> &mdash; {artist.name}
        </H1>
        <S>
          {posted} &ndash; {location.title}
        </S>
        <P>{description}</P>
      </StackWithMobilePadding>
    </Stack>
  )
}

export default ComicSingle
