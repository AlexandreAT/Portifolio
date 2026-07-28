import styled from 'styled-components';

export const Hero = styled.section`
  width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
  min-height: calc(100svh - ${({ theme }) => theme.layout.headerHeight});
  margin: 0 auto;
  padding: clamp(3.5rem, 8vh, 6.8rem) 0 2.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
    padding-top: 3rem;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(340px, 0.98fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 6.5rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div`
  max-width: 640px;

  h1 {
    margin: 1.6rem 0 0.8rem;
    font-size: clamp(3.3rem, 7vw, 6.35rem);
    line-height: 0.9;
    letter-spacing: -0.065em;
  }

  h2 {
    margin: 1.65rem 0 0.75rem;
    font-size: clamp(1.2rem, 2vw, 1.65rem);
    letter-spacing: -0.02em;
  }

  p {
    max-width: 590px;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: clamp(0.93rem, 1.4vw, 1.05rem);
    line-height: 1.7;
  }

  small { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.8rem; }
`;

export const LastName = styled.span`
  display: block;
  padding-right: 0.08em;
  color: transparent;
  background: ${({ theme }) => theme.gradients.brand};
  background-clip: text;
  -webkit-background-clip: text;
`;

export const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.success};
  background: rgba(6, 17, 31, 0.45);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 10px currentColor;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.8rem;

  @media (max-width: 420px) {
    > * { width: 100%; }
  }
`;

export const Frame = styled.div`
  width: min(100%, 520px);
  justify-self: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100%, 500px);
    justify-self: center;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  clip-path: inset(0 35px 0 0);
`;
