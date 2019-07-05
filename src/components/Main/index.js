import React from 'react';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Publications from '../Publications';
import Contact from '../Contact';
import './styles.scss';

const Main = () => {
  return (
    <main className="main__container">
      <AboutMe />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
};

export default Main;
