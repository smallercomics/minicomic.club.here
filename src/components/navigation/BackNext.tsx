import React from 'react'
import { Link } from 'gatsby'

import Row from '../layout/Row'

interface BackNextProps {
  backPage: string
  nextPage: string
}

const BackNext = ({ backPage, nextPage }: BackNextProps) => (
  <Row>
    {!!backPage && <Link to={`${backPage}`}>Back</Link>}
    {!!nextPage && <Link to={`${nextPage}`}>Next</Link>}
  </Row>
)

export default BackNext
