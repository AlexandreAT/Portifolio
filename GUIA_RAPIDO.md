# Guia rápido para terminar seu portfólio

Você vai mexer principalmente em **um arquivo**:

`src/data/portfolio.data.ts`

## 1. Trocar textos, links e projetos

Abra `src/data/portfolio.data.ts` e procure:

- `profile` para nome, apresentação, e-mail e currículo;
- `socialLinks` para GitHub e LinkedIn;
- `technologies` para o carrossel;
- `projects` para adicionar ou editar projetos;
- `experiences`, `education` e `courses` para sua história profissional.

Use `Ctrl + F` e pesquise por `TODO`. São os pontos que ainda precisam de você.

## 2. Trocar sua foto

1. Coloque a foto em `src/assets/images/profile/`.
2. No topo de `src/data/portfolio.data.ts`, troque o arquivo importado.

## 3. Trocar imagens dos projetos

1. Coloque as imagens em `src/assets/images/projects/`.
2. Importe a imagem no topo de `src/data/portfolio.data.ts`.
3. No projeto, troque o valor de `coverImage`.

Use imagens em 16:9, como `1600 × 900`.

## 4. Adicionar o currículo

1. Coloque o PDF em `public/curriculo.pdf`.
2. Em `profile`, troque para `resumeUrl: '/curriculo.pdf'`.

## 5. Adicionar um ícone que faltou

1. Adicione o nome do ícone em `src/types/portfolio.types.ts`, dentro de `IconName`.
2. Importe e relacione o ícone em `src/utils/icons.tsx`.
3. Use esse nome em `src/data/portfolio.data.ts`.

## 6. Ver o site

Abra o terminal nesta pasta e rode:

```bash
npm run dev
```

Depois abra `http://localhost:5174`.

Para conferir se está tudo certo antes de publicar:

```bash
npm run lint
npm run build
```

O README possui exemplos mais detalhados se você precisar.
