import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { device } from '../../utils/style/responsive'

export const StyledButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border-radius: 5px;
  width: 170px;
  height: 35px;
  font-size: 1.125rem;
  border: none;
  transition: 0.2s;
  z-index: 1000;

  @media ${device.tablet} {
    min-width: 170px;
    height: 69px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.secondaryLight};
    color: black;
  }
`
