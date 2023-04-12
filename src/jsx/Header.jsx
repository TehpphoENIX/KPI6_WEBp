import logo from '../img/logo.svg'
import '../css/Header.css'
import {Link} from "react-router-dom"

const Header = () => (
  <Link to='/'>
  <header class='main-header'><img class='main-header__logo' src={logo} alt='logo'/></header>
  </Link>
);

export default Header;