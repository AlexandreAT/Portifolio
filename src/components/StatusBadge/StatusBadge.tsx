import { ProjectStatus } from '@/types/portfolio.types';
import { Badge } from './StatusBadge.style';

interface StatusBadgeProps {
  status: ProjectStatus;
}

const labels: Record<ProjectStatus, string> = {
  [ProjectStatus.PLANNED]: 'Planejado',
  [ProjectStatus.IN_DEVELOPMENT]: 'Em desenvolvimento',
  [ProjectStatus.ONLINE]: 'Online',
  [ProjectStatus.FINISHED]: 'Finalizado',
  [ProjectStatus.PAUSED]: 'Pausado',
};

export const StatusBadge = ({ status }: StatusBadgeProps) => (
  <Badge $status={status}>
    <span aria-hidden="true" />
    {labels[status]}
  </Badge>
);
