import React from 'react';
import es from '../../assets/es.json';
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
  const { title, group, individual } = es.projects;

  return (
    <section className="projects__container section" id="projects">
      <h2 className="projects__title title">{title}</h2>
      <div className="projects__types">
        <h3 className="projects__type" onClick={handleProjectGroupClick}>
          {group.title}
        </h3>
        <h3 className="projects__type" onClick={handleProjectIndividualClick}>
          {individual.title}
        </h3>
      </div>
      {projectType === 'group' ? (
        <ProjectsGroup />
      ) : (
        <ProjectsIndividual />
      )}
    </section>
  );
};

Projects.propTypes = {
  handleProjectIndividualClick: PropTypes.func.isRequired,
  handleProjectGroupClick: PropTypes.func.isRequired,
  projectType: PropTypes.string.isRequired,
};

export default Projects;
