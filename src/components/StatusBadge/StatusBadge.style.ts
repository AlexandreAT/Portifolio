import styled, { css } from 'styled-components';
import { ProjectStatus } from '@/types/portfolio.types';

export const Badge = styled.div<{ $status: ProjectStatus }>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.75rem;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.warning};
    box-shadow: 0 0 10px currentColor;
  }

  ${({ $status, theme }) =>
    ($status === ProjectStatus.ONLINE || $status === ProjectStatus.FINISHED) &&
    css`
      span { background: ${theme.colors.success}; }
    `}

  ${({ $status, theme }) =>
    $status === ProjectStatus.PAUSED &&
    css`
      span { background: ${theme.colors.danger}; }
    `}
`;
