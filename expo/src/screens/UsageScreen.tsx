import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../theme';
import { Card } from '../components/Card';

export const UsageScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Usage Monitoring</Text>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Data Usage</Text>
          <Text style={styles.usage}>6.5 GB of 10 GB</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '65%' }]} />
          </View>
          <Text style={styles.percentage}>65% used</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Minutes</Text>
          <Text style={styles.detail}>Unlimited</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Messages</Text>
          <Text style={styles.detail}>Unlimited</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
  content: {
    padding: theme.spacing[4],
  },
  title: {
    ...theme.typography.styles.h3,
    marginBottom: theme.spacing[4],
  },
  card: {
    marginBottom: theme.spacing[4],
  },
  cardTitle: {
    ...theme.typography.styles.h5,
    marginBottom: theme.spacing[3],
  },
  usage: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: theme.spacing[3],
  },
  progressBar: {
    height: 12,
    backgroundColor: theme.colors.gray[200],
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
    marginBottom: theme.spacing[2],
  },
  progress: {
    height: '100%',
    backgroundColor: theme.colors.primary[700],
  },
  percentage: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
  },
  detail: {
    ...theme.typography.styles.bodyLarge,
    fontWeight: '600',
  },
});
