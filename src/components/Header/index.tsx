import { Link } from 'react-router-dom'
import { StyledHeader } from './style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Phenix</h1>
      </Link>
      <Link to="login">
        <AccountCircleIcon color="primary" />
      </Link>
    </StyledHeader>
  )
}
