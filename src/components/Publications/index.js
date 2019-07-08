import React from 'react';
import PublicationCard from '../PublicationCard';
import './styles.scss';

const Publications = () => {
  return (
    <section className="publications__container section" id="publications">
      <h2 className="publications__title title">Publications</h2>
      <PublicationCard
        name="El soundtrack del aprendiz"
        language="ES"
        description="Breve recorrido musical a través de las vivencias, triunfos y derrotas que padece una programadora junior en pleno proceso de aprendizaje."
        link="https://medium.com/@clarette.terrasi/el-soundtrack-del-aprendiz-8d1e3d9c1b44"
      />
    </section>
  );
};

export default Publications;
