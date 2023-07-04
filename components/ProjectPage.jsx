/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";
import Social from "./Social";
import {useParams} from "react-router-dom"
import data from "../src/ProjectInfo"

export default function ProjectPage({ toggleMenu, isMenuOpen }) {

const params = useParams()
const projectData = data.find(project => project.id === parseInt(params.id))

  return (
    <section className="project-background">
      <Navbar toggleMenu={toggleMenu} />
      <NavbarTwo isMenuOpen={isMenuOpen} />
      <section className="project-layout">
        <div className="project-layout-top">
          <img
            src={projectData.src}
            alt={projectData.title}
            className="project-image"
          />
          <div className="project-headings">
            <h1 className="project-title">{projectData.title}</h1>
            <p className="project-subheading">{projectData.subheading}</p>
          </div>
        </div>
        <div className="project-details">
          <h3>{projectData.detailsTitle}</h3>
          <p>{projectData.details}</p>
          <h3>Programming Languages Used</h3>
          <ul className="project-languages">
            {projectData.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <h3>Project Requirements</h3>
          <p>{projectData.requirements}</p>
          <p>{projectData.requirementsTwo}</p>
          <p className="source-code">The GitHub:</p>
          <a className="source-code-link" href={projectData.githubLink}>
            {projectData.githubLink}
          </a>
          <p className="click-on-image">
            Click on the image below to go to the application
          </p>
          <a
            className="project-gif"
            href={projectData.netlify}
            target="_blank"
            rel="noreferrer"
          >
            <img src={projectData.gif} alt={projectData.gifAlt} />
          </a>
        </div>
      </section>
      <Social />
    </section>
  );
}
