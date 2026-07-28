import { NavLink, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: ${({ theme }) => theme.layout.headerHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(3, 10, 20, 0.82);
  backdrop-filter: blur(18px);
`;

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  white-space: nowrap;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.55rem;
  }

  strong { font-size: 0.96rem; }
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 1.9rem;

  button {
    height: 100%;
    padding: 0;
    border: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    background: transparent;
    font-size: 0.8rem;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  position: relative;
  display: inline-flex;
  height: 100%;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;

  &::after {
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
    content: '';
    opacity: 0;
    transform: scaleX(0.2);
    transition: opacity 160ms ease, transform 160ms ease;
  }

  &:hover, &.active { color: ${({ theme }) => theme.colors.text}; }
  &.active::after { opacity: 1; transform: scaleX(1); }
`;

export const DesktopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.15rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const SocialAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.76rem;

  &:hover { color: ${({ theme }) => theme.colors.text}; }
`;

export const ResumeLink = styled.a<{ $disabled?: boolean }>`
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.small};
  font-size: 0.74rem;
  transition: border-color 160ms ease, color 160ms ease;

  &:hover { border-color: ${({ theme }) => theme.colors.primary}; }

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      color: ${theme.colors.textMuted};
      cursor: not-allowed;
      &:hover { border-color: ${theme.colors.border}; }
    `}
`;

export const MenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.small};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
  }
`;

export const MobilePanel = styled.nav<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  left: 0;
  display: none;
  padding: 0.65rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: rgba(6, 17, 31, 0.98);
  box-shadow: ${({ theme }) => theme.shadows.soft};

  ${({ $open }) => $open && css`display: grid;`}

  ${NavItem}, button, ${SocialAnchor} {
    display: flex;
    width: 100%;
    min-height: 46px;
    align-items: center;
    padding: 0.75rem;
    border: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    background: transparent;
    text-align: left;
    cursor: pointer;
  }

  ${NavItem}::after { display: none; }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.desktop} + 1px)) {
    display: none;
  }
`;
