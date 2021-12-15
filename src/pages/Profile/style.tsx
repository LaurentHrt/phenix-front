import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledProfilePage = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 0 50px 0;
  @media ${device.tablet} {
    padding: 0 35px 50px;
  }
`

export const StyledMediaList = styled.section`
  display: grid;
  width: 100%;
  row-gap: 15px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 75px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`
