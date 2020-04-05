import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ComicMedia from './ComicMedia'

import Row from '../layout/Row'
interface ComicListItem {
  title: string
  slug: string
  artist: {
    name: string
  }
  media?: {
    childImageSharp: any
  }
}
interface ComicsListProps {
  comics: ComicListItem[]
}

const Ul = styled(Row)`
  flex-wrap: wrap;
  padding-left: 0;
  li {
    flex-basis: 100%;
    flex-shrink: 0;
    margin-bottom: 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 1200px) {
    h2 {
      padding-left: 16px;
    }
  }
  @media (min-width: 600px) {
    li {
      flex-basis: calc(50% - 8px);
      &:nth-child(2n + 1) {
        padding-right: 16px;
      }
    }
  }
`

const ComicsGrid = ({ comics }: ComicsListProps) => {
  return (
    <Ul as="ul">
      {comics.map((c) => (
        <li>
          <Link to={c.slug}>
            {c.media && <ComicMedia alt={c.title} media={c.media} />}
            <h2>
              <em>{c.title}</em> {c.artist.name}
            </h2>
          </Link>
        </li>
      ))}
    </Ul>
  )
}

export default ComicsGrid