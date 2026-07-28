import styled from 'styled-components';

export const Page = styled.main`
  width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;

  > section { margin-top: clamp(4.5rem, 9vw, 8rem); }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
  }
`;

export const Intro = styled.section`
  display: grid;
  min-height: 68svh;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-content: center;
  align-items: end;
  gap: clamp(2rem, 7vw, 6rem);
  padding: clamp(4rem, 8vw, 7rem) 0;

  > span { position: absolute; align-self: start; color: ${({ theme }) => theme.colors.primary}; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
  h1 { margin: 2rem 0 0; font-size: clamp(2.7rem, 5vw, 4.7rem); line-height: 1; letter-spacing: -0.055em; }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; align-items: start; }
`;

export const AboutCopy = styled.div`
  p { color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.76; }
  p:last-child { margin-bottom: 0; }
`;

export const PersonalMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.65rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.72rem;
  }
`;

export const Section = styled.section`
  > header { margin-bottom: 2rem; }
  > header span { color: ${({ theme }) => theme.colors.primary}; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
  > header h2 { margin: 0.55rem 0 0; font-size: clamp(1.8rem, 4vw, 3rem); letter-spacing: -0.04em; }
`;

export const Timeline = styled.div`
  display: grid;
  gap: 1rem;
`;

export const TimelineItem = styled.article`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 1.25rem;
  padding: clamp(1.35rem, 3vw, 2rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.gradients.surface};

  > svg { padding: 0.75rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 10px; color: ${({ theme }) => theme.colors.primary}; font-size: 48px; }
  small { color: ${({ theme }) => theme.colors.secondary}; }
  h3 { margin: 0.45rem 0 0.2rem; }
  strong { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.86rem; }
  p, li { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.84rem; line-height: 1.65; }
  ul { margin: 1rem 0 0; padding-left: 1.2rem; }
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

export const CourseCard = styled.article`
  display: flex;
  gap: 1rem;
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: rgba(8, 21, 34, 0.55);
  > svg { flex: 0 0 auto; color: ${({ theme }) => theme.colors.primary}; }
  h3 { margin: 0 0 0.55rem; font-size: 0.95rem; line-height: 1.4; }
  p { margin: 0 0 0.3rem; color: ${({ theme }) => theme.colors.textSecondary}; }
  span { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.74rem; }
  a { display: block; margin-top: 0.75rem; color: ${({ theme }) => theme.colors.primary}; font-size: 0.72rem; }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

export const SkillCard = styled.article`
  padding: 1.35rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: rgba(8, 21, 34, 0.55);
  > svg { color: ${({ theme }) => theme.colors.primary}; font-size: 1.35rem; }
  h3 { margin: 0.9rem 0; }
  ul { display: flex; flex-wrap: wrap; gap: 0.45rem; margin: 0; padding: 0; list-style: none; }
  li { padding: 0.35rem 0.55rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 5px; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.72rem; }
`;
