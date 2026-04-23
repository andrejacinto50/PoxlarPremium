import React from 'react';
import { NavLink } from 'react-router-dom';
import { services, highlights, projects, steps } from '../data';
import residencialImg from '../assets/residencial.png';
import comercialImg from '../assets/comercial.png';
import industrialImg from '../assets/industrial.png';

export default function Home() {
  return (
    <>
      <section className="hero-section home-premium-hero">
        <div className="container hero-grid home-premium-grid">
          <div className="home-premium-copy home-fade-up">
            <span className="section-kicker home-anim-1">POXLAR PISOS</span>

            <h1 className="home-premium-title home-anim-2">
              Pisos epóxi e revestimentos de alto padrão para ambientes que exigem
              impacto visual e performance.
            </h1>

            <p className="home-premium-text home-anim-3">
              Soluções técnicas para espaços residenciais, comerciais e industriais,
              com foco em durabilidade, acabamento profissional e valorização real
              do ambiente.
            </p>

            <div className="hero-actions home-premium-actions home-anim-4">
              <a
                className="primary-button"
                href="https://wa.me/5548999999999?text=Olá%2C%20quero%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar orçamento
              </a>

              <NavLink className="secondary-button" to="/projetos">
                Ver projetos
              </NavLink>
            </div>

            <div className="home-premium-mini-grid home-anim-4">
              <div className="home-premium-mini-card">
                <strong>Acabamento premium</strong>
                <span>Visual moderno e técnico</span>
              </div>

              <div className="home-premium-mini-card">
                <strong>Alta resistência</strong>
                <span>Estrutura para uso intenso</span>
              </div>

              <div className="home-premium-mini-card">
                <strong>Aplicação profissional</strong>
                <span>Mais confiança no resultado</span>
              </div>
            </div>
          </div>

          <div className="hero-showcase home-premium-showcase home-anim-5">
            <div
              className="showcase-card tall residencial-card home-premium-showcase-card"
              style={{ backgroundImage: `url(${residencialImg})` }}
            >
              <span>Residencial</span>
              <strong>Garagens, áreas gourmet e espaços premium</strong>
            </div>

            <div
              className="showcase-card comercial-card home-premium-showcase-card"
              style={{ backgroundImage: `url(${comercialImg})` }}
            >
              <span>Comercial</span>
              <strong>Lojas, clínicas e ambientes de atendimento</strong>
            </div>

            <div
              className="showcase-card industrial-card home-premium-showcase-card"
              style={{ backgroundImage: `url(${industrialImg})` }}
            >
              <span>Industrial</span>
              <strong>Resistência para operações de maior exigência</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column align-start">
          <div className="home-fade-up">
            <span className="section-kicker">DIFERENCIAL</span>
            <h2 className="home-premium-section-title">
              Mais do que piso: uma solução que eleva o padrão visual e técnico do
              ambiente.
            </h2>
            <p className="home-premium-section-text">
              A Poxlar entrega uma aplicação pensada para unir presença visual,
              resistência e acabamento profissional em diferentes tipos de projeto.
            </p>
          </div>

          <div className="bullet-grid">
            {highlights.map((item, index) => (
              <div
                key={item}
                className={`bullet-card home-premium-bullet home-anim-${Math.min(index + 1, 5)}`}
              >
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted-section">
        <div className="container">
          <div className="section-heading home-fade-up">
            <span className="section-kicker">SOLUÇÕES</span>
            <h2 className="home-premium-section-title">
              Estrutura pensada para diferentes tipos de aplicação.
            </h2>
            <p className="home-premium-section-text">
              Cada ambiente exige um padrão técnico e visual diferente. Por isso,
              a aplicação é direcionada conforme o uso, o contexto e o resultado esperado.
            </p>
          </div>

          <div className="card-grid three-columns">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`info-card home-premium-service-card home-anim-${Math.min(index + 1, 5)}`}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading between home-fade-up">
            <div>
              <span className="section-kicker">PROJETOS</span>
              <h2 className="home-premium-section-title">
                Apresentação premium para resultados que precisam gerar confiança.
              </h2>
              <p className="home-premium-section-text">
                Uma seleção pensada para reforçar qualidade, versatilidade e impacto visual.
              </p>
            </div>

            <NavLink className="text-link home-premium-link" to="/projetos">
              Explorar projetos
            </NavLink>
          </div>

          <div className="card-grid three-columns">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card home-premium-project-card home-anim-${Math.min(index + 1, 5)}`}
              >
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted-section">
        <div className="container">
          <div className="section-heading home-fade-up">
            <span className="section-kicker">PROCESSO</span>
            <h2 className="home-premium-section-title">
              Uma execução organizada do começo ao fim.
            </h2>
            <p className="home-premium-section-text">
              O resultado final depende de análise, preparação correta e aplicação com padrão técnico.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`step-card expanded home-premium-step-card home-anim-${Math.min(index + 1, 5)}`}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block cta-section">
        <div className="container cta-card home-premium-cta home-fade-up">
          <div>
            <span className="section-kicker">ORÇAMENTO</span>
            <h2 className="home-premium-section-title">
              Seu ambiente pode transmitir muito mais valor com o acabamento certo.
            </h2>
            <p className="home-premium-section-text">
              Fale com a Poxlar Pisos e receba uma avaliação para o seu projeto.
            </p>
          </div>

          <a
            className="primary-button"
            href="https://wa.me/5548999999999?text=Olá%2C%20quero%20fazer%20um%20orçamento"
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}