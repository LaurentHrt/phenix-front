import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const StyledDropdown = styled.div`
  width: 170px;

  .custom-select {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    font-size: 1.25em;
    font-weight: 300;
    color: white;
    height: 60px;
    line-height: 60px;
    background: ${colors.primary};
    cursor: pointer;
    border-radius: 5px;
  }

  .custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    background: ${colors.primary};
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .custom-select.open {
    .custom-options {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }

    .custom-select__trigger {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .custom-option {
    position: relative;
    display: block;
    margin: 0 20px 0;
    font-size: 1.375em;
    font-weight: 300;
    color: white;
    line-height: 60px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover,
    &:focus {
      cursor: pointer;
      text-decoration: underline;
    }
    &.selected {
      display: none;
    }
    &:not(.selected) {
      border-top: solid 1px white;
    }
  }

  .arrow {
    position: relative;
    height: 15px;
    width: 15px;
  }
  .arrow::before,
  .arrow::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }
  .arrow::before {
    left: -5px;
    transform: rotate(45deg);
    background-color: white;
  }
  .arrow::after {
    left: 5px;
    transform: rotate(-45deg);
    background-color: white;
  }
  .open .arrow::before {
    left: -5px;
    transform: rotate(-45deg);
  }
  .open .arrow::after {
    left: 5px;
    transform: rotate(45deg);
  }
`
