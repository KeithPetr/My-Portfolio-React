import PropTypes from 'prop-types';
import {HashLink} from "react-router-hash-link"

export default function Navbar({ toggleMenu }) {
  return (
    <header className="header-container">
      <img
        id="hamburger-icon"
        src="../images/hamburger-icon.png"
        alt="hamburger menu icon"
        onClick={toggleMenu}
      />
      <ul className="nav-bar">
        <HashLink to="/#skills" className="nav-item">
          <li>Skills</li>
        </HashLink>
        <HashLink to="/#portfolio" className="nav-item">
          <li>Portfolio</li>
        </HashLink>
        <HashLink to="/#about-me" className="nav-item">
          <li>About Me</li>
        </HashLink>
        <HashLink to="/#contact" className="nav-item">
          <li>Contact</li>
        </HashLink>
      </ul>
    </header>
  );
}

Navbar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
}