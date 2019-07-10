import React from 'react';
import es from '../../assets/es.json';
import PropTypes from 'prop-types';
import TechnicalSkills from '../TechnicalSkills';
import SoftSkills from '../SoftSkills';
import './styles.scss';

const AboutMe = props => {
  const { handleSoftSkillClick, handleTechSkillClick, skillType } = props;
  const { title, description, tech_skills, soft_skills } = es.about_me;

  return (
    <section className="about-me__container section" id="aboutMe">
      <svg
        id="bigTriangleColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
      <h2 className="about-me__title title">{title}</h2>
      <p className="about-me__description">
        {description.p1}
        <br />
        {description.p2}
        <br />
        {description.p3}
      </p>
      <div className="about-me__skill-types">
        <h3 className="about-me__skill-type" onClick={handleTechSkillClick}>
          {tech_skills.title}
        </h3>
        <h3 className="about-me__skill-type" onClick={handleSoftSkillClick}>
          {soft_skills.title}
        </h3>
      </div>
      {skillType === 'tech' ? <TechnicalSkills /> : <SoftSkills />}
      <svg
        id="curveUpColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>
    </section>
  );
};

AboutMe.propTypes = {
  handleSoftSkillClick: PropTypes.func.isRequired,
  handleTechSkillClick: PropTypes.func.isRequired,
  skillType: PropTypes.string.isRequired,
};

export default AboutMe;
