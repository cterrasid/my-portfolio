import React from 'react';
import PropTypes from 'prop-types';
import TechnicalSkills from '../TechnicalSkills';
import SoftSkills from '../SoftSkills';
import './styles.scss';

const AboutMe = props => {
  const { handleSoftSkillClick, handleTechSkillClick, skillType } = props;

  return (
    <section className="about-me__container section" id="aboutMe">
      <h2 className="about-me__title title">About me</h2>
      <p className="about-me__description">Description</p>
      <div className="about-me__skill-types">
        <h3 className="about-me__skill-type" onClick={handleTechSkillClick}>
          Technical Skills
        </h3>
        <h3 className="about-me__skill-type" onClick={handleSoftSkillClick}>
          Soft Skills
        </h3>
      </div>
      {skillType === 'tech' ? <TechnicalSkills /> : <SoftSkills />}
    </section>
  );
};

AboutMe.propTypes = {
  handleSoftSkillClick: PropTypes.func.isRequired,
  handleTechSkillClick: PropTypes.func.isRequired,
  skillType: PropTypes.string.isRequired,
};

export default AboutMe;
