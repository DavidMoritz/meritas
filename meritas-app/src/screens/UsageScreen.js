import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export const UsageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usage Screen - Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.secondary,
  },
  text: {
    ...theme.typography.styles.h4,
    color: theme.colors.text.primary,
  },
});
