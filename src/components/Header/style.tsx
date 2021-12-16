import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledHeader = styled.header`
  display: grid;
  padding: 30px 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  align-items: center;

  @media ${device.smallDesktop} {
    padding: 30px 35px 15px;
  }

  @media ${device.desktop} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    padding-right: 40px;
    padding-left: 40px;
  }

  img {
    width: 150px;
    @media ${device.desktop} {
      width: 200px;
    }
  }

  h1 {
    white-space: nowrap;
    text-align: right;
    font-size: 0.875em;
    @media ${device.desktop} {
      font-size: 2.25em;
    }
  }
`
