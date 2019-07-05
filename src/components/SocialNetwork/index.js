import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SocialNetwork = props => {
  const { url, icon } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={icon} />
    </a>
  );
};

SocialNetwork.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SocialNetwork;
