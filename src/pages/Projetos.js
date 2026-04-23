import React from 'react';
import PageHero from '../components/PageHero';
import { projects } from '../data';

export default function Projetos() {
  return (
    <>
      <PageHero
        kicker="PROJETOS"
        title="Uma apresentação pensada para reforçar qualidade, versatilidade e confiança no serviço."
        text="Aqui entram fotos reais, antes e depois, vídeos de aplicação e resultados finais. A estrutura abaixo já está pronta para você substituir pelos materiais reais da empresa."
        primaryLabel="Falar sobre meu projeto"
      />

      <section className="section-block projetos-premium-section">
        <div className="container">
          <div className="section-heading between projetos-premium-heading">
            <div>
              <span className="section-kicker projetos-premium-anim-1">PORTFÓLIO</span>
              <h2 className="projetos-premium-title projetos-premium-anim-2">
                Resultados pensados para transmitir impacto visual, técnica e confiança.
              </h2>
              <p className="projetos-premium-text projetos-premium-anim-3">
                A apresentação dos projetos reforça a versatilidade da aplicação em
                diferentes contextos, mostrando acabamento, padrão visual e presença
                profissional em cada ambiente.
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