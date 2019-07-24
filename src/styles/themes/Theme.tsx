import * as React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    light: '#f9f7f7',
    gray: '#dbe2ef',
    blue: '#3f72af',
    navy: '#112d4e'
  },
  headings: {
    small: ['1em', '1.25em', '1.5em'],
    big: ['2em', '2.5em', '3em']
  },
  fontSizes: [12, 14, 16, 18, 20],
  breakPoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
}

interface IThemeProviderProps {
  children?: React.ReactElement
}

export const Theme = ({ children }: IThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
