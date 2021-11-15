import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledPhotographersContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  column-gap: 20px;
  row-gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 100px;
  }
`
