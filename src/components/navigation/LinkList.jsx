import React from 'react'
import { Link } from 'gatsby'

const LinkList = ({ links }) => (
  <ul>
    {links.map(({ slug, title }) => (
      <li>
        <Link to={slug}>{title}</Link>
      </li>
    ))}
  </ul>
)

export default LinkList
