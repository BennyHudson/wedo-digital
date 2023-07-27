import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledWrapperProps } from './Wrapper.style.types'

export const Wrapper = styled.div((props: StyledWrapperProps): FlattenSimpleInterpolation => css`
  width: 90%;
  max-width: ${props.theme.containerWidth}px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  flex-direction: column;
  gap: ${props.theme.spacing[10]}px;
`)
