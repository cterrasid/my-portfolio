import React from 'react';
import ProjectCard from '../ProjectCard';
import corchangulo from '../../images/corchangulo.png';
import apcjs from '../../images/apc-javascript.png';
import apcreact from '../../images/apc-reactjs.png';
import events from '../../images/eventbrite-events.png';
import './styles.scss';

const ProjectsGroup = () => {

  return (
    <div className="projects-group__container">
      <ProjectCard
        image={corchangulo}
        name="Contact website: Corchangulo's Squad"
        description="Corporative, responsive and accessible website, developed using HTML and CSS (SASS)."
        repo="https://github.com/cterrasid/corchangulos-squad-website"
        demo="http://beta.adalab.es/f-m1-corchangulossquad/"
      />
      <ProjectCard
        image={apcjs}
        name="Interactive webapp: Awesome Profile Cards"
        description="Online cards generator for web developers, builded with Vanilla Javascript,
        HTML and CSS (SASS)."
        repo="https://github.com/cterrasid/fairfax-m2-frontNerds"
        demo="http://beta.adalab.es/fairfax-m2-frontNerds/"
      />
      <ProjectCard
        image={apcreact}
        name="ReactJs Single Page Application"
        description="Inherited code project, originally developed in Vanilla JavaScript, then
        refactored and converted into a React's Single Page Application."
        repo="https://github.com/cterrasid/fairfax-m3-groot.join"
        demo="http://beta.adalab.es/fairfax-m3-groot.join/"
      />
      <ProjectCard
        image={events}
        name="Events interface for Eventbrite"
        description="Single Page Application for Eventbrite, using React. The app, is about an
        event interface using the Public Eventbrite API, which allows filtering by
        city and type of event."
        repo="https://github.com/cterrasid/eventbrite-events"
        demo="http://beta.adalab.es/fairfax-m4-eventbrite-eventos/#/"
      />
    </div>
  );
};

export default ProjectsGroup;
