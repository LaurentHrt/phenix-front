import styled from 'styled-components'

export const StyledNewMediaModal = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const StyledImagePreview = styled.div`
  height: 40vh;
  img {
    height: 100%;
    width: auto;
  }
`

export const StyledFileInput = styled('input')({
  display: 'none',
})
