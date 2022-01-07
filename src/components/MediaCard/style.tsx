import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledMediaCard = styled.section`
  overflow: hidden;
  box-shadow: 0px 20px 20px 1px hsl(229deg 6% 66%);
  position: relative;
  border-radius: 20px;
  flex: auto;
  @media ${device.smallDesktop} {
    max-width: 40vw;
  }

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 300ms cubic-bezier(0.49, 0.19, 0.1, 0.99);
    @media ${device.smallDesktop} {
      max-height: 50vh;
    }
  }

  &:hover {
    & img,
    video {
      transform: scale(1.2);
    }
    & .slidingBanner {
      transform: translateY(-100px);
    }
  }
`
export const StyledSlidingBanner = styled.div`
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: -100px;
  padding: 10px 25px;
  transition: all 200ms cubic-bezier(0.02, 0.89, 0.45, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.8001401244091386) 20%, rgba(0,0,0,0.6012605725884104) 40%, rgba(0,0,0,0.39957990031950286) 60%, rgba(0,0,0,0.19789922805059523) 80%, rgba(0,0,0,0) 100%); 
  );
`

export const StyledHider = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: green;
`
