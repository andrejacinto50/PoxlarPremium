import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/processo', label: 'Processo' },
  { to: '/contato', label: 'Contato' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <NavLink
          to="/"
          className="brand header-brand-premium"
          onClick={() => setOpen(false)}
          aria-label="Ir para a página inicial da Poxlar"
        >
          <span className="brand-badge">POXLAR</span>
          <span className="brand-text">Pisos de Alto Padrão</span>
        </NavLink>

        <button
          className={`menu-toggle ${open ? 'active' : ''}`}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {open && (
          <button
            type="button"
            className="menu-overlay"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
        )}

        <nav
          id="site-navigation"
          className={`nav header-nav-premium ${open ? 'open' : ''}`}
          aria-hidden={!open && window.innerWidth <= 980 ? 'true' : 'false'}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link header-nav-link-premium active' : 'nav-link header-nav-link-premium'
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <a
            className="header-cta header-cta-premium"
            href="https://wa.me/5548991087702?text=Olá%2C%20quero%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}