import React from 'react';

export default function PageHero({
  kicker,
  title,
  text,
  primaryLabel = 'Solicitar orçamento'
}) {
  return (
    <section className="page-hero page-hero-premium">
      <div className="container page-hero-grid page-hero-premium-grid">
        <div className="page-hero-premium-copy page-hero-fade-up">
          <span className="section-kicker page-hero-anim-1">{kicker}</span>

          <h1 className="page-hero-premium-title page-hero-anim-2">
            {title}
          </h1>

          <p className="page-hero-premium-text page-hero-anim-3">
            {text}
          </p>

          <div className="page-hero-premium-actions page-hero-anim-4">
            <a
              className="primary-button"
              href="https://wa.me/5548999999999?text=Olá%2C%20quero%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noreferrer"
            >
              {primaryLabel}
            </a>
          </div>
        </div>

        <div className="hero-visual-card page-hero-premium-visual page-hero-anim-5">
          <div className="hero-glow page-hero-premium-glow" />

          <div className="hero-panel page-hero-premium-panel">
            <span>Acabamento técnico</span>
            <strong>Visual moderno + alta resistência</strong>
            <p>
              Estrutura premium para espaços que precisam unir desempenho e
              apresentação profissional.
            </p>

            <div className="page-hero-premium-mini-list">
              <div className="page-hero-premium-mini-item">
                <strong>Durabilidade</strong>
                <span>Estrutura pensada para uso intenso</span>
              </div>

              <div className="page-hero-premium-mini-item">
                <strong>Estética</strong>
                <span>Mais presença visual para o ambiente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}