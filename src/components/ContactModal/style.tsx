import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledContactModal = styled.div`
  height: 100%;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
`

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
