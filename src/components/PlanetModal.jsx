import React, { useEffect } from 'react';
import { 
  X, 
  Orbit, 
  Thermometer, 
  Compass, 
  Wind, 
  CheckCircle2, 
  Rocket, 
  Scale, 
  Globe2 
} from 'lucide-react';

export default function PlanetModal({ 
  planet, 
  onClose, 
  onSelectForLaunch 
}) {
  if (!planet) return null;

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const {
    name,
    type,
    subtitle,
    distanceFromEarth,
    gravity,
    diameter,
    temperature,
    moons,
    status,
    gradient,
    ring,
    description,
    atmosphere = [],
    highlightFacts = []
  } = planet;

  // Weight calculation for a 75kg astronaut on this planet
  const earthWeight = 75;
  const planetWeight = ((earthWeight * gravity) / 9.8).toFixed(1);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-container glass-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-planet-preview">
            <div className="preview-halo" style={{ background: gradient }} />
            <div className="preview-sphere" style={{ background: gradient }}>
              {ring && <div className="preview-ring" />}
            </div>
          </div>

          <div className="modal-header-info">
            <div className="modal-tags-row">
              <span className="badge badge-cyan">{type}</span>
              <span className="badge badge-purple">{status}</span>
            </div>
            <h2 className="modal-title">{name}</h2>
            <p className="modal-subtitle">{subtitle}</p>
            <p className="modal-desc">{description}</p>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="modal-body-grid">
          {/* Main Specs */}
          <div className="spec-box glass-card">
            <h4 className="spec-box-title">
              <Globe2 size={16} /> Parâmetros Orbitais & Físicos
            </h4>
            <div className="spec-props-list">
              <div className="spec-prop-row">
                <span className="prop-name">Distância da Terra</span>
                <span className="prop-value font-mono">{distanceFromEarth}</span>
              </div>
              <div className="spec-prop-row">
                <span className="prop-name">Aceleração Gravitacional</span>
                <span className="prop-value font-mono">{gravity} m/s²</span>
              </div>
              <div className="spec-prop-row">
                <span className="prop-name">Diâmetro Equatorial</span>
                <span className="prop-value font-mono">{diameter}</span>
              </div>
              <div className="spec-prop-row">
                <span className="prop-name">Temperatura Média</span>
                <span className="prop-value font-mono">{temperature}</span>
              </div>
              <div className="spec-prop-row">
                <span className="prop-name">Satélites Naturais (Luas)</span>
                <span className="prop-value font-mono">{moons}</span>
              </div>
            </div>
          </div>

          {/* Comparative Gravity */}
          <div className="spec-box glass-card">
            <h4 className="spec-box-title">
              <Scale size={16} /> Comparativo Gravitacional
            </h4>
            <div className="weight-comparison">
              <div className="weight-badge earth">
                <span className="weight-num font-mono">{earthWeight} kg</span>
                <span className="weight-label">Na Terra (9.8 m/s²)</span>
              </div>
              <span className="weight-arrow">➔</span>
              <div className="weight-badge planet">
                <span className="weight-num font-mono text-cyan">{planetWeight} kg</span>
                <span className="weight-label">Em {name} ({gravity} m/s²)</span>
              </div>
            </div>
            <p className="weight-hint">
              {gravity < 9.8 
                ? `Você se sentiria ${((1 - gravity/9.8)*100).toFixed(0)}% mais leve aqui!` 
                : `Você sentiria uma pressão gravitacional ${((gravity/9.8 - 1)*100).toFixed(0)}% maior!`
              }
            </p>
          </div>
        </div>

        {/* Atmospheric Breakdown */}
        {atmosphere.length > 0 && (
          <div className="atmosphere-section">
            <h4 className="section-title">
              <Wind size={16} /> Composição Atmosférica Mapeada
            </h4>
            <div className="gas-bars-list">
              {atmosphere.map((gasItem) => (
                <div key={gasItem.gas} className="gas-item">
                  <div className="gas-info-row">
                    <span className="gas-name">{gasItem.gas}</span>
                    <span className="gas-perc font-mono">{gasItem.percentage}%</span>
                  </div>
                  <div className="gas-bar-track">
                    <div 
                      className="gas-bar-fill" 
                      style={{ 
                        width: `${Math.min(gasItem.percentage, 100)}%`,
                        background: gradient 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights List */}
        {highlightFacts.length > 0 && (
          <div className="facts-section">
            <h4 className="section-title">
              <CheckCircle2 size={16} /> Fatos Notáveis da Missão
            </h4>
            <ul className="facts-list">
              {highlightFacts.map((fact, index) => (
                <li key={index} className="fact-item">
                  <span className="fact-bullet">✦</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Actions */}
        <div className="modal-actions-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Fechar Janela
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => {
              onSelectForLaunch(planet.id);
              onClose();
            }}
          >
            <Rocket size={17} />
            <span>Configurar Missão para {name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
