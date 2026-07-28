import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    color-scheme: dark;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.text};
    background:
      radial-gradient(circle at 14% 14%, rgba(24, 113, 160, 0.11), transparent 29rem),
      radial-gradient(circle at 86% 9%, rgba(85, 56, 182, 0.1), transparent 32rem),
      ${({ theme }) => theme.colors.background};
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, button, a {
    -webkit-tap-highlight-color: transparent;
  }

  button, input, textarea, select {
    font: inherit;
  }

  button, a {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  h1, h2, h3, p {
    margin-top: 0;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.primary};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }

  section[id] {
    scroll-margin-top: calc(${({ theme }) => theme.layout.headerHeight} + 24px);
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
