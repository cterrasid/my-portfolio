import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton';
import MenuNavigation from '../MenuNavigation';
import './styles.scss';

const Menu = props => {
  const { handleMenuClick, menuStatus } = props;

  return (
    <Fragment>
      <MenuButton handleMenuClick={handleMenuClick} menuStatus={menuStatus} />
      {menuStatus === 'open' ? (
        <MenuNavigation
          handleMenuClick={handleMenuClick}
          menuStatus={menuStatus}
        />
      ) : null}
    </Fragment>
  );
};

Menu.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default Menu;
