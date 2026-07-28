# Portfólio — Alexandre Arribamar

Portfólio profissional feito com React, TypeScript, Vite, Styled Components, React Router, Framer Motion e Embla Carousel.

## Rodar o projeto

1. Abra esta pasta no terminal.
2. Instale as dependências: `npm install`
3. Inicie o site: `npm run dev`
4. Abra `http://localhost:5174`

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Onde alterar cada coisa

Quase todo o conteúdo está em um único arquivo:

`src/data/portfolio.data.ts`

Nele você pode editar:

- `profile`: nome, cargo, apresentação, e-mail, foto e currículo;
- `socialLinks`: GitHub e LinkedIn;
- `technologies`: tecnologias do carrossel;
- `differentials`: os quatro diferenciais;
- `projects`: todos os projetos e estudos de caso;
- `experiences`: experiências profissionais;
- `education`: formação;
- `courses`: cursos;
- `skillCategories`: tecnologias da página Sobre mim.

Procure por `TODO` nesse arquivo para encontrar o que ainda falta completar.

## Trocar a foto

1. Coloque sua foto em `src/assets/images/profile/`.
2. No começo de `src/data/portfolio.data.ts`, troque o import do placeholder pelo arquivo novo.
3. Mantenha `profileImage: profilePlaceholder` ou renomeie a variável importada.

Prefira uma imagem vertical em `.webp`, `.png` ou `.jpg`, com fundo removido ou escuro. O site usa `object-fit: cover`.

## Trocar imagens dos projetos

1. Coloque as imagens em `src/assets/images/projects/`.
2. Importe cada imagem no início de `src/data/portfolio.data.ts`.
3. No projeto desejado, altere `coverImage` para a imagem importada.

Exemplo:

```ts
import minhaImagem from '@/assets/images/projects/meu-projeto.webp';

coverImage: minhaImagem,
```

Use imagens na proporção 16:9; por exemplo, `1600 × 900`.

## Adicionar um projeto

Dentro de `projects`, copie um objeto existente e altere os dados. Os campos principais são:

- `slug`: endereço do projeto, sem espaços; exemplo `meu-projeto`;
- `title`: nome exibido;
- `shortDescription`: texto do card;
- `description`: descrição completa;
- `technologies`: lista de tecnologias;
- `status`: use uma opção de `ProjectStatus`;
- `coverImage`: imagem importada;
- `featured`: `true` mostra na Home;
- `priority`: número menor aparece primeiro;
- `caseStudy`: conteúdo da página de detalhes.

Se um link não existe, deixe o campo de URL vazio ou remova-o. Nunca use `#`.

## Adicionar ou trocar ícones

Os ícones vêm da biblioteca React Icons.

1. Abra `src/types/portfolio.types.ts` e adicione um nome em `IconName`.
2. Abra `src/utils/icons.tsx`.
3. Importe o ícone de `react-icons/si`, `react-icons/fa` ou `react-icons/fi`.
4. Adicione o ícone no objeto `icons`.
5. Use o nome novo em `src/data/portfolio.data.ts`.

Exemplo:

```ts
import { SiPython } from 'react-icons/si';

python: SiPython,
```

## Adicionar o currículo

1. Coloque o PDF dentro da pasta `public` com o nome `curriculo.pdf`.
2. Em `src/data/portfolio.data.ts`, altere:

```ts
resumeUrl: '/curriculo.pdf',
```

O botão será ativado automaticamente.

## Alterar cores

Abra `src/styles/theme.ts`. As cores principais ficam em `colors` e os gradientes em `gradients`.

## Alterar o carrossel

Abra `src/hooks/useTechnologyCarousel.ts`.

- `AUTOPLAY_INITIAL_DELAY`: espera inicial;
- `AUTOPLAY_INTERVAL`: tempo entre avanços;
- `AUTOPLAY_RESUME_DELAY`: espera depois que a pessoa arrasta, clica ou usa o teclado.

Os valores estão em milissegundos. `10_000` equivale a 10 segundos.

## Comandos úteis

- `npm run dev`: abre o ambiente de desenvolvimento;
- `npm run lint`: verifica a qualidade do código;
- `npm run build`: verifica o TypeScript e gera a versão de produção;
- `npm run preview`: abre a versão de produção localmente.

## Publicar

O arquivo `public/_redirects` já configura o redirecionamento de rotas para hospedagens compatíveis, como Netlify. Em outro provedor, configure todas as rotas (`/projetos`, `/sobre-mim` e `/projetos/:slug`) para retornarem `index.html`.
