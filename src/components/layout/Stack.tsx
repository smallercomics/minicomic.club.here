import React, { FunctionComponent } from 'react'

import styled from 'styled-components'

const Stack = styled.div<{ paddingTop?: string }>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
`

export const StackWithMobilePadding = styled(Stack)<{ paddingTop?: string }>`
  @media (max-width: 1200px) {
    padding: ${({ paddingTop }) =>
      `${paddingTop || '0'} 16px 0 16px` || '0 16px'};
  }
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
`
export default Stack
