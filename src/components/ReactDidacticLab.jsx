import React, { useState } from 'react';
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
  ExternalLink
} from 'lucide-react';
import { REACT_CONCEPTS } from '../data/spaceData';

export default function ReactDidacticLab() {
  const [selectedConceptId, setSelectedConceptId] = useState('jsx');

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
      default:
        return { file: 'src/App.jsx', desc: 'Estrutura global do projeto.' };
    }
  };

  const projectReference = getProjectLocation(selectedConcept.id);

  return (
    <section className="didactic-section" id="didatica">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="badge badge-cyan">
          <BookOpen size={13} />
          <span>Alinhamento Pedagógico • Aula 08</span>
        </div>
        <h2 className="section-title">Laboratório Didático de Conceitos React</h2>
        <p className="section-desc">
          Guia interativo que documenta e comprova a aplicação de cada um dos seis conceitos fundamentais exigidos na atividade prática do SENAI.
        </p>
      </div>

      <div className="didactic-layout-grid">
        {/* Concepts Sidebar Navigation */}
        <div className="concepts-nav-list glass-card">
          <h3 className="nav-list-title">Conceitos Estudados:</h3>
          {REACT_CONCEPTS.map((concept) => {
            const IconComp = getConceptIcon(concept.id);
            const isSelected = concept.id === selectedConcept.id;
            return (
              <button
                key={concept.id}
                className={`concept-nav-item ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedConceptId(concept.id)}
              >
                <div className="item-number font-mono">{concept.number}</div>
                <div className="item-meta">
                  <span className="item-title">{concept.title}</span>
                  <span className="item-cat">{concept.category}</span>
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
            <span className="concept-num-tag font-mono">Tópico #{selectedConcept.number}</span>
          </div>

          <h3 className="detail-concept-title">{selectedConcept.title}</h3>
          <p className="detail-concept-summary">{selectedConcept.summary}</p>

          {/* Key Principles from Slide Deck */}
          <div className="principles-box glass-card">
            <h4 className="box-heading">
              <CheckCircle2 size={16} className="text-teal" /> Princípios Fundamentais (Aula 08):
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
