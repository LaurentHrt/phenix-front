import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const StyledPhotographerCard = styled.section`
  text-align: center;
  transition: all 0.5s cubic-bezier(0.34, 0.07, 0.26, 1);
  &:hover {
    transform: scale(1.05);
    img {
      transform: scale(1.1);
    }
  }
`
export const StyledPortrait = styled.div`
  img {
    transform-origin: top;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 300ms cubic-bezier(0.49, 0.19, 0.1, 0.99);
  }
`

export const StyledName = styled.div`
  color: ${colors.secondary};
  font-size: 2.25em;
  padding-top: 20px;
  padding-bottom: 5px;
`

export const StyledCity = styled.div`
  color: ${colors.primary};
  padding-bottom: 5px;
`

export const StyledTagline = styled.div`
  font-size: 0.8em;
  padding-bottom: 5px;
`

export const StyledPrice = styled.div`
  padding-bottom: 10px;
  color: #757575;
  font-size: 0.7em;
`
