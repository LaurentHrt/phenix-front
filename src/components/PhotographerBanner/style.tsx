import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { device } from '../../utils/style/responsive'

export const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${device.tablet} {
    background-color: ${colors.quadrary};
  }

  .card-banner-photograph__portrait {
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
    margin: 20px;
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
      border-radius: 50%;
      object-fit: cover;
      margin: auto;
    }
  }

  .card-banner-photograph__textContainer {
    order: -1;
    padding-right: 20px;
    @media ${device.tablet} {
      padding-left: 20px;
    }
  }

  .card-banner-photograph__name {
    color: ${colors.secondary};
    font-size: 2.25em;
    padding-top: 10px;
    padding-bottom: 5px;
    @media ${device.tablet} {
      font-size: 4em;
    }
  }

  .card-banner-photograph__city {
    color: ${colors.primary};
    font-size: 0.8125em;
    padding-bottom: 5px;
    @media ${device.tablet} {
      font-size: 1.5em;
    }
  }

  .card-banner-photograph__tagline {
    color: #1d1d1d;
    font-size: 0.625em;
    padding-bottom: 5px;
    @media ${device.tablet} {
      font-size: 1.125em;
    }
  }

  .card-banner-photograph__button {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    @media ${device.tablet} {
      transform: translate(0, -40px);
      position: initial;
    }
  }
`
