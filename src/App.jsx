import { useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import NavbarTwo from "../components/NavbarTwo.jsx";
import Hero from "../components/Hero.jsx";
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Contact from '../components/Contact.jsx';
import Links from '../components/Links.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      {isMenuOpen && <NavbarTwo isMenuOpen={isMenuOpen}/>}
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Links />
    </>
  )
}

export default App;
