import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledMediaCard = styled.section`
  margin-bottom: 35px;
  overflow: hidden;
  box-shadow: 0px 20px 20px 1px hsl(229deg 6% 66%);
  position: relative;
  border-radius: 20px;
  transition: 500ms;

  img,
  video {
    width: 100%;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
    & .slidingBanner {
      transform: translateY(-60px);
    }
  }
  &:active {
    transform: scale(1.5) translateZ(200px);
    z-index: 100;
  }
`
export const StyledSlidingBanner = styled.div`
  background-color: #1d1d1da6;
  color: white;
  width: -webkit-fill-available;
  height: 60px;
  position: absolute;
  bottom: -80px;
  padding: 10px 25px;
  transition: 500ms;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
