import styled from 'styled-components';

export const Header = styled.div`
  max-width: 720px;

  p {
    margin: 0.75rem 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
  }
`;

export const Label = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Text = styled.h2`
  margin: 0.55rem 0 0;
  font-size: clamp(1.75rem, 3vw, 2.6rem);
  letter-spacing: -0.035em;
`;
