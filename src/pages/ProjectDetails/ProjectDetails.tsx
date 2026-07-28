import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/Button/Button';
import { StatusBadge } from '@/components/StatusBadge/StatusBadge';
import { projects } from '@/data/portfolio.data';
import {
  ActionRow,
  BackLink,
  CaseSection,
  Cover,
  DetailGrid,
  Hero,
  Meta,
  Page,
  Tags,
} from './ProjectDetails.style';

const listSections = [
  { key: 'features', label: 'Principais funcionalidades' },
  { key: 'technicalDecisions', label: 'Decisões técnicas' },
  { key: 'challenges', label: 'Desafios' },
  { key: 'solutions', label: 'Soluções' },
  { key: 'learnings', label: 'Aprendizados' },
] as const;

const textSections = [
  { key: 'problem', label: 'Problema' },
  { key: 'objective', label: 'Objetivo' },
  { key: 'audience', label: 'Público' },
  { key: 'participation', label: 'Minha participação' },
  { key: 'architecture', label: 'Arquitetura' },
] as const;

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Page>
        <Hero>
          <span>Projeto não encontrado</span>
          <h1>Este projeto não existe.</h1>
          <p>O endereço pode ter mudado ou o projeto ainda não foi cadastrado.</p>
          <Button to="/projetos" variant="secondary">Voltar para projetos</Button>
        </Hero>
      </Page>
    );
  }

  return (
    <Page>
      <BackLink to="/projetos"><FiArrowLeft aria-hidden="true" /> Todos os projetos</BackLink>
      <Hero>
        <div>
          <span>{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Meta>
            <StatusBadge status={project.status} />
            {project.role && <span>{project.role}</span>}
            {project.platform && <span>{project.platform}</span>}
          </Meta>
          <ActionRow>
            {project.projectUrl && <Button href={project.projectUrl} external>Ver projeto <FiArrowUpRight aria-hidden="true" /></Button>}
            {project.repositoryUrl && <Button href={project.repositoryUrl} external variant="secondary"><FiGithub aria-hidden="true" /> Repositório</Button>}
          </ActionRow>
        </div>
        <Cover src={project.coverImage} alt={`Prévia do projeto ${project.title}`} />
      </Hero>

      <Tags>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</Tags>

      {project.caseStudy && (
        <DetailGrid>
          {project.caseStudy.overview && <CaseSection><span>Visão geral</span><h2>Sobre o projeto</h2><p>{project.caseStudy.overview}</p></CaseSection>}
          {textSections.map(({ key, label }) => {
            const content = project.caseStudy?.[key];
            return content ? <CaseSection key={key}><span>{label}</span><h2>{label}</h2><p>{content}</p></CaseSection> : null;
          })}
          {listSections.map(({ key, label }) => {
            const items = project.caseStudy?.[key];
            return items?.length ? <CaseSection key={key}><span>{label}</span><h2>{label}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></CaseSection> : null;
          })}
        </DetailGrid>
      )}
    </Page>
  );
};

export default ProjectDetails;
