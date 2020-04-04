import React from 'react'
import Img from 'gatsby-image'

interface ComicMediaProps {
  alt: string
  media: {
    childImageSharp: {
      fluid?: any
    }
  }
}
const ComicMedia = ({ media, alt }: ComicMediaProps) => (
  <Img alt={alt} fluid={media.childImageSharp.fluid} />
)

export default ComicMedia
