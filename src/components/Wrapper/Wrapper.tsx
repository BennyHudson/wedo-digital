import type { ReactElement, FC } from 'react'
import React from 'react'

import * as Styled from './styles/Wrapper.style'

import type { WrapperProps } from './Wrapper.types'

const Wrapper: FC<WrapperProps> = ({
  children,
}: WrapperProps): ReactElement => {
  return (
    <Styled.Wrapper>
      {children}
    </Styled.Wrapper>
  )
}

export default Wrapper
