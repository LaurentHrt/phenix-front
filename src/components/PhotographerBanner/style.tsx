import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { device } from '../../utils/style/responsive'

export const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${colors.quadrary};
  padding-bottom: 20px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  .portrait {
    width: 60vw;
    height: 60vw;
    min-width: 100px;
    min-height: 100px;
    margin: 20px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0px 5px 15px 1px hsl(223deg 6% 66%);
    @media ${device.tablet} {
      width: 200px;
      height: 200px;
      min-width: 200px;
      min-height: 200px;
      margin: 30px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .textContainer {
    padding-right: 20px;
    @media ${device.smallDesktop} {
      padding-left: 20px;
    }
  }

  .name {
    color: ${colors.secondary};
    font-size: 2.25em;
    padding-top: 10px;
    padding-bottom: 5px;
    @media ${device.smallDesktop} {
      font-size: 4em;
    }
  }

  .city {
    color: ${colors.primary};
    font-size: 0.8125em;
    padding-bottom: 5px;
    @media ${device.smallDesktop} {
      font-size: 1.5em;
    }
  }

  .tagline {
    color: #1d1d1d;
    font-size: 0.625em;
    padding-bottom: 5px;
    @media ${device.smallDesktop} {
      font-size: 1.125em;
    }
  }
`
