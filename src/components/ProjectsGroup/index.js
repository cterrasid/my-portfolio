import React from 'react';
import es from '../../assets/es.json';
import ProjectCard from '../ProjectCard';
import './styles.scss';

const ProjectsGroup = props => {
  const { group } = es.projects;

  return (
    <ul className="projects-group__container">
      {group.project.map(item => (
        <li key={item.id}>
          <ProjectCard
            image={item.image}
            name={item.name}
            description={item.description}
            repository={item.repo}
            page={item.demo}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsGroup;
