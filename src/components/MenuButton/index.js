import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MenuButton = props => {
  const { handleButtonMenu, menuStatus } = props;

  return (
    <div className="menu-button__container">
      <input
        type="checkbox"
        id="checkbox"
        className={`menu-button__checkbox ${menuStatus}`}
        onClick={handleButtonMenu}
      />
      <label htmlFor="checkbox" className="menu-button__btn">
        <div className="menu-button__icon" />
      </label>
    </div>
  );
};

MenuButton.propTypes = {
  handleButtonMenu: PropTypes.func.isRequired,
  menuStatus: PropTypes.string.isRequired,
};

export default MenuButton;
