import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  Layers, 
  Share2, 
  Cpu, 
  ListTree, 
  ToggleLeft,
  ChevronRight,
  RefreshCw,
  FileCode2,
  Radio,
  Compass,
  Sparkles,
  Zap
} from 'lucide-react';
import { REACT_CONCEPTS } from '../data/spaceData';

export default function ReactDidacticLab() {
  const [selectedConceptId, setSelectedConceptId] = useState('jsx');
  const [filterLesson, setFilterLesson] = useState('todas'); // 'todas' | 'aula08' | 'aula09'

  useEffect(() => {
    document.title = 'Laboratório Didático React (Aulas 08 & 09) | Stellar Hub';
  }, []);

  const selectedConcept = REACT_CONCEPTS.find(c => c.id === selectedConceptId) || REACT_CONCEPTS[0];

  // Helper mapping icon per concept
  const getConceptIcon = (id) => {
    switch (id) {
      case 'jsx': return Code2;
      case 'componentes': return Layers;
      case 'props': return Share2;
      case 'virtual-dom': return Cpu;
      case 'listas-keys': return ListTree;
      case 'condicional': return ToggleLeft;
      case 'usestate': return Zap;
      case 'formularios': return FileCode2;
      case 'useeffect': return RefreshCw;
      case 'consumo-api': return Radio;
      case 'react-router': return Compass;
      default: return BookOpen;
    }
  };

  // Practical location reference in Stellar Hub
  const getProjectLocation = (id) => {
    switch (id) {
      case 'jsx':
        return {
          file: 'src/components/PlanetCard.jsx',
          desc: 'Interpolação de valores {gravity}, {temperature}, interpolação de estilos com style={{ background: gradient }} e classes dinâmicas.'
        };
      case 'componentes':
        return {
          file: 'src/components/Navbar.jsx, Hero.jsx, PlanetCard.jsx',
          desc: 'Árvore hierárquica com componentes especializados reutilizados e organizados por responsabilidade única.'
        };
      case 'props':
        return {
          file: 'src/components/PlanetCard.jsx e PlanetModal.jsx',
          desc: 'Envio de propriedades imutáveis (planet, isFavorite, callbacks onToggleFavorite, onInspect) do pai CelestialCatalog para os filhos.'
        };
      case 'virtual-dom':
        return {
          file: 'src/components/GravitySimulator.jsx',
          desc: 'Contador de ciclos de reconciliação em tempo real e atualização seletiva dos nós de física sem repintar a tela toda.'
        };
      case 'listas-keys':
        return {
          file: 'src/components/CelestialCatalog.jsx',
          desc: 'Uso de .map() com chaves estáveis key={planet.id} combinadas com .filter() para categorias, busca e favoritos.'
        };
      case 'condicional':
        return {
          file: 'src/components/MissionLaunchCenter.jsx',
          desc: 'Máquina de estados (STANDBY, CHECKING, COUNTDOWN, SUCCESS, ABORTED) usando ternários, if/return e operador &&.'
        };
      case 'usestate':
        return {
          file: 'src/App.jsx, GravitySimulator.jsx, MissionLaunchCenter.jsx',
          desc: 'Gerenciamento de estado interno: favoritos, missões, peso do astronauta e inputs de formulário disparando re-renderizações automáticas.'
        };
      case 'formularios':
        return {
          file: 'src/pages/ObservatoryApiPage.jsx e MissionLaunchCenter.jsx',
          desc: 'Campos controlados vinculados a estado via value e onChange, validação de campos obrigatórios e submissão com e.preventDefault().'
        };
      case 'useeffect':
        return {
          file: 'src/pages/ObservatoryApiPage.jsx e Navbar.jsx',
          desc: 'Sincronização de título (document.title), busca assíncrona com polling na ISS e função de limpeza (cleanup) limpando clearInterval e abortando requisições.'
        };
      case 'consumo-api':
        return {
          file: 'src/pages/ObservatoryApiPage.jsx',
          desc: 'Requisições GET em tempo real para a API da ISS (api.wheretheiss.at) e POST para o endpoint jsonplaceholder com headers application/json e feedback de sucesso.'
        };
      case 'react-router':
        return {
          file: 'src/App.jsx e src/pages/PlanetDetailPage.jsx',
          desc: 'Roteamento com BrowserRouter, Routes, Route, Link, NavLink e leitura de parâmetros dinâmicos de rota com useParams().'
        };
      default:
        return { file: 'src/App.jsx', desc: 'Estrutura global do projeto.' };
    }
  };

  const projectReference = getProjectLocation(selectedConcept.id);

  // Filtragem dos conceitos por aula
  const displayedConcepts = REACT_CONCEPTS.filter((c) => {
    const num = parseInt(c.number, 10);
    if (filterLesson === 'aula08') return num <= 6;
    if (filterLesson === 'aula09') return num >= 7;
    return true;
  });

  return (
    <section className="didactic-section" id="didatica">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="badge badge-cyan">
          <BookOpen size={13} />
          <span>Matriz Pedagógica Completa • Aulas 08 & 09</span>
        </div>
        <h2 className="section-title">Laboratório Didático de Conceitos React</h2>
        <p className="section-desc">
          Guia interativo que documenta, conceitua e comprova a aplicação prática dos <strong>11 conceitos essenciais</strong> exigidos nas Aulas 08 e 09 de Frameworks Front-end do SENAI.
        </p>

        {/* Filter Chips by Lesson */}
        <div className="category-chips" style={{ justifyContent: 'center', marginTop: '1.25rem' }}>
          <button 
            className={`chip-button ${filterLesson === 'todas' ? 'active' : ''}`}
            onClick={() => setFilterLesson('todas')}
          >
            Todos os 11 Conceitos
          </button>
          <button 
            className={`chip-button ${filterLesson === 'aula08' ? 'active' : ''}`}
            onClick={() => setFilterLesson('aula08')}
          >
            Aula 08: Fundamentos React (01 a 06)
          </button>
          <button 
            className={`chip-button ${filterLesson === 'aula09' ? 'active' : ''}`}
            onClick={() => setFilterLesson('aula09')}
          >
            Aula 09: Hooks, APIs & Rotas (07 a 11)
          </button>
        </div>
      </div>

      <div className="didactic-layout-grid">
        {/* Concepts Sidebar Navigation */}
        <div className="concepts-nav-list glass-card">
          <h3 className="nav-list-title">Tópicos Selecionados ({displayedConcepts.length}):</h3>
          {displayedConcepts.map((concept) => {
            const IconComp = getConceptIcon(concept.id);
            const isSelected = concept.id === selectedConcept.id;
            const isAula09 = parseInt(concept.number, 10) >= 7;
            return (
              <button
                key={concept.id}
                className={`concept-nav-item ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedConceptId(concept.id)}
              >
                <div className="item-number font-mono">{concept.number}</div>
                <div className="item-meta">
                  <span className="item-title">{concept.title}</span>
                  <span className="item-cat">
                    {concept.category} • {isAula09 ? 'Aula 09' : 'Aula 08'}
                  </span>
                </div>
                <IconComp size={16} className="item-icon" />
              </button>
            );
          })}
        </div>

        {/* Selected Concept Deep Dive */}
        <div className="concept-detail-panel glass-card">
          <div className="detail-panel-top">
            <span className="badge badge-purple">{selectedConcept.category}</span>
            <span className="concept-num-tag font-mono">
              Tópico #{selectedConcept.number} • {parseInt(selectedConcept.number, 10) >= 7 ? 'Ementa Aula 09' : 'Ementa Aula 08'}
            </span>
          </div>

          <h3 className="detail-concept-title">{selectedConcept.title}</h3>
          <p className="detail-concept-summary">{selectedConcept.summary}</p>

          {/* Key Principles from Slide Deck */}
          <div className="principles-box glass-card">
            <h4 className="box-heading">
              <CheckCircle2 size={16} className="text-teal" /> Princípios Fundamentais (SENAI):
            </h4>
            <ul className="principles-list">
              {selectedConcept.keyPoints.map((point, idx) => (
                <li key={idx} className="principle-bullet">
                  <span className="bullet-dot">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Example Block */}
          <div className="code-example-container">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="code-filename font-mono">ExemploConceito.jsx</span>
            </div>
            <pre className="code-block font-mono">
              <code>{selectedConcept.codeExample}</code>
            </pre>
          </div>

          {/* Real application in Stellar Hub */}
          <div className="where-applied-box">
            <h4 className="where-title">
              <Code2 size={16} className="text-cyan" /> Onde está aplicado no Stellar Hub:
            </h4>
            <div className="applied-info">
              <div className="file-badge font-mono">
                <code>{projectReference.file}</code>
              </div>
              <p className="applied-desc">{projectReference.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
