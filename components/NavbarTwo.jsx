import PropTypes from 'prop-types';

export default function NavbarTwo({isMenuOpen}) {
  return (
    <ul className={isMenuOpen ? 'nav-bar-two open' : 'nav-bar-two'}>
      <a href="#skills" className="nav-item-two">
        <li>Skills</li>
      </a>
      <a href="#portfolio" className="nav-item-two">
        <li>Portfolio</li>
      </a>
      <a href="#about-me" className="nav-item-two">
        <li>About Me</li>
      </a>
      <a href="#contact" className="nav-item-two">
        <li>Contact</li>
      </a>
    </ul>
  );
}

NavbarTwo.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};