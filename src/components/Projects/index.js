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
    <section className="projects__container section" id="projects">
      <h2 className="projects__title title">Projects</h2>
      <div className="projects__types">
        <h3 className="projects__type" onClick={handleProjectGroupClick}>
          Group projects
        </h3>
        <h3 className="projects__type" onClick={handleProjectIndividualClick}>
          Individual projects
        </h3>
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
