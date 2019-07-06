import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.scss';

const MenuNavigation = props => {
  const { handleButtonMenu, menuStatus } = props;

  return (
    <nav className={`menu__container ${menuStatus}`}>
      <ul className="menu__items">
        <Link smooth to="/#aboutMe" onClick={handleButtonMenu}>
          <li className="menu__item">About me</li>
        </Link>
        <Link smooth to="/#projects" onClick={handleButtonMenu}>
          <li className="menu__item">Projects</li>
        </Link>
        <Link smooth to="/#publications" onClick={handleButtonMenu}>
          <li className="menu__item">Publications</li>
        </Link>
        <Link smooth to="/#contact" onClick={handleButtonMenu}>
          <li className="menu__item">Contact</li>
        </Link>
      </ul>
      {/* <a className="menu__language" href="#">
        Español
      </a> */}
    </nav>
  );
};

MenuNavigation.propTypes = {
  handleButtonMenu: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default MenuNavigation;
