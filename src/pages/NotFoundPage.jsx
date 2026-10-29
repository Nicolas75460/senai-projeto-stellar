import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, AlertCircle, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 - Rota Não Encontrada | Stellar Hub';
  }, []);

  return (
    <div className="container not-found-container">
      <div className="glass-card not-found-card">
        <div className="not-found-number font-mono">404</div>
        <h2 className="not-found-title">Coordenadas Perdidas no Espaço</h2>
        <p className="not-found-desc">
          A rota que você tentou acessar não existe na cartografia estelar do Stellar Hub ou foi movida para outra órbita.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Retornar à Base Estelar Principal</span>
        </Link>
      </div>
    </div>
  );
}
