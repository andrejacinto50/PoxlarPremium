import React from 'react';
import PageHero from '../components/PageHero';

export default function Contato() {
  return (
    <>
      <PageHero
        kicker="CONTATO"
        title="Solicite um orçamento e descubra a melhor solução para valorizar o seu ambiente."
        text="Cada projeto é analisado de forma personalizada para garantir o melhor resultado em estética, durabilidade e desempenho."
        primaryLabel="Falar agora no WhatsApp"
      />

      <section className="section-block">
        <div className="container contact-grid">

          <article className="info-card">
            <h3>Atendimento direto</h3>

            <p>
              <strong>WhatsApp:</strong><br />
              (48) 99108-7702
            </p>

            <p>
              <strong>Instagram:</strong><br />
              @poxlar_pisos
            </p>

            <p>
              <strong>Região de atendimento:</strong><br />
              Santa Catarina e região
            </p>

            <p style={{ marginTop: '12px' }}>
              Atendimento rápido, direto e sem burocracia.
            </p>
          </article>

          <article className="info-card">
            <h3>Solicitar orçamento</h3>

            <p>
              Clique abaixo e envie sua mensagem diretamente pelo WhatsApp.
              Em poucos minutos já conseguimos entender seu projeto e orientar da melhor forma.
            </p>

            <p style={{ marginTop: '12px' }}>
              <strong>Mensagem sugerida:</strong>
            </p>

            <p>
              Olá, vim pelo site e gostaria de entender melhor como funcionam os pisos epóxi para o meu ambiente e solicitar um orçamento.
            </p>

            <a
              className="primary-button full-width"
              href="https://wa.me/5548991087702?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20entender%20melhor%20como%20funcionam%20os%20pisos%20epóxi%20e%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </article>

        </div>
      </section>
    </>
  );
}