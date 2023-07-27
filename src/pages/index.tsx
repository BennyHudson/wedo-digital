import type { FC, ReactElement} from 'react'
import React, { useState } from 'react'

import Typed from 'react-typed'

import Flood from '@components/Flood'
import Heading from '@components/Heading'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import ScrollAnimation from 'react-animate-on-scroll'

const HomePage: FC = (): ReactElement => {
  const [typed, setTyped] = useState(false)

  const typedArrays = [
    'development',
    'design',
    'ecommerce',
    'ux',
    'digital'
  ]

  return (
    <>
      <Wrapper>
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
        {typed && (
          <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce>
            <div>
              <Button text='Work with us' href='mailto:ben@wedo.digital' />
            </div>
          </ScrollAnimation>
        )}
      </Wrapper>
      <Flood />
    </>
  )
}

export default HomePage