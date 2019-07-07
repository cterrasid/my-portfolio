import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Hero from '../Hero';
import './styles.scss';

const Header = props => {
  const { handleMenuClick, menuStatus } = props;

  return (
    <header className="header__container">
      <Menu handleMenuClick={handleMenuClick} menuStatus={menuStatus} />
      <Hero />
    </header>
  );
};

Header.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default Header;
