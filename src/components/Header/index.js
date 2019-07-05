import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header className="header__container">
      <nav className="header__nav">
        <ul className="header__nav-menu">
          <li className="header__nav-menu--item">About me</li>
          <li className="header__nav-menu--item">Projects</li>
          <li className="header__nav-menu--item">Publications</li>
          <li className="header__nav-menu--item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
