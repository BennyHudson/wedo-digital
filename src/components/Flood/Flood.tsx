import type { FC, ReactElement } from 'react'
import React from 'react'

import * as Styled from './styles/Flood.style'

const Flood: FC = (): ReactElement => {
  return (
    <Styled.Flood>
      <svg>
        <defs>
          <linearGradient id='wedoGradient'>
            <stop offset='0' stopColor='#a8e063'>
              <animate
                attributeName='stop-color'
                values='#a8e063;#f83600;#49a09d;#6a3093;#f46b45;#34e89e;#f4c4f3;#ee0979;#a8e063;'
                dur='30s'
                repeatCount='indefinite'
              />
            </stop>
            <stop offset='100%' stopColor='#56ab2f'>
              <animate
                attributeName='stop-color'
                values='#56ab2f;#fe8c00;#5f2c82;#a044ff;#eea849;#0f3443;#fc67fa;#ff6a00;#56ab2f;'
                dur='30s'
                repeatCount='indefinite'
              />
            </stop>
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#wedoGradient)' />
      </svg>
    </Styled.Flood>
  )
}

export default Flood
