import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Satellite, 
  Send, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Clock, 
  Globe, 
  Wifi, 
  ShieldCheck,
  FileCode2,
  Sparkles
} from 'lucide-react';
import { INITIAL_OBSERVATIONS } from '../data/spaceData';

export default function ObservatoryApiPage() {
  // 1. Estados para o Consumo de API (GET) da Estação Espacial Internacional
  const [issData, setIssData] = useState(null);
  const [loadingIss, setLoadingIss] = useState(true);
  const [errorIss, setErrorIss] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // 2. Estados para o Formulário Controlado e Envio de Dados (POST)
  const [observations, setObservations] = useState(INITIAL_OBSERVATIONS);
  const [astronomer, setAstronomer] = useState('');
  const [targetObject, setTargetObject] = useState('Marte - Cratera Jezero');
  const [frequency, setFrequency] = useState('1420.405 MHz (Banda L)');
  const [telescope, setTelescope] = useState('Radiotelescópio SENAI Deep Space');
  const [priority, setPriority] = useState('Alta');
  const [notes, setNotes] = useState('');
  const [submittingPost, setSubmittingPost] = useState(false);
  const [postFeedback, setPostFeedback] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  // Sincroniza o título da aba do navegador via useEffect
  useEffect(() => {
    document.title = 'Observatório & Consumo de APIs | Stellar Hub';
    return () => {
      document.title = 'Stellar Hub | Exploração Espacial & React Lab';
    };
  }, []);

  // 3. Função assíncrona de busca com fetch() (GET) e validação de response.ok
  const fetchIssTelemetry = async (signal) => {
    setLoadingIss(true);
    setErrorIss(null);
    try {
      const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544', { signal });
      if (!response.ok) {
        throw new Error(`Falha na resposta HTTP: status ${response.status}`);
      }
      const data = await response.json();
      setIssData(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      if (err.name !== 'AbortError') {
        setErrorIss(err.message || 'Falha ao conectar com o serviço de telemetria.');
      }
    } finally {
      setLoadingIss(false);
    }
  };

  // 4. useEffect com sincronização periódica e FUNÇÃO DE LIMPEZA (Cleanup)
  useEffect(() => {
    const controller = new AbortController();
    fetchIssTelemetry(controller.signal);

    let intervalId = null;
    if (autoRefresh) {
      intervalId = setInterval(() => {
        fetchIssTelemetry(controller.signal);
      }, 7000); // Polling a cada 7 segundos
    }

    // Função de limpeza essencial (Aula 09) para cancelar timer e requisições pendentes
    return () => {
      if (intervalId) clearInterval(intervalId);
      controller.abort();
    };
  }, [autoRefresh]);

  // 5. Envio de Formulário Controlado com POST assíncrono
  const handleObservationSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página

    // Validação de dados de entrada
    const errors = {};
    if (!astronomer.trim() || astronomer.trim().length < 3) {
      errors.astronomer = 'O nome do astrônomo deve conter pelo menos 3 caracteres.';
    }
    if (!notes.trim() || notes.trim().length < 8) {
      errors.notes = 'A anotação de telemetria deve conter pelo menos 8 caracteres.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmittingPost(true);
    setPostFeedback(null);

    const payload = {
      astronomer: astronomer.trim(),
      targetObject,
      frequency,
      telescope,
      priority,
      notes: notes.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      // Requisição POST conforme ensinado na Aula 09 (slide 31)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Falha no envio POST: status HTTP ${res.status}`);
      }

      const returnedData = await res.json();

      // Adiciona o novo registro confirmado à lista local
      const newObs = {
        id: returnedData.id || Date.now(),
        astronomer: payload.astronomer,
        targetObject: payload.targetObject,
        frequency: payload.frequency,
        telescope: payload.telescope,
        notes: payload.notes,
        timestamp: new Date().toLocaleTimeString() + ' (Hoje)',
        priority: payload.priority,
        verified: true
      };

      setObservations((prev) => [newObs, ...prev]);
      setPostFeedback({
        type: 'success',
        message: `Relatório de telemetria transmitido com sucesso via POST! (ID retornado pelo servidor: #${newObs.id})`
      });

      // Limpeza dos campos controlados
      setAstronomer('');
      setNotes('');
    } catch (err) {
      setPostFeedback({
        type: 'error',
        message: `Erro na transmissão POST: ${err.message}`
      });
    } finally {
      setSubmittingPost(false);
    }
  };

  return (
    <div className="observatory-page container">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="badge badge-cyan">
          <Radio size={13} />
          <span>Consumo de APIs • GET, POST, useEffect & Limpeza</span>
        </div>
        <h2 className="section-title">Observatório Espacial & Feed de Telemetria</h2>
        <p className="section-desc">
          Integração com APIs remotas em tempo real utilizando <code>fetch()</code> assíncrono com <code>async/await</code>, controle de ciclo de vida com <strong>cleanup</strong> no <code>useEffect</code> e envio de dados via <strong>POST</strong>.
        </p>
      </div>

      {/* Grid: ISS Live Telemetry vs Observation POST Form */}
      <div className="observatory-layout-grid">
        {/* Live ISS Tracker Card (GET API) */}
        <div className="iss-tracker-card glass-card">
          <div className="tracker-header-row">
            <div className="tracker-title-wrap">
              <Satellite size={22} className="text-cyan animate-spin-slow" />
              <div>
                <h3 className="tracker-title">Estação Espacial Internacional (ISS)</h3>
                <span className="tracker-sub">Telemetria Orbital em Tempo Real via API Aberta</span>
              </div>
            </div>

            <div className="tracker-actions">
              <button 
                className={`refresh-pill ${loadingIss ? 'spinning' : ''}`}
                onClick={() => fetchIssTelemetry()}
                title="Sincronizar agora via fetch(GET)"
                disabled={loadingIss}
              >
                <RefreshCw size={13} />
                <span>Atualizar</span>
              </button>
            </div>
          </div>

          {/* Conditional Rendering: Loading, Error or Telemetry Data */}
          {loadingIss && !issData && (
            <div className="api-loading-state">
              <div className="spinner-orbit" />
              <p>Conectando ao enlace de rádio da ISS via <code>fetch(GET)</code>...</p>
            </div>
          )}

          {errorIss && (
            <div className="api-error-state glass-card">
              <AlertTriangle size={32} className="text-rose" />
              <h4>Falha na Conexão com a API</h4>
              <p>{errorIss}</p>
              <button className="btn btn-secondary" onClick={() => fetchIssTelemetry()}>
                Tentar Novamente
              </button>
            </div>
          )}

          {issData && (
            <div className="iss-metrics-display">
              <div className="live-status-pill">
                <span className="live-dot pulse-green" />
                <span className="font-mono">Sinal Orbital Ativo • Satélite #{issData.id}</span>
                <span className="last-sync font-mono">Sync: {lastUpdated}</span>
              </div>

              <div className="iss-grid-specs">
                <div className="spec-metric-card">
                  <span className="metric-label">Latitude Geodésica</span>
                  <span className="metric-value font-mono text-cyan">
                    {issData.latitude.toFixed(4)}°
                  </span>
                  <span className="metric-detail">{issData.latitude >= 0 ? 'Hemisfério Norte' : 'Hemisfério Sul'}</span>
                </div>

                <div className="spec-metric-card">
                  <span className="metric-label">Longitude Geodésica</span>
                  <span className="metric-value font-mono text-purple">
                    {issData.longitude.toFixed(4)}°
                  </span>
                  <span className="metric-detail">{issData.longitude >= 0 ? 'Leste (East)' : 'Oeste (West)'}</span>
                </div>

                <div className="spec-metric-card">
                  <span className="metric-label">Velocidade Orbital</span>
                  <span className="metric-value font-mono text-teal">
                    {Math.round(issData.velocity).toLocaleString()} km/h
                  </span>
                  <span className="metric-detail font-mono">~7.66 km/s</span>
                </div>

                <div className="spec-metric-card">
                  <span className="metric-label">Altitude Média</span>
                  <span className="metric-value font-mono text-amber">
                    {issData.altitude.toFixed(1)} km
                  </span>
                  <span className="metric-detail">Órbita Baixa (LEO)</span>
                </div>
              </div>

              {/* Cleanup and useEffect highlight */}
              <div className="api-code-note">
                <FileCode2 size={15} className="text-cyan" />
                <span>
                  <strong>useEffect com Cleanup:</strong> O temporizador de atualização contínua retorna <code>() =&gt; clearInterval()</code> para impedir vazamento de memória quando o usuário navega para outra rota.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Observation Dispatch Form (POST API) */}
        <div className="post-form-card glass-card">
          <div className="panel-header-row">
            <h3 className="panel-title">
              <Send size={19} className="text-teal" />
              <span>Transmissão de Observação (POST)</span>
            </h3>
            <span className="badge badge-emerald">JSON Schema</span>
          </div>

          <form onSubmit={handleObservationSubmit} className="observation-form">
            <div className="form-group">
              <label htmlFor="astronomer-input" className="form-label">
                Astrônomo / Pesquisador Responsável:
              </label>
              <input
                id="astronomer-input"
                type="text"
                className={`form-input ${formErrors.astronomer ? 'input-error' : ''}`}
                value={astronomer}
                onChange={(e) => setAstronomer(e.target.value)}
                placeholder="Ex: Dra. Margaret Hamilton"
              />
              {formErrors.astronomer && (
                <span className="field-error-msg">{formErrors.astronomer}</span>
              )}
            </div>

            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="target-input" className="form-label">
                  Alvo da Varredura:
                </label>
                <select
                  id="target-input"
                  className="form-select"
                  value={targetObject}
                  onChange={(e) => setTargetObject(e.target.value)}
                >
                  <option value="Marte - Cratera Jezero">Marte - Cratera Jezero</option>
                  <option value="Europa - Oceano Subterrâneo">Europa - Oceano Subterrâneo</option>
                  <option value="Júpiter - Mancha Vermelha">Júpiter - Mancha Vermelha</option>
                  <option value="Saturno - Anel B">Saturno - Anel B</option>
                  <option value="Kepler-452b - Atmosfera">Kepler-452b - Atmosfera</option>
                  <option value="Espaço Profundo - Constelação Cygnus">Espaço Profundo - Cygnus</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="priority-input" className="form-label">
                  Prioridade do Registro:
                </label>
                <select
                  id="priority-input"
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
              <label htmlFor="frequency-input" className="form-label">
                Frequência de Rádio / Banda de Comunicação:
              </label>
              <input
                id="frequency-input"
                type="text"
                className="form-input font-mono"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes-input" className="form-label">
                Anotações Espectrais & Dados Coletados:
              </label>
              <textarea
                id="notes-input"
                className={`form-textarea ${formErrors.notes ? 'input-error' : ''}`}
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Descreva a leitura dos instrumentos e anomalias registradas..."
              />
              {formErrors.notes && (
                <span className="field-error-msg">{formErrors.notes}</span>
              )}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-post-submit"
              disabled={submittingPost}
            >
              <Send size={16} />
              <span>{submittingPost ? 'Transmitindo via POST...' : 'Transmitir Relatório ao Servidor (POST)'}</span>
            </button>
          </form>

          {/* Feedback banner */}
          {postFeedback && (
            <div className={`post-feedback-alert ${postFeedback.type}`}>
              {postFeedback.type === 'success' ? (
                <CheckCircle2 size={18} className="text-emerald" />
              ) : (
                <AlertTriangle size={18} className="text-rose" />
              )}
              <span>{postFeedback.message}</span>
            </div>
          )}
        </div>
      </div>

      {/* Observation Stream List */}
      <div className="observation-stream-section glass-card" style={{ marginTop: '2.5rem' }}>
        <div className="panel-header-row">
          <h3 className="panel-title">
            <Radio size={19} className="text-cyan" />
            <span>Feed de Observações Transmitidas ({observations.length})</span>
          </h3>
          <span className="badge badge-purple">Stream de Dados</span>
        </div>

        <div className="observations-grid">
          {observations.map((obs) => (
            <div key={obs.id} className="obs-card glass-card">
              <div className="obs-top">
                <div className="obs-target-info">
                  <span className="obs-target-name">{obs.targetObject}</span>
                  <span className="obs-astronomer">Por: <strong>{obs.astronomer}</strong></span>
                </div>
                <span className={`badge ${
                  obs.priority === 'Crítica' ? 'badge-rose' :
                  obs.priority === 'Alta' ? 'badge-amber' : 'badge-cyan'
                }`}>
                  {obs.priority}
                </span>
              </div>

              <p className="obs-notes">{obs.notes}</p>

              <div className="obs-footer font-mono">
                <span className="obs-freq">{obs.frequency}</span>
                <span className="obs-time">{obs.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
