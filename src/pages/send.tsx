import React from 'react'

import { H1, P, A } from '../components/typography'
import { StackWithMobilePadding } from '../components/layout/Stack'

const SendPage = () => (
  <StackWithMobilePadding>
    <H1>We'd love to see where you are.</H1>
    <P>
      Send us a comic &ndash; just a little one, just couple of panels, no
      longer than a garfield
    </P>
    <P>
      You can use this form to{' '}
      <A href="https://airtable.com/shrzvVHfAdtlSdQ9h">send us a comic</A>
    </P>
    <P>
      Or, we're on twitter here{' '}
      <A
        title="Smaller Comics on Twitter"
        href="https://twitter.com/smallercomics"
      >
        @smallercomics
      </A>
    </P>
  </StackWithMobilePadding>
)

export default SendPage
