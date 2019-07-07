import React from 'react';
import ProjectCard from '../ProjectCard';
import './styles.scss';

const ProjectsGroup = () => {
  return (
    <div className="projects-group__container">
      <h2>Group projects</h2>
      <ProjectCard
        image=""
        title="Contact website: Corchangulo's Squad"
        description="Corporative, responsive and accessible website, developed using HTML and CSS (SASS)."
      />
      <ProjectCard
        image=""
        title="Interactive webapp: Awesome Profile Cards"
        description="Online cards generator for web developers, builded with Vanilla Javascript,
        HTML and CSS (SASS)."
      />
      <ProjectCard
        image=""
        title="ReactJs Single Page Application"
        description="Inherited code project, originally developed in Vanilla JavaScript, then
        refactored and converted into a React's Single Page Application."
      />
      <ProjectCard
        image=""
        title="Events interface for Eventbrite"
        description="Single Page Application for Eventbrite, using React. The app, is about an
        event interface using the Public Eventbrite API, which allows filtering by
        city and type of event."
      />
    </div>
  );
};

export default ProjectsGroup;
