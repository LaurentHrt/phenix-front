import styled from 'styled-components'
import { device } from '../../utils/style/responsive'

export const StyledLoginPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4em;

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }

  @media ${device.smallDesktop} {
    flex-direction: row;
  }
`
export const StyledLoginContainer = styled.div``
export const StyledSigninContainer = styled.div``
