import type { FC, ReactElement} from 'react'
import React from 'react'

import Flood from '@components/Flood'
import Wrapper from '@components/Wrapper'
import FeatureContent from '@components/FeatureContent'

const HomePage: FC = (): ReactElement => {
  return (
    <>
      <Wrapper>
        <FeatureContent />
      </Wrapper>
      <Flood />
    </>
  )
}

export default HomePage

export const Head = () => {
  return (
    <>
      <title>wedo.digital</title>
      <meta name='description' content='wedo.digital | Website Design & Development made in Fleet, Hampshire' />
      <link rel='canonical' href='https://wedo.digital/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='wedo.digital' />
      <meta property='og:description' content='wedo.digital | Website Design & Development made in Fleet, Hampshire' />
      <meta property='og:url' content='https://wedo.digital' />
      <meta property='og:image' content='/wedo-digital.png' />
      <meta name='twitter:title' content='wedo.digital' />
      <meta name='twitter:description' content='wedo.digital | Website Design & Development made in Fleet, Hampshire' />
      <meta property='twitter:image' content='/wedo-digital.png' />
      <meta name='twitter:card' content={'summary'} />
    </>
  )
}