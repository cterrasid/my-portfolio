import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProjectCard = props => {
  const { image, title, description, repo, demo } = props;
  return (
    <article className="project-card__container">
      <img className="project-card__image" src={image} alt={title} />
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__links">
          <a
            className="project-card__link"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
          <a
            className="project-card__link"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};

export default ProjectCard;
