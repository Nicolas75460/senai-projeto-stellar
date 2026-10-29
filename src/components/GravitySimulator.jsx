import React, { useState, useEffect, useRef } from 'react';
import { 
  Weight, 
  Activity, 
  Zap, 
  ArrowUp, 
  Gauge, 
  Sparkles, 
  RefreshCw, 
  Cpu, 
  Info 
} from 'lucide-react';

export default function GravitySimulator({ 
  planets = [], 
  onVirtualDomUpdate 
}) {
  const [selectedPlanetId, setSelectedPlanetId] = useState('marte');
  const [astronautMass, setAstronautMass] = useState(80); // kg
  const [jumpVelocity, setJumpVelocity] = useState(4.5); // m/s
  const [isJumping, setIsJumping] = useState(false);
  const [reconciliationCount, setReconciliationCount] = useState(0);
  const [lastDiffTime, setLastDiffTime] = useState(null);

  // Find selected planet or fallback to first
  const currentPlanet = planets.find((p) => p.id === selectedPlanetId) || planets[0] || {
    id: 'terra',
    name: 'Terra',
    gravity: 9.8,
    gradient: 'linear-gradient(135deg, #0284c7, #10b981)'
  };

  // Physics formulas
  const gravity = currentPlanet.gravity;
  const weightNewtons = (astronautMass * gravity).toFixed(1);
  const earthWeightNewtons = (astronautMass * 9.8).toFixed(1);
  const weightRatio = (gravity / 9.8).toFixed(2);
  const jumpHeight = ((jumpVelocity * jumpVelocity) / (2 * gravity)).toFixed(2); // h = v² / (2g)
  const hangTime = ((2 * jumpVelocity) / gravity).toFixed(2); // t = 2v / g

  // useEffect com Sincronização de título e Listener de Redimensionamento com CLEANUP
  useEffect(() => {
    document.title = `Simulador Gravitacional (${currentPlanet.name}) | Stellar Hub`;

    const handleWindowResize = () => {
      // Ajuste dinâmico quando a viewport muda
      setLastDiffTime(new Date().toLocaleTimeString());
    };

    window.addEventListener('resize', handleWindowResize);

    // Função de limpeza (cleanup) do useEffect (Conceito da Aula 09)
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      document.title = 'Stellar Hub | Exploração Espacial & React Lab';
    };
  }, [currentPlanet.name]);

  // Trigger reconciliation tracking on state change
  useEffect(() => {
    setReconciliationCount((prev) => {
      const next = prev + 1;
      if (onVirtualDomUpdate) onVirtualDomUpdate(next);
      return next;
    });
    setLastDiffTime(new Date().toLocaleTimeString());
  }, [selectedPlanetId, astronautMass, jumpVelocity, onVirtualDomUpdate]);

  // Handle jump simulation trigger
  const handleTriggerJump = () => {
    if (isJumping) return;
    setIsJumping(true);
    const durationMs = Math.min(Math.max(parseFloat(hangTime) * 1000, 1200), 4000);
    setTimeout(() => {
      setIsJumping(false);
    }, durationMs);
  };

  return (
    <section className="simulator-section" id="simulador">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="badge badge-cyan">
          <Cpu size={13} />
          <span>Laboratório de Virtual DOM & Reatividade</span>
        </div>
        <h2 className="section-title">Simulador de Física & Reconciliação</h2>
        <p className="section-desc">
          Altere parâmetros gravitacionais e observe a velocidade do <strong>Virtual DOM</strong>. O React recalcula em memória e atualiza <em>exclusivamente</em> os nós numéricos que sofreram mutação.
        </p>
      </div>

      <div className="simulator-layout-grid">
        {/* Controls Card */}
        <div className="sim-controls-card glass-card">
          <h3 className="sim-card-title">
            <Gauge size={18} /> Controles da Simulação
          </h3>

          {/* Planet Selector */}
          <div className="control-group">
            <label className="control-label" htmlFor="planet-select">
              Destino Gravitacional:
            </label>
            <div className="planet-pill-selector">
              {planets.map((planet) => {
                const isSelected = planet.id === currentPlanet.id;
                return (
                  <button
                    key={planet.id}
                    className={`planet-pill-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedPlanetId(planet.id)}
                    type="button"
                  >
                    <span 
                      className="pill-dot" 
                      style={{ background: planet.gradient }} 
                    />
                    <span>{planet.name}</span>
                    <span className="pill-gravity font-mono">({planet.gravity}g)</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Astronaut Mass Slider */}
          <div className="control-group">
            <div className="slider-header">
              <label className="control-label" htmlFor="mass-slider">
                Massa do Astronauta com Traje:
              </label>
              <span className="slider-value-badge font-mono">{astronautMass} kg</span>
            </div>
            <input
              id="mass-slider"
              type="range"
              min="40"
              max="160"
              step="1"
              value={astronautMass}
              onChange={(e) => setAstronautMass(Number(e.target.value))}
              className="sim-range-slider"
            />
            <div className="slider-hints">
              <span>Leve (40kg)</span>
              <span>Padrão (80kg)</span>
              <span>Com Carga (160kg)</span>
            </div>
          </div>

          {/* Jump Impulse Slider */}
          <div className="control-group">
            <div className="slider-header">
              <label className="control-label" htmlFor="velocity-slider">
                Velocidade de Impulso Inicial:
              </label>
              <span className="slider-value-badge font-mono">{jumpVelocity} m/s</span>
            </div>
            <input
              id="velocity-slider"
              type="range"
              min="2.0"
              max="8.0"
              step="0.1"
              value={jumpVelocity}
              onChange={(e) => setJumpVelocity(Number(e.target.value))}
              className="sim-range-slider"
            />
            <div className="slider-hints">
              <span>Pulo suave (2.0 m/s)</span>
              <span>Salto normal (4.5 m/s)</span>
              <span>Propulsor (8.0 m/s)</span>
            </div>
          </div>

          {/* Jump Action Button */}
          <button 
            className={`btn btn-primary btn-jump ${isJumping ? 'jumping' : ''}`}
            onClick={handleTriggerJump}
            disabled={isJumping}
          >
            <ArrowUp size={18} />
            <span>{isJumping ? "Simulando Salto Orbital..." : `Simular Salto em ${currentPlanet.name}`}</span>
          </button>
        </div>

        {/* Physics Results & Live Animation Stage */}
        <div className="sim-stage-card glass-card">
          <div className="stage-top-bar">
            <div className="stage-planet-name">
              <span 
                className="stage-planet-sphere" 
                style={{ background: currentPlanet.gradient }} 
              />
              <h4>Ambiente: {currentPlanet.name} ({currentPlanet.type})</h4>
            </div>
            <span className="badge badge-emerald">Gravidade: {gravity} m/s²</span>
          </div>

          {/* Jump Visual Stage */}
          <div className="jump-stage-visual">
            <div className="jump-sky-glow" style={{ background: currentPlanet.gradient }} />
            
            {/* Astronaut Sprite */}
            <div 
              className={`astronaut-sprite ${isJumping ? 'in-air' : ''}`}
              style={{
                '--jump-height': `${Math.min(parseFloat(jumpHeight) * 35, 170)}px`,
                '--hang-time': `${hangTime}s`
              }}
            >
              <div className="astronaut-helmet">
                <div className="visor-reflection" />
              </div>
              <div className="astronaut-pack" />
              <div className="astronaut-boots" />
            </div>

            {/* Surface Line */}
            <div className="jump-surface">
              <span className="surface-label">Superfície de {currentPlanet.name}</span>
            </div>
          </div>

          {/* Calculated Telemetry Cards */}
          <div className="telemetry-metrics-grid">
            <div className="metric-box">
              <span className="metric-title">Peso Efetivo</span>
              <span className="metric-val font-mono vdom-flash">{weightNewtons} N</span>
              <span className="metric-sub font-mono">Terra: {earthWeightNewtons} N</span>
            </div>

            <div className="metric-box">
              <span className="metric-title">Altura do Salto</span>
              <span className="metric-val font-mono text-cyan vdom-flash">{jumpHeight} metros</span>
              <span className="metric-sub font-mono">Fórmula: v² / 2g</span>
            </div>

            <div className="metric-box">
              <span className="metric-title">Tempo no Ar</span>
              <span className="metric-val font-mono text-purple vdom-flash">{hangTime} segundos</span>
              <span className="metric-sub font-mono">Fórmula: 2v / g</span>
            </div>

            <div className="metric-box">
              <span className="metric-title">Fator Relativo</span>
              <span className="metric-val font-mono text-amber vdom-flash">{weightRatio}x</span>
              <span className="metric-sub font-mono">da gravidade terrestre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual DOM Didactic Inspection Panel */}
      <div className="vdom-inspector-card glass-card">
        <div className="vdom-header">
          <div className="vdom-title-wrap">
            <Activity size={20} className="pulse-cyan" />
            <h3>Inspetor de Reconciliação do Virtual DOM</h3>
          </div>
          <div className="vdom-badge-counter font-mono">
            <span>Diffs em Memória: </span>
            <strong className="text-teal">#{reconciliationCount}</strong>
          </div>
        </div>

        <div className="vdom-comparison-grid">
          <div className="vdom-explanation-box">
            <h5 className="box-title">⚡ Como o React processou esta alteração:</h5>
            <ol className="vdom-steps-list">
              <li>
                <strong>1. Atualização de Estado:</strong> O slider ou botão disparou <code>setAstronautMass()</code> ou <code>setSelectedPlanetId()</code>.
              </li>
              <li>
                <strong>2. Virtual DOM Diff:</strong> O React gerou uma nova representação virtual da árvore do simulador em memória e comparou-a com a snapshot anterior.
              </li>
              <li>
                <strong>3. Reconciliação Atômica:</strong> O algoritmo de reconciliação detectou que apenas as strings dos nós numéricos (ex: <code>{weightNewtons} N</code>) mudaram.
              </li>
              <li>
                <strong>4. Pintura Eficiente:</strong> Apenas os nós de texto foram atualizados no DOM do navegador, sem recriar os elementos de layout ou re-renderizar componentes estáticos.
              </li>
            </ol>
          </div>

          <div className="vdom-live-stats">
            <div className="vdom-stat-item">
              <span className="label">Último Ciclo de Renderização:</span>
              <span className="val font-mono">{lastDiffTime || 'Inicial'}</span>
            </div>
            <div className="vdom-stat-item">
              <span className="label">Manipulações Manuais de DOM:</span>
              <span className="val font-mono text-emerald">0 (100% Declarativo via React)</span>
            </div>
            <div className="vdom-stat-item">
              <span className="label">Impacto de Performance:</span>
              <span className="val font-mono text-cyan">O(n) com Algoritmo de Heurística</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
