import React from 'react';
import PropTypes from 'prop-types';
import ProjectsGroup from '../ProjectsGroup';
import ProjectsIndividual from '../ProjectsIndividual';
import './styles.scss';

const Projects = props => {
  const {
    handleProjectIndividualClick,
    handleProjectGroupClick,
    projectType,
  } = props;

  return (
    <section className="projects__container" id="projects">
      <h1 className="projects__title">Projects</h1>
      <div className="projects__types">
        <h2 className="projects__type" onClick={handleProjectGroupClick}>
          Group projects
        </h2>
        <h2 className="projects__type" onClick={handleProjectIndividualClick}>
          Individual projects
        </h2>
      </div>
      {projectType === 'group' ? <ProjectsGroup /> : <ProjectsIndividual />}
    </section>
  );
};

Projects.propTypes = {
  handleProjectIndividualClick: PropTypes.func.isRequired,
  handleProjectGroupClick: PropTypes.func.isRequired,
  projectType: PropTypes.string.isRequired,
};

export default Projects;
