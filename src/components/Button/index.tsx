import { MouseEventHandler } from 'react'
import { StyledButton } from './style'

interface buttonProps {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ text, onClick }: buttonProps) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}
