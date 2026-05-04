import React from 'react';
import PageHero from '../components/PageHero';
import { steps } from '../data';

export default function Processo() {
  return (
    <>
      <PageHero
        kicker="PROCESSO"
        title="Um processo técnico pensado para entregar mais segurança, durabilidade e acabamento profissional."
        text="Cada etapa é planejada para garantir aderência, resistência e um resultado final que valoriza o ambiente."
      />

      <section className="section-block processo-premium-section">
        <div className="container">
          <div className="section-heading processo-premium-heading">
            <span className="section-kicker processo-anim-1">ETAPAS</span>

            <h2 className="processo-premium-title processo-anim-2">
              Da análise inicial à entrega, cada detalhe influencia no resultado.
            </h2>

            <p className="processo-premium-text processo-anim-3">
              Um piso bem executado começa antes da aplicação. Por isso, o processo
              envolve avaliação do ambiente, preparação correta da superfície e execução
              técnica para garantir um acabamento uniforme, resistente e durável.
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