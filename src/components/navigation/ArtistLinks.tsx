import * as React from 'react'
import styled from 'styled-components'
import { UL, LI, A } from '../typography'

export interface ArtistLinkInterface {
  kind: 'instagram' | 'twitter'
  id: string
}

const StyledLI = styled(LI)`
  display: inline;
  padding-right: 0.5rem;
  font-size: 1rem;
`

const RealLink: React.FunctionComponent<{ link: ArtistLinkInterface }> = ({
  link,
}) => {
  switch (link.kind) {
    case 'instagram':
      return (
        <A
          href={`https://instagram.com/${link.id}`}
          aria-label={`@${link.id} on Instagram`}
          title={`@${link.id} on Instagram`}
        >
          Instagram
        </A>
      )
    case 'twitter':
      return (
        <A
          href={`https://twitter.com/${link.id}`}
          aria-label={`@${link.id} on Twitter`}
          title={`@${link.id} on Twitter`}
        >
          Twitter
        </A>
      )
  }
}
const ArtistLinks: React.FunctionComponent<{
  links: ArtistLinkInterface[]
}> = ({ links }) => (
  <ul aria-label="Artist links">
    {links.map((l) => (
      <StyledLI key={`${l.kind}${l.id}`}>
        <RealLink link={l} />
      </StyledLI>
    ))}
  </ul>
)

export default ArtistLinks
