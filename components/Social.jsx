import LinkedInPic from "../images/linkedin-icon.svg"
import GithubPic from "../images/github-icon.svg"
import TwitterPic from "../images/twitter-icon.svg"

export default function Social() {
  return (
    <section className="links">
      <div className="links-container">
        <h3 className="find-me">Find me on...</h3>
        <div className="link-icons">
          <a
            href="https://www.linkedin.com/in/keith-petryshyn-886b5016/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LinkedInPic}
              className="icon linkedin"
              alt="linkedin icon"
            />
          </a>
          <a
            href="https://github.com/KeithPetr"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GithubPic}
              className="icon github"
              alt="github icon"
            />
          </a>
          <a
            href="https://twitter.com/KeithABCoding"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={TwitterPic}
              className="icon twitter"
              alt="twitter icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
