import React from 'react';
import Header from '../Header';
import Main from '../Main';
import './styles.scss';

const Homepage = () => {
  return (
    <div className="homepage__container">
      <Header />
      <Main />
    </div>
  );
};

export default Homepage;
