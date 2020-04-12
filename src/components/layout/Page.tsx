import React, { FunctionComponent } from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import Stack, { StackWithMobilePadding } from './Stack'
import { H1, A, S, P, LINK, UL, LI } from '../typography'

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

const StyledFooterSection = styled.section`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`

const FooterNav = styled.nav`
  ${UL} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
  }
`
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
      <StyledFooterSection as="footer">
        <InnerWrap>
          <StackWithMobilePadding paddingTop="2rem" paddingBottom="1.5rem">
            <FooterNav>
              <UL>
                <LI aria-hidden="true">See&nbsp;</LI>
                <LI>
                  <LINK to="/map" aria-label="See everthing on a map">
                    everything on a map
                  </LINK>
                </LI>
                <LI aria-hidden="true">, or see&nbsp;</LI>
                <LI>
                  <LINK to="/" aria-label="See everthing in a list">
                    everything in a list
                  </LINK>
                </LI>
              </UL>
            </FooterNav>
            <P>
              We'd love to see where <em>you</em> are -{' '}
              <LINK to="/send">send us a comic?</LINK>
            </P>
            <S>
              A minicomic.club project, all artwork &copy; respective artists.
            </S>
          </StackWithMobilePadding>
        </InnerWrap>
      </StyledFooterSection>
    </Page>
  </>
)

export default PageLayout
