import React from 'react';
import { Sparkles, Compass, Rocket, Globe, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ 
  totalPlanets = 8, 
  totalMissions = 5, 
  vdomCycles = 0, 
  onExploreClick, 
  onSimulateClick 
}) {
  return (
    <section className="hero-section">
      <div className="hero-background-glow" />
      
      <div className="container hero-content">
        <div className="hero-badge-wrapper">
          <div className="badge badge-cyan animate-pulse-glow">
            <Sparkles size={13} />
            <span>SENAI Frameworks Front-end • Aula 08</span>
          </div>
        </div>

        <h1 className="hero-title">
          Exploração Cósmica com a Arquitetura do <span className="gradient-text-react">React</span>
        </h1>

        <p className="hero-description">
          Uma plataforma interativa que une astronomia e engenharia de software moderna.
          Construída para demonstrar na prática os pilares fundamentais do React: 
          <strong> JSX</strong>, <strong>Componentização</strong>, <strong>Props</strong>, 
          <strong> Virtual DOM</strong>, <strong>Listas com Keys</strong> e 
          <strong> Renderização Condicional</strong>.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onExploreClick}>
            <Compass size={18} />
            <span>Explorar Catálogo Celeste</span>
          </button>
          <button className="btn btn-secondary" onClick={onSimulateClick}>
            <Zap size={18} />
            <span>Simulador do Virtual DOM</span>
          </button>
        </div>

        {/* Real-Time Telemetry Stats Row */}
        <div className="hero-stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon-wrap cyan">
              <Globe size={22} />
            </div>
            <div className="stat-details">
              <span className="stat-value font-mono">{totalPlanets}</span>
              <span className="stat-label">Corpos Mapeados</span>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrap purple">
              <Rocket size={22} />
            </div>
            <div className="stat-details">
              <span className="stat-value font-mono">{totalMissions}</span>
              <span className="stat-label">Sondas em Missão</span>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrap emerald">
              <ShieldCheck size={22} />
            </div>
            <div className="stat-details">
              <span className="stat-value font-mono">100%</span>
              <span className="stat-label">Componentes Puros</span>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrap amber">
              <Zap size={22} />
            </div>
            <div className="stat-details">
              <span className="stat-value font-mono">#{vdomCycles}</span>
              <span className="stat-label">Reconciliações VDOM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
