import React from 'react';
import './styles.scss';

const Hero = () => {
  return (
    <div className="hero__container section" id="hero">
      <span className="hero__profile" />
      <h1 className="hero__title">Clarette Terrasi Díaz</h1>
      <h2 className="hero__subtitle">Frontend Developer</h2>
      <svg
        id="bigTriangleColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="50"
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
    </div>
  );
};

export default Hero;
