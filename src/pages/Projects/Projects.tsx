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
        <p>Aplicações web desenvolvidas para praticar e consolidar conhecimentos de frontend, backend, APIs, autenticação e bancos de dados.</p>
      </PageHeader>
      <Grid>
        {orderedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </Grid>
    </Page>
  );
};

export default Projects;
