import type { ReactElement, FC } from 'react'
import React, { useState } from 'react'

import * as Styled from './styles/FeatureContent.style'

import type { FeatureContentProps } from './FeatureContent.types'
import Heading from '@components/Heading'
import Typed from 'react-typed'
import ScrollAnimation from 'react-animate-on-scroll'
import Button from '@components/Button'

const FeatureContent: FC<FeatureContentProps> = ({
  // add props
}: FeatureContentProps): ReactElement => {
  const [typed, setTyped] = useState(false)
  const [animated, setAnimated] = useState(false)

  const typedArrays = [
    'development',
    'design',
    'ecommerce',
    'ux',
    'digital'
  ]

  return (
    <Styled.FeatureContent>
      <Styled.TextWrapper animated={typed}>
        <Heading
          level={1}
          weight={1}
          size={6}
          noMargin
        >
          wedo.
          <>
            {typed ? 'digital' :
              <Typed
                strings={typedArrays}
                typeSpeed={50}
                showCursor={false}
                onComplete={() => setTyped(true)}
              />
            }
          </>
        </Heading>
        </Styled.TextWrapper>
        <Styled.ButtonWrapper>
          {typed && (
            <ScrollAnimation animateIn='animate__animated animate__fadeInDown' animateOnce afterAnimatedIn={() => setAnimated(true)}>
              <div>
                <Button text='Work with us' href='mailto:ben@wedo.digital' />
              </div>
            </ScrollAnimation>
          )}
        </Styled.ButtonWrapper>
    </Styled.FeatureContent>
  )
}

export default FeatureContent
