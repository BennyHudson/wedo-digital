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
      {/* <link rel='canonical' href={seo.canonical} />
      <meta property='og:type' content={seo.opengraphType} />
      <meta property='og:title' content={seo.opengraphTitle} />
      <meta property='og:description' content={seo.metaDesc} />
      <meta property='og:url' content={seo.opengraphUrl} />
      <meta property='og:image' content={seo.opengraphImage?.sourceUrl} />
      <meta name='twitter:title' content={seo.twitterTitle} />
      <meta name='twitter:description' content={seo.twitterDescription} />
      <meta property='twitter:image' content={seo.opengraphImage?.sourceUrl} />
      <meta name='twitter:card' content={'summary'} />
      <script type='application/ld+json'>{JSON.stringify(seo.schema?.raw)}</script> */}
    </>
  )
}