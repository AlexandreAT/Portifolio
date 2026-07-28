import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Page = styled.main`
  width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
  min-height: 70svh;
  margin: 0 auto;
  padding-top: clamp(3rem, 6vw, 5rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;

  &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

export const Hero = styled.section`
  max-width: 900px;
  padding: clamp(3rem, 7vw, 5.5rem) 0 2.5rem;
`;

export const Content = styled.div`
  > span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0.65rem 0 1.7rem;
    font-size: clamp(2.6rem, 6.5vw, 5.5rem);
    line-height: 0.98;
    letter-spacing: -0.06em;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 3rem;

  div { display: grid; gap: 0.35rem; }
  small { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.68rem; text-transform: uppercase; }
  strong { font-size: 0.88rem; }
`;

export const Quote = styled.blockquote`
  max-width: 760px;
  margin: 2rem 0 0;
  padding-left: 1.2rem;
  border-left: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-style: italic;
  line-height: 1.65;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
`;

export const CertificateFrame = styled.section`
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: #f6f7f8;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 520px;
    aspect-ratio: auto;
  }
`;
