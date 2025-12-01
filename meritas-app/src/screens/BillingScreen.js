import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../theme';
import { Card } from '../components/Card';

export const BillingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Billing & Payments</Text>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Current Balance</Text>
          <Text style={styles.amount}>$85.00</Text>
          <Text style={styles.dueDate}>Due December 15, 2024</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Payment History</Text>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.historyItem}>
              <Text style={styles.historyDate}>Nov 15, 2024</Text>
              <Text style={styles.historyAmount}>$85.00</Text>
            </View>
          ))}
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
  amount: {
    fontSize: 36,
    fontWeight: 700,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[2],
  },
  dueDate: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },
  historyDate: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
  },
  historyAmount: {
    ...theme.typography.styles.body,
    fontWeight: 600,
  },
});
