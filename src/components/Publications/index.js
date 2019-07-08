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
        description=""
        link="https://medium.com/@clarette.terrasi/el-soundtrack-del-aprendiz-8d1e3d9c1b44"
      />
    </section>
  );
};

export default Publications;
