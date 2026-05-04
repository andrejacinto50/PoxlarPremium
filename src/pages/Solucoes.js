import React from 'react';
import PageHero from '../components/PageHero';
import { services, highlights } from '../data';

export default function Solucoes() {
  return (
    <>
      <PageHero
        kicker="SOLUÇÕES"
        title="Soluções em pisos epóxi desenvolvidas para diferentes tipos de ambiente e nível de exigência."
        text="Cada projeto é analisado para entregar o melhor equilíbrio entre resistência, estética e durabilidade, de acordo com a necessidade real do espaço."
      />

      <section className="section-block solucoes-premium-section">
        <div className="container">
          <div className="section-heading solucoes-premium-heading">
            <span className="section-kicker solucoes-premium-anim-1">APLICAÇÕES</span>

            <h2 className="solucoes-premium-title solucoes-premium-anim-2">
              Cada ambiente exige uma solução específica para garantir o melhor resultado.
            </h2>

            <p className="solucoes-premium-text solucoes-premium-anim-3">
              O tipo de uso, o fluxo de pessoas e o objetivo do espaço influenciam diretamente
              na escolha da aplicação. Por isso, cada solução é definida de forma estratégica
              para entregar desempenho e acabamento profissional.
            </p>
          </div>

          <div className="card-grid three-columns solucoes-premium-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`info-card solucoes-premium-card solucoes-premium-anim-${Math.min(index + 1, 5)}`}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted-section solucoes-premium-advantages">
        <div className="container two-column align-start">
          <div className="solucoes-premium-anim-2">
            <span className="section-kicker">VANTAGENS</span>

            <h2 className="solucoes-premium-title">
              Mais do que estética: uma solução que melhora o ambiente no dia a dia.
            </h2>

            <p className="solucoes-premium-text">
              Além do visual moderno, esse tipo de aplicação facilita a limpeza,
              melhora a organização do espaço e transmite mais profissionalismo,
              seja em ambientes residenciais, comerciais ou industriais.
            </p>
          </div>

          <div className="bullet-grid">
            {highlights.map((item, index) => (
              <div
                className={`bullet-card solucoes-premium-bullet solucoes-premium-anim-${Math.min(index + 1, 5)}`}
                key={item}
              >
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}