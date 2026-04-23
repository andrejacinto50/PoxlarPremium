import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Solucoes from './pages/Solucoes';
import Projetos from './pages/Projetos';
import Processo from './pages/Processo';
import Contato from './pages/Contato';

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/processo" element={<Processo />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
