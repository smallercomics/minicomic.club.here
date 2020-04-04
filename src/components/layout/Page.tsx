import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Stack from './Stack'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body, html{
    height: 100%;
  }
  #___gatsby,
  #gatsby-focus-wrapper{
    height: 100%;
  }
  
  h1{
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  h3{
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  p,li{
    line-height: 16px;
    font-size: 14px;
  }
  ul{
    margin-bottom: 16px;
  }
`

const Page = styled(Stack)`
  height: 100%;
  #main {
    flex-grow: 1;
  }
`
const InnerWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Home = styled(Link)`
  display: inline-block;
  margin: 16px 0;
  line-height: 32px;
  text-decoration: none;
  color: black;
  img {
    height: 32px;
    vertical-align: sub;
  }
`
const Section = styled.section``

import Pin from './pin.png'

const PageLayout: FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    <Page>
      <Section as="header">
        <InnerWrap>
          <Home to="/">
            <img src={Pin} alt="" /> Here
          </Home>
        </InnerWrap>
      </Section>
      <Section id="main">
        <InnerWrap>{children}</InnerWrap>
      </Section>
      <Section as="footer">
        <InnerWrap>
          <p>
            We'd love to see where you are -{' '}
            <Link to="/send">send us one?</Link>
          </p>
          <p>A minicomic.club project, all artwork &copy; respective artists</p>
        </InnerWrap>
      </Section>
    </Page>
  </>
)

export default PageLayout
