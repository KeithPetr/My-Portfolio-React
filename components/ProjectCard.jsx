import PropTypes from 'prop-types';

export default function ProjectCard({cardData}) {
  return (
    <div className="portfolio-card">
      <img
        src={cardData.src}
        className="screenshot"
        alt={`${cardData.title} Screenshot`}
      />
      <h2 className="link-title">{cardData.title}</h2>
      <p className="project-description">
        {cardData.linkDescription}
      </p>
    </div>
  );
}

ProjectCard.propTypes = {
    cardData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      linkDescription: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  };