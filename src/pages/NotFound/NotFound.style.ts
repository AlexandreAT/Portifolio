import styled from 'styled-components';

export const Page = styled.main`
  display: grid;
  width: min(calc(100% - 2rem), 720px);
  min-height: 70svh;
  place-content: center;
  justify-items: start;
  margin: 0 auto;
  span { color: ${({ theme }) => theme.colors.primary}; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
  h1 { margin: 0.7rem 0; font-size: clamp(2.8rem, 7vw, 5rem); letter-spacing: -0.055em; }
  p { color: ${({ theme }) => theme.colors.textSecondary}; }
  a { margin-top: 1rem; }
`;
