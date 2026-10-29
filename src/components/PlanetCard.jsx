import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Orbit, Thermometer, Compass, Sparkles, ExternalLink } from 'lucide-react';

export default function PlanetCard({ 
  planet, 
  isFavorite = false, 
  onToggleFavorite, 
  onInspect 
}) {
  const {
    id,
    name,
    type,
    subtitle,
    distance,
    gravity,
    temperature,
    moons,
    status,
    gradient,
    ring
  } = planet;

  // Status badge styling helper
  const getStatusBadgeClass = (st) => {
    switch (st) {
      case 'Explorado': return 'badge-emerald';
      case 'Sonda Ativa': return 'badge-cyan';
      case 'Mapeamento em Curso': return 'badge-amber';
      default: return 'badge-purple';
    }
  };

  return (
    <article className="planet-card glass-card" id={`card-${id}`}>
      {/* Top Header with Type & Favorite Button */}
      <div className="card-top">
        <span className="planet-type-tag">{type}</span>
        <button 
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(id);
          }}
          title={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
          aria-label={`Favoritar ${name}`}
        >
          <Heart size={18} className={isFavorite ? "fill-rose" : ""} />
        </button>
      </div>

      {/* Visual Planet Sphere Container */}
      <div className="planet-visual-container" onClick={() => onInspect(planet)}>
        <div className="planet-halo" style={{ background: gradient }} />
        <div 
          className="planet-sphere" 
          style={{ background: gradient }}
        >
          {ring && <div className="planet-ring" />}
        </div>
      </div>

      {/* Planet Info */}
      <div className="planet-body">
        <div className="planet-title-row">
          <h3 className="planet-name">{name}</h3>
          <span className={`badge ${getStatusBadgeClass(status)}`}>
            {status}
          </span>
        </div>
        <p className="planet-subtitle">{subtitle}</p>

        {/* Quick Specs Grid */}
        <div className="planet-specs-grid">
          <div className="spec-item">
            <span className="spec-label">
              <Orbit size={13} /> Gravidade
            </span>
            <span className="spec-val font-mono">{gravity} m/s²</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">
              <Thermometer size={13} /> Temp.
            </span>
            <span className="spec-val font-mono">{temperature}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">
              <Sparkles size={13} /> Luas
            </span>
            <span className="spec-val font-mono">{moons}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">
              <Compass size={13} /> Distância
            </span>
            <span className="spec-val font-mono">{distance}</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="card-footer card-footer-split">
        <button 
          className="btn-inspect" 
          onClick={() => onInspect(planet)}
          aria-label={`Inspecionar dados de ${name}`}
          title="Abrir telemetria em modal rápido"
        >
          <Eye size={15} />
          <span>Telemetria</span>
        </button>
        <Link 
          to={`/planeta/${id}`}
          className="btn-route-link"
          title={`Acessar página dedicada com useParams: /planeta/${id}`}
        >
          <span>Página Rota</span>
          <ExternalLink size={13} />
        </Link>
      </div>
    </article>
  );
}
