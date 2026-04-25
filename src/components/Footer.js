import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <span className="section-kicker">POXLAR PISOS</span>
          <h3>Acabamento técnico com presença premium.</h3>
          <p>
            Pisos epóxi e revestimentos pensados para unir resistência, estética e mais valorização para ambientes residenciais, comerciais e industriais.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <div className="footer-links">
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/solucoes">Soluções</NavLink>
            <NavLink to="/projetos">Projetos</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </div>
        </div>

        <div>
          <h4>Contato</h4>
          <p>WhatsApp: (48) 99108-7702</p>
          <p>Instagram: @poxlar_pisos</p>
          <p>Atendimento em Santa Catarina e região</p>
        </div>
      </div>
    </footer>
  );
}
