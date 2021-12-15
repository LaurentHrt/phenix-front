import styled from 'styled-components'
import { device } from '../../utils/style/responsive'
import colors from '../../utils/style/colors'

export const StyledMediaCard = styled.section`
  min-width: 100px;

  .media {
    img,
    video {
      width: 100%;
      height: 60vw;
      object-fit: cover;
      object-position: top;
      border-radius: $standard-border-radius;

      @media ${device.tablet} {
        height: 35vw;
      }

      @media ${device.desktop} {
        height: 25vw;
      }
    }
  }

  .textContainer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.875em;
    font-weight: 500;
    color: ${colors.primary};
    @media ${device.tablet} {
      font-size: 1.5em;
    }
  }

  .title {
    font-weight: 400;
    flex-grow: 10;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .price {
    padding: 0 20px;
    white-space: nowrap;
  }

  .likes {
    white-space: nowrap;
    cursor: pointer;
  }
`
