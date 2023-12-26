import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand navbar-light ">
      <Link to="/" className="navbar-brand nav-link text-white">
        <img
          src={Logo}
          alt="logo"
          className="logo rounded d-inline-block  ms-5 me-3 "
        />
        MUSIC SALAS
      </Link>
    </nav>
  );
}

export default Navbar;
