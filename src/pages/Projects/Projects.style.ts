import styled from 'styled-components';

export const Page = styled.main`
  width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
  min-height: 70svh;
  margin: 0 auto;
  padding-top: clamp(4rem, 8vw, 7rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
  }
`;

export const PageHeader = styled.header`
  max-width: 700px;
  margin-bottom: 2.5rem;

  span { color: ${({ theme }) => theme.colors.primary}; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
  h1 { margin: 0.55rem 0; font-size: clamp(2.8rem, 7vw, 5.3rem); letter-spacing: -0.06em; }
  p { color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.7; }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;
