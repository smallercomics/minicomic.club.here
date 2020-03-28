import React from 'react'
import { Link } from 'gatsby'

import Row from '../layout/Row'

const BackNext = ({ backPage, nextPage }) => (
  <Row>
    {!!backPage && <Link to={`${backPage}`}>Back</Link>}
    {!!nextPage && <Link to={`${nextPage}`}>Next</Link>}
  </Row>
)

export default BackNext
