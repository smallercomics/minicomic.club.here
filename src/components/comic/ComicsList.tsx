import React from 'react'

import { S } from '../typography'
import LinkList, { LinkListItem } from '../navigation/LinkList'

interface ComicsListProps {
  comics: LinkListItem[]
}
const ComicsList = ({ comics }: ComicsListProps) =>
  comics.length ? <LinkList links={comics} /> : <S>Nothing nearby yet</S>

export default ComicsList
