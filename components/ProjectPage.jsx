/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";
import Social from "./Social";

export default function ProjectPage({ toggleMenu, isMenuOpen }) {
  return (
    <body className="project-background">
      <Navbar toggleMenu={toggleMenu} />
      <NavbarTwo isMenuOpen={isMenuOpen} />
      <section className="project-layout">
        <div className="project-layout-top">
          <img
            src="images/Quizzical-App.png"
            alt="my quiz react project"
            className="project-image"
          />
          <div className="project-headings">
            <h1 className="project-title">Qizzical App</h1>
            <p className="project-subheading">A React Based Project</p>
          </div>
        </div>
        <div className="project-details">
          <h3>A Scrimba FrontEnd Developer Path Project</h3>
          <p>
            This project accesses the Open Trivia Database to generate random
            quizzes. The quiz page generates random questions and the
            associcated answers to them. The user can then select an answer to
            each question. Finally, the user can click the chekc answer button
            to see how many questions they correctly answered.
          </p>
          <h3>Programming Languages Used</h3>
          <ul className="project-languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JSX</li>
            <li>React</li>
          </ul>
          <h3>Project Requirements</h3>
          <p>
            There were 4 main requirements for this project. The first one
            required me to create 2 screens, a start page and a quiz page. The
            second requirement was to pull at least 5 questions from the API and
            display them. The third requirement was to tally all of the correct
            answers after the &rsquo;Check Answers&rsquo; button was clicked.
            The final requirement was to style the app according to a Figma
            file.
          </p>
          <p className="source-code">The GitHub:</p>
          <a
            className="source-code-link"
            href="https://github.com/KeithPetr/Quizzical-App"
          >
            https://github.com/KeithPetr/Quizzical-App
          </a>
          <p className="click-on-image">
            Click on the image below to go to the application
          </p>
          <a
            className="project-gif"
            href="https://keith-quizzical-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="gifs/Quizzical-Gif.gif" alt="quizical app gif" />
          </a>
        </div>
      </section>
      <Social />
    </body>
  );
}
