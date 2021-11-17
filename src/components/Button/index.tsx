import { StyledButton } from './style'

interface buttonProps {
  text: string
}

export default function Button({ text }: buttonProps) {
  return <StyledButton>{text}</StyledButton>
}
