import React from 'react';
import es from '../../assets/es.json';
import PropTypes from 'prop-types';
import './styles.scss';

const PublicationCard = props => {
  const { name, language, description, link } = props;
  const linkTo = es.links.link;

  return (
    <article className="publication-card__container">
      <div className="publication-card__info">
        <h2 className="publication-card__name">{name}</h2>
        <img className="publication-card__language" src={language} alt="ES/" />
      </div>
      <p className="publication-card__description">{description}</p>
      <a
        className="publication-card__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkTo}
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
