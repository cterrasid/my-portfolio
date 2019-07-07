import React from 'react';
import PublicationCard from '../PublicationCard';
import './styles.scss';

const Publications = () => {
  return (
    <section className="publications__container" id="publications">
      <h1 className="publications__section-title">Publications</h1>
      <PublicationCard
        name="El soundtrack del aprendiz"
        language="ES"
        description="Breve recorrido musical a través de las vivencias, triunfos y derrotas que padece un programador junior en pleno proceso de aprendizaje"
      />
    </section>
  );
};

export default Publications;
