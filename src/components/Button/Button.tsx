import type { ReactElement, FC } from 'react'
import React from 'react'

import * as Styled from './styles/Button.style'

import type { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({
  href,
  text,
}: ButtonProps): ReactElement => {
  return (
    <Styled.Button href={href}>
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.Button>
  )
}

export default Button
