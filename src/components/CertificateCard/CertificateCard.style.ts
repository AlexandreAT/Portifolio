import styled from 'styled-components';

export const Card = styled.article`
  min-width: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.gradients.surface};
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(34, 199, 242, 0.34);
  }
`;

export const PdfPreview = styled.div`
  height: 150px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: #f6f7f8;
  pointer-events: none;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const CardBody = styled.div`
  display: flex;
  min-height: 190px;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;

  > span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0.55rem 0;
    font-size: 0.9rem;
    line-height: 1.42;
  }

  small {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.7rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: auto;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.72rem;

    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`;
