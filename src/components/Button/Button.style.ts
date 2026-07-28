import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonStyleProps {
  $variant: 'primary' | 'secondary' | 'ghost';
}

const buttonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.8rem 1.25rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.small};
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  font-size: 0.9rem;
  font-weight: 650;
  white-space: nowrap;
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    white-space: nowrap;
  }

  svg { flex: 0 0 auto; }

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      color: #020a12;
      background: ${theme.gradients.brand};
      box-shadow: 0 12px 34px rgba(34, 199, 242, 0.14);
    `}

  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      border-color: ${theme.colors.borderStrong};
      background: rgba(6, 17, 31, 0.5);
    `}

  ${({ $variant, theme }) =>
    $variant === 'ghost' &&
    css`
      color: ${theme.colors.textSecondary};
      border-color: ${theme.colors.border};
    `}

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textMuted};
    border-color: ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    cursor: not-allowed;
    opacity: 0.72;
  }
`;

export const ButtonElement = styled.button<ButtonStyleProps>`
  ${buttonStyles}
`;

export const InternalButtonLink = styled(Link)<ButtonStyleProps>`
  ${buttonStyles}
`;

export const ExternalButtonLink = styled.a<ButtonStyleProps>`
  ${buttonStyles}
`;
