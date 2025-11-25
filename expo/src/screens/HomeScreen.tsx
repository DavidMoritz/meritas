import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';
import { Card } from '../components/Card';
import { useAuthStore } from '../stores/authStore';

export const HomeScreen = ({ navigation }: any) => {
  const user = useAuthStore((state) => state.user);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Header with Gradient */}
      <LinearGradient
        colors={[theme.colors.primary[700], theme.colors.primary[900]]}
        style={styles.header}
      >
        <Text style={styles.greeting}>Welcome back,</Text>
        <Text style={styles.userName}>{user?.name}</Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Billing')}
          >
            <View style={[styles.actionIcon, { backgroundColor: theme.colors.primary[100] }]}>
              <Text style={styles.actionEmoji}>💳</Text>
            </View>
            <Text style={styles.actionTitle}>Pay Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Usage')}
          >
            <View style={[styles.actionIcon, { backgroundColor: theme.colors.accent[100] }]}>
              <Text style={styles.actionEmoji}>📊</Text>
            </View>
            <Text style={styles.actionTitle}>Usage</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Devices')}
          >
            <View style={[styles.actionIcon, { backgroundColor: theme.colors.success.light }]}>
              <Text style={styles.actionEmoji}>📱</Text>
            </View>
            <Text style={styles.actionTitle}>Devices</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Support')}
          >
            <View style={[styles.actionIcon, { backgroundColor: theme.colors.info.light }]}>
              <Text style={styles.actionEmoji}>💬</Text>
            </View>
            <Text style={styles.actionTitle}>Support</Text>
          </TouchableOpacity>
        </View>

        {/* Current Bill Summary */}
        <Card style={styles.billCard}>
          <View style={styles.billHeader}>
            <Text style={styles.billLabel}>Current Bill</Text>
            <Text style={styles.billStatus}>Due Dec 15</Text>
          </View>
          <Text style={styles.billAmount}>$85.00</Text>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => navigation.navigate('Billing')}
          >
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
        </Card>

        {/* Data Usage Card */}
        <Card style={styles.usageCard}>
          <Text style={styles.cardTitle}>Data Usage</Text>
          <View style={styles.usageBar}>
            <View style={[styles.usageProgress, { width: '65%' }]} />
          </View>
          <View style={styles.usageDetails}>
            <Text style={styles.usageText}>6.5 GB of 10 GB used</Text>
            <Text style={styles.usagePercent}>65%</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Usage')}>
            <Text style={styles.viewDetails}>View Details →</Text>
          </TouchableOpacity>
        </Card>

        {/* Account Summary */}
        <Card style={styles.accountCard}>
          <Text style={styles.cardTitle}>Account Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone Number</Text>
            <Text style={styles.infoValue}>{user?.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Plan</Text>
            <Text style={styles.infoValue}>Unlimited Plus</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Lines</Text>
            <Text style={styles.infoValue}>2 Lines</Text>
          </View>
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
  header: {
    padding: theme.spacing[6],
    paddingTop: theme.spacing[12],
    paddingBottom: theme.spacing[8],
  },
  greeting: {
    ...theme.typography.styles.body,
    color: theme.colors.white,
    opacity: 0.9,
  },
  userName: {
    ...theme.typography.styles.h2,
    color: theme.colors.white,
    marginTop: theme.spacing[1],
  },
  content: {
    padding: theme.spacing[4],
    marginTop: -theme.spacing[4],
  },
  sectionTitle: {
    ...theme.typography.styles.h4,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[4],
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing[2],
    marginBottom: theme.spacing[6],
  },
  actionCard: {
    width: '50%',
    padding: theme.spacing[2],
  },
  actionIcon: {
    width: 64,
    height: 64,
    borderRadius: theme.borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing[2],
  },
  actionEmoji: {
    fontSize: 32,
  },
  actionTitle: {
    ...theme.typography.styles.label,
    color: theme.colors.text.primary,
  },
  billCard: {
    marginBottom: theme.spacing[4],
  },
  billHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing[2],
  },
  billLabel: {
    ...theme.typography.styles.label,
    color: theme.colors.text.secondary,
  },
  billStatus: {
    ...theme.typography.styles.caption,
    color: theme.colors.accent[700],
    fontWeight: '600',
  },
  billAmount: {
    fontSize: 48,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[4],
  },
  payButton: {
    backgroundColor: theme.colors.primary[700],
    padding: theme.spacing[3],
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
  },
  payButtonText: {
    ...theme.typography.styles.button,
    color: theme.colors.white,
  },
  usageCard: {
    marginBottom: theme.spacing[4],
  },
  cardTitle: {
    ...theme.typography.styles.h5,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[4],
  },
  usageBar: {
    height: 12,
    backgroundColor: theme.colors.gray[200],
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
    marginBottom: theme.spacing[2],
  },
  usageProgress: {
    height: '100%',
    backgroundColor: theme.colors.primary[700],
  },
  usageDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing[3],
  },
  usageText: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
  },
  usagePercent: {
    ...theme.typography.styles.body,
    color: theme.colors.text.primary,
    fontWeight: '600',
  },
  viewDetails: {
    ...theme.typography.styles.label,
    color: theme.colors.primary[700],
  },
  accountCard: {
    marginBottom: theme.spacing[6],
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },
  infoLabel: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
  },
  infoValue: {
    ...theme.typography.styles.body,
    color: theme.colors.text.primary,
    fontWeight: '600',
  },
});
