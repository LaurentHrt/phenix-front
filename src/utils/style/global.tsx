import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { device, size } from './responsive'

export const GlobalStyle = createGlobalStyle`
#root {
  max-width: ${size.maxWidth}px;
  margin: auto;
}

  body {
    font-family: 'DM Sans', sans-serif;
    margin: 8px 20px;
    @media ${device.smallDesktop} {
      margin: 0;
    }
  }

  a,
  a:visited {
    text-decoration: none;
    display: block;
  }

  h1 {
    color: ${colors.primary};
    margin: 0;
    font-weight: 400;
  }
  
  nav {
    color: ${colors.primary};
    grid-column: 1/3;
    grid-row: 2;
    justify-content: center;
  
    @media ${device.desktop} {
      grid-column: auto;
      grid-row: auto;
    }
  }

`
