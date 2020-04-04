import React from 'react'
import { Link } from 'gatsby'

export interface LinkListItem {
  slug: string
  title: string
}

interface LinkListProps {
  links: LinkListItem[]
}

const LinkList = ({ links }: LinkListProps) => (
  <ul>
    {links.map(({ slug, title }) => (
      <li>
        <Link to={slug}>{title}</Link>
      </li>
    ))}
  </ul>
)

export default LinkList
