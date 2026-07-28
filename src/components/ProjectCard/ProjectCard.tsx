import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import type { Project } from '@/types/portfolio.types';
import { StatusBadge } from '@/components/StatusBadge/StatusBadge';
import {
  Actions,
  Card,
  CardBody,
  CardFooter,
  Cover,
  CoverLink,
  Tag,
  Tags,
} from './ProjectCard.style';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <Card>
      <CoverLink to={`/projetos/${project.slug}`} aria-label={`Ver ${project.title}`}>
        <Cover src={project.coverImage} alt={`Prévia do projeto ${project.title}`} loading="lazy" />
      </CoverLink>
      <CardBody>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <Tags aria-label={`Tecnologias de ${project.title}`}>
          {project.technologies.slice(0, 5).map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </Tags>
      </CardBody>
      <CardFooter>
        <StatusBadge status={project.status} />
        <Actions>
          {project.projectUrl ? (
            <a href={project.projectUrl} target="_blank" rel="noreferrer">
              Ver projeto <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <Link to={`/projetos/${project.slug}`}>
              Ver projeto <FiArrowUpRight aria-hidden="true" />
            </Link>
          )}
          {hasCaseStudy && (
            <Link to={`/projetos/${project.slug}`}>
              <FiBookOpen aria-hidden="true" /> Estudo de caso
            </Link>
          )}
        </Actions>
      </CardFooter>
    </Card>
  );
};
