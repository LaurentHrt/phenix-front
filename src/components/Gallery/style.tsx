import styled from 'styled-components'
import { fadeinOnChidren } from '../../utils/style/animation'

export const StyledGallery = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
  width: 100%;
  justify-content: space-evenly;
  ${fadeinOnChidren()};
`
