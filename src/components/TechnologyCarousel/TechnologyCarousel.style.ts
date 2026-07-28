import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 2.3rem;

  > span {
    display: block;
    margin: 0 0 0.8rem 3rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

export const Carousel = styled.div`
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 38px;
  align-items: center;
  gap: 0.55rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 32px minmax(0, 1fr) 32px;
    gap: 0.2rem;
  }
`;

export const Viewport = styled.div`
  min-width: 0;
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y pinch-zoom;

  &:active { cursor: grabbing; }
`;

export const Slides = styled.div`
  display: flex;
  margin-left: -0.55rem;
`;

export const Slide = styled.div`
  min-width: 0;
  flex: 0 0 19%;
  padding-left: 0.55rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-basis: 25%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: 34%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-basis: 58%;
  }
`;

export const TechnologyCard = styled.div<{ $color: string }>`
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.small};
  background: rgba(8, 21, 34, 0.76);

  svg {
    flex: 0 0 auto;
    color: ${({ $color }) => $color};
    font-size: 1.35rem;
  }

  strong {
    overflow: hidden;
    font-size: 0.75rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ArrowButton = styled.button`
  display: grid;
  width: 38px;
  height: 44px;
  place-items: center;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: transparent;
  cursor: pointer;
  transition: color 160ms ease, background 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(34, 199, 242, 0.05);
  }
`;
