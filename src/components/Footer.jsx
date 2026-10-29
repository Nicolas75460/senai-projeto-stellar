import React from 'react';
import { Link } from 'react-router-dom';
import { Orbit, ExternalLink, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="container footer-inner">
        {/* Top Info Grid */}
        <div className="footer-grid">
          {/* Brand & Mission Statement */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <Orbit size={24} className="text-cyan animate-spin-slow" />
              <span className="brand-name">STELLAR<span className="text-cyan">HUB</span></span>
            </div>
            <p className="footer-text">
              Plataforma de exploração cósmica desenvolvida com as melhores práticas de engenharia de software em React, componentização modular, gerenciamento com useState, efeitos com useEffect, consumo assíncrono de APIs e roteamento com React Router.
            </p>
            <div className="badge badge-emerald">
              <Shield size={12} />
              <span>Pronto para Deploy na Vercel</span>
            </div>
          </div>

          {/* Quick Navigation with React Router Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Módulos da Aplicação</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-link">
                  ✦ Catálogo de Corpos Celestes
                </Link>
              </li>
              <li>
                <Link to="/simulador" className="footer-link">
                  ✦ Simulador Gravitacional (Virtual DOM)
                </Link>
              </li>
              <li>
                <Link to="/lancamentos" className="footer-link">
                  ✦ Centro de Ignição e Lançamentos
                </Link>
              </li>
              <li>
                <Link to="/api-observatorio" className="footer-link">
                  ✦ Observatório & Consumo de APIs (ISS)
                </Link>
              </li>
              <li>
                <Link to="/laboratorio-didatico" className="footer-link">
                  ✦ Laboratório Didático React (Aulas 08 & 09)
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Attribution */}
          <div className="footer-col">
            <h4 className="footer-heading">Informações Acadêmicas</h4>
            <div className="academic-info-block">
              <p><strong>Instituição:</strong> SENAI Informática</p>
              <p><strong>Disciplina:</strong> Frameworks Front-end</p>
              <p><strong>Aulas:</strong> Aula 08 (React) & Aula 09 (React 02)</p>
              <p><strong>Docente:</strong> Prof. Me. Deivison S. Takatu</p>
              <p><strong>Desenvolvedor:</strong> Nícolas Oliveira Carvalho da Silva</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text font-mono">
            © {new Date().getFullYear()} Stellar Hub • Construído com React 19, React Router, Hooks & APIs.
          </p>
          <div className="footer-links-row">
            <a 
              href="https://github.com/Nicolas75460/senai-projeto-stellar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-footer-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>Repositório GitHub</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
