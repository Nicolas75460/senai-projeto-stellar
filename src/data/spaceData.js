export const PLANETS = [
  {
    id: "terra",
    name: "Terra",
    type: "Rochoso",
    subtitle: "O Berço da Humanidade",
    distance: "149.6M km do Sol",
    distanceFromEarth: "0 km (Origem)",
    gravity: 9.8,
    diameter: "12,742 km",
    temperature: "15°C (Média)",
    moons: 1,
    status: "Explorado",
    color: "#38bdf8",
    gradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #10b981 100%)",
    ring: false,
    description: "Único corpo celeste conhecido por abrigar vida. Possui uma atmosfera rica em nitrogênio e oxigênio e vastos oceanos de água líquida.",
    atmosphere: [
      { gas: "Nitrogênio (N₂)", percentage: 78.1 },
      { gas: "Oxigênio (O₂)", percentage: 20.9 },
      { gas: "Argônio (Ar)", percentage: 0.9 },
      { gas: "Outros gases", percentage: 0.1 }
    ],
    highlightFacts: [
      "Possui escudo magnético protetor contra vento solar.",
      "71% da superfície coberta por água líquida.",
      "Único planeta com placas tectônicas ativas conhecidas."
    ]
  },
  {
    id: "marte",
    name: "Marte",
    type: "Rochoso",
    subtitle: "O Planeta Vermelho",
    distance: "227.9M km do Sol",
    distanceFromEarth: "78.3M km",
    gravity: 3.71,
    diameter: "6,779 km",
    temperature: "-63°C (Média)",
    moons: 2,
    status: "Sonda Ativa",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #ea580c 0%, #f97316 60%, #fdba74 100%)",
    ring: false,
    description: "Mundo desértico e frio com uma atmosfera rarefeita de dióxido de carbono. Abriga o Monte Olimpo, o maior vulcão do Sistema Solar.",
    atmosphere: [
      { gas: "Dióxido de Carbono (CO₂)", percentage: 95.3 },
      { gas: "Nitrogênio (N₂)", percentage: 2.7 },
      { gas: "Argônio (Ar)", percentage: 1.6 },
      { gas: "Oxigênio e vapor", percentage: 0.4 }
    ],
    highlightFacts: [
      "Abriga o Monte Olimpo com 21.9 km de altura.",
      "Dia marciano (Sol) dura 24 horas e 39 minutos.",
      "Alvo principal da exploração de robôs terrestres."
    ]
  },
  {
    id: "jupiter",
    name: "Júpiter",
    type: "Gigante Gasoso",
    subtitle: "O Rei dos Planetas",
    distance: "778.5M km do Sol",
    distanceFromEarth: "628.7M km",
    gravity: 24.79,
    diameter: "139,820 km",
    temperature: "-110°C (Nuvens)",
    moons: 95,
    status: "Mapeamento em Curso",
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 45%, #b45309 100%)",
    ring: true,
    description: "Maior planeta do Sistema Solar, com massa superior a duas vezes a de todos os outros planetas combinados. Sua Grande Mancha Vermelha é uma tempestade colossal.",
    atmosphere: [
      { gas: "Hidrogênio (H₂)", percentage: 89.8 },
      { gas: "Hélio (He)", percentage: 10.2 },
      { gas: "Metano (CH₄)", percentage: 0.3 },
      { gas: "Amônia", percentage: 0.1 }
    ],
    highlightFacts: [
      "Mais de 95 luas conhecidas, incluindo Europa e Ganimedes.",
      "A Grande Mancha Vermelha já dura centenas de anos.",
      "Campo magnético 20.000 vezes mais forte que o da Terra."
    ]
  },
  {
    id: "saturno",
    name: "Saturno",
    type: "Gigante Gasoso",
    subtitle: "A Joia dos Anéis",
    distance: "1.4B km do Sol",
    distanceFromEarth: "1.28B km",
    gravity: 10.44,
    diameter: "116,460 km",
    temperature: "-140°C",
    moons: 146,
    status: "Mapeamento em Curso",
    color: "#fde047",
    gradient: "linear-gradient(135deg, #ca8a04 0%, #eab308 50%, #fef08a 100%)",
    ring: true,
    description: "Famoso por seu espetacular sistema de anéis composto por fragmentos de gelo e rocha. É o planeta com menor densidade do Sistema Solar.",
    atmosphere: [
      { gas: "Hidrogênio (H₂)", percentage: 96.3 },
      { gas: "Hélio (He)", percentage: 3.25 },
      { gas: "Metano", percentage: 0.45 },
      { gas: "Outros", percentage: 0.1 }
    ],
    highlightFacts: [
      "Flutuaria na água se houvesse uma banheira grande o suficiente.",
      "Possui anéis com largura de centenas de milhares de quilômetros.",
      "Lua Titã possui lagos de metano líquido e atmosfera densa."
    ]
  },
  {
    id: "lua",
    name: "Lua",
    type: "Satélite Natural",
    subtitle: "Sentinela Terrestre",
    distance: "384,400 km da Terra",
    distanceFromEarth: "384,400 km",
    gravity: 1.62,
    diameter: "3,474 km",
    temperature: "-130°C a 120°C",
    moons: 0,
    status: "Explorado",
    color: "#cbd5e1",
    gradient: "linear-gradient(135deg, #64748b 0%, #94a3b8 50%, #e2e8f0 100%)",
    ring: false,
    description: "Nosso satélite natural mais próximo. Suas forças de maré estabilizam a inclinação da Terra e regulam os ciclos dos oceanos.",
    atmosphere: [
      { gas: "Vácuo Quase Perfeito (Exosfera)", percentage: 99.0 },
      { gas: "Hélio, Neon e Hidrogênio", percentage: 1.0 }
    ],
    highlightFacts: [
      "Único corpo celeste além da Terra pisado por seres humanos.",
      "Apresenta sempre a mesma face voltada para a Terra.",
      "Gravidade equivale a aproximadamente 1/6 da gravidade terrestre."
    ]
  },
  {
    id: "kepler452b",
    name: "Kepler-452b",
    type: "Exoplaneta",
    subtitle: "Primo Mais Velho da Terra",
    distance: "1,402 anos-luz",
    distanceFromEarth: "1,402 anos-luz",
    gravity: 19.6,
    diameter: "19,500 km",
    temperature: "-8°C estimado",
    moons: 0,
    status: "Desconhecido",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #7e22ce 0%, #a855f7 50%, #ec4899 100%)",
    ring: false,
    description: "Exoplaneta localizado na zona habitável de uma estrela similar ao Sol (tipo G2V). Tem cerca de 60% a mais de diâmetro que a Terra.",
    atmosphere: [
      { gas: "Atmosfera Densa Estimada", percentage: 70.0 },
      { gas: "Gases de Efeito Estufa", percentage: 30.0 }
    ],
    highlightFacts: [
      "Ano orbital dura cerca de 385 dias terrestres.",
      "Localizado na constelação de Cygnus.",
      "Considerado um dos exoplanetas com maior similaridade terrestre."
    ]
  },
  {
    id: "europa",
    name: "Europa",
    type: "Satélite Natural",
    subtitle: "Oceano Subterrâneo Oculto",
    distance: "628.3M km da Terra",
    distanceFromEarth: "628.3M km",
    gravity: 1.31,
    diameter: "3,121 km",
    temperature: "-170°C",
    moons: 0,
    status: "Sonda Ativa",
    color: "#38bdf8",
    gradient: "linear-gradient(135deg, #0369a1 0%, #38bdf8 60%, #bae6fd 100%)",
    ring: false,
    description: "Uma das luas galileanas de Júpiter. Sob sua crosta de gelo rachada existe um oceano salgado que pode conter o dobro da água dos oceanos da Terra.",
    atmosphere: [
      { gas: "Oxigênio Molecular (Rarefeito)", percentage: 98.0 },
      { gas: "Outros traços", percentage: 2.0 }
    ],
    highlightFacts: [
      "Crosta de gelo com rachaduras causadas pelas marés gravitacionais de Júpiter.",
      "Possui gêiseres de vapor de água ejetados para o espaço.",
      "Candidata número 1 para busca de vida microbiana extraterrestre."
    ]
  },
  {
    id: "netuno",
    name: "Netuno",
    type: "Gigante de Gelo",
    subtitle: "O Gigante Azul dos Ventos",
    distance: "4.5B km do Sol",
    distanceFromEarth: "4.3B km",
    gravity: 11.15,
    diameter: "49,244 km",
    temperature: "-214°C",
    moons: 16,
    status: "Mapeamento em Curso",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)",
    ring: true,
    description: "O planeta mais distante do Sistema Solar. Possui ventos supersônicos que ultrapassam 2.100 km/h e uma coloração azul intensa provocada pelo metano atmosférico.",
    atmosphere: [
      { gas: "Hidrogênio (H₂)", percentage: 80.0 },
      { gas: "Hélio (He)", percentage: 19.0 },
      { gas: "Metano (CH₄)", percentage: 1.0 }
    ],
    highlightFacts: [
      "Ventos mais velozes do Sistema Solar, superando 2.100 km/h.",
      "Leva 165 anos terrestres para completar uma única volta ao redor do Sol.",
      "Visitado de perto apenas pela sonda Voyager 2 em 1989."
    ]
  }
];

export const INITIAL_MISSIONS = [
  {
    id: "missao-artemis",
    name: "Projeto Artemis Lunar",
    targetPlanetId: "lua",
    targetName: "Lua",
    agency: "NASA / Internacional",
    launchYear: 2026,
    status: "Em Rota",
    priority: "Alta",
    progress: 74,
    signalStrength: 98,
    fuelLevel: 88,
    activeSensors: 12,
    badgeColor: "#10b981",
    objective: "Estabelecer base permanente na superfície lunar e testar novas tecnologias para missões tripuladas a Marte."
  },
  {
    id: "missao-perseverance",
    name: "Perseverance & Ingenuity",
    targetPlanetId: "marte",
    targetName: "Marte",
    agency: "NASA / JPL",
    launchYear: 2020,
    status: "Em Rota",
    priority: "Crítica",
    progress: 91,
    signalStrength: 86,
    fuelLevel: 68,
    activeSensors: 18,
    badgeColor: "#3b82f6",
    objective: "Coleta e análise de amostras na cratera Jezero buscando bioassinaturas de vida antiga em Marte."
  },
  {
    id: "missao-europa-clipper",
    name: "Europa Clipper",
    targetPlanetId: "europa",
    targetName: "Europa (Júpiter)",
    agency: "NASA / ESA",
    launchYear: 2024,
    status: "Em Rota",
    priority: "Alta",
    progress: 42,
    signalStrength: 92,
    fuelLevel: 94,
    activeSensors: 9,
    badgeColor: "#8b5cf6",
    objective: "Investigar se o oceano subterrâneo sob o gelo de Europa possui condições propícias para a vida."
  },
  {
    id: "missao-james-webb",
    name: "Observatório Deep Space",
    targetPlanetId: "kepler452b",
    targetName: "Kepler-452b",
    agency: "Consórcio Global",
    launchYear: 2021,
    status: "Concluída",
    priority: "Média",
    progress: 100,
    signalStrength: 99,
    fuelLevel: 82,
    activeSensors: 24,
    badgeColor: "#06b6d4",
    objective: "Espectroscopia de atmosferas exoplanetárias na busca por vapor d'água, oxigênio e metano."
  },
  {
    id: "missao-juno",
    name: "Juno Orbiting Probe",
    targetPlanetId: "jupiter",
    targetName: "Júpiter",
    agency: "NASA",
    launchYear: 2011,
    status: "Concluída",
    priority: "Normal",
    progress: 100,
    signalStrength: 73,
    fuelLevel: 21,
    activeSensors: 11,
    badgeColor: "#eab308",
    objective: "Compreender a origem e evolução de Júpiter mapeando campos gravitacionais e magnéticos."
  }
];

export const REACT_CONCEPTS = [
  {
    id: "jsx",
    number: "01",
    title: "JSX (JavaScript XML)",
    category: "Sintaxe & Estrutura",
    summary: "Extensão de sintaxe que permite escrever marcação semelhante a HTML diretamente no JavaScript.",
    codeExample: `// Interpolação com chaves { } e atributos JSX
const planeta = "Marte";
const gravidade = 3.71;

function CardPlaneta() {
  return (
    <div className="card-espacial">
      <h3>{planeta}</h3>
      <p>Gravidade: {gravidade} m/s²</p>
      <span className={gravidade < 5 ? "baixa" : "alta"}>
        {gravidade < 5 ? "Gravidade Reduzida" : "Gravidade Alta"}
      </span>
    </div>
  );
}`,
    keyPoints: [
      "Usa className no lugar de class (palavra reservada do JS).",
      "Qualquer expressão JS válida pode ser interpolada dentro de { }.",
      "Elementos sem filhos devem ser auto-fechados (ex: <img />, <input />).",
      "É compilado para chamadas React.createElement() pelo compilador Vite/Babel."
    ]
  },
  {
    id: "componentes",
    number: "02",
    title: "Componentes React",
    category: "Modularização",
    summary: "Funções JavaScript puras que retornam elementos React descrevendo uma unidade reutilizável da tela.",
    codeExample: `// Componente modular com nome em maiúscula
function TelemetriaBadge({ sinal, bateria }) {
  return (
    <div className="telemetria-badge">
      <span>📡 Sinal: {sinal}%</span>
      <span>🔋 Bateria: {bateria}%</span>
    </div>
  );
}

// Composição na árvore de componentes
function App() {
  return (
    <main>
      <TelemetriaBadge sinal={98} bateria={85} />
    </main>
  );
}`,
    keyPoints: [
      "Nomes de componentes SEMPRE iniciam com letra maiúscula.",
      "Permite dividir a interface em pedaços modulares, fáceis de testar e manter.",
      "Composição forma a Árvore de Componentes (Component Tree).",
      "Promove o princípio de responsabilidade única na UI."
    ]
  },
  {
    id: "props",
    number: "03",
    title: "Props (Propriedades)",
    category: "Comunicação de Dados",
    summary: "Parâmetros imutáveis passados de um componente pai para um filho em fluxo estritamente unidirecional.",
    codeExample: `// Desestruturação de props e valores default
function SondaEspacial({ nome, velocidade, ativa = true, onTransmitir }) {
  return (
    <div className="sonda-card">
      <h4>{nome}</h4>
      <p>Velocidade: {velocidade} km/h</p>
      <p>Status: {ativa ? "Operacional" : "Offline"}</p>
      <button onClick={() => onTransmitir(nome)}>
        Ping de Telemetria
      </button>
    </div>
  );
}`,
    keyPoints: [
      "Props são somente-leitura (imutáveis pelo componente filho).",
      "Aceitam qualquer tipo: strings, números, booleanos, objetos, arrays e funções callback.",
      "Fluxo de dados sempre unidirecional: do componente Pai para o Filho.",
      "Permitem que o mesmo componente seja renderizado com dados completamente distintos."
    ]
  },
  {
    id: "virtual-dom",
    number: "04",
    title: "Virtual DOM & Reconciliação",
    category: "Performance & Reatividade",
    summary: "Cópia leve da árvore da interface mantida em memória para calcular apenas as diferenças exatas a aplicar no DOM real.",
    codeExample: `// O estado muda -> Virtual DOM compara -> Atualiza só o número
const [telemetria, setTelemetria] = useState(100);

// React compara a nova descrição com a anterior (Reconciliação)
// e só altera o nó de texto correspondente no DOM real!
return (
  <div className="painel">
    <span className="live-metric">{telemetria}</span>
  </div>
);`,
    keyPoints: [
      "Evita manipulações custosas e manuais com document.querySelector() ou innerHTML.",
      "Algoritmo Diffing identifica nós alterados, mantendo nós estáticos intactos.",
      "Batching: múltiplas atualizações de estado são agrupadas para performance máxima.",
      "Garante fluidez visual mesmo em interfaces dinâmicas em tempo real."
    ]
  },
  {
    id: "listas-keys",
    number: "05",
    title: "Listas e Keys",
    category: "Coleções de Dados",
    summary: "Transformação de arrays em elementos de interface utilizando .map() com chaves (keys) estáveis e únicas.",
    codeExample: `const missoes = [
  { id: "m1", nome: "Artemis", ano: 2026 },
  { id: "m2", nome: "Clipper", ano: 2024 }
];

function ListaMissoes() {
  return (
    <ul>
      {missoes.map((missao) => (
        <li key={missao.id}>
          {missao.nome} ({missao.ano})
        </li>
      ))}
    </ul>
  );
}`,
    keyPoints: [
      "A prop 'key' auxilia o algoritmo de reconciliação a rastrear itens adicionados/removidos/reordenados.",
      "Nunca use índices de array (index) como key se a lista puder ser filtrada ou reordenada.",
      "Combinação comum com .filter() para criar buscas instantâneas e filtros por categoria.",
      "Produza sempre novos arrays imutáveis em vez de alterar o array original."
    ]
  },
  {
    id: "condicional",
    number: "06",
    title: "Renderização Condicional",
    category: "Controle de Fluxo",
    summary: "Mecanismo para exibir diferentes componentes ou fragmentos visuais com base no estado ou props atuais.",
    codeExample: `function StatusLancamento({ estagio, carregando, falha }) {
  // 1. Cláusula de guarda com if / return
  if (falha) {
    return <div className="alerta-erro">Abortar Lançamento!</div>;
  }

  return (
    <div>
      {/* 2. Operador ternário para alternar UI */}
      {carregando ? <p>Calibrando propulsores...</p> : <p>Pronto para ignição</p>}
      
      {/* 3. Operador && para exibição condicional */}
      {estagio === "orbita" && <BadgeOrbital />}
    </div>
  );
}`,
    keyPoints: [
      "if/return antecipado para telas de carregamento, erros ou bloqueios.",
      "Operador ternário (cond ? <A/> : <B/>) para alternar entre dois estados.",
      "Curto-circuito lógico (cond && <A/>) para exibir conteúdo apenas quando verdadeiro.",
      "Permite tratar listas vazias ('Nenhum resultado encontrado')."
    ]
  },
  {
    id: "usestate",
    number: "07",
    title: "State e o Hook useState",
    category: "Reatividade & Estado",
    summary: "Guarda informações internas mutáveis do componente e aciona a re-renderização do React quando alterado.",
    codeExample: `import { useState } from "react";

function ContadorSondas() {
  // valor atual e função atualizadora
  const [sondas, setSondas] = useState(5);

  return (
    <div>
      <p>Sondas ativas: {sondas}</p>
      <button onClick={() => setSondas(sondas + 1)}>
        Lançar Nova Sonda
      </button>
    </div>
  );
}`,
    keyPoints: [
      "Variáveis locais normais perdem o valor a cada re-renderização e não atualizam a tela.",
      "useState preserva dados entre renderizações e comanda atualizações do Virtual DOM.",
      "Regras dos Hooks: chame apenas no topo do componente, nunca dentro de if ou loops.",
      "Retorna sempre [valor, setValor] via desestruturação de array."
    ]
  },
  {
    id: "formularios",
    number: "08",
    title: "Formulários & Campos Controlados",
    category: "Entrada de Dados",
    summary: "Padronização onde o estado do React é a fonte única da verdade para o valor dos campos, usando value e onChange.",
    codeExample: `import { useState } from "react";

function FormularioMissao() {
  const [nome, setNome] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Impede o reload da página
    if (!nome.trim()) return alert("Nome obrigatório!");
    alert("Missão enviada: " + nome);
    setNome("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome da missão..."
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}`,
    keyPoints: [
      "Campos controlados ligam value={estado} e onChange={e => setEstado(e.target.value)}.",
      "e.preventDefault() impede o recarregamento automático padrão da página pelo navegador.",
      "Permite validação de campos em tempo real e bloqueio condicional de envio.",
      "Facilita limpeza e reset dos inputs após a submissão bem-sucedida."
    ]
  },
  {
    id: "useeffect",
    number: "09",
    title: "Hook useEffect & Limpeza (Cleanup)",
    category: "Efeitos Colaterais",
    summary: "Executa sincronizações com sistemas externos (APIs, timers, títulos, listeners) com controle rigoroso de ciclo de vida e cleanup.",
    codeExample: `import { useEffect, useState } from "react";

function RastreadorSatelite() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    // 1. Efeito: temporizador de busca de telemetria
    const intervalId = setInterval(() => {
      console.log("Sincronizando telemetria com a estação...");
    }, 5000);

    // 2. Função de limpeza (cleanup) para evitar vazamento de memória!
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Executa na montagem e limpa na desmontagem

  return <div>Rastreamento Ativo</div>;
}`,
    keyPoints: [
      "Sem array de dependências: executa a cada nova renderização (risco de loops).",
      "Array vazio []: executa apenas na montagem inicial do componente.",
      "Array com dependências [id]: executa na montagem e sempre que a dependência mudar.",
      "Função retornada (cleanup): libera timers, cancela requisições e remove event listeners."
    ]
  },
  {
    id: "consumo-api",
    number: "10",
    title: "Consumo de APIs com fetch (GET & POST)",
    category: "Comunicação Externa",
    summary: "Requisições HTTP assíncronas para carregar ou persistir dados em servidores, com tratamento de loading e erro.",
    codeExample: `// Requisição GET assíncrona com try/catch
async function carregarTelemetria() {
  try {
    const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    if (!res.ok) throw new Error("Erro HTTP: " + res.status);
    const dados = await res.json();
    return dados;
  } catch (erro) {
    console.error("Falha na consulta:", erro);
  }
}

// Envio de dados com POST
await fetch("/api/relatorios", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ sonda: "Pioneer", status: "OK" })
});`,
    keyPoints: [
      "Sempre verifique response.ok para capturar códigos de erro HTTP 4xx e 5xx.",
      "Gerencie estados visuais de Carregamento (Loading), Erro e Dados carregados.",
      "Envio com POST exige method, headers com Content-Type e body serializado em JSON.",
      "Nunca exponha chaves secretas ou credenciais confidenciais no código do cliente."
    ]
  },
  {
    id: "react-router",
    number: "11",
    title: "React Router & useParams",
    category: "Roteamento SPA",
    summary: "Navegação declarativa por URLs sem recarregar o documento HTML, com suporte a rotas dinâmicas e parâmetros de rota.",
    codeExample: `import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

// Componente de detalhe com rota dinâmica /planeta/:id
function DetalhePlaneta() {
  const { id } = useParams(); // Obtém o parâmetro ":id" da URL atual
  return <h2>Corpo Celeste: {id}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/planeta/marte">Marte</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planeta/:id" element={<DetalhePlaneta />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,
    keyPoints: [
      "BrowserRouter envolve a aplicação e monitora a URL do navegador.",
      "Routes avalia as rotas filhas e Route mapeia path para um elemento JSX.",
      "Link e NavLink permitem navegação instantânea em SPAs sem reload.",
      "useParams() extrai parâmetros dinâmicos da URL definidos como :parametro."
    ]
  }
];

export const INITIAL_OBSERVATIONS = [
  {
    id: 101,
    astronomer: "Dra. Ellen Ripley",
    targetObject: "Marte - Monte Olimpo",
    frequency: "1420.405 MHz (Linha do Hidrogênio)",
    telescope: "Radiotelescópio Deep Space ALMA",
    notes: "Anomalia eletromagnética detectada no setor norte. Assinatura compatível com reflexão ionosférica.",
    timestamp: "2026-10-28 21:15 UTC",
    priority: "Alta",
    verified: true
  },
  {
    id: 102,
    astronomer: "Dr. Carl Sagan",
    targetObject: "Europa (Lua de Júpiter)",
    frequency: "8415.000 MHz (Deep Space Band X)",
    telescope: "Observatório Orbital James Webb II",
    notes: "Espectroscopia de vapor d'água confirmada sobre a crosta de gelo na região sul.",
    timestamp: "2026-10-28 20:42 UTC",
    priority: "Crítica",
    verified: true
  },
  {
    id: 103,
    astronomer: "Nícolas Oliveira",
    targetObject: "Kepler-452b",
    frequency: "2295.000 MHz (Banda S)",
    telescope: "Matriz de Antenas SENAI Space",
    notes: "Sinal de calibração enviado para antena trans-orbital. Telemetria nominal.",
    timestamp: "2026-10-28 19:30 UTC",
    priority: "Normal",
    verified: true
  }
];
