# 🌌 Stellar Hub — Exploração Espacial & Laboratório React

> **Atividade Prática da Aula 08 — Projeto React**  
> **Disciplina:** Frameworks Front-end — 2º Semestre  
> **Instituição:** SENAI Informática  
> **Docente:** Prof. Me. Deivison S. Takatu  
> **Desenvolvedor:** Nícolas Oliveira Carvalho da Silva  
> **Repositório GitHub:** [https://github.com/Nicolas75460/senai-projeto-stellar](https://github.com/Nicolas75460/senai-projeto-stellar)

---

## 🚀 Sobre o Projeto

O **Stellar Hub** é uma aplicação web interativa e imersiva com tema espacial, construída para aplicar e consolidar de forma criativa todos os conceitos abordados na **Aula 08 (Projeto React)**.

A plataforma simula uma estação aeroespacial de comando, permitindo aos usuários explorar planetas e luas do Sistema Solar e exoplanetas habitáveis, testar a física da gravidade com um simulador reativo em tempo real, orquestrar lançamentos espaciais através de uma máquina de estados e estudar os conceitos pedagógicos do React diretamente em um laboratório didático integrado.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** — Biblioteca declarativa para construção de interfaces orientadas a componentes.
- **Vite 6** — Ferramenta de build de alta performance e servidor de desenvolvimento ultra-rápido.
- **JavaScript Moderno (ES6+)** — Sintaxe moderna com módulos, desestruturação e arrow functions.
- **Vanilla CSS3 Moderno** — Design system cósmico com glassmorphism, gradientes HSL/RGB, variáveis CSS e micro-animações.
- **Lucide React** — Pacote de ícones vetoriais modernos e leves.
- **Vercel** — Plataforma de deploy e hospedagem em nuvem com integração contínua (CI/CD).

---

## 📚 Conceitos da Aula 08 Aplicados no Projeto

Conforme exigido na proposta pedagógica da **Aula 08**, a aplicação implementa rigorosamente os seis pilares fundamentais do React:

| Conceito | Descrição Didática | Onde Encontrar no Projeto |
| :--- | :--- | :--- |
| **01. JSX** | Extensão de sintaxe que une a estrutura da tela com lógica JavaScript, permitindo interpolação com `{ }`, atributos como `className` e elementos auto-fechados. | [`src/components/PlanetCard.jsx`](file:///src/components/PlanetCard.jsx), [`Hero.jsx`](file:///src/components/Hero.jsx) |
| **02. Componentes** | Unidades modulares, independentes e reutilizáveis organizadas em uma árvore hierárquica clara (`App` ➔ `Navbar`, `Hero`, `Catalog`, `Simulator`, `LaunchCenter`, `Footer`). | Diretório [`src/components/`](file:///src/components/) |
| **03. Props** | Fluxo de dados unidirecional do componente pai para o filho, passando tipos primitivos, objetos de dados e funções de callback (`onToggleFavorite`, `onInspect`, `onPingMission`). | [`src/components/PlanetCard.jsx`](file:///src/components/PlanetCard.jsx), [`PlanetModal.jsx`](file:///src/components/PlanetModal.jsx) |
| **04. Virtual DOM** | Representação virtual em memória utilizada pelo React para calcular diferenças (*diffing*) e atualizar exclusivamente os nós alterados no DOM real sem recarregar a interface. | [`src/components/GravitySimulator.jsx`](file:///src/components/GravitySimulator.jsx) |
| **05. Listas e Keys** | Renderização dinâmica de coleções com `Array.prototype.map()`, acompanhadas da propriedade especial `key` única e estável para reconciliação otimizada. | [`src/components/CelestialCatalog.jsx`](file:///src/components/CelestialCatalog.jsx) |
| **06. Renderização Condicional** | Controle de exibição da interface com base no estado e props usando `if/return`, operador ternário (`? :`), operador lógico `&&` e tratamento de estados vazios. | [`src/components/MissionLaunchCenter.jsx`](file:///src/components/MissionLaunchCenter.jsx) |

---

## 🎯 Principais Funcionalidades

### 1. 🪐 Catálogo Celeste Interativo
- **Listagem Dinâmica:** Renderização de corpos celestes (Terra, Marte, Júpiter, Saturno, Lua, Europa, Netuno, Kepler-452b).
- **Busca em Tempo Real:** Filtro textual instantâneo por nome, características ou subtítulo.
- **Filtros por Categoria:** Segmentação por Planetas Rochosos, Gigantes Gasosos, Gigantes de Gelo, Luas e Exoplanetas.
- **Filtros por Status:** Segmentação por Corpos Explorados, Sondas Ativas ou Mapeamento em Curso.
- **Sistema de Favoritos:** Persistência no navegador (`localStorage`) com contador no cabeçalho.
- **Estado Vazio (Empty State):** Mensagem ilustrada com botão de reset quando a busca não retorna resultados.

### 2. 🔍 Modal de Telemetria Detalhada
- Esfera planetária estilizada com gradientes e anéis astronômicos.
- Composição atmosférica em barras percentuais dinâmicas.
- Comparador gravitacional interativo: cálculo automático do peso de um astronauta no planeta selecionado.
- Botão direto para iniciar missão de lançamento com destino pré-configurado.

### 3. ⚖️ Simulador Gravitacional & Inspetor do Virtual DOM
- Seleção de corpos celestes com gravidades reais (1.31 m/s² a 24.79 m/s²).
- Sliders interativos para massa do astronauta (40kg a 160kg) e velocidade de impulso (2 m/s a 8 m/s).
- Cálculo físico em tempo real: Peso em Newtons ($P = m \cdot g$), Altura Máxima do Salto ($h = \frac{v^2}{2g}$) e Tempo no Ar ($t = \frac{2v}{g}$).
- Animação física de salto sincronizada com a gravidade do planeta escolhido.
- **Inspetor de Reconciliação:** Contador de *diffs* em tempo real explicando como o Virtual DOM atualiza apenas os nós de texto sem refazer os elementos adjacentes.

### 4. 🚀 Centro de Ignição e Lançamentos
- Máquina de estados aeroespacial demonstrando renderização condicional avançada:
  - `STANDBY`: Formulário de configuração de sonda e destino.
  - `CHECKING`: Diagnóstico automatizado pré-voo com barras de combustível, enlace de rádio e janela orbital.
  - `COUNTDOWN`: Contagem regressiva visual $T-5..4..3..2..1$ com botão de abortar segurança.
  - `SUCCESS`: Confirmação de inserção orbital com inclusão da sonda na lista de missões ativas.
  - `ABORTED`: Protocolo de despressurização e segurança.
- Monitor de missões em rota com medidores de sinal, nível de combustível e ações para ping de telemetria ou descomissionamento.

### 5. 📖 Laboratório Didático React (Aula 08)
- Módulo pedagógico dedicado que documenta cada um dos seis conceitos estudados.
- Contém explicações teóricas dos slides do SENAI, exemplos de código JSX comentados e links diretos indicando em quais arquivos do **Stellar Hub** cada conceito foi aplicado.

---

## 📂 Estrutura do Projeto

```text
senai-projeto-stellar/
├── public/
│   └── favicon.svg               # Favicon cósmico vetorial
├── src/
│   ├── assets/                   # Recursos estáticos
│   ├── components/               # Componentes modulares React
│   │   ├── Navbar.jsx            # Barra de navegação com indicadores e telemetria
│   │   ├── Hero.jsx              # Banner de apresentação com métricas em tempo real
│   │   ├── CelestialCatalog.jsx  # Catálogo com listas, keys, busca e filtros
│   │   ├── PlanetCard.jsx        # Card reutilizável com props e esfera com gradiente
│   │   ├── PlanetModal.jsx       # Modal de detalhes e composição atmosférica
│   │   ├── GravitySimulator.jsx  # Laboratório do Virtual DOM e física orbital
│   │   ├── MissionLaunchCenter.jsx # Centro de lançamentos com renderização condicional
│   │   ├── ReactDidacticLab.jsx  # Módulo didático com os conceitos da Aula 08
│   │   └── Footer.jsx            # Rodapé com créditos acadêmicos e links
│   ├── data/
│   │   └── spaceData.js          # Base de dados astronômicos e conceitos pedagógicos
│   ├── App.jsx                   # Orquestrador de estado e layout principal
│   ├── App.css                   # Estilos específicos dos componentes e layouts
│   ├── index.css                 # Design system, tokens cósmicos e fontes
│   └── main.jsx                  # Ponto de entrada do React 19
├── index.html                    # Estrutura HTML5 com SEO e Google Fonts
├── package.json                  # Dependências e scripts do projeto
├── vite.config.js                # Configuração do Vite com plugin React
└── README.md                     # Documentação completa do projeto
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- Gerenciador de pacotes **npm**

### Passo a passo:

1. Clone o repositório:
```bash
git clone https://github.com/Nicolas75460/senai-projeto-stellar.git
```

2. Acesse a pasta do projeto:
```bash
cd senai-projeto-stellar
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra o navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

---

## 🌐 Publicação na Vercel

O projeto foi estruturado seguindo as melhores práticas do ecossistema Vite, garantindo compilação e deploy imediato e sem configuração adicional (*zero-config*) na **Vercel**:

1. Acesse sua conta na [Vercel](https://vercel.com).
2. Clique em **"Add New..."** ➔ **"Project"**.
3. Importe o repositório público: `Nicolas75460/senai-projeto-stellar`.
4. A Vercel detectará automaticamente o framework como **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em **"Deploy"**. A aplicação estará online e acessível publicamente em segundos!

---

## 👨‍💻 Autor

- **Nome:** Nícolas Oliveira Carvalho da Silva
- **Curso:** Desenvolvimento de Sistemas / Front-End
- **Instituição:** SENAI
- **GitHub:** [@Nicolas75460](https://github.com/Nicolas75460)

---

*Desenvolvido com dedicação para a disciplina de Frameworks Front-end — SENAI.*
