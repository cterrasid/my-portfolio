import React from 'react';
import ProjectsGroup from '../ProjectsGroup';
import ProjectsIndividual from '../ProjectsIndividual';
import './styles.scss';

const Projects = () => {
  return (
    <section className="projects__container" id="projects">
      <h1 className="projects__title">Projects</h1>
      <ProjectsGroup />
      <ProjectsIndividual />
    </section>
  );
};

export default Projects;
