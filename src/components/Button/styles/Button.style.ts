import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledButtonProps } from './Button.style.types'

export const Button = styled.a((props: StyledButtonProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.white};
  padding: ${props.theme.spacing[1]}px ${props.theme.spacing[6]}px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  display: inline-block;
  border-radius: 60px;

  &:hover {
    &::before {
      transform: translateY(0);
    }
  }

  &::before {
    z-index: 2;
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${props.theme.colours.soundcloud1};
    transform: translateY(100%);
    transition: 0.4s all ease;
  }

  &::after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #fff;
    border-radius: 60px;
  }
`)

export const ButtonText = styled.span((): FlattenSimpleInterpolation => css`
  position: relative;
  z-index: 10;
`)