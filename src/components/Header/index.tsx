import { Link } from 'react-router-dom'
import { StyledHeader, StyledLogoContainer } from './style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import logo from '../../../assets/images/logo.png'
import { useSelector } from 'react-redux'
import { selectAuthentication } from '../../utils/selectors'

export default function Header() {
  const isLoggedIn = useSelector(selectAuthentication)?.token != null

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogoContainer>
          <img src={logo} alt="Logo Phenix" />
          <h1>Phenix</h1>
        </StyledLogoContainer>
      </Link>
      {isLoggedIn ? (
        <Link to={'test'}>Account</Link>
      ) : (
        <Link to="login">
          Login
          <AccountCircleIcon color="primary" />
        </Link>
      )}
    </StyledHeader>
  )
}
