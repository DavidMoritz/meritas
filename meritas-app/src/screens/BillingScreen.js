import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { theme } from '../theme';
import { Card } from '../components/Card';

export const BillingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Background Image - Fixed at top */}
      <ImageBackground
        source={require('../../assets/header-bg.png')}
        style={styles.header}
        resizeMode="cover"
      >
        <Text style={styles.headerTitle}>Billing & Payments</Text>
      </ImageBackground>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
  header: {
    padding: theme.spacing[6],
    paddingTop: theme.spacing[16],
    paddingBottom: theme.spacing[4],
  },
  headerTitle: {
    ...theme.typography.styles.h2,
    color: theme.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing[4],
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
