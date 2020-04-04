import React, { FunctionComponent } from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`

const Row: FunctionComponent = ({ children }) => <Wrap>{children}</Wrap>

export default Row
