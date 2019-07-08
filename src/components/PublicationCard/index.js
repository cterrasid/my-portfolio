import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PublicationCard = props => {
  const { name, language, description, link } = props;

  return (
    <article className="publication-card__container">
      <h2 className="publication-card__name">
        {name}
        <span className="publication-card__language">{language}</span>
      </h2>

      <p className="publication-card__description">{description}</p>
      <a
        className="publication-card__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        link
      </a>
    </article>
  );
};

PublicationCard.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PublicationCard;
