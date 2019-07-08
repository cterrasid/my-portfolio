import React from 'react';
import ProjectCard from '../ProjectCard';
import memory from '../../images/memory.png';
import pokedex from '../../images/pokedex.png';
import harrypotter from '../../images/harrypotter.png';
import './styles.scss';

const ProjectsIndividual = () => {

  return (
    <div className="projects-individual__container">
      <ProjectCard
        image=""
        title="Life calendar"
        description="Description"
        repo="https://github.com/Adalab/f-online-life-calendar-cterrasid"
        demo="http://beta.adalab.es/f-online-life-calendar-cterrasid/"
      />
      <ProjectCard
        image={memory}
        title="Pokemon memory game"
        description="Description"
        repo="https://github.com/cterrasid/pokemon-memorygame"
        demo="https://cterrasid.github.io/pokemon-memorygame/"
      />
      <ProjectCard
        image={pokedex}
        title="Simple pokedex"
        description="Description"
        repo="https://github.com/Adalab/f-online-pokemon-cterrasid"
        demo="http://beta.adalab.es/f-online-pokemon-cterrasid/#/"
      />
      <ProjectCard
        image={harrypotter}
        title="Harry Potter character finder"
        description="Description"
        repo="https://github.com/Adalab/f-m3-evaluacion-final-cterrasid"
        demo="http://beta.adalab.es/f-m3-evaluacion-final-cterrasid/"
      />
    </div>
  );
};

export default ProjectsIndividual;
