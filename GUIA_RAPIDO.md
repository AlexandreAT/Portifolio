# Guia rápido

## Alterar textos e informações

Abra:

`src/data/portfolio.data.ts`

Ali estão perfil, contatos, tecnologias, projetos, experiências, formação e certificados.

## Trocar a foto

Substitua `src/assets/images/BannerPerfil.png` por outra imagem com o mesmo nome ou altere o import no arquivo de dados.

## Trocar uma capa de projeto

1. Coloque a imagem em `src/assets/images/`.
2. Importe-a no início de `src/data/portfolio.data.ts`.
3. Troque o valor de `coverImage` no projeto.

## Adicionar um certificado

1. Coloque o PDF em `src/assets/documents/certificates/`.
2. Importe o PDF no arquivo de dados.
3. Copie um item do array `certificates` e altere título, professor, link, descrição, data, duração e `slug`.

## Adicionar um ícone

1. Adicione o nome em `src/types/portfolio.types.ts`.
2. Importe o ícone em `src/utils/icons.tsx`.
3. Relacione o nome ao ícone no objeto `icons`.

## Ver o site

```bash
npm run dev
```

Abra `http://localhost:5174`.

## Conferir antes de publicar

```bash
npm run lint
npm run build
```
