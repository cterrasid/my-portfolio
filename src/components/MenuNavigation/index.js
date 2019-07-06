import React from 'react';
import './styles.scss';

const Menu = () => {
  return (
    <nav className={'menu__container'}>
      <ul className="menu__items">
        <li className="menu__item">About me</li>
        <li className="menu__item">Projects</li>
        <li className="menu__item">Publications</li>
        <li className="menu__item">Contact</li>
      </ul>
      <a className="menu__language" href="#">
        Español
      </a>
    </nav>
  );
};

export default Menu;
