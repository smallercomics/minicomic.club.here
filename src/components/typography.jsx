import styled from 'styled-components'
import { Link } from 'gatsby'

const fontFamily = 'Georgia'
const fontColour = '#292929'

export const H1 = styled.h1`
  font-family: ${fontFamily};
  color: ${fontColour};
  font-size: 2rem;
  line-height: 2.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`

export const H2 = styled.h2`
  font-family: ${fontFamily};
  color: ${fontColour};
  font-size: 1.6rem;
  line-height: 2.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`

export const H3 = styled.h2`
  font-family: ${fontFamily};
  color: ${fontColour};
  font-size: 1.4rem;
  line-height: 2rem;
  margin-top: 0 rem;
  margin-bottom: 1rem;
`

export const S = styled.p`
  font-family: ${fontFamily};
  color: ${fontColour};
  font-size: 1rem;
  line-height: 1.2rem;
  margin-bottom: 0.3rem;
`

export const P = styled.p`
  font-family: ${fontFamily};
  color: ${fontColour};
  font-size: 1.25rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`

export const UL = styled.ul``

export const LI = styled.li`
  font-family: ${fontFamily};
  color: ${fontColour};
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-bottom: 0;
`

export const LINK = styled(Link)`
  font-family: ${fontFamily};
  color: ${fontColour};
`
export const A = styled.a`
  font-family: ${fontFamily};
  color: ${fontColour};
`
