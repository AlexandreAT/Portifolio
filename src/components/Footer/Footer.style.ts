import styled from 'styled-components';

export const FooterBar = styled.footer`
  margin-top: clamp(4rem, 8vw, 7rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FooterContent = styled.div`
  display: grid;
  width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
  min-height: 120px;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr auto;
    padding: 2rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  > svg { color: ${({ theme }) => theme.colors.primary}; font-size: 1.6rem; }
  div { display: grid; gap: 0.22rem; }
  strong { font-size: 0.8rem; }
  span { color: ${({ theme }) => theme.colors.textMuted}; font-size: 0.68rem; }
`;

export const Copyright = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.7rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 4;
    grid-column: 1 / -1;
    text-align: left;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 1.4rem;

  a, button {
    padding: 0;
    border: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    background: transparent;
    font-size: 0.7rem;
    cursor: pointer;
    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const BackToTop = styled.button`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; }
`;
