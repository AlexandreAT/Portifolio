export const portfolioTheme = {
  colors: {
    background: '#030a14',
    backgroundSecondary: '#06111f',
    surface: '#081522',
    surfaceElevated: '#0a1929',
    border: 'rgba(133, 158, 190, 0.18)',
    borderStrong: 'rgba(133, 158, 190, 0.34)',
    text: '#f7f9fc',
    textSecondary: '#9aa7ba',
    textMuted: '#6f8097',
    primary: '#22c7f2',
    primaryDeep: '#1397d1',
    secondary: '#8b5cf6',
    success: '#35d16f',
    warning: '#f4bb45',
    danger: '#fb7185',
  },
  gradients: {
    brand: 'linear-gradient(92deg, #22c7f2 0%, #8b5cf6 100%)',
    surface:
      'linear-gradient(145deg, rgba(10, 25, 41, 0.94), rgba(5, 14, 27, 0.96))',
  },
  radii: {
    small: '8px',
    medium: '12px',
    large: '18px',
    pill: '999px',
  },
  shadows: {
    soft: '0 18px 60px rgba(0, 0, 0, 0.2)',
    glow: '0 0 42px rgba(34, 199, 242, 0.08)',
  },
  layout: {
    maxWidth: '1240px',
    headerHeight: '72px',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '900px',
    desktop: '1120px',
  },
} as const;
