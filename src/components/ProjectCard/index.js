import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProjectCard = props => {
  const { image, title, description } = props;
  return (
    <article className="project-card__container">
      <img className="project-card__image" src={image} alt={title} />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
    </article>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
