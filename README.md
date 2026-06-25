# Handoff: Site institucional Kero+ Pães Congelados

## Overview
Site institucional/comercial (B2B) da **Kero+ Pães Congelados**, fabricante de pães congelados sediada em Goiânia/GO. O site apresenta a marca, suas linhas de produtos, história (10 anos), canais comerciais, vagas e área do cliente. Público-alvo: parceiros comerciais (varejo, padarias, food service, hotelaria) e candidatos.

O site é multipágina, com cabeçalho e rodapé compartilhados. Navegação por menu superior fixo.

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML** — protótipos que mostram a aparência e o comportamento pretendidos, **não código de produção para copiar diretamente**. Eles usam um runtime próprio de "Design Components" (arquivos `.dc.html` + `support.js`) que **não deve ser portado**.

A tarefa é **recriar estes designs no ambiente do codebase de destino** (React, Vue, Next.js, etc.), usando os padrões, componentes e bibliotecas já estabelecidos lá. Se ainda não houver um ambiente, escolha o framework mais adequado (recomendado: **Next.js + React**, por ser site institucional com múltiplas páginas e bom SEO) e implemente os designs nele.

Trate cada `.dc.html` como a especificação visual de uma página. O conteúdo de texto (copy) é real e deve ser preservado.

## Fidelity
**Alta fidelidade (hifi).** Cores, tipografia, espaçamento e interações são finais. Recriar a UI fielmente usando as bibliotecas/padrões do codebase de destino. As fotos de produto/banner são definitivas; os blocos com textura listrada e legendas `[ foto · ... ]` são **placeholders** aguardando imagem real (ver seção Assets).

## Páginas / Views

### 1. Home — `Kero Mais Paes.dc.html`
- **Purpose**: porta de entrada; apresenta marca, linhas de produto, história resumida e mapa de atuação.
- **Layout**: coluna única, seções full-width empilhadas; conteúdo centralizado com `max-width: 1280px`.
- **Seções (de cima para baixo)**:
  1. **Cabeçalho fixo** (compartilhado — ver SiteHeader).
  2. **Hero / Carrossel**: banner full-bleed com 2 imagens em crossfade. Altura mínima 600px (desktop) / 620px (mobile). Auto-rotação a cada 5,5s, setas laterais circulares e indicadores (dots) na base. Overlay escuro `linear-gradient(180deg, rgba(20,18,17,.55), rgba(20,18,17,.35))`. Sobre o banner: título grande em Playfair Display e botão "Conheça os Produtos →". Texto alinhado à esquerda no desktop, centralizado no mobile (breakpoint 880px).
  3. **Vitrine das Linhas**: título "Uma vitrine de sabores" + 3 cards (Pão Francês Tradicional, Integrais & Grãos, Pão de Mandioca). Cada card: imagem 3:2 no topo, depois tag (uppercase, dourado), título (Playfair), descrição e link. Card branco, borda `1px rgba(162,126,90,.16)`, radius 12px. Grid responsivo (1 → 3 colunas).
  4. **Quem Somos (resumo)** com fundo `#FAF6F0`.
  5. **Mapa de atuação**: mapa interativo **Leaflet + OpenStreetMap**, centralizado (coluna única, `max-width: 860px`), `min-height: 380px`. Marcadores por cidade onde há produtos Kero+, com popup do nome; marcador especial (com "K") para a sede em Goiânia. O mapa ajusta o zoom para enquadrar todas as cidades (`fitBounds`). Lista de cidades editável no array `CITIES` da classe lógica (lat/lng/nome). Requer internet (tiles online do OSM). **Obs.: o antigo bloco "Parceiros estratégicos" ao lado do mapa foi removido.**
  6. **Rodapé** (compartilhado — ver SiteFooter).
- **Interações**: carrossel (auto + setas + dots), hover nos cards e botões.

### 2. Quem Somos — `Quem Somos.dc.html`
- **Purpose**: contar a história e evolução da empresa ao longo de 10 anos; trazer conquistas.
- **Seções**:
  1. **Hero** fundo `#4E352C` com textura listrada (`.ph-stripe`), selo "Nossa História · 10 anos", título "Uma década assando qualidade e confiança".
  2. **Intro/Missão**: grid 2 colunas (texto + foto placeholder com card de citação sobreposto). *(O bloco de "Selos de qualidade & certificações" que existia aqui foi removido.)*
  3. **Números/Conquistas**: faixa `#4E352C`, 4 estatísticas (10 anos / +500 parceiros / 3 linhas / +40M pães por ano).
  4. **Linha do tempo**: timeline vertical com marcos 2016→2026 (borda esquerda + nós dourados).
  5. **Valores**: 3 cards (Qualidade, Confiança, Evolução).
  6. **CTA** fundo `#4E352C`: "Faça parte da próxima década" + botões.

### 3. Produtos — `Produtos.dc.html`
- **Purpose**: catálogo das linhas e produtos.
- **Layout**: hero + categorias, cada categoria com lista de produtos (nome + variações). Linhas: Pão Francês Tradicional (Clássica), Integrais & Grãos (Saudável), Pão de Mandioca (Mandi Bread).

### 4. Comercial / SAC — `SAC.dc.html`
- **Purpose**: canal de **Atendimento Comercial** (no menu aparece como "Comercial").
- **Conteúdo**: hero com selo "Atendimento Comercial", canais de contato. Título da seção: "Atendimento Comercial".

### 5. Trabalhe Conosco — `Trabalhe Conosco.dc.html`
- **Purpose**: vagas + candidatura.
- **Conteúdo**: lista de 4 vagas, **todas em Goiânia, GO** (Padeiro(a) Artesanal, Auxiliar de Produção, Representante Comercial B2B, Analista de Logística). **Não há formulário** — apenas um card com botão **"Enviar candidatura via WhatsApp"** que abre `https://wa.me/<numero>?text=<mensagem pré-preenchida>`. O número atual é placeholder (`5562000000000`) — substituir pelo WhatsApp real do RH.

### 6. Área do Cliente — `Area do Cliente.dc.html`
- **Purpose**: login/acesso de clientes B2B (tela de portal).

## Componentes compartilhados

### SiteHeader — `SiteHeader.dc.html`
- **Cabeçalho fixo** (`position: fixed; top:0; z-index:50`), fundo `rgba(250,246,240,.94)` com `backdrop-filter: blur(10px)` e borda inferior `1px rgba(162,126,90,.2)`. Uma `<div>` espaçadora (altura = altura do header) evita que o conteúdo fique sob ele.
- **Faixa marquee (topo)**: barra `#4E352C` com nomes de produtos em loop infinito horizontal (texto dourado, uppercase, `letter-spacing: 3px`), separados por "—". Movida via JavaScript (`requestAnimationFrame`, ~40px/s); **pausa no hover**. Produtos exibidos: Pão Francês, Pãozinho de Leite, Bisnaguinha, Pão Integral, Multigrãos, Pão de Centeio, Mandi Bread, Mandi Queijo, Mandi Mini.
  - **Comportamento de scroll**: enquanto o usuário está no primeiro bloco (hero), o cabeçalho fica visível. Quando a **segunda `<section>` da página atinge o topo**, **o cabeçalho INTEIRO desliza para cima e some** — tanto a faixa marquee quanto a barra de navegação (menu). Ao voltar ao topo, reaparece suavemente. Implementado com listener de `scroll` comparando `getBoundingClientRect().top` da 2ª seção com a altura do header: o `<header>` recebe `transform: translateY(-100%)` + `opacity: 0` + `pointer-events: none`, e a faixa marquee colapsa via `max-height`/`opacity`. Transições ~0.35–0.4s.
- **Nav**: logo à esquerda; itens à direita: **Quem Somos** (→ `Quem Somos.dc.html`), **Produtos**, **Trabalhe Conosco**, **Comercial** (→ página SAC), e um botão destacado **Área do Cliente**. O item ativo recebe destaque (cor `#A27E5A`). Prop `active` define qual item está ativo por página.

### SiteFooter — `SiteFooter.dc.html`
- Rodapé com colunas de links, contato e marca. Fundo escuro.

## Interactions & Behavior
- **Carrossel hero (home)**: auto-avanço 5500ms; setas prev/next; dots clicáveis; crossfade via `opacity` + `transition: opacity .9s ease`. Ao clicar numa seta/dot, o timer reinicia.
- **Marquee**: animação JS contínua (não CSS `@keyframes` — estes não rodam no ambiente de preview; usar rAF). Loop infinito duplicando a lista e voltando ao recomeçar metade do `scrollWidth`. Pausa em `mouseenter`, retoma em `mouseleave`.
- **Esconder cabeçalho no scroll**: listener global de scroll; quando `sections[1].getBoundingClientRect().top <= alturaDoHeader`, o cabeçalho inteiro (menu + marquee) é escondido (`translateY(-100%)` + `opacity 0` + `pointer-events:none`).
- **Mapa (home)**: Leaflet 1.9.4 + tiles OpenStreetMap. Cidades no array `CITIES` (lat/lng/nome; flag `hq` para a sede). `fitBounds` enquadra todos os pontos; `scrollWheelZoom` desativado; `invalidateSize()` após render. Marcadores são `divIcon` customizados (dourado para cidades, marrom com "K" para a sede); popups com classe `kp-pop` (estilo marrom/dourado). **Para produção**, considerar carregar Leaflet via npm (`leaflet`) ou react-leaflet em vez de CDN.
- **Hover**: botões trocam `background`/`color` (dourado ↔ marrom); cards têm leve elevação/sombra.
- **Candidatura**: link `wa.me` com texto pré-preenchido (sem formulário).
- **Responsivo**: breakpoint principal **880px**. Mobile: hero centralizado, grids colapsam para 1 coluna.

## State Management
- **Home**: `slide` (índice do carrossel, 0–1), timer de auto-rotação (`setInterval`), handlers `go(i)`/`next`/`prev`.
- **SiteHeader**: refs para track do marquee, wrapper e spacer; flag `paused`; posição `x` do marquee; listener de scroll. Prop `active` (string) por página.
- Demais páginas são majoritariamente estáticas (dados em arrays no componente).

## Design Tokens

### Cores
- **Marrom escuro (primária/fundos escuros, texto)**: `#4E352C`
- **Dourado/trigo (acento, CTAs, detalhes)**: `#EBC58D`
- **Creme (fundo claro principal)**: `#FAF6F0`
- **Marrom médio (acentos, labels, item ativo)**: `#A27E5A`
- **Marrom texto (corpo)**: `#6b5547`
- **Quase preto (fundo de imagem/overlay base)**: `#1b1b1d`
- **Borda sutil**: `rgba(162,126,90,0.16)` a `0.3`
- **Overlay hero**: `linear-gradient(180deg, rgba(20,18,17,.55), rgba(20,18,17,.35))`
- **Seleção de texto**: fundo `#EBC58D`, cor `#4E352C`

### Tipografia
- **Títulos/Display**: `'Playfair Display', serif` — pesos 400/500/700/800; itálico usado em destaques (ex. subtítulo do hero). `letter-spacing` levemente negativo (-0.5px) em títulos grandes.
- **Corpo/UI**: `'Montserrat', sans-serif` — pesos 300/400/500/600/700.
- **Labels/eyebrows**: Montserrat, 11–12px, `text-transform: uppercase`, `letter-spacing: 1.5–3px`, peso 600, cor `#A27E5A` (em fundo claro) ou `#EBC58D` (em fundo escuro).
- **H1 hero**: `clamp(38px, 5vw, 76px)`, peso 800, line-height ~1.06.
- **H2 seção**: `clamp(28px, 4vw, 48px)`, peso 800.
- **Corpo**: ~15–17px, line-height 1.7–1.8.
- Fontes via Google Fonts (link no `<head>`/helmet de cada página).

### Espaçamento & forma
- **Container**: `max-width: 1280px` (até 1180px em seções de texto), `margin: 0 auto`, padding lateral 40px.
- **Padding vertical de seção**: ~84–100px.
- **Radius**: cards 12px; botões 5–6px; chips/pills variável.
- **Texture**: `.ph-stripe` = `repeating-linear-gradient(135deg, rgba(162,126,90,.14) 0 14px, rgba(162,126,90,.05) 14px 28px)`.
- **Sombras**: suaves e marrons, ex. `0 30px 60px -40px rgba(78,53,44,.35)`.

### Botões
- **Primário**: fundo `#EBC58D`, texto `#4E352C`, uppercase, peso 700, `letter-spacing: 1.5px`, padding ~16px 30px, radius 5px. Hover: fundo `#A27E5A`, texto `#FAF6F0`.
- **Secundário (sobre fundo escuro)**: borda `1px rgba(235,197,141,.6)`, texto `#EBC58D`. Hover: fundo `rgba(235,197,141,.16)`.

## Assets
Na pasta `assets/` deste pacote:
- **Logos**: `logo-kero.png`, `logo-kero-light.png` (versão clara para fundos escuros), `logo-src.png`.
- **Banners hero (home)**: `c-banner3.jpg`, `c-banner4.jpg` (já otimizados/comprimidos).
- **Fotos das linhas (cards home)**: `c-linha-frances.jpg`, `c-linha-integrais.jpg`, `c-linha-mandioca.jpg`.
- Demais arquivos `*.png/.jpg` originais (não comprimidos) também incluídos para referência de alta resolução.
- **Placeholders**: blocos com textura `.ph-stripe` e legenda `[ foto · ... ]` em Quem Somos aguardam fotos definitivas (equipe/fábrica).
- **Mapa**: usa Leaflet + OpenStreetMap (sem asset local; tiles via CDN). A lista de cidades é placeholder de exemplo — substituir pelas cidades/clientes reais.

## Pendências de conteúdo (a confirmar com o cliente)
- **WhatsApp do RH** (Trabalhe Conosco): substituir o número placeholder `5562000000000`.
- **Cidades/clientes do mapa**: substituir o array `CITIES` de exemplo pelas cidades reais onde há produtos (ou endereços de clientes).
- Fotos definitivas para os placeholders (Quem Somos: equipe/fábrica).
- Conteúdo/integração real da Área do Cliente (autenticação).

## Files
Arquivos de design incluídos neste pacote (referências `.dc.html`):
- `Kero Mais Paes.dc.html` — Home
- `Quem Somos.dc.html`
- `Produtos.dc.html`
- `SAC.dc.html` — Comercial/Atendimento
- `Trabalhe Conosco.dc.html`
- `Area do Cliente.dc.html`
- `SiteHeader.dc.html` — cabeçalho + marquee (compartilhado)
- `SiteFooter.dc.html` — rodapé (compartilhado)
- `support.js` — runtime do protótipo (**não portar**; apenas para abrir os HTML localmente)
- `assets/` — imagens e logos

> Dica para abrir os protótipos localmente: sirva a pasta com um servidor estático (ex.: `npx serve`) e abra `Kero Mais Paes.dc.html`. Os arquivos `.dc.html` dependem de `support.js` no mesmo diretório.
