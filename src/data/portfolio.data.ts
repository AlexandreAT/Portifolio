import profileImage from '@/assets/images/BannerPerfil.png';
import gameHubCover from '@/assets/images/GameHubBanner.png';
import guidingGraceCover from '@/assets/images/GuidingGraceBanner.png';
import mrRadarCover from '@/assets/images/MRRadarBanner.png';
import odisseiaCover from '@/assets/images/OdisseiaWikiBanner.png';
import resumePdf from '@/assets/documents/curriculo-alexandre-arribamar.pdf';
import solidCertificatePdf from '@/assets/documents/certificates/csharp-solid.pdf';
import oopCertificatePdf from '@/assets/documents/certificates/csharp-completo.pdf';
import csharpEssentialCertificatePdf from '@/assets/documents/certificates/csharp-essencial.pdf';
import frontendCertificatePdf from '@/assets/documents/certificates/formacao-frontend.pdf';
import {
  ProjectStatus,
  type Certificate,
  type ContactOption,
  type Differential,
  type Education,
  type Experience,
  type PortfolioProfile,
  type Project,
  type SkillCategory,
  type SocialLink,
  type Technology,
} from '@/types/portfolio.types';

export const profile: PortfolioProfile = {
  name: 'Alexandre Arribamar',
  fullName: 'Alexandre Arribamar Teizen',
  firstName: 'Alexandre',
  lastName: 'Arribamar',
  role: 'Desenvolvedor Full Stack',
  headline: 'Full Stack Developer | ASP.NET Core | React | TypeScript',
  availability: 'Disponível para novas oportunidades',
  introduction:
    'Desenvolvo e evoluo aplicações web e mobile, atuando em interfaces, APIs, integrações, regras de negócio e bancos de dados.',
  complementaryDescription:
    'Busco construir soluções práticas, organizadas e fáceis de manter.',
  about: [
    'Sou Desenvolvedor Full Stack e trabalho com aplicações web e mobile, participando da implementação de interfaces, APIs, integrações, regras de negócio e camadas de dados.',
    'Desde 2024, atuo na SMARTBREEDER, em uma Plataforma de Inteligência Agronômica Digital. No dia a dia, contribuo com novas funcionalidades, componentes reutilizáveis, correções, refatorações e evolução contínua das aplicações.',
    'Antes de ingressar profissionalmente no desenvolvimento, trabalhei em funções administrativas na Split Peças / Refrigeração Lima e na WW Assessoria Contábil. Essa trajetória fortaleceu minha organização, comunicação e compreensão de rotinas operacionais.',
  ],
  email: 'alexandre.arribamar@gmail.com',
  phone: '+55 (18) 99754-9884',
  location: 'Lucélia, SP — Brasil',
  languages: ['Português — nativo', 'Inglês — intermediário'],
  profileImage,
  resumeUrl: resumePdf,
};

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    value: '/AlexandreAT',
    url: 'https://github.com/AlexandreAT',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '/in/alexandre-arribamar-5743501a4',
    url: 'https://www.linkedin.com/in/alexandre-arribamar-5743501a4/',
    icon: 'linkedin',
  },
];

export const technologies: Technology[] = [
  { id: 'csharp', name: 'C#', icon: 'csharp', color: '#9B4FCE' },
  { id: 'dotnet', name: 'ASP.NET Core', icon: 'dotnet', color: '#6D4AFF' },
  { id: 'ef-core', name: 'Entity Framework Core', icon: 'dotnet', color: '#8B5CF6' },
  { id: 'react', name: 'React', icon: 'react', color: '#61DAFB' },
  { id: 'react-native', name: 'React Native', icon: 'react', color: '#61DAFB' },
  { id: 'angular', name: 'Angular', icon: 'code', color: '#DD0031' },
  { id: 'typescript', name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
  { id: 'mysql', name: 'MySQL', icon: 'mysql', color: '#4479A1' },
  { id: 'sqlserver', name: 'SQL Server', icon: 'sqlserver', color: '#E54848' },
  { id: 'mongodb', name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
  { id: 'docker', name: 'Docker', icon: 'docker', color: '#2496ED' },
  { id: 'git', name: 'Git', icon: 'git', color: '#F05032' },
];

export const differentials: Differential[] = [
  {
    id: 'complete-development',
    title: 'Desenvolvimento completo',
    description:
      'Atuação na implementação de interfaces, APIs, regras de negócio, integrações e camadas de dados.',
    icon: 'layers',
  },
  {
    id: 'web-mobile',
    title: 'Web e Mobile',
    description:
      'Experiência na evolução de aplicações web responsivas e aplicativos mobile com React Native.',
    icon: 'devices',
  },
  {
    id: 'quality',
    title: 'Qualidade e manutenção',
    description:
      'Atenção à organização do código, componentização, refatoração e facilidade de manutenção.',
    icon: 'code',
  },
  {
    id: 'continuous-improvement',
    title: 'Evolução contínua',
    description:
      'Participação em análise de requisitos, correção de problemas e melhoria gradual das aplicações.',
    icon: 'tools',
  },
];

export const projects: Project[] = [
  {
    id: 'odisseia-wiki',
    slug: 'odisseia-wiki',
    title: 'Odisseia Wiki',
    shortDescription:
      'Plataforma full stack para organizar e apresentar informações de um universo de RPG.',
    description:
      'Plataforma colaborativa para centralizar personagens, cidades, raças, itens, fichas e conteúdos de lore, com gerenciamento administrativo e páginas públicas responsivas.',
    role: 'Desenvolvimento Full Stack',
    category: 'Full Stack',
    technologies: [
      'React',
      'TypeScript',
      'ASP.NET Core',
      'Entity Framework Core',
      'MySQL',
      'JWT',
      'Styled Components',
      'Axios',
      'Cloudinary',
      'Docker',
    ],
    platform: 'Web',
    status: ProjectStatus.ONLINE,
    coverImage: odisseiaCover,
    projectUrl: 'https://odisseiawiki.netlify.app',
    repositoryUrl: 'https://github.com/AlexandreAT/OdisseiaWiki',
    featured: true,
    priority: 1,
    caseStudy: {
      overview:
        'Uma plataforma colaborativa que reúne conteúdos de um universo de RPG em páginas públicas e em uma área administrativa de gerenciamento.',
      objective:
        'Centralizar e facilitar o cadastro, a organização e a consulta de conteúdos de RPG.',
      audience:
        'Jogadores, mestres e criadores de campanhas e universos de RPG.',
      features: [
        'Wiki dinâmica e busca global',
        'Gerenciamento de personagens, cidades, raças, itens e fichas',
        'Editor Rich Text e galerias de imagens',
        'Área administrativa e autenticação Google',
      ],
      architecture:
        'Aplicação cliente-servidor em camadas, com frontend React, API REST em ASP.NET Core e banco MySQL.',
      technicalDecisions: [
        'Uso de DTOs, Services e Repositories para separar responsabilidades e facilitar manutenção e evolução.',
      ],
    },
  },
  {
    id: 'gamehub',
    slug: 'gamehub',
    title: 'GameHub',
    shortDescription:
      'Rede social full stack para descobrir jogos, participar de comunidades e organizar uma biblioteca pessoal.',
    description:
      'Rede social para jogadores criarem perfis e comunidades, compartilharem publicações, interagirem com outros usuários e organizarem sua biblioteca de jogos.',
    role: 'Desenvolvimento Full Stack',
    category: 'Full Stack',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'ASP.NET Core 8',
      'C#',
      'MongoDB Atlas',
      'JWT',
      'BCrypt',
      'Docker',
      'IGDB API',
    ],
    platform: 'Web',
    status: ProjectStatus.ONLINE,
    coverImage: gameHubCover,
    projectUrl: 'https://projectgamehub.netlify.app',
    repositoryUrl: 'https://github.com/AlexandreAT/GameHub',
    featured: true,
    priority: 2,
    caseStudy: {
      overview:
        'Uma rede social voltada a jogos, reunindo descoberta, organização de biblioteca e interação entre usuários e comunidades.',
      objective:
        'Reunir descoberta, organização e interação social sobre jogos em uma única plataforma.',
      audience:
        'Jogadores interessados em descobrir títulos, organizar seus jogos e participar de comunidades.',
      features: [
        'Perfis, seguidores e comunidades',
        'Publicações, comentários e reações',
        'Descoberta de jogos e biblioteca pessoal',
        'Integração com a IGDB API',
      ],
      architecture:
        'SPA React desacoplada de uma API REST em ASP.NET Core, com MongoDB e autenticação JWT.',
      technicalDecisions: [
        'Separação entre frontend e backend, autenticação baseada em claims e integrações externas protegidas pela API.',
      ],
    },
  },
  {
    id: 'mr-radar',
    slug: 'mr-radar',
    title: 'MR Radar',
    shortDescription:
      'Dashboard full stack para consultar, em uma tela só, os comentários de revisão de Merge Requests e Pull Requests.',
    description:
      'Dashboard somente leitura que reúne os comentários de revisão de Merge Requests (GitLab) e Pull Requests (GitHub), com arquivo, linha e trecho de código prontos para copiar. Roda localmente com o token do próprio usuário e possui uma demonstração pública com dados fictícios.',
    role: 'Desenvolvimento Full Stack',
    category: 'Full Stack',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Vite',
      'Styled Components',
      'GitLab API',
      'GitHub API',
    ],
    platform: 'Web',
    status: ProjectStatus.ONLINE,
    coverImage: mrRadarCover,
    projectUrl: 'https://mr-radar-demo.netlify.app',
    repositoryUrl: 'https://github.com/AlexandreAT/MR-Radar',
    featured: true,
    priority: 3,
    caseStudy: {
      overview:
        'Uma ferramenta criada para facilitar o dia a dia com revisões de código, reunindo em uma única tela os comentários de um Merge Request ou Pull Request, sem precisar abrir thread por thread.',
      objective:
        'Facilitar a consulta dos comentários de revisão, reunindo cada um com o seu contexto de código e deixando-os prontos para copiar.',
      audience:
        'Desenvolvedores que recebem e tratam comentários de revisão de código no GitLab ou no GitHub.',
      features: [
        'Lista dos Merge Requests e Pull Requests abertos',
        'Comentários com arquivo, linha e trecho de código',
        'Filtros por status, rótulo e revisor, com cópia formatada',
        'Painel de horas da semana no GitLab',
      ],
      architecture:
        'SPA React desacoplada de uma API local em Node.js e Express, com adapters separados para GitLab, GitHub e para a demonstração com dados fictícios.',
      technicalDecisions: [
        'Uso de adapters por provedor para compartilhar a mesma lógica entre GitLab e GitHub, com bloqueio de escrita no cliente HTTP e no backend para manter a ferramenta somente leitura.',
      ],
    },
  },
  {
    id: 'guiding-grace',
    slug: 'guiding-grace',
    title: 'Guiding Grace',
    shortDescription:
      'Plataforma web que organiza guias, builds, mecânicas e rotas de progressão de Elden Ring.',
    description:
      'Guia interativo em português para acompanhar a progressão em Elden Ring. Reúne mapas, regiões, builds e conteúdos organizados em uma interface responsiva inspirada na identidade visual do jogo.',
    role: 'Desenvolvimento Front-end',
    category: 'Frontend',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'React Router DOM',
      'Styled Components',
      'Redux',
      'React Icons',
    ],
    platform: 'Web',
    status: ProjectStatus.ONLINE,
    coverImage: guidingGraceCover,
    projectUrl: 'https://guidinggrace.netlify.app',
    repositoryUrl: 'https://github.com/AlexandreAT/Guiding-Grace',
    featured: true,
    priority: 4,
    caseStudy: {
      overview:
        'Um guia visual e interativo em português para consultar regiões, mapas, builds e conteúdos de progressão de Elden Ring.',
      objective:
        'Centralizar informações de Elden Ring e oferecer uma progressão visual, organizada e fácil de consultar.',
      audience:
        'Jogadores iniciantes, veteranos retornando ao jogo e pessoas que desejam seguir builds ou completar a jornada.',
      features: [
        'Seleção de guias e builds',
        'Navegação por regiões e conteúdo em seções expansíveis',
        'Mapas interativos com zoom e legendas',
        'Sidebar responsiva',
      ],
      architecture:
        'SPA componentizada, com separação entre páginas, componentes reutilizáveis, hooks, estilos e dados estáticos tipados.',
      technicalDecisions: [
        'Uso de conteúdo estático tipado e componentes reutilizáveis para simplificar a manutenção, preservar a performance e facilitar a inclusão de novas regiões e guias.',
      ],
    },
  },
];

export const experiences: Experience[] = [
  {
    id: 'smartbreeder',
    role: 'Desenvolvedor Full Stack',
    company: 'SMARTBREEDER',
    period: '2024 — atual',
    description:
      'Atuação em uma Plataforma de Inteligência Agronômica Digital, desenvolvendo soluções web e mobile para apoiar a gestão, a produtividade e a sustentabilidade no agronegócio.',
    highlights: [
      'Desenvolvimento e evolução de aplicações web e mobile',
      'APIs, integrações entre sistemas e regras de negócio',
      'Modelagem e otimização da camada de dados',
      'Componentes reutilizáveis, correções e refatorações',
      'Análise de requisitos e colaboração na definição de soluções técnicas',
    ],
  },
  {
    id: 'split-pecas',
    role: 'Assistente Administrativo',
    company: 'Split Peças / Refrigeração Lima',
    period: '2019 — 2024',
    description:
      'Atuação nas operações administrativas e comerciais de uma empresa especializada em peças e equipamentos para refrigeração.',
    highlights: [
      'Gerenciamento das operações da loja virtual e cadastro de produtos',
      'Controle de estoque, mercadorias e inventário',
      'Emissão de notas fiscais e apoio administrativo e comercial',
      'Atendimento, vendas, pós-venda e produção de materiais visuais',
    ],
  },
  {
    id: 'ww-assessoria',
    role: 'Assistente Administrativo',
    company: 'WW Assessoria Contábil',
    period: '2017 — 2019',
    description:
      'Apoio às rotinas administrativas e financeiras de um escritório contábil.',
    highlights: [
      'Emissão e conferência de notas e documentos fiscais',
      'Controle de cobranças, pagamentos e prazos',
      'Atendimento a clientes e suporte às demandas operacionais',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'computer-science',
    course: 'Bacharelado em Ciência da Computação',
    institution: 'FAI — Faculdades Adamantinenses Integradas',
    period: '2019 — 2022',
  },
  {
    id: 'technical-it',
    course: 'Técnico em Informática',
    institution: 'ETEC — Escola Técnica Estadual de São Paulo',
    period: '2017 — 2018',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'solid-pratica',
    slug: 'csharp-principios-solid-na-pratica',
    title: 'C# — Aplicando Princípios SOLID na prática',
    courseUrl: 'https://www.udemy.com/course/c-aplicando-principios-solid-na-pratica/?couponCode=26BBPAA2MX',
    quote: 'Domine os pilares da orientação a objetos e escreva código limpo de verdade',
    instructor: 'Jose Carlos Macoratti',
    date: '21 de setembro de 2025',
    duration: '9 horas',
    pdfUrl: solidCertificatePdf,
  },
  {
    id: 'csharp-essential',
    slug: 'curso-csharp-essencial',
    title: 'Curso C# Essencial (.NET 9.0, LINQ e IA)',
    courseUrl: 'https://www.udemy.com/course/curso-c-essencial-2023-bonus-linq/?couponCode=26BBPAA2MX',
    quote: 'Formação completa em C# moderno com .NET 9, LINQ e Inteligência Artificial',
    instructor: 'Jose Carlos Macoratti',
    date: '21 de setembro de 2025',
    duration: '47 horas',
    pdfUrl: csharpEssentialCertificatePdf,
  },
  {
    id: 'csharp-completo',
    slug: 'csharp-completo-orientacao-a-objetos',
    title: 'C# COMPLETO Programação Orientada a Objetos + Projetos',
    courseUrl: 'https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/?couponCode=26BBPAA2MX',
    quote: 'Curso mais didático e completo de C# e OO: composição, herança, coleções, arquivos, LINQ, lambda, delegates e muito mais',
    instructor: 'Nelio Alves',
    date: '11 de agosto de 2022',
    duration: '38 horas',
    pdfUrl: oopCertificatePdf,
  },
  {
    id: 'frontend-completo',
    slug: 'formacao-frontend',
    title: 'Formação Front-end — HTML, CSS, JavaScript, React e +',
    courseUrl: 'https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/?couponCode=26BBPAA2MX',
    quote: 'Aprenda front-end através de uma formação completa com diversos projetos para você criar seu portfólio',
    instructor: 'Matheus Battisti',
    date: '5 de fevereiro de 2024',
    duration: '50,5 horas',
    pdfUrl: frontendCertificatePdf,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Linguagens',
    icon: 'code',
    skills: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'react',
    skills: ['React', 'React Native', 'Angular', 'HTML5', 'CSS3', 'Styled Components'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'dotnet',
    skills: ['ASP.NET Core', 'Entity Framework Core', 'LINQ', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'data',
    title: 'Banco de dados',
    icon: 'sqlserver',
    skills: ['MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    id: 'architecture',
    title: 'Arquitetura',
    icon: 'layers',
    skills: ['Arquitetura em camadas', 'DTOs', 'Dependency Injection'],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    icon: 'tools',
    skills: ['Git', 'Docker', 'Swagger'],
  },
];

export const contactOptions: ContactOption[] = [
  {
    id: 'email',
    label: 'E-mail',
    value: profile.email,
    description: 'Envie uma mensagem',
    url: `mailto:${profile.email}`,
    icon: 'email',
  },
  {
    ...socialLinks[1],
    description: 'Conecte-se profissionalmente',
  },
  {
    ...socialLinks[0],
    description: 'Veja meus repositórios',
  },
  {
    id: 'resume',
    label: 'Currículo',
    value: 'Abrir PDF',
    description: 'Resumo profissional',
    url: profile.resumeUrl,
    icon: 'document',
  },
];

export const homeSummaryCards = [
  {
    id: 'main-stack',
    title: 'Stack principal',
    icon: 'code' as const,
    items: ['C#', 'ASP.NET Core', 'React', 'React Native', 'TypeScript'],
  },
  {
    id: 'applications',
    title: 'Atuação',
    icon: 'devices' as const,
    items: ['Aplicações web', 'Aplicações mobile', 'APIs REST', 'Integrações', 'Bancos de dados'],
  },
  {
    id: 'education',
    title: 'Formação',
    icon: 'education' as const,
    items: ['Ciência da Computação', 'FAI', '2019 — 2022'],
  },
  {
    id: 'other-skills',
    title: 'Práticas e ferramentas',
    icon: 'tools' as const,
    items: ['Arquitetura em camadas', 'DTOs', 'Dependency Injection', 'Git', 'Docker'],
  },
];
