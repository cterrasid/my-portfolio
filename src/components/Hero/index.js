import React from 'react';
import es from '../../assets/es.json';
import './styles.scss';

const Hero = () => {
  const { name, job } = es.hero;

  return (
    <div className="hero__container section" id="hero">
      <span className="hero__profile" />
      <h1 className="hero__title">{name}</h1>
      <h2 className="hero__subtitle">{job}</h2>
    </div>
  );
};

export default Hero;
