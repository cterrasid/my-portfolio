import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SocialNetwork = props => {
  const { url, icon, name } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img className={`${name} social__icon`} src={icon} alt={`${name} logo`} />
    </a>
  );
};

SocialNetwork.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SocialNetwork;
