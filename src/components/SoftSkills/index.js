import React from 'react';
import es from '../../assets/es.json';
import './styles.scss';

const SoftSkills = () => {
  const {
    teamwork,
    listening,
    learning,
    humor,
  } = es.about_me.soft_skills.skills;

  return (
    <div className="soft-skills__container">
      <ul className="soft-skills__list">
        <li className="soft-skills__skill">{teamwork}</li>
        <li className="soft-skills__skill">{listening}</li>
        <li className="soft-skills__skill">{learning}</li>
        <li className="soft-skills__skill">{humor}</li>
      </ul>
    </div>
  );
};

export default SoftSkills;
