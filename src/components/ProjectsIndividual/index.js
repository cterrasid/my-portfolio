import React from 'react';
import ProjectCard from '../ProjectCard';
import './styles.scss';

const ProjectsIndividual = () => {
  return (
    <div className="projects-individual__container">
      <h2>Individual projects</h2>
      <ProjectCard
        image=""
        title="Life calendar"
        description="Single Page Application created with React. The app, is a simple life calendar to add your mood by day. It's allows to select two different moods (happy or sad) and to write a message according to your choose"
      />
      <ProjectCard
        image=""
        title="Pokemon memory game"
        description="Online cards generator for web developers, builded with Vanilla Javascript,
        HTML and CSS (SASS)."
      />
      <ProjectCard
        image=""
        title="Simple pokedex"
        description="Inherited code project, originally developed in Vanilla JavaScript, then
        refactored and converted into a React's Single Page Application."
      />
      <ProjectCard
        image=""
        title="Harry Potter character finder"
        description="Single Page Application for Eventbrite, using React. The app, is about an
        event interface using the Public Eventbrite API, which allows filtering by
        city and type of event."
      />
    </div>
  );
};

export default ProjectsIndividual;
