import React from 'react';
import PageHero from '../components/PageHero';

export default function Sobre() {
  return (
    <>
      <PageHero
        kicker="SOBRE A POXLAR"
        title="Há 9 anos entregando soluções em pisos epóxi e revestimentos com padrão técnico, resistência e acabamento profissional."
        text="A Poxlar Pisos une experiência de mercado, execução especializada e atenção aos detalhes para transformar ambientes residenciais, comerciais e industriais com mais durabilidade, estética e valorização."
      />

      <section className="section-block sobre-premium-section">
        <div className="container two-column align-start">

          <div className="sobre-premium-copy">
            <span className="section-kicker sobre-anim-1">EXPERIÊNCIA</span>

            <h2 className="sobre-premium-title sobre-anim-2">
              Uma empresa com trajetória, técnica e compromisso com o resultado.
            </h2>

            <p className="sobre-premium-text sobre-anim-3">
              Com 9 anos de atuação no mercado, a Poxlar Pisos entende que um bom
              revestimento vai muito além da aplicação. Ele depende de análise correta,
              preparação adequada e execução com padrão técnico.
            </p>

            <p className="sobre-premium-text sobre-anim-4">
              Cada projeto é tratado com responsabilidade para entregar um resultado
              que valoriza o ambiente, melhora a apresentação do espaço e transmite
              mais confiança para quem utiliza.
            </p>
          </div>

          <div className="stack-cards">
            <article className="info-card sobre-premium-card sobre-anim-2">
              <h3>9 anos de mercado</h3>
              <p>
                Experiência em diferentes tipos de ambientes, com soluções aplicadas
                conforme a necessidade de cada projeto.
              </p>
            </article>

            <article className="info-card sobre-premium-card sobre-anim-3">
              <h3>Análise antes da aplicação</h3>
              <p>
                Cada espaço é avaliado para garantir aderência, durabilidade e o melhor
                resultado possível.
              </p>
            </article>

            <article className="info-card sobre-premium-card sobre-anim-4">
              <h3>Execução com padrão profissional</h3>
              <p>
                Processo estruturado e atenção aos detalhes que fazem diferença no
                acabamento final.
              </p>
            </article>
          </div>

        </div>
      </section>
    </>
  );
}