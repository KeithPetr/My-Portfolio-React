import { HashLink } from "react-router-hash-link";
import ProfilePic from "../images/Profile.jpg"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <img
          src={ProfilePic}
          className="profile-pic"
          alt="Picutre of Keith Petryshyn"
        />
        <div className="intro-container">
          <h1 className="intro">
            Hi, I&rsquo;m <span className="full-name">Keith Petryshyn</span>
          </h1>
          <h2 className="front-end-dev">Front-end Dev</h2>
          <HashLink smooth to="/#skills">
            <button className="btn" type="button">
              Learn about what I do
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
