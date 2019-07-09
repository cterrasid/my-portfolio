import React from 'react';
import es from '../../assets/es.json';
import PublicationCard from '../PublicationCard';
import './styles.scss';

const Publications = () => {
  const { title, publication } = es.publications;

  return (
    <section className="publications__container section" id="publications">
      <svg
        id="curveDownColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C 50 100 80 100 100 0 Z" />
      </svg>
      <h2 className="publications__title title">{title}</h2>
      {publication.map(item => (
        <PublicationCard
          name={item.name}
          language={item.language}
          description={item.description}
          link={item.link}
        />
      ))}
    </section>
  );
};

export default Publications;
