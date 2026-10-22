import React, { useState } from 'react';
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
  Satellite
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  favoritesCount = 0, 
  missionsCount = 0,
  vdomReconciliations = 0 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'catalog', label: 'Catálogo Celeste', icon: Compass },
    { id: 'simulator', label: 'Simulador Virtual DOM', icon: Weight },
    { id: 'launch', label: 'Centro de Lançamentos', icon: Rocket, badge: missionsCount },
    { id: 'didactic', label: 'Laboratório React', icon: BookOpen }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => handleNavClick('catalog')}>
          <div className="brand-icon-wrapper">
            <Orbit className="brand-icon animate-spin-slow" size={26} />
            <div className="brand-dot" />
          </div>
          <div className="brand-text">
            <span className="brand-title">STELLAR<span className="brand-highlight">HUB</span></span>
            <span className="brand-tag">SENAI REACT EXPLORER</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Navegação Principal">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-button ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <IconComponent size={17} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className="nav-item-badge">{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Telemetry Status & Indicators */}
        <div className="navbar-telemetry">
          <div className="telemetry-pill" title="Reconciliações do Virtual DOM em tempo real">
            <Activity size={14} className="pulse-green" />
            <span className="telemetry-label">VDOM Sync:</span>
            <span className="telemetry-value font-mono">#{vdomReconciliations}</span>
          </div>

          <div 
            className="favorites-counter-btn" 
            title="Total de corpos celestes favoritados"
            onClick={() => handleNavClick('catalog')}
          >
            <Heart size={15} className={favoritesCount > 0 ? "fill-rose" : ""} />
            <span className="counter-val font-mono">{favoritesCount}</span>
          </div>

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
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={19} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="nav-item-badge">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
