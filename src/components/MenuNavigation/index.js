import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.scss';

const MenuNavigation = props => {
  const { handleMenuClick, menuStatus } = props;

  return (
    <nav className={`menu__container ${menuStatus}`}>
      <ul className="menu__items">
        <Link smooth to="/#aboutMe" onClick={handleMenuClick}>
          <li className="menu__item">About me</li>
        </Link>
        <Link smooth to="/#projects" onClick={handleMenuClick}>
          <li className="menu__item">Projects</li>
        </Link>
        <Link smooth to="/#publications" onClick={handleMenuClick}>
          <li className="menu__item">Publications</li>
        </Link>
        <Link smooth to="/#contact" onClick={handleMenuClick}>
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
  handleMenuClick: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default MenuNavigation;
