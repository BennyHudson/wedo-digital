import 'animate.css'
import React from 'react'
import type { FC, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@styles/GlobalStyle'

import { wedoTheme } from '@themes/wedoTheme'

import type { PageLayoutProps } from './PageLayout.types'

const PageLayout: FC<PageLayoutProps> = ({ children }: PageLayoutProps): ReactElement => {
  return (
    <ThemeProvider theme={wedoTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default PageLayout
