import styled from 'styled-components';

export const Main = styled.main`
  > section:not(:first-child) {
    width: min(calc(100% - 3rem), ${({ theme }) => theme.layout.maxWidth});
    margin: clamp(4.5rem, 9vw, 8rem) auto 0;
  }

  > .surface-section {
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.medium};
    background: linear-gradient(145deg, rgba(8, 21, 34, 0.62), rgba(3, 10, 20, 0.28));
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    > section:not(:first-child) {
      width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
    }
  }
`;
