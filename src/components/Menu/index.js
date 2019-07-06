import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton';
import MenuNavigation from '../MenuNavigation';
import './styles.scss';

const Menu = props => {
  const { handleButtonMenu, menuStatus } = props;

  return (
    <Fragment>
      <MenuButton handleButtonMenu={handleButtonMenu} menuStatus={menuStatus} />
      {menuStatus === 'open' ? <MenuNavigation /> : null}
    </Fragment>
  );
};

Menu.propTypes = {
  handleButtonMenu: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default Menu;
