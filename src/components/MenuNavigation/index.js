import React from 'react';
import PropTypes from 'prop-types';
import es from '../../assets/es.json';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.scss';

const MenuNavigation = props => {
  const { handleMenuClick, menuStatus } = props;
  const { about_me, projects, publications, contact } = es.menu;

  return (
    <nav className={`menu__container ${menuStatus}`}>
      <ul className="menu__items">
        <Link smooth to="/#aboutMe" onClick={handleMenuClick} className="menu__item-link">
          <li className="menu__item">{about_me}</li>
        </Link>
        <Link smooth to="/#projects" onClick={handleMenuClick} className="menu__item-link">
          <li className="menu__item">{projects}</li>
        </Link>
        <Link smooth to="/#publications" onClick={handleMenuClick} className="menu__item-link">
          <li className="menu__item">{publications}</li>
        </Link>
        <Link smooth to="/#contact" onClick={handleMenuClick} className="menu__item-link">
          <li className="menu__item">{contact}</li>
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
