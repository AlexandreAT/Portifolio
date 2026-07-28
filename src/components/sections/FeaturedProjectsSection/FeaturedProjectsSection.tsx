import { Button } from '@/components/Button/Button';
import { MotionSection } from '@/components/MotionSection/MotionSection';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { projects } from '@/data/portfolio.data';
import { Grid, SectionHeader } from './FeaturedProjectsSection.style';

export const FeaturedProjectsSection = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  return (
    <MotionSection id="projetos-em-destaque">
      <SectionHeader>
        <SectionTitle label="Projetos em destaque" title="Trabalhos que conectam produto e tecnologia" />
        <Button to="/projetos" variant="secondary" showArrow>Ver todos os projetos</Button>
      </SectionHeader>
      <Grid>
        {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </Grid>
    </MotionSection>
  );
};
