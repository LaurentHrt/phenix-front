import { device } from '../../utils/style/responsive'
import styled from 'styled-components'

export const StyledGallery = styled.section`
  display: grid;
  width: 100%;
  max-width: 1400px;

  @media ${device.smallDesktop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 35px;
  }

  @media ${device.desktop} {
    justify-self: center;
  }
`
