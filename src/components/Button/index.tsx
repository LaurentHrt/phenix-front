import { StyledButton } from './style'

interface buttonProps {
  text: string
  onClick: object
}

export default function Button({ text }: buttonProps) {
  return <StyledButton>{text}</StyledButton>
}
