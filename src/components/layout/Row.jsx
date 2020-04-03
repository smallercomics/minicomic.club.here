import React from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`

const Row = ({ children }) => <Wrap>{children}</Wrap>

export default Row
