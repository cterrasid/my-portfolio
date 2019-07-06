import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.scss';

const Menu = () => {
  return (
    <nav className={'menu__container'}>
      <ul className="menu__items">
        <Link smooth to="/#aboutMe">
          <li className="menu__item">About me</li>
        </Link>
        <Link smooth to="/#projects">
          <li className="menu__item">Projects</li>
        </Link>
        <Link smooth to="/#publications">
          <li className="menu__item">Publications</li>
        </Link>
        <Link smooth to="/#contact">
          <li className="menu__item">Contact</li>
        </Link>
      </ul>
      <a className="menu__language" href="#">
        Español
      </a>
    </nav>
  );
};

export default Menu;
