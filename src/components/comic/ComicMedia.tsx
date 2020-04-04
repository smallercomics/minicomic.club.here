import React from 'react'

interface ComicMediaProps {
  alt: string
  media: {
    publicURL: string
  }
}
const ComicMedia = ({ media, alt }: ComicMediaProps) => (
  <img alt={alt} src={media.publicURL} />
)

export default ComicMedia
