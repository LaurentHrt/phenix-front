import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { device } from '../../utils/style/responsive'

export const StyledContactModal = styled.div`
    .content {
      position: relative;
      box-sizing: border-box;
      background-color: map-get($map: $colors, $key: secondary-light);
      border-radius: $standard-border-radius;
      margin: 0;
      border: 1px solid #888;
      padding: 20px;
      height: 100%;
      min-height: 600px;
      animation: modalOpen 0.5s;

      @media ${device.tablet} {
        margin: 30px auto;
        width: 400px;
        height: 90vh;
        max-height: 800px;
      }

      .text-control,
      .textarea-control {
        box-sizing: border-box;
        width: 100%;
        border-radius: $standard-border-radius;
        border: none;
        height: 35px;
        margin-top: 5px;
        padding: 5px;
      }

      .textarea-control {
        resize: none;
        flex-grow: 2;
      }

      .content__title {
        font-size: 2.25em;
        margin-top: 0;
        margin-bottom: 20px;
        padding-right: 50px;
      }

      .content__btn-submit {
        align-self: center;

        @media ${device.tablet} {
          align-self: flex-start;
        }
      }

      .content__close {
        @include close-btn-style;
      }

      .content__confirmation {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5625em;
        height: 100%;
      }
    }
  }

  .formData {
    margin-bottom: 15px;

    &:nth-child(5) {
      display: flex;
      flex-direction: column;
      flex-grow: 2;
      margin-bottom: 30px;
    }
  }

  .formData[data-error]::after {
    content: attr(data-error);
    color: red;
    display: block;
    text-align: right;
    height: 0;
    opacity: 0;
    transition: 0.3s;
  }

  .formData[data-error-visible='true']::after {
    opacity: 1;
  }

  .formData[data-error-visible='true'] {
    .text-control,
    .textarea-control {
      border: 3px solid red;
    }
  }
`
