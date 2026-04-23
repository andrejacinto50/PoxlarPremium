import React from 'react';
import PageHero from '../components/PageHero';

export default function Contato() {
  return (
    <>
      <PageHero
        kicker="CONTATO"
        title="Solicite um orçamento e entenda a melhor solução para o seu ambiente."
        text="A estrutura desta página foi pensada para facilitar o primeiro contato e direcionar o cliente para o WhatsApp de forma rápida."
        primaryLabel="Chamar no WhatsApp"
      />

      <section className="section-block">
        <div className="container contact-grid">
          <article className="info-card">
            <h3>Fale diretamente</h3>
            <p><strong>WhatsApp:</strong> (48) 99999-9999</p>
            <p><strong>Instagram:</strong> @poxlar_pisos</p>
            <p><strong>Atendimento:</strong> Santa Catarina e região</p>
          </article>

          <article className="info-card">
            <h3>Mensagem sugerida</h3>
            <p>
              Olá, vim pelo site e gostaria de solicitar um orçamento para um projeto de piso epóxi / revestimento.
            </p>
            <a
              className="primary-button full-width"
              href="https://wa.me/5548999999999?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto"
              target="_blank"
              rel="noreferrer"
            >
              Enviar mensagem
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
