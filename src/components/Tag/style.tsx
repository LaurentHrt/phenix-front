import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { device } from '../../utils/style/responsive'

export const StyledTag = styled.div`
  height: 17px;
  text-align: center;
  border: solid 1px #c4c4c4;
  border-radius: 25px;
  color: ${colors.primary};
  margin-right: 5px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 0.8125em;
  padding-right: 7px;
  padding-left: 7px;
  transition: 0.2s;

  @media ${device.tablet} {
    height: 24px;
    font-size: 1.125em;
  }
`
