import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton';
import './styles.scss';

const Menu = props => {
  const { handleButtonMenu, menuStatus } = props;

  return (
    <Fragment>
      <MenuButton handleButtonMenu={handleButtonMenu} menuStatus={menuStatus} />
      {menuStatus === 'open' ? (
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
      ) : null}
    </Fragment>
  );
};

Menu.propTypes = {
  handleButtonMenu: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default Menu;
