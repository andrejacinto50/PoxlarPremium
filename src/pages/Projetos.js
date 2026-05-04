import React from 'react';
import PageHero from '../components/PageHero';
import { projects } from '../data';

export default function Projetos() {
  return (
    <>
      <PageHero
        kicker="PROJETOS"
        title="Projetos que mostram na prática o padrão de acabamento, resistência e resultado final."
        text="Cada aplicação é pensada para unir estética, durabilidade e valorização do ambiente, independente do tipo de espaço."
        primaryLabel="Falar sobre meu projeto"
      />

      <section className="section-block projetos-premium-section">
        <div className="container">
          <div className="section-heading between projetos-premium-heading">
            <div>
              <span className="section-kicker projetos-premium-anim-1">PORTFÓLIO</span>

              <h2 className="projetos-premium-title projetos-premium-anim-2">
                Resultados reais que reforçam confiança e percepção de valor.
              </h2>

              <p className="projetos-premium-text projetos-premium-anim-3">
                Aqui você visualiza na prática como o acabamento impacta o ambiente.
                Cada projeto representa organização, técnica e um resultado que valoriza o espaço.
              </p>
            </div>
          </div>

          <div className="card-grid three-columns projetos-premium-grid">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`project-card large projetos-premium-card projetos-premium-anim-${Math.min(index + 1, 5)}`}
              >
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div
                  className="project-image projetos-premium-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}