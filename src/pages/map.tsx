import React from 'react'
import { graphql } from 'gatsby'

import { H1, P } from '../components/typography'

import Map, { MapPinDetails } from '../components/map/Map'
import { StackWithMobilePadding } from '../components/layout/Stack'

interface MapPageProps {
  data: {
    allComicsJson: {
      nodes: [
        {
          title: string
          slug: string
          location: {
            lat: number
            long: number
          }
          media: {
            childImageSharp: {
              fixed: any
            }
          }
        }
      ]
    }
    site: {
      siteMetadata: {
        siteUrl: string
      }
    }
  }
}

const MapPage: React.FunctionComponent<MapPageProps> = ({ data }) => {
  const pins: MapPinDetails[] = data.allComicsJson.nodes.map(
    ({ slug, title, location, media }) => ({
      location,
      popup: `<a href='${data.site.siteMetadata.siteUrl}/${slug}'>
      <img width="${media.childImageSharp.fixed.width}" src="${media.childImageSharp.fixed.src}" alt="${title}" /><br/>
      <em>${title}</em></a>`,
    })
  )

  return (
    <>
      <StackWithMobilePadding>
        <H1>All of you, on a map</H1>
        <P>
          <em>[Pins are in approximate locations]</em>
        </P>
        <Map pins={pins} />
      </StackWithMobilePadding>
    </>
  )
}

export const pageQuery = graphql`
  query ComicsLocations {
    allComicsJson {
      nodes {
        title
        slug
        location {
          lat
          long
        }
        media {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default MapPage
