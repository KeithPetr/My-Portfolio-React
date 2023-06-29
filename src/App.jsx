import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import NavbarTwo from "../components/NavbarTwo.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Contact from "../components/Contact.jsx";
import Links from "../components/Links.jsx";
import ProjectPage from "../components/ProjectPage.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Links />
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggleMenu={toggleMenu} />
        {isMenuOpen && <NavbarTwo isMenuOpen={isMenuOpen} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<ProjectPage isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
