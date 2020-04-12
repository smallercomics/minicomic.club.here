import React from 'react'

import { UL, LI, LINK } from '../typography'

export interface LinkListItem {
  slug: string
  title: string
}

interface LinkListProps {
  links: LinkListItem[]
}

const LinkList = ({ links }: LinkListProps) => (
  <UL>
    {links.map(({ slug, title }) => (
      <LI key={slug}>
        <LINK to={`/${slug}`}>{title}</LINK>
      </LI>
    ))}
  </UL>
)

export default LinkList
