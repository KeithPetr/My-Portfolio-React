import PropTypes from 'prop-types';

export default function ProjectCard({cardData}) {
  return (
    <div className="portfolio-card">
      <img
        src={cardData.src}
        className="screenshot"
        alt={`${cardData.title} Screenshot`}
      />
      <h3 className="link-title">{cardData.title}</h3>
      <h6 className="update">{cardData.update}</h6>
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
      update: PropTypes.string.isRequired,
    }).isRequired,
  };