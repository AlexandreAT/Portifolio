import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { projects } from '@/data/portfolio.data';
import { Grid, Page, PageHeader } from './Projects.style';

const Projects = () => {
  const orderedProjects = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <Page>
      <PageHeader>
        <span>Portfólio</span>
        <h1>Projetos</h1>
        <p>Produtos que combinam desenvolvimento full stack, experiência de uso e decisões técnicas pensadas para cada contexto.</p>
      </PageHeader>
      <Grid>
        {orderedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </Grid>
    </Page>
  );
};

export default Projects;
