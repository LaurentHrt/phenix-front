import { StyledTag } from './style'

interface tagProps {
  tag: string
}

export default function Tag({ tag }: tagProps) {
  return <StyledTag>#{tag}</StyledTag>
}
