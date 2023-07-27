import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

export const Flood = styled.div(
  (): FlattenSimpleInterpolation => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
)
