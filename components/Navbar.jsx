import PropTypes from 'prop-types';

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
        <a href="#skills" className="nav-item">
          <li>Skills</li>
        </a>
        <a href="#portfolio" className="nav-item">
          <li>Portfolio</li>
        </a>
        <a href="#about-me" className="nav-item">
          <li>About Me</li>
        </a>
        <a href="#contact" className="nav-item">
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
}

Navbar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
}