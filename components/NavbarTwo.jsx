import PropTypes from 'prop-types';
import {HashLink} from "react-router-hash-link"

export default function NavbarTwo({isMenuOpen}) {
  return (
    <ul className={isMenuOpen ? 'nav-bar-two open' : 'nav-bar-two'}>
      <HashLink smooth to="/#skills" className="nav-item-two">
        <li>Skills</li>
      </HashLink>
      <HashLink smooth to="/#portfolio" className="nav-item-two">
        <li>Portfolio</li>
      </HashLink>
      <HashLink smooth to="/#about-me" className="nav-item-two">
        <li>About Me</li>
      </HashLink>
      <HashLink smooth to="/#contact" className="nav-item-two">
        <li>Contact</li>
      </HashLink>
    </ul>
  );
}

NavbarTwo.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};