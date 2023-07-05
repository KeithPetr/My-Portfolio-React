import MePic from "../images/me-fishing.jpg"

export default function AboutMe() {
    return (
        <section className="about-me" id="about-me">
        <div className="about-me-container">
          <h2 className="about-me-title">A little about who I am</h2>
          <div className="about-me-flex">
            <img
              className="about-me-image"
              src={MePic}
              alt="Keith out fishing"
            />
            <div className="about-me-description">
              <p>
                As a new Front-end Web Developer based near Fredericton, I am
                excited to share my journey in the world of coding. I have
                recently completed coding bootcamps with TrueCoders and Scrimba
                which introduced me to HTML, CSS, JavaScript, React, Firebase
                and a few other foundational topics. Currently, I am deepening
                my understanding of these technologies by pursuing the Front-end
                Career Path on Scrimba and developing projects to build up my
                work experience.
              </p>
              <p>
                In my time away from coding, I love being outside. I will be out
                either birding or fishing. I have a large collection of bird
                photos that I hope to turn into my own searchable gallery as I
                countinue to improve my coding skills. If it is too cold to do
                either of those those things, you will find me gaming. Video
                game designs and layouts are a large source of inspiration for
                how I like to design web pages and add functionality to them.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}