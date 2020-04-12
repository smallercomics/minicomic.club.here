import React, { FunctionComponent } from 'react'

import styled from 'styled-components'

const Stack = styled.div<{ paddingTop?: string }>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
`

export const StackWithMobilePadding = styled(Stack)<{
  paddingBottom?: string
  paddingTop?: string
}>`
  @media (max-width: 1200px) {
    padding: ${({ paddingTop, paddingBottom }) =>
      `${paddingTop || '0'} 1rem ${paddingBottom || '0'} 1rem`};
  }
  padding: ${({ paddingTop, paddingBottom }) =>
    `${paddingTop || '0'} 0 ${paddingBottom || '0'} 0`};
`
export default Stack
