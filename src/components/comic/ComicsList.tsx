import React from 'react'

import LinkList, { LinkListItem } from '../navigation/LinkList'

interface ComicsListProps {
  comics: LinkListItem[]
}
const ComicsList = ({ comics }: ComicsListProps) => <LinkList links={comics} />

export default ComicsList
