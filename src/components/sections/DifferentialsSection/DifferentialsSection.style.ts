import styled from 'styled-components';

export const Label = styled.span`
  display: block;
  padding: 1.5rem 1.8rem 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem 0 1.45rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  padding: 1.15rem 1.8rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child { border-right: 0; }

  > svg { color: ${({ theme }) => theme.colors.primary}; font-size: 1.55rem; }
  h2 { margin: 1rem 0 0.6rem; font-size: 0.95rem; }
  p { margin: 0; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.77rem; line-height: 1.65; }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:nth-child(2) { border-right: 0; }
    &:nth-child(-n + 2) { border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    &:last-child { border-bottom: 0; }
  }
`;
