import React from 'react';
import PageHero from '../components/PageHero';

export default function Sobre() {
  return (
    <>
      <PageHero
        kicker="SOBRE A POXLAR"
        title="Especialização em pisos epóxi e revestimentos com foco em resistência, estética e padrão profissional."
        text="A proposta da Poxlar Pisos é entregar uma solução que vai além da aplicação: cada projeto é pensado para valorizar o ambiente, melhorar a apresentação e oferecer durabilidade real no dia a dia."
      />

      {/* POSICIONAMENTO */}
      <section className="section-block sobre-premium-section">
        <div className="container two-column align-start">

          <div className="sobre-premium-copy">
            <span className="section-kicker sobre-anim-1">POSICIONAMENTO</span>

            <h2 className="sobre-premium-title sobre-anim-2">
              Um serviço técnico que também precisa transmitir confiança visual.
            </h2>

            <p className="sobre-premium-text sobre-anim-3">
              Em nichos como residencial premium, áreas comerciais e ambientes industriais,
              o cliente não busca apenas um piso. Ele busca segurança, organização,
              durabilidade e um resultado que represente melhor o espaço.
            </p>

            <p className="sobre-premium-text sobre-anim-4">
              Por isso, cada projeto é tratado com uma visão estratégica: entender o uso,
              o nível de exigência e o impacto visual necessário para entregar um resultado
              acima do esperado.
            </p>
          </div>

          <div className="stack-cards">
            <article className="info-card sobre-premium-card sobre-anim-2">
              <h3>Atendimento consultivo</h3>
              <p>
                Antes de qualquer aplicação, existe análise. Cada projeto é avaliado para
                definir a melhor solução técnica e o melhor resultado possível.
              </p>
            </article>

            <article className="info-card sobre-premium-card sobre-anim-3">
              <h3>Foco em acabamento</h3>
              <p>
                Mais do que resistência, o acabamento final precisa transmitir qualidade,
                organização e elevar o padrão do ambiente.
              </p>
            </article>

            <article className="info-card sobre-premium-card sobre-anim-4">
              <h3>Execução com padrão profissional</h3>
              <p>
                Processo estruturado, aplicação técnica e atenção aos detalhes que fazem
                diferença no resultado final.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BLOCO DE AUTORIDADE */}
      <section className="section-block muted-section sobre-premium-authority">
        <div className="container">

          <div className="section-heading sobre-premium-heading">
            <span className="section-kicker sobre-anim-1">DIFERENCIAL</span>

            <h2 className="sobre-premium-title sobre-anim-2">
              Mais do que aplicação: uma entrega pensada para gerar percepção de valor.
            </h2>

            <p className="sobre-premium-text sobre-anim-3">
              O resultado não é apenas técnico. É visual, estratégico e pensado para
              melhorar a forma como o ambiente é percebido.
            </p>
          </div>

          <div className="card-grid three-columns">
            <div className="bullet-card sobre-premium-bullet sobre-anim-2">
              <strong>Ambientes mais valorizados</strong>
            </div>

            <div className="bullet-card sobre-premium-bullet sobre-anim-3">
              <strong>Mais confiança para clientes e visitantes</strong>
            </div>

            <div className="bullet-card sobre-premium-bullet sobre-anim-4">
              <strong>Durabilidade com estética profissional</strong>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}