import { FiArrowUpRight } from 'react-icons/fi';
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
          {/* A ação "Estudo de caso" foi ocultada; a imagem ainda abre os detalhes do projeto. */}
        </Actions>
      </CardFooter>
    </Card>
  );
};
