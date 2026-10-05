# Portfólio — Alexandre Arribamar

Portfólio profissional desenvolvido com React, TypeScript, Vite, Styled Components, React Router, Framer Motion e Embla Carousel.

## Rodar o projeto

```bash
npm install
npm run dev
```

Abra `http://localhost:5174`.

Para verificar e gerar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

## Conteúdo do portfólio

Os dados exibidos estão centralizados em:

`src/data/portfolio.data.ts`

Nesse arquivo ficam:

- perfil, apresentação, localização, idiomas e currículo;
- GitHub, LinkedIn e e-mail;
- tecnologias e diferenciais;
- projetos, stacks, links e detalhes técnicos;
- experiências profissionais;
- formação e competências;
- certificados, professores, descrições e PDFs.

## Imagens

- Foto: `src/assets/images/BannerPerfil.png`
- Odisseia Wiki: `src/assets/images/OdisseiaWikiBanner.png`
- GameHub: `src/assets/images/GameHubBanner.png`
- Guiding Grace: `src/assets/images/GuidingGraceBanner.png`
- MR Radar: `src/assets/images/MRRadarBanner.png`

As capas de projeto funcionam melhor em proporção 16:9.

## Currículo e certificados

Os documentos usados pelo site possuem nomes seguros para o Vite:

- currículo: `src/assets/documents/curriculo-alexandre-arribamar.pdf`;
- certificados: `src/assets/documents/certificates/`.

Os PDFs originais enviados permanecem preservados em `src/assets/images/`.

Para cadastrar outro certificado:

1. Coloque o PDF em `src/assets/documents/certificates/`.
2. Importe-o em `src/data/portfolio.data.ts`.
3. Adicione um item ao array `certificates`.

Cada certificado recebe automaticamente uma página em `/certificados/:slug`.

## Ícones

1. Adicione o nome em `IconName`, dentro de `src/types/portfolio.types.ts`.
2. Importe e relacione o ícone em `src/utils/icons.tsx`.
3. Use o nome em `src/data/portfolio.data.ts`.

Os ícones podem ser importados de `react-icons/si`, `react-icons/fa` ou `react-icons/fi`.

## Cores

As cores, gradientes, bordas e breakpoints ficam em:

`src/styles/theme.ts`

## Carrossel de tecnologias

O movimento contínuo é configurado em:

`src/hooks/useTechnologyCarousel.ts`

- `AUTO_SCROLL_SPEED`: velocidade linear;
- `AUTO_SCROLL_START_DELAY`: espera antes do início.

## Ícone da aba

O favicon está em `public/favicon.svg` e é carregado por `index.html`.

## Rotas

- `/` — início;
- `/projetos` — projetos;
- `/projetos/:slug` — detalhes do projeto;
- `/sobre-mim` — trajetória, formação e competências;
- `/certificados/:slug` — certificado e PDF.

O arquivo `public/_redirects` prepara as rotas para hospedagens compatíveis com Netlify.
