import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: clamp(2rem, 6vw, 5rem);
  padding: clamp(1.5rem, 4vw, 2.8rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div`
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.88rem;
    line-height: 1.72;
  }

  p:first-of-type { margin-top: 1.5rem; }
  > a { margin-top: 0.6rem; }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.article`
  padding: 1.25rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:nth-child(2n) { border-right: 0; }
  &:nth-last-child(-n + 2) { border-bottom: 0; }

  > div { display: flex; align-items: center; gap: 0.65rem; }
  svg { color: ${({ theme }) => theme.colors.primary}; }
  h3 { margin: 0; font-size: 0.85rem; }
  ul { margin: 0.8rem 0 0; padding: 0; list-style: none; }
  li { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.74rem; line-height: 1.65; }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-right: 0;
    &:nth-last-child(2) { border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
  }
`;
