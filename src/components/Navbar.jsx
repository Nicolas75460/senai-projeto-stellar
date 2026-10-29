import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Orbit, 
  Compass, 
  Weight, 
  Rocket, 
  BookOpen, 
  Heart, 
  Activity, 
  Menu, 
  X,
  Satellite,
  Radio,
  Clock
} from 'lucide-react';

export default function Navbar({ 
  favoritesCount = 0, 
  missionsCount = 0,
  vdomReconciliations = 0 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [missionClock, setMissionClock] = useState(0);

  // Hook useEffect: contador de tempo de missão com FUNÇÃO DE LIMPEZA (Cleanup)
  useEffect(() => {
    const timerId = setInterval(() => {
      setMissionClock((prev) => prev + 1);
    }, 1000);

    // Função de limpeza do efeito para evitar vazamento de memória (Aula 09)
    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Formata os segundos em HH:MM:SS
  const formatTime = (totalSec) => {
    const hrs = String(Math.floor(totalSec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const navItems = [
    { to: '/', label: 'Catálogo', icon: Compass, end: true },
    { to: '/simulador', label: 'Simulador VDOM', icon: Weight },
    { to: '/lancamentos', label: 'Lançamentos', icon: Rocket, badge: missionsCount },
    { to: '/api-observatorio', label: 'Observatório & API', icon: Radio },
    { to: '/laboratorio-didatico', label: 'Laboratório React', icon: BookOpen }
  ];

  return (
    <header className="navbar-container">
      <div className="container navbar-inner">
        {/* Brand Logo with Link */}
        <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon-wrapper">
            <Orbit className="brand-icon animate-spin-slow" size={26} />
            <div className="brand-dot" />
          </div>
          <div className="brand-text">
            <span className="brand-title">STELLAR<span className="brand-highlight">HUB</span></span>
            <span className="brand-tag">SENAI REACT 02 • AULA 09</span>
          </div>
        </Link>

        {/* Desktop Navigation Links via React Router NavLink */}
        <nav className="navbar-links" aria-label="Navegação Principal">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
              >
                <IconComponent size={16} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className="nav-item-badge">{item.badge}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Telemetry Status & Indicators */}
        <div className="navbar-telemetry">
          {/* Mission Timer with useEffect + cleanup */}
          <div className="telemetry-pill timer-pill" title="Tempo de missão sincronizado via useEffect com Cleanup">
            <Clock size={13} className="text-cyan" />
            <span className="font-mono">{formatTime(missionClock)}</span>
          </div>

          {/* VDOM Indicator */}
          <div className="telemetry-pill" title="Reconciliações do Virtual DOM em tempo real">
            <Activity size={13} className="pulse-green" />
            <span className="telemetry-value font-mono">#{vdomReconciliations}</span>
          </div>

          {/* Favorites Counter */}
          <Link 
            to="/" 
            className="favorites-counter-btn" 
            title="Total de corpos celestes favoritados"
          >
            <Heart size={15} className={favoritesCount > 0 ? "fill-rose" : ""} />
            <span className="counter-val font-mono">{favoritesCount}</span>
          </Link>

          {/* Mobile menu toggle */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `mobile-nav-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="nav-item-badge">{item.badge}</span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
