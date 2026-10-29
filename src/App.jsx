import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanetModal from './components/PlanetModal';
import GravitySimulator from './components/GravitySimulator';
import MissionLaunchCenter from './components/MissionLaunchCenter';
import ReactDidacticLab from './components/ReactDidacticLab';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlanetDetailPage from './pages/PlanetDetailPage';
import ObservatoryApiPage from './pages/ObservatoryApiPage';
import NotFoundPage from './pages/NotFoundPage';
import { PLANETS, INITIAL_MISSIONS } from './data/spaceData';
import './App.css';

// Componente utilitário que garante rolagem para o topo em cada transição de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const navigate = useNavigate();

  // 1. Estado de Favoritos persistido no LocalStorage (Aula 08 & 09)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('stellar_favorites');
      return saved ? JSON.parse(saved) : ['terra', 'marte', 'europa'];
    } catch {
      return ['terra', 'marte', 'europa'];
    }
  });

  // 2. Estado de Missões ativas persistido no LocalStorage
  const [missions, setMissions] = useState(() => {
    try {
      const saved = localStorage.getItem('stellar_missions');
      return saved ? JSON.parse(saved) : INITIAL_MISSIONS;
    } catch {
      return INITIAL_MISSIONS;
    }
  });

  // 3. Modal de inspeção rápida
  const [inspectingPlanet, setInspectingPlanet] = useState(null);

  // 4. Planeta pré-selecionado para lançamento
  const [launchPresetId, setLaunchPresetId] = useState(null);

  // 5. Contador de reconciliações do Virtual DOM (didático)
  const [vdomCounter, setVdomCounter] = useState(1);

  // Efeito colateral com useEffect: sincroniza favoritos no localStorage
  useEffect(() => {
    try {
      localStorage.setItem('stellar_favorites', JSON.stringify(favorites));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }
  }, [favorites]);

  // Efeito colateral com useEffect: sincroniza missões no localStorage
  useEffect(() => {
    try {
      localStorage.setItem('stellar_missions', JSON.stringify(missions));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }
  }, [missions]);

  // Alternador de favoritos (imutabilidade com prev state)
  const handleToggleFavorite = useCallback((planetId) => {
    setFavorites((prev) => {
      const isAlready = prev.includes(planetId);
      return isAlready ? prev.filter((id) => id !== planetId) : [...prev, planetId];
    });
    setVdomCounter((c) => c + 1);
  }, []);

  // Adicionar nova missão espacial
  const handleAddMission = useCallback((newMission) => {
    setMissions((prev) => [newMission, ...prev]);
    setVdomCounter((c) => c + 1);
  }, []);

  // Decomissionar/remover missão
  const handleRemoveMission = useCallback((missionId) => {
    setMissions((prev) => prev.filter((m) => m.id !== missionId));
    setVdomCounter((c) => c + 1);
  }, []);

  // Ping de telemetria
  const handlePingMission = useCallback((missionId) => {
    setMissions((prev) =>
      prev.map((m) => {
        if (m.id === missionId) {
          return {
            ...m,
            signalStrength: Math.min(m.signalStrength + 5, 100),
            progress: Math.min(m.progress + 2, 100)
          };
        }
        return m;
      })
    );
    setVdomCounter((c) => c + 1);
  }, []);

  // Configura missão e navega para o Centro de Lançamentos via React Router navigate()
  const handleSelectForLaunch = useCallback((planetId) => {
    setLaunchPresetId(planetId);
    navigate('/lancamentos');
  }, [navigate]);

  // Bumper de reconciliação para demonstração
  const handleVirtualDomUpdate = useCallback(() => {
    setVdomCounter((c) => c + 1);
  }, []);

  return (
    <div className="app-layout">
      {/* Scroll to Top on route change */}
      <ScrollToTop />

      {/* Navigation Header com React Router NavLink */}
      <Navbar
        favoritesCount={favorites.length}
        missionsCount={missions.length}
        vdomReconciliations={vdomCounter}
      />

      <main className="main-content">
        <Routes>
          {/* Rota Raiz: Catálogo Principal & Hero */}
          <Route
            path="/"
            element={
              <HomePage
                planets={PLANETS}
                favorites={favorites}
                missionsCount={missions.length}
                vdomCounter={vdomCounter}
                onToggleFavorite={handleToggleFavorite}
                onInspectPlanet={(planet) => setInspectingPlanet(planet)}
              />
            }
          />

          {/* Rota Dinâmica com Parâmetros :id (Aula 09 - React Router useParams) */}
          <Route
            path="/planeta/:id"
            element={
              <PlanetDetailPage
                onSelectForLaunch={handleSelectForLaunch}
              />
            }
          />

          {/* Rota Estática: Simulador Gravitacional (Virtual DOM) */}
          <Route
            path="/simulador"
            element={
              <div className="container page-view-wrapper">
                <GravitySimulator
                  planets={PLANETS}
                  onVirtualDomUpdate={handleVirtualDomUpdate}
                />
              </div>
            }
          />

          {/* Rota Estática: Centro de Ignição e Lançamentos (Formulários Controlados) */}
          <Route
            path="/lancamentos"
            element={
              <div className="container page-view-wrapper">
                <MissionLaunchCenter
                  planets={PLANETS}
                  missions={missions}
                  onAddMission={handleAddMission}
                  onRemoveMission={handleRemoveMission}
                  onPingMission={handlePingMission}
                  presetPlanetId={launchPresetId}
                />
              </div>
            }
          />

          {/* Rota Estática: Observatório & Consumo de APIs (GET/POST/useEffect/Cleanup) */}
          <Route
            path="/api-observatorio"
            element={<ObservatoryApiPage />}
          />

          {/* Rota Estática: Laboratório Didático React */}
          <Route
            path="/laboratorio-didatico"
            element={
              <div className="container page-view-wrapper">
                <ReactDidacticLab />
              </div>
            }
          />

          {/* Rota Coringa 404 para URLs não mapeadas */}
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>

      {/* Modal de Inspeção Rápida */}
      {inspectingPlanet && (
        <PlanetModal
          planet={inspectingPlanet}
          onClose={() => setInspectingPlanet(null)}
          onSelectForLaunch={handleSelectForLaunch}
        />
      )}

      {/* Footer Global */}
      <Footer />
    </div>
  );
}
