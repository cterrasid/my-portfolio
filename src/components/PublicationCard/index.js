import React from 'react';
import es from '../../assets/es.json';
import spanish from '../../images/spanish.svg';
import PropTypes from 'prop-types';
import './styles.scss';

const PublicationCard = props => {
  const { name, language, description, link } = props;
  const linkTo = es.links.link;

  return (
    <article className="publication-card__container">
      <h2 className="publication-card__name">
        {name}
        <img
          className="publication-card__language"
          src={spanish}
          alt="ES/"
        />
      </h2>

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
