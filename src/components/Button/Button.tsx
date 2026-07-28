import type { ReactNode } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ButtonElement, ExternalButtonLink, InternalButtonLink } from './Button.style';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  showArrow?: boolean;
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  title?: string;
}

export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  showArrow = false,
  external = false,
  disabled = false,
  onClick,
  title,
}: ButtonProps) => {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <FiArrowRight aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <InternalButtonLink to={to} $variant={variant} onClick={onClick} title={title}>
        {content}
      </InternalButtonLink>
    );
  }

  if (href && !disabled) {
    return (
      <ExternalButtonLink
        href={href}
        $variant={variant}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick}
        title={title}
      >
        {content}
      </ExternalButtonLink>
    );
  }

  return (
    <ButtonElement
      type="button"
      $variant={variant}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {content}
    </ButtonElement>
  );
};
