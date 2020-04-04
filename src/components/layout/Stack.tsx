import React, { FunctionComponent } from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Stack: FunctionComponent = ({ children, ...props }) => (
  <Wrap {...props}>{children}</Wrap>
)

export default Stack
