import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html{
    height: 100%;
  }
  #___gatsby,
  #gatsby-focus-wrapper{
    height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  #main {
    flex-grow: 1;
  }
`
const SiteHeader = styled.p`
  margin: 0;
  padding: 0;
  font-size: 48px;
  font-weight: bold;
`

const InnerWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Section = styled.section``

const PageLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Page>
      <Section as="header">
        <InnerWrap>
          <SiteHeader>Here,</SiteHeader>
        </InnerWrap>
      </Section>
      <Section id="main">
        <InnerWrap>{children}</InnerWrap>
      </Section>
      <Section as="footer">
        <InnerWrap>
          <p>A minicomic.club project, all artwork &copy; respective artists</p>
        </InnerWrap>
      </Section>
    </Page>
  </>
)

export default PageLayout
