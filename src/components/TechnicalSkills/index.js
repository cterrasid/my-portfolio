import React from 'react';
import es from '../../assets/es.json';
import HTML5 from '../../images/html5.png';
import CSS3 from '../../images/css3.png';
import SASS from '../../images/sass.svg';
import JavaScript from '../../images/javascript.png';
import Reactjs from '../../images/react.png';
import GIT from '../../images/git.png';
import VsCode from '../../images/vscode.png';
import npm from '../../images/npm.png';
import Terminal from '../../images/terminal.png';
import ESLint from '../../images/eslint.svg';
import Prettier from '../../images/prettier.png';
import Slack from '../../images/slack.png';
import SCRUM from '../../images/scrum.png';
import Trello from '../../images/trello.png';
import './styles.scss';

const TechnicalSkills = () => {
  const {
    web_layout,
    web_programming,
    dev_tools,
    clean_code,
    communication,
  } = es.about_me.tech_skills.skills;

  return (
    <div className="tech-skills__container">
      <div className="tech-skills__group-skills">
        <h4 className="tech-skills__subtitle">{web_layout}</h4>
        <ul className="tech-skills__list">
          <li>
            <img className="tech-skills__skill" src={HTML5} alt="html5 logo" />
          </li>
          <li>
            <img className="tech-skills__skill" src={CSS3} alt="css3 logo" />
          </li>
          <li>
            <img className="tech-skills__skill" src={SASS} alt="sass logo" />
          </li>
        </ul>
      </div>
      <div className="tech-skills__group-skills">
        <h4 className="tech-skills__subtitle">{web_programming}</h4>
        <ul className="tech-skills__list">
          <li>
            <img
              className="tech-skills__skill"
              src={JavaScript}
              alt="javascript logo"
            />
          </li>
          <li>
            <img
              className="tech-skills__skill"
              src={Reactjs}
              alt="react logo"
            />
          </li>
        </ul>
      </div>
      <div className="tech-skills__group-skills">
        <h4 className="tech-skills__subtitle">{dev_tools}</h4>
        <ul className="tech-skills__list">
          <li>
            <img className="tech-skills__skill" src={GIT} alt="git logo" />
          </li>
          <li>
            <img
              className="tech-skills__skill"
              src={VsCode}
              alt="vscode logo"
            />
          </li>
          <li>
            <img className="tech-skills__skill" src={npm} alt="npm logo" />
          </li>
          <li>
            <img
              className="tech-skills__skill"
              src={Terminal}
              alt="terminal logo"
            />
          </li>
        </ul>
      </div>
      <div className="tech-skills__group-skills">
        <h4 className="tech-skills__subtitle">{clean_code}</h4>
        <ul className="tech-skills__list">
          <li>
            <img
              className="tech-skills__skill"
              src={ESLint}
              alt="eslint logo"
            />
          </li>
          <li>
            <img
              className="tech-skills__skill"
              src={Prettier}
              alt="prettier logo"
            />
          </li>
        </ul>
      </div>
      <div className="tech-skills__group-skills">
        <h4 className="tech-skills__subtitle">{communication}</h4>
        <ul className="tech-skills__list">
          <li>
            <img className="tech-skills__skill" src={Slack} alt="slack logo" />
          </li>
          <li>
            <img
              className="tech-skills__skill"
              src={Trello}
              alt="trello logo"
            />
          </li>
          <li>
            <img className="tech-skills__skill" src={SCRUM} alt="scrum logo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalSkills;
