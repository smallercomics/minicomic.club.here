import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import woff2 from '../../fonts/LeagueMono-Bold.woff2'
import eot from '../../fonts/LeagueMono-Bold.eot'
import woff from '../../fonts/LeagueMono-Bold.woff'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'LeagueMono';
    src: url('${woff2}') format('woff2'), /* Super Modern Browsers */
         url('${woff}') format('woff'), /* Pretty Modern Browsers */
         url('${eot}')  format('truetype'); /* Safari, Android, iOS */
    font-weight: bold;
    font-style: normal;
  }
  body{
    margin: 0;
    padding: 0;
    border-top: 1rem solid grey;
    padding-top: 1rem solid grey;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: LeagueMono;
    margin:0;
    padding:0;
  }
`

const SiteHeader = styled.p`
  font-family: LeagueMono;
  margin: 0;
  padding: 0;
  font-size: 48px;
  font-weight: bold;
`

const InnerWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Footer = styled.footer`
  border-top: 1rem solid lightGrey;
  margin-top: 1rem;
`
const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <header>
      <InnerWrap>
        <SiteHeader>Here,</SiteHeader>
      </InnerWrap>
    </header>
    <InnerWrap>{children}</InnerWrap>
    <Footer>
      <InnerWrap>A minicomic.club project</InnerWrap>
    </Footer>
  </>
)

export default Page
