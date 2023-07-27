import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledFeatureContentProps } from './FeatureContent.style.types'

export const FeatureContent = styled.div((props: StyledFeatureContentProps): FlattenSimpleInterpolation => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`)

export const TextWrapper = styled.div((props: StyledFeatureContentProps): FlattenSimpleInterpolation => css`
  transition: 0.4s all ease;

  ${props.animated && css`
    transform: translateY(-75%);
  `}
`)

export const ButtonWrapper = styled.div((): FlattenSimpleInterpolation => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
`)