import { Link } from "react-router-dom";
import data from "../src/ProjectInfo";
import ProjectCard from "./ProjectCard";
import { HashLink } from "react-router-hash-link";

export default function Projects() {

  const projectCards = data.map(card => (
    <Link key={card.id} to={`/project/${card.id}`}>
      <ProjectCard cardData={card}/>
    </Link>
  ));

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">
          Here&rsquo;s some stuff I made recently
        </h2>
        <p className="portfolio-subtitle">
          Please click on one of the projects to view a description, the code,
          and a link to a live demo.
        </p>

        <div className="portfolio-grid">
          {projectCards}
        </div>

        <p className="portfolio-bottom-description">
          If you like my work and would like to collaborate, please feel free to
          reach out to me anytime.
        </p>
        <HashLink smooth to="/#contact">
          <button type="button" className="btn">
            Get in touch with me
          </button>
        </HashLink>
      </div>
    </section>
  );
}
