import 'styled-components';
import type { portfolioTheme } from '@/styles/theme';

type PortfolioTheme = typeof portfolioTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends PortfolioTheme {}
}
