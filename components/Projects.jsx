import {Link} from "react-router-dom"

export default function Projects() {
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
          <Link to="/project1">
            <div className="portfolio-card">
              <img
                src="images/Quizzical-App.png"
                className="screenshot"
                alt="picture of the Quizzical app start page"
              />
              <h2 className="link-title">Quizzical App</h2>
              <p className="project-description">
                This app creates random Quizzes using a trivia API and React.
              </p>
            </div>
          </Link>

          <a href="portfolio-item-two.html">
            <div className="portfolio-card">
              <img
                src="images/Tindog-App.png"
                className="screenshot"
                alt="picture of the tinder for dogs app"
              />
              <h2 className="link-title">Tindog</h2>
              <p className="project-description">
                This app lets users select the profiles they like and displays
                the results.
              </p>
            </div>
          </a>
          <a href="portfolio-item-three.html">
            <div className="portfolio-card">
              <img
                src="images/Invoice-Creator-App.png"
                className="screenshot"
                alt="picture of the invoice creator"
              />
              <h2 className="link-title">Invoice Creator</h2>
              <p className="project-description">
                This app allows the user to create a list of tasks and calculate
                the total price.
              </p>
            </div>
          </a>
          <a href="portfolio-item-four.html">
            <div className="portfolio-card">
              <img
                src="images/Texterly-App.png"
                className="screenshot"
                alt="picture of the texterly ai app"
              />
              <h2 className="link-title">Texterly AI</h2>
              <p className="project-description">
                This app allows the user to enter in text, analyze it and have
                it returned corrected.
              </p>
            </div>
          </a>
          <a href="portfolio-item-five.html">
            <div className="portfolio-card">
              <img
                src="images/Channel-Search-App.png"
                className="screenshot"
                alt="picture of the channel search app"
              />
              <h2 className="link-title">Youtube Channel Search</h2>
              <p className="project-description">
                This project searches videos within different Youtube channels
                and has a responsive design.
              </p>
            </div>
          </a>
          <a href="portfolio-item-six.html">
            <div className="portfolio-card">
              <img
                src="images/Movie-Watchlist-App.png"
                className="screenshot"
                alt="picture of the color generator app"
              />
              <h2 className="link-title">Movie Watchlist</h2>
              <p className="project-description">
                This app allows the user to search through a database of movies
                and add them to a watchlist page.
              </p>
            </div>
          </a>
        </div>
        <p className="portfolio-bottom-description">
          If you like my work and would like to collaborate, please feel free to
          reach out to me anytime.
        </p>
        <a href="#contact">
          <button type="button" className="btn">
            Get in touch with me
          </button>
        </a>
      </div>
    </section>
  );
}
