---
name: Kero+ Pães Congelados
description: Site institucional e comercial B2B de uma fábrica de pães congelados — tradição artesanal, confiança de fornecedor.
colors:
  crust-brown: "#4E352C"
  footer-bark: "#3B2820"
  wheat-gold: "#EBC58D"
  toast-tan: "#A27E5A"
  body-cocoa: "#6B5547"
  cream: "#FAF6F0"
  panel-cream: "#EFE4D4"
  card-white: "#FFFFFF"
  near-black: "#1B1B1D"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(38px, 5vw, 76px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(28px, 4vw, 48px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.5px"
  title:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "2px"
rounded:
  nav: "4px"
  button: "5px"
  panel: "8px"
  card: "12px"
spacing:
  section-y: "100px"
  container-pad: "40px"
  grid-gap: "28px"
  container-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.wheat-gold}"
    textColor: "{colors.crust-brown}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.toast-tan}"
    textColor: "{colors.cream}"
  button-secondary:
    textColor: "{colors.wheat-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 20px"
  card-line:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.crust-brown}"
    rounded: "{rounded.card}"
    padding: "28px 26px 30px"
  nav-link:
    textColor: "{colors.crust-brown}"
    typography: "{typography.label}"
    rounded: "{rounded.nav}"
    padding: "10px 14px"
  nav-link-active:
    textColor: "{colors.toast-tan}"
  eyebrow-light:
    textColor: "{colors.toast-tan}"
    typography: "{typography.label}"
  eyebrow-dark:
    textColor: "{colors.wheat-gold}"
    typography: "{typography.label}"
---

# Design System: Kero+ Pães Congelados

## 1. Overview

**Creative North Star: "O Forno de Confiança"**

A Kero+ é uma fábrica — produto congelado, escala industrial, venda B2B — mas o sistema veste isso com o calor de uma padaria de verdade: marrom de casca de pão, dourado de trigo e creme de farinha, sob a serifa elegante da Playfair Display. A tensão é proposital. O dourado e a tipografia dão o *cheiro de pão fresco*; o marrom encorpado e a estrutura sólida dão a *confiança de fornecedor*. Nenhum dos dois sozinho fecha a venda — juntos, fazem um comprador comercial sentir que está diante de um parceiro de raiz que tem estrada e tem volume.

O sistema é **comprometido com a cor** (a paleta marrom/dourado/creme carrega 100% da superfície; não é neutro com um respingo de acento) e **generoso no ritmo** (seções full-width empilhadas, ~100px de respiro vertical, uma ideia por dobra). Seções claras (creme) alternam com seções escuras (marrom `#4E352C` por inteiro, sem cinza) para dar cadência ao scroll. A imagem real — pão, fábrica, grão — é parte obrigatória do design, não decoração: blocos de cor sólida onde deveria haver foto são bug, não contenção.

Este sistema **rejeita** explicitamente três coisas, herdadas do PRODUCT.md: o **varejo promocional** (vermelho-e-amarelo de oferta, desconto gritante), a **padaria hipster de bairro** (kraft, giz, cosplay de artesão minúsculo) e o **genérico "feito por IA"** (creme + serifa itálica + eyebrow em toda seção + cards-ícone idênticos). Calor com escala — nunca fofura sem lastro, nunca frieza corporativa.

**Key Characteristics:**
- Paleta comprometida marrom + dourado + creme; superfícies escuras são marrom cheio, jamais cinza.
- Playfair Display (display) sobre Montserrat (corpo/UI) — serifa quente + sans neutra.
- Cards claros sobre creme, planos em repouso, com sombra marrom quente só no hover.
- Cantos suaves (4–12px), sombras longas e direcionais em tom de chocolate.
- Movimento contido e proposital: crossfade de hero, marquee de produtos, header que se recolhe.

## 2. Colors

Paleta de padaria: casca, trigo e farinha. Comprometida, quente, sem neutro frio em lugar nenhum.

### Primary
- **Marrom Casca / Crust Brown** (`#4E352C`): a cor estrutural da marca. Carrega seções escuras inteiras (Quem Somos, faixa de números, mapa, CTA), o texto sobre claro, o logo e o teto de contraste. É o "chão" sólido que comunica confiança.

### Secondary
- **Dourado Trigo / Wheat Gold** (`#EBC58D`): o acento que pontua. Fundo de botões primários, labels sobre marrom, a palavra em itálico dentro dos títulos, marcadores do mapa, detalhes. Nunca é base de texto pequeno sobre claro — seu papel é brilhar em pontos, não preencher parágrafos.

### Tertiary
- **Marrom Médio / Toast Tan** (`#A27E5A`): liga o claro ao escuro. Labels/eyebrows sobre creme, item de menu ativo, traços decorativos, estado de hover de botões. Em texto pequeno sobre creme fica no limite de contraste — ver Do's and Don'ts.

### Neutral
- **Creme / Cream** (`#FAF6F0`): a superfície clara principal e o texto sobre escuro. O "papel" do sistema.
- **Creme Painel / Panel Cream** (`#EFE4D4`): fundo de painéis e placeholders com textura listrada (`.ph-stripe`).
- **Branco Card / Card White** (`#FFFFFF`): fundo dos cards de linha; distinto do creme para destacá-los da superfície.
- **Cacau Corpo / Body Cocoa** (`#6B5547`): cor de corpo de texto sobre fundo claro; marrom suave, legível, sem ser preto duro.
- **Marrom Rodapé / Footer Bark** (`#3B2820`): o marrom mais profundo, exclusivo do rodapé — ancora o fim da página.
- **Quase-Preto / Near Black** (`#1B1B1D`): base de imagem/hero por trás das fotos e do overlay.

### Named Rules
**A Regra do Dourado Pontual.** O dourado `#EBC58D` é acento, não tinta de fundo de texto. Ele aparece em preenchimentos (botões), em labels sobre marrom, na palavra-destaque dos títulos e em detalhes — nunca como cor de corpo de texto sobre superfície clara. Sua raridade é o que o faz brilhar.

**A Regra do Marrom que Carrega.** Seção escura é marrom `#4E352C` por inteiro — *drench*, não cinza com sotaque marrom. O sistema não tem neutro frio; quando precisa de profundidade, escurece a própria hue (até `#3B2820`).

## 3. Typography

**Display Font:** Playfair Display (com fallback Georgia, serif)
**Body / UI Font:** Montserrat (com fallback system-ui, sans-serif)

**Character:** Serifa de alto contraste, quente e clássica (Playfair) sobre uma sans geométrica neutra e trabalhadora (Montserrat). A Playfair dá o ar de tradição e ofício; a Montserrat sustenta a leitura longa, as labels e a UI sem competir. É um par por eixo de contraste (serifa + sans), não duas fontes parecidas.

> Nota de identidade: Playfair Display está na lista de "reflexo" de fontes-padrão, mas aqui é uma **escolha de marca já consolidada** — preservação de identidade vence. Não trocar a família sem um redesign deliberado da marca.

### Hierarchy
- **Display** (Playfair 800, `clamp(38px, 5vw, 76px)`, lh 1.04, `letter-spacing -0.5px`): H1 de hero. Aparece uma vez por página, sobre imagem com overlay e `text-shadow`.
- **Headline** (Playfair 800, `clamp(28px, 4vw, 48px)`, lh 1.1, `letter-spacing -0.5px`): títulos de seção ("Uma vitrine de sabores", "O Kero+ está perto de você").
- **Title** (Playfair 700, 24px, lh 1.15): títulos de card (nomes das linhas) e citações em destaque (itálico).
- **Body** (Montserrat 400, ~15–16.5px, lh 1.7–1.8): parágrafos. Manter a coluna em 65–75ch.
- **Label / Eyebrow** (Montserrat 600, 11–12px, `letter-spacing 1.5–3px`, UPPERCASE): kickers, tags de card, labels de rodapé, texto da marquee. `#A27E5A` sobre claro, `#EBC58D` sobre escuro.

### Named Rules
**A Regra da Palavra Dourada.** Nos títulos de hero, uma única palavra/linha-chave vira itálico dourado (`#EBC58D`, Playfair italic 500) — "na Sua Mesa". É o gesto tipográfico assinatura: um destaque por título, jamais o título inteiro.

**A Regra do Eyebrow com Lastro.** A eyebrow "traço + label maiúscula" é um elemento de marca legítimo — mas use-a com intenção, não como gramática em toda seção. Repetida mecanicamente, vira o template de IA que o PRODUCT.md rejeita.

## 4. Elevation

O sistema é **plano em repouso e elevado por estado**. Cards e painéis vivem sem sombra, definidos por borda sutil e cor de fundo; a profundidade entra como *resposta* — no hover, no card de citação sobreposto, na foto em destaque. Toda sombra é **marrom-quente e direcional** (longa, suave, descendente, em tom de chocolate `rgba(78,53,44,...)`), nunca o cinza neutro de sombra de UI genérica. O header é a única superfície com "vidro": `backdrop-filter: blur(10px)` sobre creme translúcido, separado por uma linha de 1px — uso pontual e justificado, não glassmorphism decorativo.

### Shadow Vocabulary
- **Hover de card** (`box-shadow: 0 30px 56px -28px rgba(78,53,44,0.45)` + `translateY(-8px)`): elevação dos cards de linha ao passar o mouse; borda muda para dourado.
- **Foto em destaque** (`box-shadow: 0 30px 60px -30px rgba(78,53,44,0.40)`): blocos de imagem grandes (Quem Somos).
- **Card de citação** (`box-shadow: 0 20px 40px -20px rgba(78,53,44,0.60)`): o selo marrom sobreposto à foto.
- **Header (vidro)** (`backdrop-filter: blur(10px)` + `border-bottom: 1px solid rgba(162,126,90,0.20)`): não é sombra, é separação por blur + linha.

### Named Rules
**A Regra do Plano em Repouso.** Superfícies nascem planas. A sombra só aparece como resposta a estado (hover, sobreposição, foco) — e sempre marrom, nunca cinza. Se uma sombra parece de "app de 2014", está cinza demais e curta demais.

## 5. Components

### Buttons
- **Shape:** cantos suaves (5–6px, `{rounded.button}`); texto sempre UPPERCASE, peso 700, `letter-spacing 1.2–1.5px`.
- **Primary:** fundo dourado `#EBC58D` + texto marrom `#4E352C`, padding ~16px 30px. O CTA de venda ("Conheça os Produtos", "Seja um parceiro comercial").
- **Hover / Focus:** primário troca para fundo tan `#A27E5A` + texto creme `#FAF6F0` (`transition: all .25s ease`); foco visível obrigatório (`outline` marrom, `outline-offset`).
- **Secondary (sobre escuro):** fantasma — texto dourado, borda `1px rgba(235,197,141,0.45)`, fundo transparente. Hover: fundo `rgba(235,197,141,0.12)` + borda `#EBC58D`.

### Eyebrows & Labels (chips)
- **Style:** "traço de 38px + texto maiúsculo espaçado". `#A27E5A` sobre claro, `#EBC58D` sobre escuro. Sem cápsula/pill — é tipografia, não botão.
- **Tag de card:** mesma fórmula sem o traço (ex.: "Linha Clássica" sobre o título).

### Cards / Containers
- **Corner Style:** 12px (`{rounded.card}`).
- **Background:** branco `#FFFFFF` sobre superfície creme — o contraste destaca o card.
- **Shadow Strategy:** plano em repouso (só borda); eleva no hover (ver Elevation).
- **Border:** `1px solid rgba(162,126,90,0.16)`; vira `#EBC58D` no hover.
- **Internal Padding:** ~28px (`28px 26px 30px`). Imagem de topo em `aspect-ratio: 3/2`.

### Inputs / Fields
*(Padrão sintetizado para a Área do Cliente e formulários — manter coerência com o sistema.)*
- **Style:** fundo branco, borda `1px rgba(162,126,90,0.30)`, radius 6px, texto marrom `#4E352C`, Montserrat ~15px.
- **Focus:** borda tan `#A27E5A` + halo dourado suave (`box-shadow: 0 0 0 3px rgba(235,197,141,0.35)`); sem `outline:none` sem substituto.
- **Placeholder:** `#6B5547` em opacidade plena (manter ≥ 4.5:1) — não usar cinza claro.

### Navigation
- **Header fixo** (`position: fixed; top:0; z-index:50`), creme translúcido `rgba(250,246,240,0.94)` + `blur(10px)`, borda inferior de 1px. Spacer iguala a altura (~136px) para o conteúdo não passar por baixo.
- **Links:** Montserrat 600, 12.5px, UPPERCASE, `letter-spacing 1.2px`, marrom `#4E352C`. Hover: cor tan `#A27E5A` + fundo `rgba(235,197,141,0.18)`. Ativo: cor `#A27E5A` + sublinhado de 2px dourado.
- **Botão "Área do Cliente":** destacado em dourado (vira tan ao ficar ativo) — é o único item-botão da nav.
- **Mobile:** breakpoint 880px; grids colapsam para 1 coluna; hero centraliza.

### Signature: Faixa Marquee + Header que se Recolhe
- **Marquee (topo):** barra marrom `#4E352C` com nomes de produto em dourado, maiúsculo, `letter-spacing 3px`, em loop horizontal infinito (~40px/s via `requestAnimationFrame`, não `@keyframes`). **Pausa no hover.**
- **Recolher no scroll:** enquanto o usuário está no hero, o header fica visível. Quando a 2ª `<section>` atinge o topo, o **header inteiro** desliza para cima (`translateY(-100%)` + `opacity 0` + `pointer-events:none`) e a marquee colapsa via `max-height`. Volta suave ao subir. Transições ~0.35–0.4s. Exige alternativa em `prefers-reduced-motion`.

### Signature: Hero Slider & Mapa Caloroso
- **Hero:** full-bleed, `min-height 600–620px`, 2 imagens em crossfade (`opacity`, `.9s ease`), auto-avanço 5,5s, setas circulares e dots (o ativo vira "pílula" dourada). Overlay `linear-gradient(180deg, rgba(20,18,17,.55), rgba(20,18,17,.35))`. Texto à esquerda no desktop, centralizado no mobile.
- **Mapa (Leaflet + OSM):** marcadores `divIcon` dourados por cidade, marcador marrom com "K" para a sede (Goiânia); popups marrom/dourado (`.kp-pop`); `fitBounds` enquadra todos os pontos. Container de fundo escuro dentro da seção marrom.

## 6. Do's and Don'ts

### Do:
- **Do** alternar seções creme (`#FAF6F0`) e marrom cheio (`#4E352C`) para dar cadência; seção escura é *drench*, nunca cinza.
- **Do** reservar o dourado `#EBC58D` para acento — botões, labels sobre marrom, a palavra em itálico do título, detalhes.
- **Do** manter cards brancos planos em repouso e elevá-los no hover com sombra **marrom-quente** (`rgba(78,53,44,...)`) + borda dourada.
- **Do** entregar **imagem real** de pão/fábrica/grão nos heros e cards; bloco de cor sólida no lugar de foto é bug. Usar o `.ph-stripe` apenas como placeholder temporário até a foto definitiva.
- **Do** escrever para o comprador comercial — CTAs como "Seja um parceiro comercial" e "Atendimento Comercial", não linguagem de shopper.
- **Do** dar foco de teclado visível e respeitar `prefers-reduced-motion` (hero, marquee, header que recolhe).

### Don't:
- **Don't** cair no **varejo promocional / supermercado**: nada de vermelho-e-amarelo de oferta, "% OFF" gritante ou selo de promoção. A Kero+ vende confiança, não preço.
- **Don't** virar **padaria hipster / gourmet de bairro**: sem kraft, giz, "small batch" ou estética de artesão minúsculo — contradiz a escala B2B.
- **Don't** entregar o **genérico "feito por IA"**: creme + serifa itálica + eyebrow minúscula em *toda* seção + grade de cards-ícone idênticos. Distinção é o piso.
- **Don't** usar dourado `#EBC58D` em texto pequeno sobre fundo claro (reprova contraste); e tratar `#A27E5A` em label pequena sobre creme como suspeito — escurecer para `#6B5547`/`#4E352C` quando for texto.
- **Don't** usar sombra cinza neutra; toda sombra é marrom e direcional.
- **Don't** aplicar `border-left`/`border-right` colorida como faixa de acento, texto com gradiente (`background-clip: text`) ou glassmorphism decorativo — o único "vidro" permitido é o blur do header.
