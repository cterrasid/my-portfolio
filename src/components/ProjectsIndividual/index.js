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
        repo="https://github.com/Adalab/f-online-life-calendar-cterrasid"
        demo="http://beta.adalab.es/f-online-life-calendar-cterrasid/"
      />
      <ProjectCard
        image=""
        title="Pokemon memory game"
        description="Online cards generator for web developers, builded with Vanilla Javascript,
        HTML and CSS (SASS)."
        repo="https://github.com/cterrasid/pokemon-memorygame"
        demo="https://cterrasid.github.io/pokemon-memorygame/"
      />
      <ProjectCard
        image=""
        title="Simple pokedex"
        description="Inherited code project, originally developed in Vanilla JavaScript, then
        refactored and converted into a React's Single Page Application."
        repo="https://github.com/Adalab/f-online-pokemon-cterrasid"
        demo="http://beta.adalab.es/f-online-pokemon-cterrasid/#/"
      />
      <ProjectCard
        image=""
        title="Harry Potter character finder"
        description="Single Page Application for Eventbrite, using React. The app, is about an
        event interface using the Public Eventbrite API, which allows filtering by
        city and type of event."
        repo="https://github.com/Adalab/f-m3-evaluacion-final-cterrasid"
        demo="http://beta.adalab.es/f-m3-evaluacion-final-cterrasid/"
      />
    </div>
  );
};

export default ProjectsIndividual;
