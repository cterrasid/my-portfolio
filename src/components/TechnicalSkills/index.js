import React from 'react';
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
import './styles.scss';

const TechnicalSkills = () => {
  return (
    <div className="tech-skills__container">
      <div className="tech-skills__group-skills">
        <h4 className="tech-skills__subtitle">Web layout:</h4>
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
        <h4 className="tech-skills__subtitle">Web programming:</h4>
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
        <h4 className="tech-skills__subtitle">Development tools:</h4>
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
        <h4 className="tech-skills__subtitle">Clean code & good practices:</h4>
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
        <h4 className="tech-skills__subtitle">
          Communication and teamwork tools:
        </h4>
        <ul className="tech-skills__list">
          <li>
            <img className="tech-skills__skill" src={Slack} alt="slack logo" />
          </li>
          <li>Trello</li>
          <li>SCRUM</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalSkills;
