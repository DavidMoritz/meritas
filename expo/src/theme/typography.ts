// Typography system based on modern mobile design standards

export const typography = {
  // Font families - System fonts for best performance
  fonts: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },

  // Font weights
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  } as const,

  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Text styles (composed)
  styles: {
    // Headings
    h1: {
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },

    // Body text
    bodyLarge: {
      fontSize: 18,
      fontWeight: 400,
    },
    body: {
      fontSize: 16,
      fontWeight: 400,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: 400,
    },

    // Special purpose
    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
    },
    label: {
      fontSize: 14,
      fontWeight: 500,
    },
  },
};

export type Typography = typeof typography;
