import React from 'react';
import PageHero from '../components/PageHero';
import { steps } from '../data';

export default function Processo() {
  return (
    <>
      <PageHero
        kicker="PROCESSO"
        title="Organização, preparo e execução para um resultado mais seguro e profissional."
        text="Cada etapa da aplicação influencia diretamente na durabilidade, na estética e no padrão final do ambiente."
      />

      <section className="section-block processo-premium-section">
        <div className="container">

          <div className="section-heading processo-premium-heading">
            <span className="section-kicker processo-anim-1">ETAPAS</span>
            <h2 className="processo-premium-title processo-anim-2">
              Uma execução estruturada para garantir qualidade em cada detalhe.
            </h2>
            <p className="processo-premium-text processo-anim-3">
              Do diagnóstico inicial até a entrega final, cada fase é pensada para
              evitar falhas, garantir aderência e entregar um acabamento de alto padrão.
            </p>
          </div>

          <div className="steps-grid processo-premium-grid">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`step-card expanded processo-premium-card processo-anim-${Math.min(index + 1, 5)}`}
              >
                <span className="processo-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}