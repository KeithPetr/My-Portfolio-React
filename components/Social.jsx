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
              src="images/linkedin-icon.svg"
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
              src="images/github-icon.svg"
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
              src="images/twitter-icon.svg"
              className="icon twitter"
              alt="twitter icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
