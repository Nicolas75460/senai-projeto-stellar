import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CelestialCatalog from '../components/CelestialCatalog';

export default function HomePage({ 
  planets, 
  favorites, 
  missionsCount, 
  vdomCounter, 
  onToggleFavorite, 
  onInspectPlanet 
}) {
  useEffect(() => {
    document.title = 'Stellar Hub | Exploração Espacial & React Lab';
  }, []);

  return (
    <>
      <Hero
        totalPlanets={planets.length}
        totalMissions={missionsCount}
        vdomCycles={vdomCounter}
      />
      <div className="container">
        <CelestialCatalog
          planets={planets}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onInspectPlanet={onInspectPlanet}
        />
      </div>
    </>
  );
}
