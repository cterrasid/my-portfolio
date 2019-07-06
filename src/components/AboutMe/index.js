import React from 'react';
import './styles.scss';

const AboutMe = () => {
  return (
    <section className="about-me__container">
      <p className="about-me__description" />
      <div className="about-me__stack">
        <h2>Stack</h2>
        <h3>Web layout:</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
        </ul>
        <h3>Web programming:</h3>
        <ul>
          <li>Vanilla JavaScript</li>
          <li>React</li>
        </ul>
        <h3>Development tools:</h3>
        <ul>
          <li>Git</li>
          <li>VSCode</li>
          <li>Terminal</li>
        </ul>
        <h3>Clean code & good practices:</h3>
        <ul>
          <li>ESLint</li>
          <li>Prettier</li>
        </ul>
        <h3>Communication and teamwork tools:</h3>
        <ul>
          <li>Slack</li>
          <li>Trello</li>
          <li>SCRUM</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
