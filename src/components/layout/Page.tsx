import React, { FunctionComponent } from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import Stack, { StackWithMobilePadding } from './Stack'
import { H1, A, S, LINK } from '../typography'

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
  
  
  em{
    font-style: italic;
  }
`

const Page = styled(Stack)`
  height: 100%;
  #main {
    flex-grow: 1;
  }
`

const Home = styled(LINK)`
  display: inline-block;
  margin: 0.5rem 0 1rem 0;
  text-decoration: none;
  color: black;
  span {
    font-size: 1.8rem;
  }
  img {
    height: 2.25rem;
    margin-right: 1rem;
    vertical-align: baseline;
  }
`

const InnerWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const Section = styled.section``

import Pin from './pin.png'

const PageLayout: FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    <Page>
      <Section as="header">
        <InnerWrap>
          <StackWithMobilePadding>
            <Home to="/" title="Here">
              <H1 as="span">
                <img src={Pin} alt="" />
              </H1>
            </Home>
          </StackWithMobilePadding>
        </InnerWrap>
      </Section>
      <Section id="main">
        <InnerWrap>{children}</InnerWrap>
      </Section>
      <Section as="footer">
        <InnerWrap>
          <StackWithMobilePadding paddingTop="3rem" paddingBottom="1.5rem">
            <S>
              We'd love to see where you are -{' '}
              <LINK to="/send">send us one?</LINK>
            </S>
            <S>
              A minicomic.club project, all artwork &copy; respective artists
            </S>
          </StackWithMobilePadding>
        </InnerWrap>
      </Section>
    </Page>
  </>
)

export default PageLayout
