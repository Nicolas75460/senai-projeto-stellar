import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CelestialCatalog from './components/CelestialCatalog';
import PlanetModal from './components/PlanetModal';
import GravitySimulator from './components/GravitySimulator';
import MissionLaunchCenter from './components/MissionLaunchCenter';
import ReactDidacticLab from './components/ReactDidacticLab';
import Footer from './components/Footer';
import { PLANETS, INITIAL_MISSIONS } from './data/spaceData';
import './App.css';

export default function App() {
  // Navigation active tab: 'catalog' | 'simulator' | 'launch' | 'didactic'
  const [activeTab, setActiveTab] = useState('catalog');

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('stellar_favorites');
      return saved ? JSON.parse(saved) : ['terra', 'marte', 'europa'];
    } catch {
      return ['terra', 'marte', 'europa'];
    }
  });

  // Missions state persisted in localStorage
  const [missions, setMissions] = useState(() => {
    try {
      const saved = localStorage.getItem('stellar_missions');
      return saved ? JSON.parse(saved) : INITIAL_MISSIONS;
    } catch {
      return INITIAL_MISSIONS;
    }
  });

  // Modal inspection state
  const [inspectingPlanet, setInspectingPlanet] = useState(null);

  // Preselected planet for launch trigger
  const [launchPresetId, setLaunchPresetId] = useState(null);

  // Global Virtual DOM reconciliation tracker
  const [vdomCounter, setVdomCounter] = useState(1);

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('stellar_favorites', JSON.stringify(favorites));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }
  }, [favorites]);

  // Sync missions with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('stellar_missions', JSON.stringify(missions));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }
  }, [missions]);

  // Favorite toggle handler
  const handleToggleFavorite = useCallback((planetId) => {
    setFavorites((prev) => {
      const isAlready = prev.includes(planetId);
      const next = isAlready ? prev.filter((id) => id !== planetId) : [...prev, planetId];
      return next;
    });
    setVdomCounter((c) => c + 1);
  }, []);

  // Add new mission handler
  const handleAddMission = useCallback((newMission) => {
    setMissions((prev) => [newMission, ...prev]);
    setVdomCounter((c) => c + 1);
  }, []);

  // Remove / Decommission mission
  const handleRemoveMission = useCallback((missionId) => {
    setMissions((prev) => prev.filter((m) => m.id !== missionId));
    setVdomCounter((c) => c + 1);
  }, []);

  // Ping telemetry handler
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

  // Switch to launch center with preset target
  const handleSelectForLaunch = useCallback((planetId) => {
    setLaunchPresetId(planetId);
    setActiveTab('launch');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  }, []);

  // Virtual DOM reconciliation bump from simulator
  const handleVirtualDomUpdate = useCallback((count) => {
    setVdomCounter((c) => c + 1);
  }, []);

  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
        missionsCount={missions.length}
        vdomReconciliations={vdomCounter}
      />

      <main className="main-content">
        {/* Hero Section */}
        <Hero
          totalPlanets={PLANETS.length}
          totalMissions={missions.length}
          vdomCycles={vdomCounter}
          onExploreClick={() => {
            setActiveTab('catalog');
            const el = document.getElementById('catalogo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSimulateClick={() => {
            setActiveTab('simulator');
            const el = document.getElementById('simulador');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Dynamic Tab Views */}
        <div className="container">
          {activeTab === 'catalog' && (
            <CelestialCatalog
              planets={PLANETS}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onInspectPlanet={(planet) => setInspectingPlanet(planet)}
            />
          )}

          {activeTab === 'simulator' && (
            <GravitySimulator
              planets={PLANETS}
              onVirtualDomUpdate={handleVirtualDomUpdate}
            />
          )}

          {activeTab === 'launch' && (
            <MissionLaunchCenter
              planets={PLANETS}
              missions={missions}
              onAddMission={handleAddMission}
              onRemoveMission={handleRemoveMission}
              onPingMission={handlePingMission}
              presetPlanetId={launchPresetId}
            />
          )}

          {activeTab === 'didactic' && (
            <ReactDidacticLab />
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {inspectingPlanet && (
        <PlanetModal
          planet={inspectingPlanet}
          onClose={() => setInspectingPlanet(null)}
          onSelectForLaunch={handleSelectForLaunch}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
