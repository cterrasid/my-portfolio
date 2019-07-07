import React from 'react';
import './styles.scss';

const PublicationCard = props => {
  const { title, language, description, link } = props;
  return (
    <section className="publications__container" id="publications">
      <h1 className="publications__section-title">Publications</h1>
      <h3 className="publications__title">"El soundtrack del aprendiz"</h3>
      <h4 className="publications__language">ES</h4>
      <p>{description}</p>
      <a
        className="publications__link"
        href="https://medium.com/@clarette.terrasi/el-soundtrack-del-aprendiz-8d1e3d9c1b44"
        target="_blank"
        rel="noopener noreferrer"
      >
        link
      </a>
    </section>
  );
};

export default PublicationCard;
