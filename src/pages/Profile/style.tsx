import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledProfilePage = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 0 50px 0;
  @media ${device.smallDesktop} {
    padding: 0 35px 50px;
  }
`

export const StyledControlsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`
