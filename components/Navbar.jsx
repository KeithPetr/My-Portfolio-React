import PropTypes from 'prop-types';
import {HashLink} from "react-router-hash-link"
import HamburgerIcon from "../images/hamburger-icon.png"

export default function Navbar({ toggleMenu }) {
  return (
    <header className="header-container">
      <img
        id="hamburger-icon"
        src={HamburgerIcon}
        alt="hamburger menu icon"
        onClick={toggleMenu}
      />
      <ul className="nav-bar">
        <HashLink smooth to="/#skills" className="nav-item">
          <li>Skills</li>
        </HashLink>
        <HashLink smooth to="/#portfolio" className="nav-item">
          <li>Portfolio</li>
        </HashLink>
        <HashLink smooth to="/#about-me" className="nav-item">
          <li>About Me</li>
        </HashLink>
        <HashLink smooth to="/#contact" className="nav-item">
          <li>Contact</li>
        </HashLink>
      </ul>
    </header>
  );
}

Navbar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
}