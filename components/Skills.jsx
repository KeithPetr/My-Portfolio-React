import LayoutPic from "../images/layout.png"
import JsPic from "../images/javascript.png"
import ReactPic from "../images/react.png"
import Firebase from "../images/firebase.png"
import { HashLink } from "react-router-hash-link";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title-bold">Here&rsquo;s all the stuff I do</h2>
        <p className="skills-title-regular">
          This is a list of the coding languages I use
        </p>
        <div className="skills-grid">
          <div className="skills-card">
            <img src={LayoutPic} className="skill-image" />
            <h3 className="skill-title">HTML/CSS</h3>
          </div>
          <div className="skills-card">
            <img src={JsPic} className="skill-image" />
            <h3 className="skill-title">JavaScript</h3>
          </div>
          <div className="skills-card">
            <img src={ReactPic} className="skill-image" />
            <h3 className="skill-title">React</h3>
          </div>
          <div className="skills-card">
            <img src={Firebase} className="skill-image" />
            <h3 className="skill-title">Firebase</h3>
          </div>
        </div>
        <p className="skills-bottom-description">
          If you would like to see my work, please click on the button below.
        </p>
        <HashLink smooth to="/#portfolio">
          <button className="btn">See some of my recent work</button>
        </HashLink>
      </div>
    </section>
  );
}
