import { Link } from 'react-router-dom'
import { StyledHeader } from './style'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Phenix</h1>
      </Link>
    </StyledHeader>
  )
}
