import brasilCompeteCover from '@/assets/images/projects/brasil-compete.svg';
import odisseiaCover from '@/assets/images/projects/odisseia-wiki.svg';
import pomodoroCover from '@/assets/images/projects/pomodoro.svg';
import profilePlaceholder from '@/assets/images/profile/profile-placeholder.svg';
import {
  ProjectStatus,
  type ContactOption,
  type Course,
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
  firstName: 'Alexandre',
  lastName: 'Arribamar',
  role: 'Desenvolvedor Full Stack',
  availability: 'Disponível para novas oportunidades',
  introduction:
    'Desenvolvo aplicações web e mobile completas, trabalhando desde a interface e experiência do usuário até APIs, regras de negócio e bancos de dados.',
  complementaryDescription:
    'Este é o meu portfólio, onde apresento meus principais projetos, experiências e conhecimentos.',
  about: [
    'Sou Desenvolvedor Full Stack e atuo no desenvolvimento e evolução de aplicações web e mobile, trabalhando com interfaces, APIs, integrações, regras de negócio e bancos de dados.',
    'Antes de atuar diretamente com desenvolvimento, trabalhei com Product Design e Design Systems. Essa experiência me deu uma visão mais ampla sobre usabilidade, componentes, consistência visual e necessidades reais de produto.',
  ],
  email: 'alexandre.arribamar@gmail.com',
  profileImage: profilePlaceholder,
  // TODO: coloque o PDF em public/curriculo.pdf e use '/curriculo.pdf'.
  resumeUrl: undefined,
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
    value: 'Adicione seu perfil',
    // TODO: adicione a URL completa do LinkedIn.
    url: undefined,
    icon: 'linkedin',
  },
];

export const technologies: Technology[] = [
  { id: 'csharp', name: 'C#', icon: 'csharp', color: '#9B4FCE' },
  { id: 'dotnet', name: 'ASP.NET Core', icon: 'dotnet', color: '#6D4AFF' },
  { id: 'ef-core', name: 'Entity Framework', icon: 'dotnet', color: '#8B5CF6' },
  { id: 'react', name: 'React', icon: 'react', color: '#61DAFB' },
  { id: 'react-native', name: 'React Native', icon: 'react', color: '#61DAFB' },
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
      'Atuação em diferentes camadas da aplicação, da interface à API e aos dados, entregando soluções organizadas e completas.',
    icon: 'layers',
  },
  {
    id: 'web-mobile',
    title: 'Web e Mobile',
    description:
      'Experiência no desenvolvimento de aplicações responsivas para web e aplicativos mobile com React Native.',
    icon: 'devices',
  },
  {
    id: 'product',
    title: 'Experiência com Produto',
    description:
      'Visão de produto para compreender requisitos, problemas do usuário e transformar necessidades em soluções práticas.',
    icon: 'product',
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    description:
      'Experiência anterior com Product Design e Design Systems, criando interfaces consistentes, reutilizáveis e centradas no usuário.',
    icon: 'design',
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
      'Plataforma full stack para organizar e apresentar informações de um universo de RPG, incluindo personagens, cidades, raças, itens, páginas e conteúdos de lore.',
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
    ],
    platform: 'Web',
    status: ProjectStatus.IN_DEVELOPMENT,
    coverImage: odisseiaCover,
    repositoryUrl: 'https://github.com/AlexandreAT/OdisseiaWiki',
    featured: true,
    priority: 1,
    caseStudy: {
      overview:
        'Uma wiki colaborativa criada para transformar um universo de RPG extenso em uma experiência de consulta visual, organizada e fácil de manter.',
      problem:
        'Informações de personagens, lugares, itens e lore ficavam distribuídas em fontes diferentes, dificultando a consulta durante a campanha.',
      objective:
        'Centralizar o conteúdo e permitir que ele seja cadastrado, relacionado e consultado de forma clara por jogadores e responsáveis pela campanha.',
      audience: 'Jogadores e criadores de campanhas de RPG.',
      participation:
        'Responsável pela experiência, interface, arquitetura frontend e integração com a API e banco de dados.',
      features: [
        'Páginas de wiki com blocos de conteúdo',
        'Busca e navegação por entidades relacionadas',
        'Gestão de personagens, cidades, raças e itens',
        'Autenticação e áreas de gerenciamento',
        'Upload e organização de imagens',
      ],
      architecture:
        'Frontend React com TypeScript e Styled Components integrado a uma API ASP.NET Core com Entity Framework Core e MySQL.',
      technicalDecisions: [
        'Componentes tipados e estilos separados',
        'Conteúdo estruturado em blocos reutilizáveis',
        'Rotas específicas para os diferentes tipos de entidade',
      ],
      learnings: [
        'Evolução incremental de um produto full stack',
        'Organização de interfaces ricas em conteúdo',
        'Integração de upload, edição e apresentação de mídia',
      ],
    },
  },
  {
    id: 'brasil-compete',
    slug: 'brasil-compete',
    title: 'Brasil Compete',
    shortDescription:
      'Agenda e resultados de competições internacionais com participação brasileira.',
    description:
      'Plataforma web e mobile para centralizar competições internacionais que possuem participação de brasileiros, reunindo agenda, resultados e informações sobre onde acompanhar os eventos.',
    role: 'Desenvolvimento de Produto',
    category: 'Web e Mobile',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Expo Router',
      'TanStack Query',
      'AsyncStorage',
    ],
    platform: 'Web e Mobile',
    status: ProjectStatus.IN_DEVELOPMENT,
    coverImage: brasilCompeteCover,
    featured: true,
    priority: 2,
    caseStudy: {
      overview:
        'Produto em desenvolvimento para facilitar o acompanhamento de atletas brasileiros em diferentes competições internacionais.',
      objective:
        'Reunir agenda, resultados e caminhos para transmissão em uma experiência consistente para web e mobile.',
      audience: 'Pessoas que acompanham o esporte brasileiro em eventos internacionais.',
      features: [
        'Agenda de competições',
        'Organização por modalidades e eventos',
        'Resultados e informações de acompanhamento',
      ],
    },
  },
  {
    id: 'pomodoro',
    slug: 'pomodoro',
    title: 'Pomodoro',
    shortDescription:
      'Aplicativo de produtividade para organizar ciclos de foco e descanso.',
    description:
      'Aplicativo de produtividade baseado na técnica Pomodoro, com foco em organização, concentração e evolução futura para tarefas, agenda, anotações e gamificação.',
    role: 'Desenvolvimento Mobile',
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Styled Components'],
    platform: 'Mobile',
    status: ProjectStatus.IN_DEVELOPMENT,
    coverImage: pomodoroCover,
    featured: true,
    priority: 3,
    caseStudy: {
      overview:
        'Aplicativo mobile focado em uma experiência direta para controlar ciclos de foco e descanso.',
      objective:
        'Criar uma base simples e extensível para produtividade pessoal, com espaço para tarefas, agenda e gamificação no futuro.',
      features: ['Temporizador de foco', 'Ciclos de descanso', 'Interface otimizada para uso rápido'],
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
      'Atuação em uma Plataforma de Inteligência Agronômica Digital, evoluindo aplicações web e mobile.',
    highlights: [
      'APIs, integrações e regras de negócio',
      'Modelagem e otimização de dados',
      'Componentes reutilizáveis',
      'Correções, refatorações e análise de requisitos',
    ],
  },
  {
    id: 'product-design',
    role: 'Product Designer',
    company: 'Hurb, Ubook/Audimo e Onawa',
    period: 'Experiência anterior',
    description:
      'Experiência com produtos digitais e Design Systems, hoje aplicada à criação de interfaces consistentes e soluções centradas no usuário.',
    highlights: [
      'Product Design e UX',
      'Design Systems',
      'Prototipação e componentes reutilizáveis',
      'Comunicação entre design e desenvolvimento',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'computer-science',
    course: 'Bacharelado em Ciência da Computação',
    institution: 'FAI',
    period: '2019 — 2022',
  },
  {
    id: 'technical-it',
    course: 'Técnico em Informática',
    institution: 'ETEC',
    period: '2017 — 2018',
  },
];

export const courses: Course[] = [
  {
    id: 'continuous-learning',
    name: 'Cursos e estudos contínuos em React, React Native, C# e arquitetura de software',
    status: 'Em atualização',
  },
  // TODO: adicione aqui os cursos e certificados que deseja destacar.
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'react',
    skills: ['React', 'React Native', 'TypeScript', 'HTML', 'CSS', 'Styled Components', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'code',
    skills: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'LINQ', 'APIs REST', 'JWT', 'Swagger'],
  },
  {
    id: 'data',
    title: 'Dados',
    icon: 'sqlserver',
    skills: ['MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    id: 'architecture',
    title: 'Arquitetura',
    icon: 'layers',
    skills: ['SOLID', 'Injeção de dependência', 'DTOs', 'Serviços', 'Repositórios', 'Separação em camadas', 'Modelagem de domínio'],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Expo', 'EAS'],
  },
  {
    id: 'product-design',
    title: 'Produto e Design',
    icon: 'design',
    skills: ['Product Design', 'Design Systems', 'UX', 'Componentes reutilizáveis', 'Prototipação'],
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
    value: profile.resumeUrl ? 'Baixar PDF' : 'Adicione o arquivo PDF',
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
    title: 'Tipos de aplicações',
    icon: 'devices' as const,
    items: ['Aplicações web', 'Aplicações mobile', 'APIs', 'Sistemas internos', 'Plataformas completas'],
  },
  {
    id: 'education',
    title: 'Formação',
    icon: 'education' as const,
    items: ['Ciência da Computação', 'FAI', '2019 — 2022'],
  },
  {
    id: 'other-skills',
    title: 'Outras competências',
    icon: 'product' as const,
    items: ['Bancos SQL e NoSQL', 'Autenticação e autorização', 'Arquitetura em camadas', 'Product Design', 'Design Systems'],
  },
];
