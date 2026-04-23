import React from 'react';
import PageHero from '../components/PageHero';
import { services, highlights } from '../data';

export default function Solucoes() {
  return (
    <>
      <PageHero
        kicker="SOLUÇÕES"
        title="Aplicações pensadas para diferentes contextos, sempre com padrão técnico e visual elevado."
        text="A Poxlar Pisos atende projetos em ambientes residenciais, comerciais e industriais, com soluções que unem performance, estética e praticidade."
      />

      <section className="section-block solucoes-premium-section">
        <div className="container">
          <div className="section-heading solucoes-premium-heading">
            <span className="section-kicker solucoes-premium-anim-1">APLICAÇÕES</span>
            <h2 className="solucoes-premium-title solucoes-premium-anim-2">
              Estruturas pensadas para diferentes ambientes e níveis de exigência.
            </h2>
            <p className="solucoes-premium-text solucoes-premium-anim-3">
              Cada solução é definida de acordo com o contexto do espaço, a rotina
              de uso e o padrão visual esperado, garantindo resultado técnico e
              apresentação profissional.
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
              Por que esse tipo de solução gera mais valor para o espaço?
            </h2>
            <p className="solucoes-premium-text">
              Além do aspecto visual, esse tipo de aplicação melhora a percepção
              do ambiente, reforça a organização do espaço e entrega mais praticidade
              no dia a dia.
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