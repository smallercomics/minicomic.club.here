import React from 'react'
import { graphql } from 'gatsby'

import HeadMeta from '../components/headMeta'

import Stack, { StackWithMobilePadding } from '../components/layout/Stack'
import { H2 } from '../components/typography'

import ComicSingle from '../components/comic/ComicSingle'
import ComicsList from '../components/comic/ComicsList'
import ArtistLinks, {
  ArtistLinkInterface,
} from '../components/navigation/ArtistLinks'

interface ComicPageProps {
  data: {
    comicsJson: {
      title: string
      description: string
      posted: string
      media: {
        publicURL: string
      }
      slug: string
      artist: {
        name: string
        slug: string
        links: ArtistLinkInterface[]
      }
      location: {
        title: string
      }
      nearby: [
        {
          title: string
          slug: string
        }
      ]
    }
  }
}

const ComicPage = ({ data: { comicsJson: comic } }: ComicPageProps) => (
  <Stack as="article">
    <HeadMeta
      title={comic.title}
      description={comic.description}
      url={comic.slug}
    />
    <ComicSingle comic={comic} />
    {comic.artist.links && (
      <StackWithMobilePadding>
        <ArtistLinks links={comic.artist.links} />
      </StackWithMobilePadding>
    )}
    <StackWithMobilePadding paddingTop="1.5rem">
      <H2>
        Near<em>ish</em> to here:
      </H2>
      <ComicsList comics={comic.nearby} />
    </StackWithMobilePadding>
  </Stack>
)

export const pageQuery = graphql`
  query Comic($id: String!) {
    comicsJson(id: { eq: $id }) {
      title
      description
      posted(formatString: "D MMMM YYYY")
      media {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slug
      artist {
        name
        slug
        links {
          kind
          id
        }
      }
      location {
        title
      }
      nearby {
        title
        slug
      }
    }
  }
`

export default ComicPage
