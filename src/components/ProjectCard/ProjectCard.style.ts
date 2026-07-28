import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(motion.article).attrs({
  whileHover: { y: -5 },
  transition: { duration: 0.18 },
})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.gradients.surface};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &:hover {
    border-color: rgba(34, 199, 242, 0.34);
  }
`;

export const CoverLink = styled(Link)`
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;

  ${CoverLink}:hover & {
    transform: scale(1.025);
  }
`;

export const CardBody = styled.div`
  flex: 1;
  padding: 1.25rem;

  h3 {
    margin: 0 0 0.6rem;
    font-size: 1.12rem;
  }

  p {
    min-height: 4.7em;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.88rem;
    line-height: 1.55;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Tag = styled.span`
  padding: 0.32rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(34, 199, 242, 0.035);
  font-size: 0.68rem;
`;

export const CardFooter = styled.footer`
  display: flex;
  min-height: 58px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 1.25rem;
  padding: 0.8rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 410px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.72rem;
    transition: color 160ms ease;

    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`;
