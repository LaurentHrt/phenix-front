import { Link } from 'react-router-dom'
import { StyledHeader } from './style'
import logo from '../../assets/img/logo/logo.svg'
import Taglist from '../Taglist'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="FishEye page d'accueil" />
      </Link>
      <Taglist />
      <Link to="photographers">
        <h1>Nos photographes</h1>
      </Link>
    </StyledHeader>
  )
}
