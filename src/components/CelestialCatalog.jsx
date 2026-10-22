import React, { useState, useMemo } from 'react';
import PlanetCard from './PlanetCard';
import { 
  Search, 
  Filter, 
  Heart, 
  RotateCcw, 
  Sparkles, 
  Layers, 
  AlertCircle 
} from 'lucide-react';

const CATEGORIES = [
  'Todos',
  'Rochoso',
  'Gigante Gasoso',
  'Gigante de Gelo',
  'Satélite Natural',
  'Exoplaneta'
];

export default function CelestialCatalog({ 
  planets = [], 
  favorites = [], 
  onToggleFavorite, 
  onInspectPlanet 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Filter planets based on search, category, status and favorites
  const filteredPlanets = useMemo(() => {
    return planets.filter((planet) => {
      // Search matching
      const matchesSearch = 
        planet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        planet.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        planet.type.toLowerCase().includes(searchTerm.toLowerCase());

      // Category matching
      const matchesCategory = 
        selectedCategory === 'Todos' || planet.type === selectedCategory;

      // Status matching
      const matchesStatus = 
        selectedStatus === 'Todos' || planet.status === selectedStatus;

      // Favorites matching
      const matchesFavorite = 
        !onlyFavorites || favorites.includes(planet.id);

      return matchesSearch && matchesCategory && matchesStatus && matchesFavorite;
    });
  }, [planets, searchTerm, selectedCategory, selectedStatus, onlyFavorites, favorites]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todos');
    setSelectedStatus('Todos');
    setOnlyFavorites(false);
  };

  return (
    <section className="catalog-section" id="catalogo">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="badge badge-purple">
          <Layers size={13} />
          <span>Renderização de Listas & Keys</span>
        </div>
        <h2 className="section-title">Catálogo de Corpos Celestes</h2>
        <p className="section-desc">
          Coleção iterada dinamicamente via <code>Array.prototype.map()</code> utilizando chaves estáveis (<code>key=&#123;planet.id&#125;</code>) para otimização da árvore de reconciliação do React.
        </p>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="filter-controls-card glass-card">
        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar por nome, tipo ou características (ex: Marte, Rochoso)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Buscar planetas"
          />
          {searchTerm && (
            <button 
              className="clear-search-btn"
              onClick={() => setSearchTerm('')}
              title="Limpar pesquisa"
            >
              ✕
            </button>
          )}
        </div>

        {/* Secondary Filter Row */}
        <div className="filter-row">
          {/* Category Chips */}
          <div className="category-chips" role="radiogroup" aria-label="Filtrar por Categoria">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  className={`chip-button ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="filter-options-right">
            {/* Status Dropdown */}
            <div className="status-dropdown-wrapper">
              <Filter size={15} className="filter-icon" />
              <select
                className="status-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                aria-label="Filtrar por status da missão"
              >
                <option value="Todos">Status: Todos</option>
                <option value="Explorado">Explorado</option>
                <option value="Sonda Ativa">Sonda Ativa</option>
                <option value="Mapeamento em Curso">Mapeamento em Curso</option>
                <option value="Desconhecido">Desconhecido</option>
              </select>
            </div>

            {/* Only Favorites Toggle Button */}
            <button
              className={`only-favs-btn ${onlyFavorites ? 'active' : ''}`}
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              title="Exibir apenas favoritos"
            >
              <Heart size={15} className={onlyFavorites ? "fill-rose" : ""} />
              <span>Favoritos ({favorites.length})</span>
            </button>

            {/* Reset Filters Button */}
            {(searchTerm || selectedCategory !== 'Todos' || selectedStatus !== 'Todos' || onlyFavorites) && (
              <button
                className="reset-filters-btn"
                onClick={handleResetFilters}
                title="Limpar todos os filtros"
              >
                <RotateCcw size={14} />
                <span>Limpar</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter and Active Filter Tags */}
        <div className="filter-summary-row">
          <span className="results-count">
            Mostrando <strong>{filteredPlanets.length}</strong> de {planets.length} corpos celestes
          </span>
          {onlyFavorites && (
            <span className="badge badge-rose">Filtro: Somente Favoritos</span>
          )}
          {selectedCategory !== 'Todos' && (
            <span className="badge badge-cyan">Tipo: {selectedCategory}</span>
          )}
        </div>
      </div>

      {/* Conditional Rendering: Planets Grid vs Empty State */}
      {filteredPlanets.length > 0 ? (
        <div className="planets-grid">
          {filteredPlanets.map((planet) => (
            <PlanetCard
              key={planet.id}
              planet={planet}
              isFavorite={favorites.includes(planet.id)}
              onToggleFavorite={onToggleFavorite}
              onInspect={onInspectPlanet}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state-card glass-card">
          <div className="empty-icon-wrap">
            <AlertCircle size={44} className="text-amber" />
          </div>
          <h3 className="empty-title">Nenhum corpo celeste encontrado</h3>
          <p className="empty-desc">
            Nenhum resultado corresponde aos critérios de pesquisa e filtros selecionados. Tente ajustar o termo de busca ou limpar os filtros.
          </p>
          <button className="btn btn-primary" onClick={handleResetFilters}>
            <RotateCcw size={16} />
            <span>Restaurar Todos os Corpos Celestes</span>
          </button>
        </div>
      )}
    </section>
  );
}
