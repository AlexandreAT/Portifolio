import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Page = styled.main`
  width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
  min-height: 70svh;
  margin: 0 auto;
  padding-top: clamp(3rem, 6vw, 5rem);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth}); }
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
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(360px, 1.15fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 6rem);
  padding: clamp(3rem, 7vw, 6rem) 0;

  > div > span, > span { color: ${({ theme }) => theme.colors.primary}; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
  h1 { margin: 0.65rem 0 1rem; font-size: clamp(3rem, 7vw, 6rem); line-height: 0.95; letter-spacing: -0.06em; }
  p { color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.72; }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

export const Cover = styled.img`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.2rem;
  margin-top: 1.4rem;
  > span { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.75rem; }
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  padding: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  span { padding: 0.45rem 0.7rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 6px; color: ${({ theme }) => theme.colors.primary}; font-size: 0.73rem; }
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

export const CaseSection = styled.section`
  padding: clamp(1.4rem, 3vw, 2rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: rgba(8, 21, 34, 0.5);
  > span { color: ${({ theme }) => theme.colors.secondary}; font-size: 0.67rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
  h2 { margin: 0.55rem 0 0.8rem; font-size: 1.25rem; }
  p, li { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.85rem; line-height: 1.7; }
  p { margin-bottom: 0; }
  ul { margin: 0; padding-left: 1.2rem; }
`;
