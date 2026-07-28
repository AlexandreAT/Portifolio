import styled, { css } from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div`
  > span { color: ${({ theme }) => theme.colors.secondary}; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
  h2 { margin: 0.7rem 0; font-size: clamp(1.8rem, 3.4vw, 2.7rem); line-height: 1.12; letter-spacing: -0.045em; }
  p { margin: 0; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.86rem; line-height: 1.65; }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const cardBaseStyles = css`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 104px;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ theme }) => theme.gradients.surface};

  > svg:first-child { flex: 0 0 auto; color: ${({ theme }) => theme.colors.primary}; font-size: 1.18rem; }
  > svg:last-child { position: absolute; top: 0.85rem; right: 0.85rem; color: ${({ theme }) => theme.colors.textMuted}; }
  div { display: grid; min-width: 0; gap: 0.65rem; }
  strong { font-size: 0.8rem; }
  span { overflow: hidden; color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.67rem; text-overflow: ellipsis; white-space: nowrap; }
`;

export const ContactCard = styled.a`
  ${cardBaseStyles}
  transition: transform 160ms ease, border-color 160ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DisabledCard = styled.div`
  ${cardBaseStyles}
  opacity: 0.66;
  cursor: help;
`;
