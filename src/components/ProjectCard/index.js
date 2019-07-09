import React from 'react';
import es from '../../assets/es.json';
import PropTypes from 'prop-types';
import './styles.scss';

const ProjectCard = props => {
  const { image, name, description, repository, page } = props;
  const { repo, demo } = es.links;

  return (
    <article className="project-card__container">
      <img className="project-card__image" src={image} alt={name} />
      <div className="project-card__content">
        <h2 className="project-card__name">{name}</h2>
        <p className="project-card__description">{description}</p>
        <div className="project-card__links">
          <a
            className="project-card__link"
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo}
          </a>
          <a
            className="project-card__link"
            href={page}
            target="_blank"
            rel="noopener noreferrer"
          >
            {demo}
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};

export default ProjectCard;
