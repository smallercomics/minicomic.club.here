import React from 'react'
import { Link } from 'gatsby'

const ListingNavigation = ({ nextPage, backPage }) => {
  return (
    <>
      {!!backPage && <Link to={`${backPage}`}>Back</Link>}
      {!!nextPage && <Link to={`${nextPage}`}>Next</Link>}
    </>
  )
}

export default ListingNavigation
