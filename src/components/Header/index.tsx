import { Link } from 'react-router-dom'
import { StyledHeader, StyledLogoContainer } from './style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import logo from '../../../assets/images/logo.png'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogoContainer>
          <img src={logo} alt="Logo Phenix" />
          <h1>Phenix</h1>
        </StyledLogoContainer>
      </Link>
      <Link to="login">
        <AccountCircleIcon color="primary" />
      </Link>
    </StyledHeader>
  )
}
