import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  CheckCircle2, 
  AlertTriangle, 
  Radio, 
  Fuel, 
  ShieldAlert, 
  RotateCcw, 
  Trash2, 
  Play, 
  Send, 
  Sparkles,
  Signal
} from 'lucide-react';

export default function MissionLaunchCenter({ 
  planets = [], 
  missions = [], 
  onAddMission, 
  onRemoveMission, 
  onPingMission,
  presetPlanetId = null 
}) {
  // Launch state machine: 'STANDBY' | 'CHECKING' | 'COUNTDOWN' | 'SUCCESS' | 'ABORTED'
  const [stage, setStage] = useState('STANDBY');
  const [probeName, setProbeName] = useState('Sonda Estelar Pioneer-X');
  const [targetId, setTargetId] = useState(presetPlanetId || 'marte');
  const [priority, setPriority] = useState('Alta');
  const [missionObjective, setMissionObjective] = useState('Varredura espectroscópica e mapeamento de recursos voláteis');
  const [countdown, setCountdown] = useState(5);
  const [checkProgress, setCheckProgress] = useState({ fuel: 0, telemetry: 0, trajectory: 0 });

  // Update target when preset changes
  useEffect(() => {
    if (presetPlanetId) setTargetId(presetPlanetId);
  }, [presetPlanetId]);

  // Pre-flight automated diagnostics sequence
  useEffect(() => {
    let timer;
    if (stage === 'CHECKING') {
      const interval = setInterval(() => {
        setCheckProgress((prev) => {
          const nextFuel = Math.min(prev.fuel + 25, 100);
          const nextTelem = Math.min(prev.telemetry + 20, 100);
          const nextTraj = Math.min(prev.trajectory + 33, 100);
          if (nextFuel === 100 && nextTelem === 100 && nextTraj === 100) {
            clearInterval(interval);
            setTimeout(() => setStage('COUNTDOWN'), 400);
          }
          return { fuel: nextFuel, telemetry: nextTelem, trajectory: nextTraj };
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [stage]);

  // Countdown sequence
  useEffect(() => {
    let timer;
    if (stage === 'COUNTDOWN') {
      if (countdown > 0) {
        timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      } else {
        // Launch successful! Add to mission list
        const targetPlanet = planets.find(p => p.id === targetId) || { name: 'Espaço Profundo' };
        const newMission = {
          id: `missao-${Date.now()}`,
          name: probeName || `Sonda Explorer ${Math.floor(Math.random() * 900 + 100)}`,
          targetPlanetId: targetId,
          targetName: targetPlanet.name,
          agency: 'SENAI Space Command',
          launchYear: 2026,
          status: 'Em Rota',
          priority: priority,
          progress: 5,
          signalStrength: 100,
          fuelLevel: 98,
          activeSensors: 8,
          badgeColor: '#00f5d4',
          objective: missionObjective || 'Exploração e transmissão de dados orbitais.'
        };
        onAddMission(newMission);
        setStage('SUCCESS');
      }
    }
    return () => clearTimeout(timer);
  }, [stage, countdown, probeName, targetId, priority, missionObjective, planets, onAddMission]);

  const handleStartLaunch = (e) => {
    e.preventDefault();
    setCheckProgress({ fuel: 0, telemetry: 0, trajectory: 0 });
    setCountdown(5);
    setStage('CHECKING');
  };

  const handleAbort = () => {
    setStage('ABORTED');
  };

  const handleResetToStandby = () => {
    setStage('STANDBY');
    setCountdown(5);
    setCheckProgress({ fuel: 0, telemetry: 0, trajectory: 0 });
  };

  return (
    <section className="launch-center-section" id="lancamentos">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="badge badge-amber">
          <Rocket size={13} />
          <span>Renderização Condicional em Ação</span>
        </div>
        <h2 className="section-title">Centro de Controle e Lançamentos</h2>
        <p className="section-desc">
          Máquina de estados demonstrando <strong>renderização condicional avançada</strong> (<code>if/return</code>, operador ternário e curto-circuito lógico <code>&&</code>) para orquestrar etapas de voo espacial.
        </p>
      </div>

      <div className="launch-layout-grid">
        {/* Launch Sequence Control Panel */}
        <div className="launch-config-card glass-card">
          <div className="panel-header-row">
            <h3 className="panel-title">
              <Rocket size={19} /> Plataforma de Ignição Estelar
            </h3>
            {/* Conditional Status Badge */}
            <span className={`badge ${
              stage === 'STANDBY' ? 'badge-cyan' :
              stage === 'CHECKING' ? 'badge-amber' :
              stage === 'COUNTDOWN' ? 'badge-purple' :
              stage === 'SUCCESS' ? 'badge-emerald' : 'badge-rose'
            }`}>
              {stage === 'STANDBY' && 'Aguardando Comandos'}
              {stage === 'CHECKING' && 'Diagnóstico Pré-Voo'}
              {stage === 'COUNTDOWN' && `Contagem Regressiva: T-${countdown}`}
              {stage === 'SUCCESS' && 'Lançamento Efetuado!'}
              {stage === 'ABORTED' && 'Sequência Abortada'}
            </span>
          </div>

          {/* Conditional Stage: STANDBY FORM */}
          {stage === 'STANDBY' && (
            <form onSubmit={handleStartLaunch} className="launch-form">
              <div className="form-group">
                <label className="form-label" htmlFor="probe-name">
                  Identificador da Sonda / Nave:
                </label>
                <input
                  id="probe-name"
                  type="text"
                  className="form-input"
                  value={probeName}
                  onChange={(e) => setProbeName(e.target.value)}
                  placeholder="Nome da missão espacial..."
                  required
                />
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label className="form-label" htmlFor="target-select">
                    Corpo Celeste Alvo:
                  </label>
                  <select
                    id="target-select"
                    className="form-select"
                    value={targetId}
                    onChange={(e) => setTargetId(e.target.value)}
                  >
                    {planets.map((planet) => (
                      <option key={planet.id} value={planet.id}>
                        {planet.name} ({planet.type})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="priority-select">
                    Prioridade da Missão:
                  </label>
                  <select
                    id="priority-select"
                    className="form-select"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Alta">Alta</option>
                    <option value="Crítica">Crítica</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mission-desc">
                  Objetivo Científico:
                </label>
                <textarea
                  id="mission-desc"
                  className="form-textarea"
                  rows={2}
                  value={missionObjective}
                  onChange={(e) => setMissionObjective(e.target.value)}
                  placeholder="Descreva o propósito da missão..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-launch">
                <Play size={18} />
                <span>Autorizar & Iniciar Sequência de Lançamento</span>
              </button>
            </form>
          )}

          {/* Conditional Stage: CHECKING SYSTEMS */}
          {stage === 'CHECKING' && (
            <div className="preflight-diagnostics">
              <div className="diag-header">
                <Radio size={20} className="pulse-cyan" />
                <h4>Telemetria: Verificando Sistemas Críticos...</h4>
              </div>

              <div className="diag-bar-item">
                <div className="diag-bar-labels">
                  <span>Combustível Criogênico (LH₂ / LOX)</span>
                  <span className="font-mono">{checkProgress.fuel}%</span>
                </div>
                <div className="gas-bar-track">
                  <div className="gas-bar-fill bg-cyan" style={{ width: `${checkProgress.fuel}%` }} />
                </div>
              </div>

              <div className="diag-bar-item">
                <div className="diag-bar-labels">
                  <span>Enlace de Rádio & Telemetria Deep Space</span>
                  <span className="font-mono">{checkProgress.telemetry}%</span>
                </div>
                <div className="gas-bar-track">
                  <div className="gas-bar-fill bg-purple" style={{ width: `${checkProgress.telemetry}%` }} />
                </div>
              </div>

              <div className="diag-bar-item">
                <div className="diag-bar-labels">
                  <span>Cálculo de Janela de Injeção Trans-Orbital</span>
                  <span className="font-mono">{checkProgress.trajectory}%</span>
                </div>
                <div className="gas-bar-track">
                  <div className="gas-bar-fill bg-teal" style={{ width: `${checkProgress.trajectory}%` }} />
                </div>
              </div>

              <button className="btn btn-abort" onClick={handleAbort}>
                <ShieldAlert size={16} />
                <span>Abortar Procedimento de Segurança</span>
              </button>
            </div>
          )}

          {/* Conditional Stage: COUNTDOWN */}
          {stage === 'COUNTDOWN' && (
            <div className="countdown-stage">
              <span className="countdown-label">IGNIÇÃO EM ANDAMENTO</span>
              <div className="countdown-number font-mono">{countdown}</div>
              <p className="countdown-hint">Motores principais pressurizados. Todos os sistemas nominais.</p>
              <button className="btn btn-abort" onClick={handleAbort}>
                <ShieldAlert size={16} />
                <span>Abortar nos Segundos Finais</span>
              </button>
            </div>
          )}

          {/* Conditional Stage: SUCCESS */}
          {stage === 'SUCCESS' && (
            <div className="success-stage">
              <div className="success-icon-wrap">
                <CheckCircle2 size={48} className="text-emerald" />
              </div>
              <h4 className="success-title">Sonda em Órbita com Sucesso!</h4>
              <p className="success-desc">
                A sonda <strong>{probeName}</strong> iniciou sua trajetória rumo a seu destino. Os dados de telemetria já estão disponíveis na lista de missões abaixo.
              </p>
              <button className="btn btn-primary" onClick={handleResetToStandby}>
                <RotateCcw size={16} />
                <span>Configurar Novo Lançamento</span>
              </button>
            </div>
          )}

          {/* Conditional Stage: ABORTED */}
          {stage === 'ABORTED' && (
            <div className="aborted-stage">
              <div className="aborted-icon-wrap">
                <AlertTriangle size={48} className="text-rose" />
              </div>
              <h4 className="aborted-title">Lançamento Abortado com Segurança</h4>
              <p className="aborted-desc">
                Os propulsores foram despressurizados e os tanques de combustível foram purgados conforme os protocolos de segurança aeroespacial.
              </p>
              <button className="btn btn-secondary" onClick={handleResetToStandby}>
                <RotateCcw size={16} />
                <span>Retornar ao Painel de Standby</span>
              </button>
            </div>
          )}
        </div>

        {/* Active Missions Monitor */}
        <div className="missions-monitor-card glass-card">
          <div className="panel-header-row">
            <h3 className="panel-title">
              <Radio size={19} /> Missões Ativas em Monitoramento ({missions.length})
            </h3>
          </div>

          {/* Conditional Rendering: Missions List vs Empty List */}
          {missions.length > 0 ? (
            <div className="missions-stream-list">
              {missions.map((mission) => (
                <div key={mission.id} className="mission-item glass-card">
                  <div className="mission-item-top">
                    <div className="mission-identity">
                      <span className="mission-name">{mission.name}</span>
                      <span className="mission-target">➔ Destino: <strong>{mission.targetName}</strong></span>
                    </div>
                    <div className="mission-badges-group">
                      <span className={`badge ${
                        mission.priority === 'Crítica' ? 'badge-rose' :
                        mission.priority === 'Alta' ? 'badge-amber' : 'badge-cyan'
                      }`}>
                        {mission.priority}
                      </span>
                      <span className="badge badge-emerald">{mission.status}</span>
                    </div>
                  </div>

                  <p className="mission-obj">{mission.objective}</p>

                  {/* Telemetry Stats Bar */}
                  <div className="mission-telemetry-row font-mono">
                    <div className="telem-item">
                      <Signal size={13} className="text-teal" />
                      <span>Sinal: {mission.signalStrength}%</span>
                    </div>
                    <div className="telem-item">
                      <Fuel size={13} className="text-amber" />
                      <span>Tanque: {mission.fuelLevel}%</span>
                    </div>
                    <div className="telem-item">
                      <span>Progresso: {mission.progress}%</span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="gas-bar-track">
                    <div 
                      className="gas-bar-fill bg-gradient-progress" 
                      style={{ width: `${mission.progress}%` }} 
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="mission-actions-row">
                    <button 
                      className="btn-telem-ping"
                      onClick={() => onPingMission(mission.id)}
                      title="Enviar sinal de telemetria"
                    >
                      <Send size={13} />
                      <span>Ping Telemetria</span>
                    </button>
                    <button 
                      className="btn-decommission"
                      onClick={() => onRemoveMission(mission.id)}
                      title="Descomissionar missão da lista"
                    >
                      <Trash2 size={13} />
                      <span>Descomissionar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-missions-state">
              <p>Nenhuma missão ativa no momento. Utilize a plataforma de ignição ao lado para iniciar um novo lançamento!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
