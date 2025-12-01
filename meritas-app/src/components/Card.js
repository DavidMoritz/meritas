import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../theme';

export const Card = ({
  children,
  style,
  noPadding = false,
  variant = 'elevated',
}) => {
  return (
    <View
      style={[
        styles.base,
        styles[variant],
        !noPadding && styles.padding,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
  },
  elevated: {
    backgroundColor: theme.colors.white,
    ...theme.shadows.md,
  },
  outlined: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
  },
  filled: {
    backgroundColor: theme.colors.background.secondary,
  },
  padding: {
    padding: theme.spacing[4],
  },
});
