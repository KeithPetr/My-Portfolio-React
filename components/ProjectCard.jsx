import PropTypes from 'prop-types';

export default function ProjectCard({cardData}) {
  return (
    <div className="portfolio-card">
      <img
        src="images/Quizzical-App.png"
        className="screenshot"
        alt="picture of the Quizzical app start page"
      />
      <h2 className="link-title">{cardData.linkTitle}</h2>
      <p className="project-description">
        {cardData.linkDescription}
      </p>
    </div>
  );
}

ProjectCard.propTypes = {
    cardData: PropTypes.shape({
      linkTitle: PropTypes.string.isRequired,
      linkDescription: PropTypes.string.isRequired,
    }).isRequired,
  };