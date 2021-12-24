import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledControlsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${device.smallDesktop} {
    flex-direction: row;
  }
  z-index: 0;
`
