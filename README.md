# 🌌 Stellar Hub — Exploração Espacial & Laboratório React

> **Atividade Prática Integrada: Aula 08 (Projeto React) & Aula 09 (Projeto React 02)**  
> **Disciplina:** Frameworks Front-end — 2º Semestre  
> **Instituição:** SENAI Informática  
> **Docente:** Prof. Me. Deivison S. Takatu  
> **Desenvolvedor:** Nícolas Oliveira Carvalho da Silva  
> **Repositório GitHub:** [https://github.com/Nicolas75460/senai-projeto-stellar](https://github.com/Nicolas75460/senai-projeto-stellar)

---

## 🚀 Sobre o Projeto

O **Stellar Hub** é uma aplicação web imersiva de exploração espacial e laboratório avançado de desenvolvimento front-end, construída para aplicar e consolidar com excelência todos os conteúdos e práticas lecionados nas **Aulas 08 e 09** de React do SENAI.

A plataforma combina astronomia e engenharia de software contemporânea: permite aos usuários explorar catálogos cósmicos, navegar entre rotas estáticas e dinâmicas, rastrear a **Estação Espacial Internacional (ISS)** em tempo real via API aberta com ciclo de vida controlado (`useEffect` + *cleanup*), registrar observações astronômicas com requisições assíncronas `POST`, testar a física do salto gravitacional com monitoramento de reconciliações do **Virtual DOM**, e inspecionar a teoria e código de cada um dos **11 pilares pedagógicos** do React.

---

## 🛠️ Tecnologias e Ferramentas

- **React 19** — Biblioteca declarativa para criação de interfaces modernas por componentes.
- **React Router 7 (`react-router-dom`)** — Roteamento declarativo com páginas estáticas, rotas dinâmicas com parâmetros de URL (`useParams`), `NavLink` com estado ativo e tratador 404.
- **Vite 6** — Build tool ultra veloz e ambiente de desenvolvimento modular.
- **APIs Web Nativas (`fetch`, `async/await`)** — Consumo assíncrono com requisições `GET` (telemetria da ISS) e `POST` (registro de observações).
- **CSS3 Moderno & Design System Cósmico** — Glassmorphism, tokens de cor variáveis, animações CSS, responsividade fluida e tipografia espacial.
- **Lucide React** — Ícones vetoriais modernos de alta densidade visual.
- **Vercel** — Hospedagem em nuvem com regras de reescrita em `vercel.json` para suporte total a Single Page Applications (SPA).

---

## 📚 Matriz Completa de Conceitos Aplicados (Aulas 08 & 09)

O projeto cumpre integralmente os requisitos curriculares de ambas as aulas:

### 🌟 Aula 08 — Fundamentos do React
| # | Conceito | Descrição Didática | Implementação no Stellar Hub |
| :-: | :--- | :--- | :--- |
| **01** | **JSX** | Extensão de sintaxe que une estrutura e lógica, interpolação `{ }`, atributos camelCase e classes dinâmicas. | [`PlanetCard.jsx`](file:///src/components/PlanetCard.jsx), [`Hero.jsx`](file:///src/components/Hero.jsx) |
| **02** | **Componentes** | Unidades modulares reutilizáveis organizadas em hierarquia clara e orientada à responsabilidade única. | Diretórios [`src/components/`](file:///src/components/) e [`src/pages/`](file:///src/pages/) |
| **03** | **Props** | Fluxo unidirecional de dados do componente pai para os filhos, incluindo objetos, flags e callbacks. | [`PlanetCard.jsx`](file:///src/components/PlanetCard.jsx), [`PlanetModal.jsx`](file:///src/components/PlanetModal.jsx) |
| **04** | **Virtual DOM** | Árvore virtual em memória para cálculo de *diffing* e reconciliação seletiva sem repintar a tela toda. | [`GravitySimulator.jsx`](file:///src/components/GravitySimulator.jsx) |
| **05** | **Listas e Keys** | Renderização com `map()`, atribuindo chave única e estável `key` para otimização do algoritmo de reconciliação. | [`CelestialCatalog.jsx`](file:///src/components/CelestialCatalog.jsx), [`ObservatoryApiPage.jsx`](file:///src/pages/ObservatoryApiPage.jsx) |
| **06** | **Renderização Condicional** | Exibição visual com base em estados e props usando `if/return`, operador ternário e curto-circuito lógico `&&`. | [`MissionLaunchCenter.jsx`](file:///src/components/MissionLaunchCenter.jsx), [`PlanetModal.jsx`](file:///src/components/PlanetModal.jsx) |

### 🚀 Aula 09 — Hooks, Ciclo de Vida, APIs e Roteamento
| # | Conceito | Descrição Didática | Implementação no Stellar Hub |
| :-: | :--- | :--- | :--- |
| **07** | **State e useState** | Gerenciamento de estado interno que provoca re-renderização da interface ao ser modificado de forma imutável. | [`App.jsx`](file:///src/App.jsx), [`PlanetDetailPage.jsx`](file:///src/pages/PlanetDetailPage.jsx) |
| **08** | **Formulários Controlados** | Elementos `<input>`, `<select>` e `<textarea>` com `value` e `onChange`, validação de erros e `e.preventDefault()`. | [`ObservatoryApiPage.jsx`](file:///src/pages/ObservatoryApiPage.jsx), [`MissionLaunchCenter.jsx`](file:///src/components/MissionLaunchCenter.jsx) |
| **09** | **useEffect & Cleanup** | Sincronização com sistemas externos, atualização do `document.title`, polling com `setInterval` e limpeza com `clearInterval` e `AbortController`. | [`ObservatoryApiPage.jsx`](file:///src/pages/ObservatoryApiPage.jsx), [`Navbar.jsx`](file:///src/components/Navbar.jsx) |
| **10** | **Consumo de APIs (GET/POST)** | Requisições assíncronas com `fetch()`, verificação de `response.ok`, tratamento de erros em `try/catch` e estados de *loading*, *error* e *data*. | [`ObservatoryApiPage.jsx`](file:///src/pages/ObservatoryApiPage.jsx) |
| **11** | **React Router (`useParams`)** | Navegação SPA entre páginas com `BrowserRouter`, rotas estáticas, rotas dinâmicas `/planeta/:id` com extração por `useParams()`, `NavLink` ativo e 404. | [`App.jsx`](file:///src/App.jsx), [`PlanetDetailPage.jsx`](file:///src/pages/PlanetDetailPage.jsx), [`NotFoundPage.jsx`](file:///src/pages/NotFoundPage.jsx) |

---

## 🎯 Principais Módulos da Aplicação

### 1. 🪐 Catálogo de Corpos Celestes (`/`)
- Mapeamento de 8 corpos celestes com dados astronômicos autênticos.
- Campo de busca instantânea e filtros combinados por categoria (Rochosos, Gasosos, Gelo, Luas, Exoplanetas) e status de exploração.
- Sistema de favoritos sincronizado no `localStorage`.
- Acesso à telemetria rápida em modal ou navegação direta para a rota individual com `useParams()`.

### 2. 🌌 Página Dinâmica de Detalhes (`/planeta/:id`)
- **Roteamento Dinâmico:** Rota configurada como `/planeta/:id` utilizando o hook `useParams()` para identificar o corpo celeste.
- **Efeito de Título com Cleanup:** `useEffect` que atualiza dinamicamente o título da aba do navegador para o nome do planeta e o restaura ao sair.
- **Calculadora Interativa de Gravidade e Peso:** Campo controlado com `useState` que recalcula instantaneamente o peso do usuário no planeta com base em sua aceleração gravitacional ($g$).
- **Assinatura Espectroscópica da Atmosfera:** Gráficos de barras percentuais com a composição química do planeta.
- Ação direta para configurar missão de lançamento com destino pré-selecionado.

### 3. 📡 Observatório Espacial & Consumo de APIs (`/api-observatorio`)
- **Consumo de API Real (GET):** Integração com a API aberta da ISS (`https://api.wheretheiss.at/v1/satellites/25544`) rastreando latitude, longitude, altitude (~415 km) e velocidade orbital (~27.500 km/h).
- **Ciclo de Vida com Função de Limpeza:** Sincronização periódica via `useEffect` que limpa o temporizador (`clearInterval`) e aborta requisições pendentes caso o usuário mude de página, prevenindo vazamentos de memória.
- **Estados Visuais de API:** Tratamento visual completo de *Carregando...*, *Erro de Conexão* e *Dados Atualizados*.
- **Formulário de Observações (POST):** Envio assíncrono de relatórios científicos de varredura com cabeçalhos HTTP (`Content-Type: application/json`), payload formatado em `JSON.stringify()`, validação de campos obrigatórios e confirmação do servidor (`jsonplaceholder.typicode.com/posts`).
- **Feed de Transmissões:** Histórico interativo dos registros enviados com identificador numérico retornado pelo servidor.

### 4. ⚖️ Simulador Gravitacional & Virtual DOM (`/simulador`)
- Sliders controlados para ajuste de massa (kg) e força de impulsão (m/s).
- Simulação física precisa da altura máxima ($h = \frac{v^2}{2g}$) e tempo de suspensão ($t = \frac{2v}{g}$) em cada planeta.
- **Inspetor do Virtual DOM:** Contador em tempo real que ilustra graficamente o processo de reconciliação seletiva do React.

### 5. 🚀 Centro de Ignição e Lançamentos (`/lancamentos`)
- Máquina de estados aeroespaciais (`STANDBY` ➔ `CHECKING` ➔ `COUNTDOWN` ➔ `SUCCESS` / `ABORTED`).
- Formulário controlado com validação preventiva de campo vazio.
- Painel de telemetria das missões ativas com ações de ping de sinal e cancelamento.

### 6. 📖 Laboratório Didático React (`/laboratorio-didatico`)
- Painel completo com os 11 conceitos das Aulas 08 e 09.
- Filtro por aula (*Todas*, *Aula 08*, *Aula 09*), exemplos de código comentados e guia de localização exata no código-fonte.

### 7. 🧭 Página 404 Estelar (`*`)
- Rota coringa que captura qualquer endereço não catalogado e oferece retorno seguro à base.

---

## 📂 Estrutura de Diretórios

```text
senai-projeto-stellar/
├── public/
│   └── favicon.svg               # Ícone cósmico vetorial
├── src/
│   ├── assets/                   # Recursos de mídia
│   ├── components/               # Componentes modulares reutilizáveis
│   │   ├── CelestialCatalog.jsx  # Catálogo com listas, keys, busca e filtros
│   │   ├── Footer.jsx            # Rodapé com créditos acadêmicos e links de rotas
│   │   ├── GravitySimulator.jsx  # Simulador da física orbital e Virtual DOM
│   │   ├── Hero.jsx              # Banner de apresentação com métricas
│   │   ├── MissionLaunchCenter.jsx # Centro de lançamentos e formulários
│   │   ├── Navbar.jsx            # Barra com NavLink, Link e timer via useEffect
│   │   ├── PlanetCard.jsx        # Card de planeta com link para rota dedicada
│   │   ├── PlanetModal.jsx       # Modal rápido de inspeção
│   │   └── ReactDidacticLab.jsx  # Laboratório com os 11 conceitos das aulas
│   ├── data/
│   │   └── spaceData.js          # Base de corpos celestes e matriz didática
│   ├── pages/                    # Páginas vinculadas às rotas do React Router
│   │   ├── HomePage.jsx          # Página inicial (Hero + Catálogo)
│   │   ├── NotFoundPage.jsx      # Página 404 para rotas inexistentes
│   │   ├── ObservatoryApiPage.jsx# Observatório: GET da ISS e POST de observação
│   │   └── PlanetDetailPage.jsx  # Detalhes dinâmicos com useParams()
│   ├── App.jsx                   # Configuração de rotas (<Routes>, <Route>) e estado
│   ├── App.css                   # Folha de estilo dos componentes e páginas
│   ├── index.css                 # Tokens de design system e fontes globais
│   └── main.jsx                  # Ponto de entrada envolto em <BrowserRouter>
├── index.html                    # Documento HTML5 e meta tags SEO
├── package.json                  # Dependências (react-router-dom, lucide-react)
├── vercel.json                   # Regras de rewrite SPA para deploy na Vercel
├── vite.config.js                # Configuração do Vite com plugin React
└── README.md                     # Documentação completa do projeto
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18+)
- Gerenciador **npm**

### Passo a passo:
```bash
# 1. Clone o repositório
git clone https://github.com/Nicolas75460/senai-projeto-stellar.git

# 2. Acesse a pasta do projeto
cd senai-projeto-stellar

# 3. Instale as dependências
npm install

# 4. Inicie o servidor local de desenvolvimento
npm run dev
```

Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 🌐 Publicação na Vercel (Passo a Passo)

O repositório já está 100% pronto para publicação na **Vercel**, incluindo o arquivo `vercel.json` que gerencia o roteamento de Single Page Applications (SPA):

1. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
2. Clique em **"Add New..."** ➔ **"Project"**.
3. Selecione o repositório **`Nicolas75460/senai-projeto-stellar`**.
4. A Vercel detectará automaticamente as configurações de build do Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique no botão **"Deploy"**.
6. Em menos de 1 minuto, seu projeto estará disponível em uma URL pública segura (ex.: `https://senai-projeto-stellar.vercel.app`)!

---

## 👨‍💻 Autor e Créditos Acadêmicos

- **Estudante:** Nícolas Oliveira Carvalho da Silva
- **Curso:** Desenvolvimento de Sistemas / Front-End
- **Instituição:** SENAI
- **GitHub:** [@Nicolas75460](https://github.com/Nicolas75460)
- **Repositório:** [github.com/Nicolas75460/senai-projeto-stellar](https://github.com/Nicolas75460/senai-projeto-stellar)

---

*Projeto desenvolvido com dedicação e rigor técnico para as aulas de Frameworks Front-end do SENAI.*
