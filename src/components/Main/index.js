import React from 'react';
import PropTypes from 'prop-types';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Publications from '../Publications';
import Contact from '../Contact';
import './styles.scss';

const Main = props => {
  const {
    handleProjectIndividualClick,
    handleProjectGroupClick,
    handleSoftSkillClick,
    handleTechSkillClick,
    skillType,
    projectType,
  } = props;

  return (
    <main className="main__container">
      <AboutMe
        handleSoftSkillClick={handleSoftSkillClick}
        handleTechSkillClick={handleTechSkillClick}
        skillType={skillType}
      />
      <Projects
        handleProjectIndividualClick={handleProjectIndividualClick}
        handleProjectGroupClick={handleProjectGroupClick}
        projectType={projectType}
      />
      <Publications />
      <Contact />
    </main>
  );
};

Main.propTypes = {
  handleProjectIndividualClick: PropTypes.func.isRequired,
  handleProjectGroupClick: PropTypes.func.isRequired,
  projectType: PropTypes.string.isRequired,
};

export default Main;
