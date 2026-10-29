import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Orbit, 
  Thermometer, 
  Compass, 
  Wind, 
  Rocket, 
  Scale, 
  Globe2, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Layers
} from 'lucide-react';
import { PLANETS } from '../data/spaceData';

export default function PlanetDetailPage({ onSelectForLaunch }) {
  const { id } = useParams(); // Hook do React Router para obter parâmetro da URL
  const navigate = useNavigate();
  const [userWeight, setUserWeight] = useState(70); // kg (estado controlado)

  // Encontra o planeta pelo ID da rota
  const planet = PLANETS.find((p) => p.id === id);

  // Hook useEffect: sincroniza o título da aba com o planeta atual (Conceito Aula 09)
  useEffect(() => {
    if (planet) {
      document.title = `${planet.name} • Detalhes da Rota | Stellar Hub`;
    } else {
      document.title = 'Corpo Celeste Não Encontrado | Stellar Hub';
    }

    return () => {
      document.title = 'Stellar Hub | Exploração Espacial & React Lab';
    };
  }, [planet]);

  // Se o planeta não existir na base
  if (!planet) {
    return (
      <div className="container not-found-page">
        <div className="glass-card empty-state-card">
          <AlertCircle size={48} className="text-amber" />
          <h2 className="empty-title">Corpo Celeste Não Encontrado</h2>
          <p className="empty-desc">
            O identificador de rota <code>/planeta/{id}</code> não corresponde a nenhum corpo catalogado no sistema.
          </p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Voltar ao Catálogo Principal</span>
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    type,
    subtitle,
    distanceFromEarth,
    distance,
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

  // Cálculo de peso com base no input controlado
  const calculatedWeight = ((userWeight * gravity) / 9.8).toFixed(1);

  const handleLaunchClick = () => {
    if (onSelectForLaunch) onSelectForLaunch(planet.id);
    navigate('/lancamentos');
  };

  return (
    <div className="planet-detail-page container">
      {/* Top Breadcrumb & Router Info */}
      <div className="route-breadcrumb-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Voltar ao Catálogo</span>
        </Link>
        <div className="route-tag font-mono">
          <span>Rota Ativa: </span>
          <span className="text-cyan">/planeta/{id}</span>
          <span className="badge badge-purple" style={{ marginLeft: '0.5rem' }}>useParams()</span>
        </div>
      </div>

      {/* Main Hero Header for Planet */}
      <div className="planet-page-hero glass-card">
        <div className="planet-page-preview">
          <div className="preview-halo" style={{ background: gradient }} />
          <div className="preview-sphere large" style={{ background: gradient }}>
            {ring && <div className="preview-ring large" />}
          </div>
        </div>

        <div className="planet-page-info">
          <div className="modal-tags-row">
            <span className="badge badge-cyan">{type}</span>
            <span className="badge badge-emerald">{status}</span>
            <span className="badge badge-purple font-mono">ID: {id}</span>
          </div>

          <h1 className="planet-page-title">{name}</h1>
          <p className="planet-page-subtitle">{subtitle}</p>
          <p className="planet-page-description">{description}</p>

          <div className="planet-page-cta">
            <button className="btn btn-primary" onClick={handleLaunchClick}>
              <Rocket size={18} />
              <span>Configurar Missão Espacial para {name}</span>
            </button>
            <Link to="/simulador" className="btn btn-secondary">
              <Orbit size={18} />
              <span>Simular Gravidade ({gravity} m/s²)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid of Telemetry & Controlled Physics */}
      <div className="planet-page-grid">
        {/* Physical Specs */}
        <div className="glass-card page-card">
          <h3 className="card-section-title">
            <Globe2 size={18} className="text-cyan" />
            <span>Parâmetros Astronômicos</span>
          </h3>
          <div className="spec-props-list">
            <div className="spec-prop-row">
              <span className="prop-name">Distância da Terra:</span>
              <span className="prop-value font-mono">{distanceFromEarth}</span>
            </div>
            <div className="spec-prop-row">
              <span className="prop-name">Distância do Sol:</span>
              <span className="prop-value font-mono">{distance}</span>
            </div>
            <div className="spec-prop-row">
              <span className="prop-name">Aceleração Gravitacional:</span>
              <span className="prop-value font-mono text-cyan">{gravity} m/s²</span>
            </div>
            <div className="spec-prop-row">
              <span className="prop-name">Diâmetro Equatorial:</span>
              <span className="prop-value font-mono">{diameter}</span>
            </div>
            <div className="spec-prop-row">
              <span className="prop-name">Temperatura Média:</span>
              <span className="prop-value font-mono">{temperature}</span>
            </div>
            <div className="spec-prop-row">
              <span className="prop-name">Satélites Naturais:</span>
              <span className="prop-value font-mono">{moons}</span>
            </div>
          </div>
        </div>

        {/* Controlled Form: Interactive Weight Calculator */}
        <div className="glass-card page-card">
          <h3 className="card-section-title">
            <Scale size={18} className="text-teal" />
            <span>Simulador de Peso (Campo Controlado)</span>
          </h3>
          <p className="card-hint">
            Digite sua massa terrestre para ver a reatividade instantânea calculada através do <code>useState</code>:
          </p>

          <div className="controlled-input-box">
            <label htmlFor="user-weight-input" className="form-label">
              Sua Massa na Terra (kg):
            </label>
            <input
              id="user-weight-input"
              type="number"
              min="10"
              max="250"
              value={userWeight}
              onChange={(e) => setUserWeight(Number(e.target.value) || 0)}
              className="form-input font-mono"
            />
          </div>

          <div className="weight-comparison" style={{ marginTop: '1rem' }}>
            <div className="weight-badge earth">
              <span className="weight-num font-mono">{userWeight} kg</span>
              <span className="weight-label">Na Terra (9.8 m/s²)</span>
            </div>
            <span className="weight-arrow">➔</span>
            <div className="weight-badge planet">
              <span className="weight-num font-mono text-cyan">{calculatedWeight} kg</span>
              <span className="weight-label">Em {name} ({gravity} m/s²)</span>
            </div>
          </div>

          <p className="weight-hint">
            {gravity < 9.8 
              ? `Você se sentiria ${((1 - gravity / 9.8) * 100).toFixed(0)}% mais leve em ${name}!` 
              : `A força da gravidade em ${name} é ${((gravity / 9.8 - 1) * 100).toFixed(0)}% maior que a da Terra.`}
          </p>
        </div>
      </div>

      {/* Atmospheric Breakdown */}
      {atmosphere.length > 0 && (
        <div className="glass-card page-card" style={{ marginTop: '1.5rem' }}>
          <h3 className="card-section-title">
            <Wind size={18} className="text-purple" />
            <span>Assinatura Espectroscópica da Atmosfera</span>
          </h3>
          <div className="gas-bars-list">
            {atmosphere.map((item) => (
              <div key={item.gas} className="gas-item">
                <div className="gas-info-row">
                  <span className="gas-name">{item.gas}</span>
                  <span className="gas-perc font-mono">{item.percentage}%</span>
                </div>
                <div className="gas-bar-track">
                  <div 
                    className="gas-bar-fill" 
                    style={{ 
                      width: `${Math.min(item.percentage, 100)}%`,
                      background: gradient 
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notable Facts */}
      {highlightFacts.length > 0 && (
        <div className="glass-card page-card" style={{ marginTop: '1.5rem' }}>
          <h3 className="card-section-title">
            <CheckCircle2 size={18} className="text-emerald" />
            <span>Destaques da Exploração Espacial</span>
          </h3>
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
    </div>
  );
}
