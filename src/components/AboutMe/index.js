import React from 'react';
import TechnicalSkills from '../TechnicalSkills';
import './styles.scss';

const AboutMe = () => {
  return (
    <section className="about-me__container section" id="aboutMe">
      <h2 className="about-me__title title">About me</h2>
      <p className="about-me__description">Description</p>
      <TechnicalSkills />
    </section>
  );
};

export default AboutMe;
