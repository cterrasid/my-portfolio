import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import './styles.scss';

const Header = props => {
  const { handleButtonMenu, menuStatus } = props;

  return (
    <header className="header__container">
      <Menu handleButtonMenu={handleButtonMenu} menuStatus={menuStatus} />
      <div className="hero__container">
        <img className="hero__profile" src="#" alt="Clarette" />
        <h1 className="hero__title">Clarette Terrasi Díaz</h1>
        <h2 className="hero__subtitle">Frontend Developer</h2>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleButtonMenu: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default Header;
