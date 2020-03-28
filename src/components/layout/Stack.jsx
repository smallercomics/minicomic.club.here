import React from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Stack = ({ children }) => <Wrap>{children}</Wrap>

export default Stack
