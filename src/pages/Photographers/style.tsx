import styled from 'styled-components'
import { fadeinOnChidren } from '../../utils/style/animation'
import { device } from '../../utils/style/responsive'

export const StyledPhotographersContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  row-gap: 40px;
  margin: 20px 0px;
  ${fadeinOnChidren()};

  @media ${device.smallDesktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`
